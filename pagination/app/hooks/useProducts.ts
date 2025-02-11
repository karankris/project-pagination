import { useState, useEffect } from "react";
import { Product } from "../utils/types";

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=500");
        if (!response.ok) throw new Error("Failed to fetch products");

        const json = await response.json();
        setProducts(json.products);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return { products, loading, error };
};

export default useFetchProducts;
