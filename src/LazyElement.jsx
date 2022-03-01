import { lazy, Suspense } from 'react';

const LazyElement = (func, fallback) => {
  setTimeout(func, 1000);
  const LoadedComponent = lazy(func);
  const suspenseComponent = (props) => (
    <Suspense fallback={fallback || null}>
      <LoadedComponent {...props} />
    </Suspense>
  );
  return suspenseComponent;
};

export default LazyElement;
