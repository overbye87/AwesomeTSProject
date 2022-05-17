import React from 'react';

const timeout = 3000;

const lazyLoading = async (path: string) => {
  await setTimeout(() => null, timeout);
  return React.lazy(() => import(path));
};

export default lazyLoading;
