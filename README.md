# Home Accounting

Personal finance management application built with Angular 19 and Express.js.

## Tech Stack

| Layer     | Technology                                      |
|-----------|--------------------------------------------------|
| Frontend  | Angular 19, RxJS 7, ngx-charts, date-fns, SCSS  |
| Backend   | Express 4.21, Mongoose 8, Passport JWT, Helmet   |
| Database  | MongoDB 7                                        |
| Infra     | Docker, docker-compose, nginx                    |

## Quick Start (Docker)

```bash
cp .env.example .env        # create env file
make dev-build               # build & start all services
make seed-docker             # populate with demo data
```

Open [http://localhost:4200](http://localhost:4200) and login with `demo@example.com` / `demo123`

## Quick Start (Local)

Requires Node 22+ and a local MongoDB instance.

```bash
make install                 # install all dependencies
make seed                    # populate with demo data
# Terminal 1
make server                  # starts backend on :5001
# Terminal 2
make client                  # starts frontend on :4200
```

## Available Commands

Run `make help` to see all commands:

```
build            Build Angular app for production
clean            Remove node_modules from server and client
clean-all        Full cleanup (node_modules + Docker volumes)
clean-docker     Stop containers and remove volumes
client           Start Angular dev server with proxy
dev              Start all services in development mode
dev-build        Build and start all services (rebuilds images)
dev-down         Stop all development services
dev-logs         Tail logs from all dev services
install          Install all dependencies
install-client   Install client dependencies
install-server   Install server dependencies
mongo-shell      Open MongoDB shell in the running container
seed             Seed database with demo data (local MongoDB)
seed-docker      Seed database with demo data (Docker MongoDB)
prod             Start all services in production mode
prod-build       Build and start production (rebuilds images)
prod-down        Stop all production services
prod-logs        Tail logs from all production services
server           Start backend in dev mode (requires local MongoDB)
status           Show status of Docker containers
```

## Project Structure

```
home-accounting/
├── docker-compose.yml          # Dev: Mongo + backend + frontend
├── docker-compose.prod.yml     # Prod: Mongo + backend + nginx
├── Makefile                    # All project commands
├── .env.example                # Environment template
│
├── server/                     # Express.js backend
│   ├── Dockerfile / Dockerfile.prod
│   ├── package.json
│   └── src/
│       ├── app.js              # Express app setup
│       ├── index.js            # Entry point
│       ├── config/             # dotenv-based config
│       ├── controllers/        # Route handlers
│       ├── middleware/          # Passport JWT, auth
│       ├── models/             # Mongoose schemas
│       ├── routes/             # API route definitions
│       ├── seeds/              # Database seed script
│       └── utils/              # Error handler
│
└── client/                     # Angular 19 frontend
    ├── Dockerfile / Dockerfile.prod
    ├── nginx.conf              # Production reverse proxy
    ├── proxy.conf.json         # Dev proxy to backend
    ├── package.json
    └── src/app/
        ├── core/               # Auth service, guard, interceptor
        ├── features/
        │   ├── auth/           # Login, Registration
        │   └── system/         # Protected pages
        │       ├── bill-page/      # Account balance + currency
        │       ├── records-page/   # Add events & categories
        │       ├── history-page/   # History, charts, filters
        │       └── planning-page/  # Budget tracking
        └── shared/             # Services, models, pipes, directives
```

## API Endpoints

| Method | Path                      | Auth | Description           |
|--------|---------------------------|------|-----------------------|
| POST   | `/api/auth/registration`  | No   | Register new user     |
| POST   | `/api/auth/login`         | No   | Login, returns JWT    |
| GET    | `/api/bills`              | Yes  | Get user bill         |
| POST   | `/api/bills`              | Yes  | Create bill           |
| PUT    | `/api/bills/:id`          | Yes  | Update bill           |
| GET    | `/api/categories`         | Yes  | List categories       |
| GET    | `/api/categories/:id`     | Yes  | Get category          |
| POST   | `/api/categories`         | Yes  | Create category       |
| PUT    | `/api/categories/:id`     | Yes  | Update category       |
| DELETE | `/api/categories/:id`     | Yes  | Delete category       |
| GET    | `/api/events`             | Yes  | List events           |
| GET    | `/api/events/:id`         | Yes  | Get event             |
| POST   | `/api/events`             | Yes  | Create event          |

## Seed Data

The seed script creates a demo account with realistic sample data:

| What           | Details                                        |
|----------------|------------------------------------------------|
| **User**       | `demo@example.com` / `demo123`                 |
| **Bill**       | Starting balance adjusted for income & expenses |
| **Categories** | Food, Transport, Entertainment, Utilities, Health, Education |
| **Events**     | 20 transactions (income + outcome) over the last 30 days |

```bash
make seed             # local MongoDB
make seed-docker      # Docker MongoDB (containers must be running)
```

> The seed script clears all existing data before inserting.

## Environment Variables

| Variable         | Default                                    | Description               |
|------------------|--------------------------------------------|---------------------------|
| `MONGO_URI`      | `mongodb://mongo:27017/home_accounting`    | MongoDB connection string |
| `JWT_SECRET`     | `dev-jwt-secret-change-in-production`      | JWT signing secret        |
| `JWT_EXPIRES_IN` | `3600`                                     | Token expiry in seconds   |
| `PORT`           | `5001`                                     | Backend server port       |
| `NODE_ENV`       | `development`                              | Environment mode          |

## Production Deployment

```bash
# Edit .env with production values (strong JWT_SECRET!)
make prod-build
```

The app will be available on port 80 via nginx, which serves the Angular build and reverse-proxies `/api/` to the backend.
