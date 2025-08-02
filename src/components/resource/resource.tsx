import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import sensit_logo from "../../../public/sensit-logo-full-transparent.png"

export default function Resource(props: { src: StaticImageData | null | undefined; lnk: string | null | undefined; alt: string; width?: number | null | undefined; lnk_txt: string | null | undefined}) {
    return (
        <div className="flex flex-col">
            <Link href={props.lnk ? props.lnk : "/"}>
                <Image src={props.src ? props.src : sensit_logo} alt={props.alt ? props.alt : "No alt text provided"} width={props.width ? props.width : 175} className="m-auto"/>
            </Link>
            <Link href={props.lnk ? props.lnk : "/"} className="text-center">{props.lnk_txt ? props.lnk_txt : "Resource Not Available"}</Link>
        </div>
    )
}