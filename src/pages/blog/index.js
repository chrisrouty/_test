/** */

import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

/** */

import Layout from "../../components/layout/Layout";
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";

/** */

const prisma = new PrismaClient();

/** */

const Index = ({ postList }) => {
    return (
        <Layout seo_title='Blog Club Vo-Vietnam Boulogne-Billancourt'>
            <Banner
                src='img_demo/exemple-bann_2.jpg'
                alt='Ecole de Vo-Vietnam'
                height='352'
            />
            <Main>
                <h1>Blog Vo-Vietnam Boulogne-Billancourt</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
                <ul>
                    {postList.map(post =>
                        <li key={post}>
                            <Link href={`/blog/${encodeURIComponent(post.id)}`}>
                                <a>
                                    {post.id}, {post.title}, {post.text}
                                    {/*<img src={post.picture} alt='' />*/}
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </Main>
        </Layout>
    )
}

export const getServerSideProps = async() => {
    const allPosts = await prisma.posts.findMany();
    return {
        props: {
            postList: allPosts
        }
    }
}

export default Index