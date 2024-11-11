import '@geek/tokens/dist/geek/css/_variables.css';
import '@/styles/globals.scss';

import { ReactElement, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import { cookies } from '@geek/services/cookies';

import Alert from '@geek/ui/components/Alert';
import AlertProvider from '@geek/ui/hooks/alert';

import { Page } from '@/layout/page';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const pathname = usePathname();
    const router = useRouter();
    const geekAccessToken = cookies.getGeekAccessToken();
    const isAuth = pathname.startsWith('/auth');

    useEffect(() => {
        if (!geekAccessToken && !isAuth) {
            router.push(`/auth/login?redirect=${pathname}`);
            return;
        }
        if (geekAccessToken && isAuth) {
            router.push('/');
        }
    }, [geekAccessToken]);
    
    const getLayout = Component.getLayout ?? (
        (page) => (<Page token={geekAccessToken}>{page}</Page>)
    );
    
    return getLayout(
        <AlertProvider elem={Alert}>
            <Component {...pageProps}/>
        </AlertProvider>
    );
}