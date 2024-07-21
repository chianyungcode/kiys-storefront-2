interface Pagination {
  totalData: number;
  totalPages: number;
  page: number;
  limit: number;
}

interface SuccessResponseType<T> {
  message: string;
  data?: T;
  pagination?: Pagination;
}

export const successResponse = <T>({
  data,
  message,
}: SuccessResponseType<T>) => {
  return {
    success: true,
    message,
    data,
  };
};
