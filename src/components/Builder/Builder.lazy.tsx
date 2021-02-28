import React, { lazy, Suspense } from 'react';

const LazyBuilder = lazy(() => import('./Builder'));

const Builder = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBuilder {...props} />
  </Suspense>
);

export default Builder;
