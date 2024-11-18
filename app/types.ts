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
  transactionsType: string;
  transactionCategory: string;
  setTransactionsType: (type: string) => void;
  setTransactionCategory: (type: string) => void;
  transactionsArr?: TransactionProps[];
  setTransactionsArr: (arr: TransactionProps[]) => void;
}

export interface TransactionsProps {
  transaction: TransactionProps;
  index: number;
  arrLength: number;
  category?: string;
}

export interface SortByListProps {
  list: string[];
  sortingMethod?: string; //you might delete it, check if it's not being used
  setTransactionsType: (type: string) => void;
  setTransactionCategory: (type: string) => void;
  transactionsType: string;
  transactionsCategory: string;
  transactionsArr?: TransactionProps[];
  setTransactionsArr: (arr: TransactionProps[]) => void;
  closeMenu: (type: boolean) => void;
  menuState?:boolean;
  stylePosition?:string
}
