interface Pagination {
  totalData: number;
  totalPages: number;
  page: number;
  limit: number;
}

interface ApiResponseWithPagination<T> {
  success: boolean;
  message: string;
  data?: T;
  pagination: Pagination;
}

type ApiResponseData<T> = Pick<
  ApiResponseWithPagination<T>,
  "message" | "data" | "pagination"
>;

export const successResponse = <T>({
  data,
  message,
  pagination,
}: ApiResponseData<T>): ApiResponseWithPagination<T> => {
  return {
    success: true,
    message,
    data,
    pagination,
  };
};
