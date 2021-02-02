import { posts } from '../../../data'

export default async(req, res) => {
    const httpMethod = req.method

    const {
        picture, text
    } = req.body

    switch (httpMethod){
        case 'GET':
            res.status(200).json(posts)
            break
        case 'POST':
            res.status(200).json({
                picture: picture,
                text: text
            })
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end('dans le cul')
    }
}