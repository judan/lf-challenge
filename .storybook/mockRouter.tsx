'use client';
import React from 'react';
import { ReactNode } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import type { NextRouter } from 'next/router';

export function MockNextRouter({
  children,
  mockRouter,
}: {
  children: ReactNode;
  mockRouter: Partial<NextRouter>;
}) {
  const router: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    isReady: true,
    isFallback: false,
    isPreview: false,
    push: () => Promise.resolve(true),
    replace: () => Promise.resolve(true),
    reload: () => {},
    back: () => {},
    forward: () => {},
    prefetch: () => Promise.resolve(),
    beforePopState: () => {},
    events: {
      on: () => {},
      off: () => {},
      emit: () => {},
    },
    isLocaleDomain: false,
    ...mockRouter,
  };

  return (
    <RouterContext.Provider value={router}>
      {children}
    </RouterContext.Provider>
  );
}
