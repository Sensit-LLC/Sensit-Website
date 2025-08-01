
import Link from "next/link"
export default function Nav()
{
    return(
        <nav className="my-4 text-nowrap bg-nav-bg text-nav-text h-14 w-full">
            <ul className="mx-8 flex flex-row h-full items-center">
                <li className="relative group w-30">
                    <Link 
                        href="/"
                        className="h-full p-4 flex items-center hover:bg-nav-hover"
                    >
                        Home
                    </Link>
                    <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 bg-nav-bg">
                        <li className="block hover:bg-nav-hover h-14 w-30">
                            <Link
                                href="/about-us"
                                className="p-4 text-left h-full flex items-center"
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group w-30">
                    <Link
                        href="/products"
                        className="h-full p-4 flex items-center hover:bg-nav-hover">
                        Products
                    </Link>
                    <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 space-y-4 bg-nav-bg">
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/products/h15"
                                className="p-4 text-left h-full flex items-center"
                            >
                                H15-LIN Mass Flux Sensor
                            </Link>
                        </li>
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/products/h14"
                                className="p-4 text-left h-full flex items-center"
                            >
                                H14-LIN Mass Flux Sensor
                            </Link>
                        </li>
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/products/fp5"
                                className="p-4 text-left h-full flex items-center"
                            >
                                FP5 Flat Plate Sensor
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group w-30">
                    <Link
                    href="/resources"
                    className="h-full p-4 flex items-center hover:bg-nav-hover">
                        Resources
                    </Link>
                    <ul className="absolute opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 space-y-4 bg-nav-bg">
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/fsr"
                                className="p-4 text-left h-full flex items-center"
                            >
                                Field Site Requirements
                            </Link>
                        </li>
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/documents"
                                className="p-4 text-left h-full flex items-center"
                            >
                                Documents
                            </Link>
                        </li>
                        <li className="block hover:bg-nav-hover h-14">
                            <Link
                                href="/publications"
                                className="p-4 text-left h-full flex items-center"
                            >
                                Publications
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group w-30">
                    <Link
                    href="/contact-us"
                    className="h-full p-4 flex items-center hover:bg-nav-hover">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}