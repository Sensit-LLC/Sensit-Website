import Link from "next/link"
export default function Footer()
{
    return(
        //Add site map of all links
        <footer className="p-4 inset-x-0 bottom-0 bg-nav-bg text-nav-text">
            <div className="text-center justify-around flex flex-row m-auto max-w-1/2">
                <section>
                    <h4 className="text-l font-bold underline underline-offset-4">
                        Our Company
                    </h4>
                    <div className="flex flex-col">
                        <Link className="hover:underline"href={"/"}>Home</Link>
                        <Link className="hover:underline"href={"about-us"}>About Us</Link>
                    </div>
                </section>
                <section>
                    <h4 className="text-l font-bold underline underline-offset-4">
                        Products
                    </h4>
                    <div className="flex flex-col">
                        <Link className="hover:underline"href={"/products/h14"}>H15-LIN</Link>
                        <Link className="hover:underline"href={"/products/fp5"}>FP5</Link>
                        <Link className="hover:underline"href={"/products/h15"}>H14-LIN</Link>
                    </div>
                </section>
                <section>
                    <h4 className="text-l font-bold underline underline-offset-4">
                        Resources
                    </h4>
                    <div className="flex flex-col">
                        <Link className="hover:underline"href={"/fsr"}>Field Site Requirements</Link>
                        <Link className="hover:underline"href={"resources"}>Documents</Link>
                        <Link className="hover:underline"href={"/publications"}>Publications</Link>
                        <Link className="hover:underline"href={"/publications"}>Purchasing & Distribution</Link>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col">
                        <h4 className="text-l font-bold underline underline-offset-4">
                            Contact Us
                        </h4>
                        <div>15 Rivers Run Way</div>
                        <div>Oak Ridge, Tennessee 37830</div>
                        <div>Phone: <Link className="hover:underline"href="tel:+19092348237">+1 (909) 234-8237</Link></div>
                        <div>Email: <Link className="hover:underline"href="mailto:sales@sensit.com">sales@sensit.com</Link></div>
                    </div>
                </section>
            </div>
        </footer>
    )
}