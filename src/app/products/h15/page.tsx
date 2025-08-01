import Image from "next/image"
import h15_lin from "../../../../public/H15-LIN-picture-2.jpg"
export default function h15()
{
    return(
        <div className="m-8">
            <h1 className="text-4xl font-bold">
                In Production! New H15 Mass Flux Sensor
            </h1>
            <div className="grid grid-cols-2 justify-around">
                <Image
                src={h15_lin}
                alt="H15-LIN sensor"
                className="m-auto">
                </Image>
                <p>
                    Now in mass production and on sale!
                    <br/><br/>
                    The new H15 Mass Flux Sensor has a completely redesigned body for longer endurance and a new output port for easy installation and better protection against the elements.
                </p>
            </div>
        </div>
    )
}