/** */

import CSS from './CSS'

/** */

export default function Article({children, text}){

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