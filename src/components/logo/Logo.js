/** */

import Image from "next/image";

/** */

import CSS from './CSS'

/** */

const loaderImg = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 100}`
}

/** */

export default function Logo(){
    return(
        <CSS>
            <Image
                loader={loaderImg}
                src='img/svg/logo.svg'
                alt='Vo Vietnam logo'
                width={183}
                height={157}
                layout="responsive"
                className='logo'
            />
        </CSS>
    )
}