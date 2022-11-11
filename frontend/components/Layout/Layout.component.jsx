import HeaderComponent from '../Header/Header.component';
import Head from 'next/head';

export default function LayoutComponent({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      <main>{children}</main>
    </>
  )
}