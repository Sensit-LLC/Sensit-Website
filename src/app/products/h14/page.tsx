import Image from "next/image"
import Resource from "@/components/resource/resource"
import h14_lin from "../../../../public/H14-LIN.jpg"
import h14_preview from "../../../../public/H14-DPnC-preview.jpg"
import h14_spec_prev from "../../../../public/H14-spec-thumbnail.png"
import cr1000_wiring from "../../../../public/cr1000-wiring.png"

export default function h14()
{
    return(
        <div className="m-8">
            <section className="flex flex-row justify-center m-auto">
                <Image
                    src={h14_lin}
                    alt="Full H14 Sensor Assembled with Conduit"
                    height={600}
                    objectFit="contain"
                    className="me-4">
                </Image>
                <div className="ms-4 w-auto">
                    <h1 className="text-4xl font-bold">
                        H14-LIN Horizontal Mass Flux Remote Site Field Sensor
                    </h1>
                    <ul className="list-disc mx-8">
                        <li>
                            Superior seal: The crystal mounts now extend over the ends of the crystals providing a superior seal and protecting the edges.
                        </li>
                        <li>
                            Lower power: The sensor draws 12v @ 70ma
                        </li>
                        <li>
                            Asymmetrical response: Uniform radial response has now been improved.
                        </li>
                        <li>
                            No multiple counts: Large energy impacts do NOT produce erroneous multiple counts.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-bold">
                        I/O:
                    </h2>
                    <ul className="mx-auto">
                        <li>
                            KE
                            <ul className="list-disc mx-8">
                                <li>
                                    Brown
                                </li>
                                <li>
                                    Pseudo Mass flux
                                </li>
                                <li>
                                    Pulse
                                </li>
                            </ul>
                        </li>
                        <li>
                            PC
                            <ul className="list-disc mx-8">
                                <li>
                                    White
                                </li>
                                <li>
                                    Particle Counts
                                </li>
                                <li>
                                    Pulse
                                </li>
                            </ul>
                        </li>
                        <li>
                            PHA
                            <ul className="list-disc mx-8">
                                <li>
                                    Blue
                                </li>
                                <li>
                                    Energy
                                </li>
                                <li>
                                    Variable Pulse Height
                                </li>
                            </ul>
                        </li>
                        <li>
                            Gain
                            <ul className="list-disc mx-8">
                                <li>
                                    Green
                                </li>
                                <li>
                                    +12V
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
                                    +12VDC @ 70ma
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
                </div>
            </section>
            <hr className="my-8 border-2"></hr>
            <h1 className="text-4xl font-bold">
                Resources:
            </h1>
            <div className="flex justify-center-safe">
                <Resource src={h14_preview} lnk={"/H14-Manual.pdf"} lnk_txt={"H14 Manual"} alt="H14 Manual" width={200}></Resource>
                <Resource src={h14_spec_prev} lnk={"/H14-Spec.pdf"} lnk_txt={"H14 Tech Specs"} alt="H14 Tech Specs" width={200}></Resource>
                <Resource src={cr1000_wiring} lnk={"/CR1000_H14_FP5_WIRING.pdf"} lnk_txt={"CR1000 Wiring"} alt="CR1000 Wiring Diagram" width={200}></Resource>
            </div>
        </div>
    )
}