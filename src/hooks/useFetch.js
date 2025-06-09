import { useState, useEffect, useRef } from 'react';
import api from '../services/api';

export default function useFetch(endpoint, { params = {}, mock = false } = {}) {
  const [data, setData]     = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const cancelRef            = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const CancelToken = api.CancelToken;
    cancelRef.current = CancelToken.source();

    const fetcher = mock
      ? import('../services/data').then(({ dataService }) =>
          dataService[endpoint](params).then(r => r)
        )
      : api.get(endpoint, {
          params,
          cancelToken: cancelRef.current.token,
        });

    fetcher
      .then(res => setData(res.data))
      .catch(err => {
        if (!api.isCancel?.(err)) setError(err);
      })
      .finally(() => setLoading(false));

    return () => cancelRef.current.cancel();
  }, [endpoint, JSON.stringify(params), mock]);

  return { data, loading, error };
}
