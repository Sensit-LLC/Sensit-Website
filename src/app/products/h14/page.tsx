import Image from "next/image"
import resource from "@/components/navbar/resource/resource"
import h14_lin from "../../../../public/H14-LIN.jpg"

export default function h14()
{
    return(
        <div className="m-8">
            <section className="grid grid-cols-2 justify-around">
                <Image
                    src={h14_lin}
                    alt="Full H14 Sensor Assembled with Conduit"
                    className="m-auto">
                </Image>
                <div>
                    <h1 className="text-4xl font-bold">
                        H14-LIN Horizontal Mass Flux Remote Site Field Sensor
                    </h1>
                    <p>
                        -Superior seal: The crystal mounts now extend over the ends of the crystals providing a superior seal and protecting the edges.
                    </p>
                    <p>
                        -Lower power: The sensor draws 12v @ 70ma
                    </p>
                    <p>
                        -Asymmetrical response: Uniform radial response has now been improved.
                    </p>
                    <p>
                        -No multiple counts: Large energy impacts do NOT produce erroneous multiple counts.
                    </p>
                </div>
            </section>
        </div>
    )
}