import LazyElement from './LazyElement';

const LazyComponent = (indexPath, fallback) => {
  const currentDirPath = indexPath.replace('/index.jsx', '');
  const currentDirName = currentDirPath.substring(currentDirPath.lastIndexOf('/') + 1);
  const func = () => import(`@components/${currentDirName}/${currentDirName}`);
  return LazyElement(func, fallback);
};

export default LazyComponent;
