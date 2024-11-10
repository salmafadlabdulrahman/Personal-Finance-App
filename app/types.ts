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

export interface ButtonProps {
  text: string;
  sortType: string;
  listItems: string[];
  transactionsType?: string;
  transactionCategory?: string;
  setTransactionsType?: (type: string) => void;
  setTransactionCategory?: (type: string) => void;
  transactionsArr: TransactionProps[];
  setTransactionsArr: (arr: TransactionProps[]) => void;
}
