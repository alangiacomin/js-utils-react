import LazyElement from './LazyElement';

const LazyPage = (pageName, fallback) => {
  const func = () => import(`@pages/${pageName}/${pageName}`);
  return LazyElement(func, fallback);
};

export default LazyPage;
