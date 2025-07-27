const usePagination = <T>(data: T[], currentPage: number, pageSize = 10) => {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
  
    return {
      paginatedData,
      totalPages,
      currentPage,
      pageSize,
      start,
      end,
    };
  };
  
  export default usePagination;
  