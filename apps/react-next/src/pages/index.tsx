import localFont from 'next/font/local';

import { FaBeer } from 'react-icons/fa';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
          <h3> Lets go for a <FaBeer/>? </h3>
      </div>
  );
}
