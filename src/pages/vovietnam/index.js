/** */

import Link from 'next/link'

/** */

import Layout from "../../components/layout/Layout";
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";

/** */

export default function Index() {
    return (
        <Layout>
            <Banner
                src='img_demo/exemple-bann_1.jpg'
                alt='Ecole de Vo-Vietnam'
                height='458'
            />
            <Main>
                <h1>Le oVietNam</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Main>
        </Layout>
    )
}