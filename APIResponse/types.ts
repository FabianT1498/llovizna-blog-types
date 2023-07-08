export namespace APIResponse {
  export interface ServerResponse<T> {
    success: boolean;
    data: T | null;
    error: {
      code: number;
      message: string | Array<string>;
    } | null;
  }
}
