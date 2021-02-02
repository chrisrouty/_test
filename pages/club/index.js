/** */

import Link from 'next/link'
import Head from 'next/head'

/** */

import Layout from "../../components/layout/Layout";

/** */

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Le club de VoVietNam</title>
            </Head>
            <h1>Le club de VoVietNam</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}