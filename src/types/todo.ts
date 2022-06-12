export interface Todo {
  id: number;
  title: string;
  status: string;
  detail: string;
  category: number;
  label: number;
  startTime?: string;
}
export interface TodoRequest {
  _page: string | number;
  _limit: string | number;
}
