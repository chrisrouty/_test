/** */

import Head from 'next/head'
import GlobalStyle from '../../themes/global-styled';

/** */

import CSS from './CSS'
import Footer from "../footer/Footer";
import Header from "../header/Header";

/** */

export default function Layout({ children, seo_title }) {
    return(
        <>
            <GlobalStyle />
            <Head>
                <title>{seo_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CSS>
                <Header />
                {children}
                <Footer />
            </CSS>
        </>

    )
}