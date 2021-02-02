/** */

import Link from 'next/link'
import Head from 'next/head'

/** */

import Layout from "../../components/layout/Layout";

/** */

export default function Vovietnam() {
    return (
        <Layout>
            <Head>
                <title>A propos du VoVietNam</title>
            </Head>
            <h1>A propos du VoVietNam</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}