import { useState, useEffect } from "react";

const useApiResource = <T>(apiEndpoint: string, dataKey?: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error("Failed to fetch data");

        const json = await response.json();

        // Optional: extract from a key like "products", otherwise use the entire response
        const finalData = dataKey ? json[dataKey] : json;

        setData(finalData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint, dataKey]);

  return { data, loading, error };
};

export default useApiResource;
