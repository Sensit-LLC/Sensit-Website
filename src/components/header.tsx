import Image from "next/image"
import logo from "../../public/sensit-logo-full-transparent.png"
export default function Header()
{
    return(
        <header className="flex flex-row justify-between items-center p-8">
            <h1 className="text-4xl">Sensit LLC</h1>
            <Image
                className="left-auto"
                src={logo}
                width={125}
                alt="Sensit Logo"
            />
        </header>
    )
}