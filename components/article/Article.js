/** */

import CSS from './CSS'
import Unsplash from "react-unsplash-wrapper";

/** */

export default function Article({children, text, img}){

    return(
        <CSS>
            <h2>Le club</h2>

            <caption>
                <picture>
                    {children}
                </picture>
            </caption>
            <p>
                {text}
            </p>
        </CSS>
    )
}