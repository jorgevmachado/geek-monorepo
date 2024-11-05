import '@geek/tokens/dist/geek/css/_variables.css';
import '@/styles/globals.scss';

import type { ReactElement, ReactNode } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import { Page } from '@/layout/page';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}


export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (
        (page) => (<Page>{page}</Page>)
    );
    
    return getLayout(<Component {...pageProps}/>);

  //   return (
  //     <Page>
  //       <Component {...pageProps} />
  //     </Page>
  // );
}