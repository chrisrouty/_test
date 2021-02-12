/** */

import CSS from './CSS'

/** */

import Logo from '../logo/Logo';
import Link from "../link/link";

/** */

export default function Header(){
    return(
        <CSS>
            <div>
                <div>
                    <Logo />
                </div>
            </div>
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link href='/club' activeClassName='active'>
                                <a>Le club</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/vovietnam' activeClassName='active'>
                                <a>Vo-vietnam</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/gallery' activeClassName='active'>
                                <a>Galerie photo</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog' activeClassName='active'>
                                <a>Le blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </CSS>
    )
}