const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config');

const User = require('../models/User');
const Bill = require('../models/Bill');
const Category = require('../models/Category');
const Event = require('../models/Event');

const DEMO_USER = {
  email: 'demo@example.com',
  password: 'demo123',
  name: 'Demo User',
};

const CATEGORIES = [
  { name: 'Food', capacity: 500 },
  { name: 'Transport', capacity: 200 },
  { name: 'Entertainment', capacity: 300 },
  { name: 'Utilities', capacity: 150 },
  { name: 'Health', capacity: 250 },
  { name: 'Education', capacity: 400 },
];

function randomDate(daysBack) {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysBack));
  date.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
  return date;
}

async function seed() {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('MongoDB connected for seeding.');

    // Clean existing data
    await Promise.all([
      User.deleteMany({}),
      Bill.deleteMany({}),
      Category.deleteMany({}),
      Event.deleteMany({}),
    ]);
    console.log('Cleared existing data.');

    // Create demo user
    const salt = await bcrypt.genSalt(10);
    const user = await new User({
      email: DEMO_USER.email,
      password: await bcrypt.hash(DEMO_USER.password, salt),
      name: DEMO_USER.name,
    }).save();
    console.log(`Created user: ${DEMO_USER.email} / ${DEMO_USER.password}`);

    // Create bill
    const bill = await new Bill({
      value: 5000,
      currency: 'EUR',
      user: user._id,
    }).save();
    console.log(`Created bill: ${bill.value} ${bill.currency}`);

    // Create categories
    const categories = [];
    for (const cat of CATEGORIES) {
      const saved = await new Category({
        name: cat.name,
        capacity: cat.capacity,
        user: user._id,
      }).save();
      categories.push(saved);
    }
    console.log(`Created ${categories.length} categories.`);

    // Create events
    const eventTemplates = [
      { type: 'income', amount: 3000, catIdx: 0, desc: 'Salary' },
      { type: 'income', amount: 500, catIdx: 5, desc: 'Freelance project' },
      { type: 'outcome', amount: 120, catIdx: 0, desc: 'Grocery shopping' },
      { type: 'outcome', amount: 85, catIdx: 0, desc: 'Restaurant dinner' },
      { type: 'outcome', amount: 45, catIdx: 0, desc: 'Weekly groceries' },
      { type: 'outcome', amount: 60, catIdx: 1, desc: 'Monthly metro pass' },
      { type: 'outcome', amount: 35, catIdx: 1, desc: 'Taxi ride' },
      { type: 'outcome', amount: 25, catIdx: 1, desc: 'Bus tickets' },
      { type: 'outcome', amount: 50, catIdx: 2, desc: 'Cinema tickets' },
      { type: 'outcome', amount: 120, catIdx: 2, desc: 'Concert tickets' },
      { type: 'outcome', amount: 15, catIdx: 2, desc: 'Streaming subscription' },
      { type: 'outcome', amount: 80, catIdx: 3, desc: 'Electricity bill' },
      { type: 'outcome', amount: 40, catIdx: 3, desc: 'Internet bill' },
      { type: 'outcome', amount: 30, catIdx: 3, desc: 'Water bill' },
      { type: 'outcome', amount: 75, catIdx: 4, desc: 'Doctor visit' },
      { type: 'outcome', amount: 45, catIdx: 4, desc: 'Pharmacy' },
      { type: 'outcome', amount: 200, catIdx: 5, desc: 'Online course' },
      { type: 'outcome', amount: 50, catIdx: 5, desc: 'Books' },
      { type: 'income', amount: 150, catIdx: 2, desc: 'Sold old console' },
      { type: 'outcome', amount: 95, catIdx: 0, desc: 'Food delivery' },
    ];

    let totalIncome = 0;
    let totalOutcome = 0;

    for (const tmpl of eventTemplates) {
      await new Event({
        type: tmpl.type,
        amount: tmpl.amount,
        category: categories[tmpl.catIdx]._id,
        description: tmpl.desc,
        date: randomDate(30),
        user: user._id,
      }).save();

      if (tmpl.type === 'income') totalIncome += tmpl.amount;
      else totalOutcome += tmpl.amount;
    }
    console.log(`Created ${eventTemplates.length} events (income: ${totalIncome}, outcome: ${totalOutcome}).`);

    // Update bill to reflect events
    const finalValue = bill.value + totalIncome - totalOutcome;
    await Bill.findByIdAndUpdate(bill._id, { value: finalValue });
    console.log(`Updated bill balance: ${bill.value} -> ${finalValue} EUR`);

    console.log('\n--- Seed complete ---');
    console.log(`Login: ${DEMO_USER.email} / ${DEMO_USER.password}`);
    console.log(`Balance: ${finalValue} EUR`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
