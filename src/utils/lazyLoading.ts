import React from 'react';

const timeout = 3000;

const lazyLoading = (path: string) => React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import(path)), timeout);
  });
});

export default lazyLoading;
