/** */

import Link from 'next/link'
import Head from 'next/head'

/** */

import { PrismaClient } from '@prisma/client'
import Layout from "../../components/layout/Layout";

/** */

const Blog = ({ postList }) => {
    return (
        <Layout seo_title='Blog Club Vo-Vietnam Boulogne-Billancourt'>
            <Head>
                <title>Blog Vo-Vietnam Boulogne-Billancourt</title>
            </Head>
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
        </Layout>
    )
}

const prisma = new PrismaClient();

export const getServerSideProps = async() => {
    const allPosts = await prisma.posts.findMany();
    return {
        props: {
            postList: allPosts
        }
    }
}

export default Blog