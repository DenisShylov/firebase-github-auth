import { useState } from 'react';

const InfiniteScrollExample = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
};

export default InfiniteScrollExample;
