export interface WFMEvent {
  type: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  _id?: string;
  catName?: string;
  user?: string;
}
