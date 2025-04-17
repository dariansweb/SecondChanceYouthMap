// src/pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { FormProvider } from '../context/FormContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
