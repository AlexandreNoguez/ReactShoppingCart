import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

export function useApi(url) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, error, isFetching };
}

export default useApi;
