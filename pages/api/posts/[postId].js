import { posts } from '../../../data'

export default async(req, res) => {
    const httpMethod = req.method
    const { picture, text } = req.body
    const postId = req.query.postId
    const result = posts.filter((post) => post.id === parseInt(postId))

    switch (httpMethod){
        case 'GET':
            if(result.length > 0){
                res.status(200).json(result[0])
            } else {
                res.status(404).json({ message: `BAD POST ID ${postId}`})
            }
            break
        case 'PUT':
            res.status(200).json({
                picture: picture,
                text: text
            })
            break
        case 'DELETE':
            res.status(200).json(result[0])
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end('dans le cul')
    }
}