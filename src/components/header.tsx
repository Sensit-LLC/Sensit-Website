import Image from "next/image"
import logo from "../../public/sensit-logo-full-transparent.png"
import Link from "next/link"
export default function Header()
{
    return(
        <header className="flex flex-row justify-between items-center px-8">
            <h1 className="text-4xl"><Link href="/">Sensit LLC</Link></h1>
            <Link href="/">
                <Image
                    className="left-auto"
                    src={logo}
                    width={100}
                    alt="Sensit Logo"
                />
            </Link>
        </header>
    )
}