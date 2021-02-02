/** */

import Link from 'next/link'
import Head from 'next/head'

/** */

import Layout from "../../components/layout/Layout";

/** */

export default function Gallery() {
    return (
        <Layout>
            <Head>
                <title>La galerie photo</title>
            </Head>
            <h1>La galerie photo</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}