/** */

import { useRouter } from "next/router"

/** */

// import { posts } from '../../data'
import { PrismaClient } from '@prisma/client'
import Layout from "../../components/layout/Layout";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

/** */

const Post = ({postData}) => {

    return(
        <Layout seo_title={postData.text}>
            <Header />
            <div>
                {postData.id},
                {postData.text},
            </div>
            <Footer />
        </Layout>
    )
}

// export const getStaticPaths = async () => {
//     const paths = posts.map((post) => ({
//             params: {
//                 id: post.id.toString()
//             }
//         }
//     ))
//     return { paths, fallback: false}
// }

const prisma = new PrismaClient();

export const getServerSideProps = async ({ req }) => {
    const posts = await prisma.post.findMany({
        where: {
            id: { id: [0] },
        },
    })
    return { props: { postData: posts[0] } }
}

// export const getStaticProps = async ({params}) => {
//     const postId = params.id
//     const postList = posts.filter((post) => post.id.toString() === postId)
//     return{
//         props: {
//             postData: postList[0]
//         }
//     }
// }

export default Post