
import Link from "next/link"
export default function Nav()
{
    return(
        <nav className="mx-8 my-4">
            <ul className="flex flex-row text-center gap-8">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Resources
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}