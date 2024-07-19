import { useState, useEffect } from 'react';

// ideally we should get this baseURL from env file,
// this is just for demonstration purposes
const baseUrl = 'http://localhost:8081/api';

function useAPI() {
  const [headers, setHeaders] = useState<Record<string, string>>({
    Authorization: '',
  });

  const setAuthHeader = (token: string): void => {
    setHeaders({ ...headers, Authorization: `Bearer ${token}` });
  };

  const get = async <T>(path: string): Promise<T> => {
    console.log({ headers });
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const data = await response.json();
    return data;
  };

  const post = async <T>(
    path: string,
    body: Record<string, unknown>
  ): Promise<T> => {
    const url = `${baseUrl}${path}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setAuthHeader(accessToken);
    }
  }, []);

  return { setAuthHeader, get, post };
}

export default useAPI;
