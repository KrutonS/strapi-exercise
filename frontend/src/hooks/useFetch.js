import { useEffect, useState } from "react";

export default function useFetch(uri) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(uri);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
		fetchData();
  }, [uri]);
  return { data, loading, error };
  // return [data, loading, error];
}
