import Link from "next/link"
import Image from "next/image"

import beijing_techno from "../../../public/beijing_techno.jpg"

export default function contact_us()
{
    return(
        <div className="m-8">
            <h1 className="text-4xl font-bold">
                Purchasing
            </h1>
            <br/>
            <p>
                Sensit is currently in full production and welcomes your orders. Please send us an email if you anticipate ordering in the near future. This will help us&nbsp;determine immediate manufacturing requirements to help you receive your Sensit™&nbsp;erosion sensors as soon as possible. Thank you for your never-ending support.
            </p>
            <br/>
            <hr className="border-2"></hr>
            <br/>
            <h2 className="text-2xl">Contact Us:</h2>
            <p>
                Email: 
                <Link href="mailto:sales@sensit.com"> sales@sensit.com</Link><br/>
                Phone: (909) 289-9177<br/>
                15 Rivers Run Way<br/>
                Oak Ridge TN, 37830
            </p>
            <br/>
            <p>
                *Please contact Sensit for ordering information via email at <Link href="mailto:sales@sensit.com">sales@sensit.com</Link>
            </p>
            <br/>
            <p>
                Other distributors of Sensit products are available to assist you with your order.
            </p>
            <br/>
            <p>
                Sensit has been faithful to its customers for over 30 years and will continue supplying you with the superior products you are accustomed to.
            </p>
            <br/>
            <h1 className="text-4xl font-bold">Sensit Distributors</h1>
            <br/>
            <div className="grid">
                <h3 className="text-xl text-left font-bold">Beijing TechnoSolutions</h3>
                <div className="flex flex-row shrink">
                    <Image src={beijing_techno} alt="Beijing TechnoSolutions Logo" className=""></Image>
                    <ul className="mx-16">
                        <li>Room 305, Building No. 10</li>
                        <li>Xinqidian Jiayuan No. 5 Changchunqiao Rd.</li>
                        <li>Beijing Postal code: 100089</li>
                        <li>Sales consultation: 010-88019895, 88019658</li>
                        <li>Email: <Link href="mailto:sales@technosolutions.cn">sales@technosolutions.cn</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}