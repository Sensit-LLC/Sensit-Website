import Image from "next/image"
import fp5_trans from "../../../../public/FP5-Diffuser13-trans.gif"
import cr1000_wiring from "../../../../public/cr1000-wiring.png"
import fp5_spec from "../../../../public/specifications-flat-plate-model-fp5.png"
import Resource from "@/components/resource/resource"
import fp5_preview from "../../../../public/FP5-Manual-thumbnail.jpg"
import fp5_kit from "../../../../public/FP5-Diffuser-19.gif"

export default function fp5()
{
    return(
        <div className="m-8">
            <section className="grid grid-cols-2 justify-center">
                <div className="flex flex-col justify-items-center-safe">
                    <Image
                        src={fp5_trans}
                        alt="Full FP5 Sensor Assembled with Conduit"
                        height={400}
                        objectFit="contain"
                        className="w-auto m-auto">
                    </Image>
                    <Image
                        src={fp5_kit}
                        alt="Full FP5 Kit"
                        height={400}
                        objectFit="contain"
                        className="w-auto m-auto">
                    </Image>
                </div>
                <div className="ms-4 w-auto">
                    <h1 className="text-4xl font-bold">
                        Flat Plate Surface Particle Movement Sensor: Model FP5
                    </h1>
                    <p>
                        Model FP5 Flat Plate Movement Sensor. The sensor&apos;s active surface is 2.54cm in diameter and extremely sensitive. Like the H14-LIN, produces a TTL/CMOS compatible pulse for each particle impact. Like the H14-LIN, the FP5 is well suited for remote use in all environmental conditions including the extreme environment of Antarctica. It comes with 6 meters of stainless steel wrapped conduit shielded cable. There are three wires; +12V (red), ground (black), and a particle count output wire (green). It comes with 600µm and 1,000µm (diameter) glass spheres for testing. A detachable wind diffuser is also supplied to help prevent scouring around the sensor in the sand. It has a 1/4″-20TPI hole in the bottom for mounting. This will fit most camera tripods. A variety of stainless steel hardware is also supplied for attachment including a 1/4″ x 9″ shaft that screws into the base to penetrate the ground keeping the sensor upright and misc. bolts, threaded stock, etc.
                    </p>
                    <br/>
                    <h2 className="text-2xl font-bold">Included</h2>
                    <ul className="list-disc mx-8">
                        <li>
                            FP5 Sensor
                        </li>
                        <li>
                            6 meters, stainless steel flex-conduit shielded 3 wire 20AWG wire cable.
                        </li>
                        <li>
                            Mounting accessories package.
                        </li>
                        <li>
                            Stainless steel dia:1/4″ len:9″ threaded mounting post for stability in the ground.
                        </li>
                        <li>
                            Glass spheres for testing; 600u and 1000u diameters.
                        </li>
                        <li>
                            Stainless steel bulkhead strain relief connector for cable feed through into data logger package.
                        </li>
                    </ul>
                    <br/>
                    <h2 className="text-2xl font-bold">
                        I/O:
                    </h2>
                    <ul className="mx-auto">
                        <li>
                            PC
                            <ul className="list-disc mx-8">
                                <li>
                                    Green
                                </li>
                                <li>
                                    Particle Counts
                                </li>
                                <li>
                                    TTL/CMOS compatible pulse, 1.0mS pulse width.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Power
                            <ul className="list-disc mx-8">
                                <li>
                                    Red
                                </li>
                                <li>
                                    +12VDC @ 8.6ma
                                </li>
                            </ul>
                        </li>
                        <li>
                            Ground
                            <ul className="list-disc mx-8">
                                <li>
                                    Black
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <br/>
                    <p>
                        The sensor also has a port in the side of the base where a blue LED can be seen flashing once for every particle impact. This allows you to drop the glass spheres on the sensor&apos;s surface from various heights and observe its remarkable sensitivity.
                    </p>
                </div>
            </section>
            <hr className="my-8 border-2"></hr>
            <h1 className="text-4xl font-bold">
                Resources:
            </h1>
            <div className="flex justify-center-safe">
                <Resource src={fp5_preview} lnk={"/FP5-Manual.pdf"} lnk_txt={"FP5 Manual"} alt="FP5 Manual" width={200}></Resource>
                <Resource src={fp5_spec} lnk={"/FP5-Spec.pdf"} lnk_txt={"FP5 Tech Specs"} alt="FP5 Tech Specs" width={200}></Resource>
                <Resource src={cr1000_wiring} lnk={"/CR1000_H14_FP5_WIRING.pdf"} lnk_txt={"CR1000 Wiring"} alt="CR1000 Wiring Diagram" width={200}></Resource>
            </div>
        </div>
    )
}