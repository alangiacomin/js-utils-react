import { lazy, Suspense } from 'react';

const LazyElement = (func, fallback) => {
  setTimeout(func, 1000);
  const LoadedComponent = lazy(func);
  return (props) => (
    <Suspense fallback={fallback || null}>
      <LoadedComponent {...props} />
    </Suspense>
  );
};

export default LazyElement;
