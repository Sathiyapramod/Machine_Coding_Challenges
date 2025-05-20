import { useEffect, useState } from "react";
import axios from "axios";
import { MovieTypes } from "../types/types";

function useSearch(pageNumber: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [items, setItems] = useState<MovieTypes[]>([]);
  // const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Function;

    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
      params: {
        _page: pageNumber,
        _limit: 10,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => res.data)
      .then((result) => {
        setItems((pv: MovieTypes[]) => {
          return [
            ...new Set([
              ...pv,
              ...result.map((cnt) => ({ title: cnt.title, id: cnt.id })),
            ]),
          ];
        });
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { items, loading, error };
}

export default useSearch;
