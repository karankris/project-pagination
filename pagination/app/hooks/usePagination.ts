import useFetchProducts from "./useProducts";


const usePagiantion = (currentPage: number) => {
    const PAGE_SIZE = 10;
    
    const { products } = useFetchProducts();
    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE
    const end = start + PAGE_SIZE

    return { totalPages, start, end };
}

export default usePagiantion