import '@geek/tokens/dist/geek/css/_variables.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Page } from '@/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Page>
        <Component {...pageProps} />
      </Page>
  );
}
