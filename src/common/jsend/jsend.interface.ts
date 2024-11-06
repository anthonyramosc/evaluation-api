export interface JSendResponse<T> {
  status: 'success' | 'fail' | 'error';
  data?: T;
  message?: string;
}