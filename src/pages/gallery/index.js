/** */

import Link from 'next/link'

/** */

import Layout from "../../components/layout/Layout";
import Main from "../../components/main/Main";
import Banner from "../../components/banner/Banner";

/** */

export default function Index() {
    return (
        <Layout>
            <Banner
                src='img_demo/exemple-bann_2.jpg'
                alt='Ecole de Vo-Vietnam'
                height='352'
            />
            <Main>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Main>
        </Layout>
    )
}