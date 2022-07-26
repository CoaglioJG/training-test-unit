export function PaginateArray(array: any[], limit: number, page: number) {
  page = page ?? 1;
  limit = limit ?? 10;

  return {
    page: +page,
    limit: +limit,
    totalPage: Math.ceil(array.length / limit),
    totalCount: array.length,
    data: array.slice((page - 1) * limit, page * limit),
  };
}
