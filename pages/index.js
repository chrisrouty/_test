/** */

import Head from 'next/head'
import Unsplash from 'react-unsplash-wrapper'

/** */

import Layout from "../components/layout/Layout";
import Article from "../components/article/Article";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

/** */

export default function Home() {
  return (
    <Layout seo_title='Club de Vo-Vietnam de Boulogne-Billancourt'>
        <Header />
        <div>
            <Unsplash width='1280' height='400'>
                Vo-Vietnam
            </Unsplash>
            <Article
                text='Mon super text'
            >
                <Unsplash width='500' height='500' />
            </Article>
        </div>
        <Footer />
    </Layout>
  )
}
