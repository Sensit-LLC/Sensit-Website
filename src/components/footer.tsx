import Link from "next/link"
export default function Footer()
{
    return(
        //Add site map of all links
        <footer className="absolute inset-x-0 bottom-0 flex-col text-center justify-center">
            <div>15 Rivers Run Way</div>
            <div>Oak Ridge, Tennessee 37830</div>
            <div>Phone: <Link href="tel:+19092348237">+1 (909) 234-8237</Link></div>
            <div>Email: <Link href="mailto:sales@sensit.com">sales@sensit.com</Link></div>
        </footer>
    )
}