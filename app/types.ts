export interface TransactionProps {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

export interface BudgetProps {
  category: string;
  amount: number;
  maximum: number;
  theme: string;
}
