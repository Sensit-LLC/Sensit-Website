import Link from "next/link"
import Image from "next/image"
import h14 from "../../../public/h14-w-conduit.jpg"
import h15 from "../../../public/H15-LIN.jpg"
import fp5 from "../../../public/FP5-Diffuser-19.gif"
export default function products()
{
    return(
        <div className="m-8">
            <h1 className="text-4xl font-bold">Current Models:</h1>
            <section className="grid grid-cols-3 justify-around">
                <div className="">
                    <Link href="/products/h15" className="text-center">New! H15-LIN: Eroding Mass Sensor
                        <Image
                        src={h15}
                        alt="Full H15 Sensor Assembled with Conduit"
                        className="m-auto">
                        </Image>
                    </Link>
                </div>
                <div className="">
                    <Link href="/products/h14" className="text-center">H14-LIN: Eroding Mass Sensor
                        <Image
                        src={h14}
                        alt="Full H14 Sensor Assembled with Conduit"
                        className="m-auto">
                        </Image>
                    </Link>
                </div>
                <div className="">
                    <Link href="/products/fp5" className="text-center">H14-LIN: Eroding Mass Sensor
                        <Image
                        src={fp5}
                        alt="Full FP5 Sensor Kit"
                        className="m-auto">
                        </Image>
                    </Link>
                </div>
            </section>
            <p>
                    Sensit is currently in full production and welcomes your orders. Please send us an email if you anticipate ordering in the near future. This will help us determine immediate manufacturing requirements to help you receive your Sensit erosion sensors as soon as possible. Thank you for your never-ending support. <br/><br/>
                    
                    Sensit has been faithful to its customers for over 30 years and will continue supplying you with the superior products you are accustomed to.
                </p>
        </div>
    )
}