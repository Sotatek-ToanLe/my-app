export interface Todo {
  id: number;
  title: string;
  status: boolean;
  priority: number;
}

export enum Status {
  ALL = 0,
  COMPLETED = 1,
  TODO = 2,
}
