/** */

import { PrismaClient } from '@prisma/client'
import Layout from "../../components/layout/Layout";
import Main from "../../components/main/Main";

/** */

const prisma = new PrismaClient();

/** */

const Post = (props) => {
    return(
        <Layout>
            <Main>
                <h2>{props.id}</h2>
                <h3>{props.title}</h3>
                <h4>{props.text}</h4>
            </Main>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {
    const post = await prisma.posts.findUnique({
        where: {
            id: Number(params?.id),
        }
    })
    return {
        props: post,
    }
}

export default Post