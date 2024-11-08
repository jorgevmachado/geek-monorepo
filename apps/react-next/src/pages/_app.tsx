import '@geek/tokens/dist/geek/css/_variables.css';
import '@/styles/globals.scss';

import { ReactElement, ReactNode, useEffect } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import {usePathname, useRouter} from 'next/navigation';

import { Page } from '@/layout/page';
import { cookies } from '@geek/services/cookies';

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
        (page) => (<Page>{page}</Page>)
    );
    
    return getLayout(<Component {...pageProps}/>);
}