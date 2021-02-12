/** */

import Image from 'next/image'

/** */

import CSS from './CSS'

/** */

const loaderImg = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}

export default function Banner({src, alt, height}){
    return(
        <CSS>
            <Image
                loader={loaderImg}
                src={src}
                alt={alt}
                width={1440}
                height={height}
                layout="responsive"
            />
        </CSS>
    )
}