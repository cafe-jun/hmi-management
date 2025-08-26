export type PaginationProps = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (pageNo: number, pageSize: number) => void;
};
