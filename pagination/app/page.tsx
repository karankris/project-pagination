'use client'

import { useState } from "react";
import ProductCard from "./components/productCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import ToastContainerConfig from "./components/loaders/toast";
import IconSpinner from "./components/loaders/loader";
import { Product } from "./utils/types";

import { usePagination ,useApiResource } from 'k-next-pagination';
const Pagination = () => {

  const API = "https://dummyjson.com/products?limit=500"
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data, loading } = useApiResource<Product>(
    API,
    "products"
  );
  const { totalPages, start, end } = usePagination(data, currentPage);


  const _handleSelectPage = (n: number) => {
    setCurrentPage(n)
  }

  const _handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
    if (currentPage === totalPages - 2) {
      toast.warning("You have reached the last page!");
    }
  }

  const _handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    !data.length && loading ?
      (
        <div className="h-full flex justify-center items-center mt-96">
          <IconSpinner />
          <h5 className="flex text-center justify-center items-center ms-3">Loading Products...</h5>
        </div>
      ) : (
        <div >
          <h1 className="justify-center mt-2 flex font-mono italic">Learn Pagination Here!</h1>
          <div className="flex flex-row items-center cursor-pointer flex-nowrap overflow-x-auto whitespace-nowrap p-4 scroll-container justify-center">
            <button data-twe-ripple-init onClick={_handlePreviousPage} disabled={currentPage === 0} className="cursor-pointer border  border-black p-2 rounded-full me-1  hover:bg-slate-300"><FaAngleLeft size={20} /> </button>
            {[...Array(totalPages).keys()].map((n) => (
              <button className={`border rounded-md p-2 m-2 px-3 cursor-pointer shadow-lg  ${currentPage === n ? 'bg-slate-900 text-white' : 'bg-white text-black'}`} key={n + 1} onClick={() => _handleSelectPage(n)}>{n + 1}</button>
            ))}
            <button onClick={_handleNextPage} disabled={currentPage === totalPages - 1} className="cursor-pointer border  border-black p-2 rounded-full ms-1 hover:bg-slate-300"><FaAngleRight size={20} /></button>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 px-4">
            {
              data.slice(start, end).map((p) => (
                <ProductCard key={p.id} image={p.thumbnail} title={p.title} price={p.price} />
              ))
            }
          </div>
          <ToastContainerConfig />
        </div>
      )
  )
}

export default Pagination;
