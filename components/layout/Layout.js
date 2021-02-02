/** */

import Head from 'next/head'
import GlobalStyle from "../globalstyled/GlobalStyled";

/** */

import CSS from './CSS'
import Footer from "../footer/Footer";
import {Html} from "next/document";

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
                {children}
            </CSS>
        </>

    )
}