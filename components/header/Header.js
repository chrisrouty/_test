/** */

import CSS from './CSS'
import Link from "next/link";

/** */

import Logo from '../logo/Logo';

/** */

export default function Header(){
    return(
        <CSS>
            <div>
                <Logo />
                <ul>
                    <li>
                        <Link href='/club'>
                            <a>Le club</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/vovietnam'>
                            <a>Vo-vietnam</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/gallery'>
                            <a>Galerie photo</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/blog/blog' as="/blog/blog">
                            <a>Le blog</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </CSS>
    )
}