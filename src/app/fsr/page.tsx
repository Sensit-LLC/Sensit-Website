import Link from "next/link"
import Resource from "@/components/resource/resource"
import Image from "next/image"

import cr1000x_wiring from "../../../public/cr1000-wiring-diagram-cropped.png"
import site_cost from "../../../public/site-cost-breakdown.png"
import full_system from "../../../public/Wind_erosion_observation_system_in_Middle_Taklimakan_Desert.jpg"

export default function fsr() {
    return (
        <div className="m-8">
            <h1 className="text-4xl font-bold">Research Erosion Site Equipment Requirements</h1>
            <p>
                This research field site configuration would be suitable for basic wind erosion equation development (WEE). The calculation of U* (U star, or friction velocity) requires a minimum of three anemometers. We suggest using four anemometers per site because the probability of one going bad is high.
            </p>
            <br/>
            <ul className="mx-8 list-disc">
                <li>1ea Sensit eroding mass sensor - (Sensit Company)</li>
                <li>3ea anemometer (wind speed sensors) - (RM Young Company)</li>
                <li>1ea wind direction sensor - (RM Young Company)</li>
                <li>1ea air temperature sensor - (Campbell Scientific)</li>
                <li>1ea sand catcher - (Custom Products (Dr. W. Fryrear), Big Spring, TX, USA)</li>
                <li>1ea data system - (Campbell Scientific)</li>
                <li>1ea tower - (Custom Products (Dr. W. Fryrear), Big Spring, TX, USA)</li>
            </ul>
            <br/>
            <h1 className="text-2xl font-bold">Eroding mass sensor - Model H14-LIN</h1>
            <ul className="mx-8">
                <li>Sensit LLC</li>
                <li>15 Rivers Run Way</li>
                <li>Oak Ridge, TN 37830</li>
                <li>Phone: 909-289-9177</li>
                <li>Email: <Link href="mailto:sales@sensit.com">sales@sensit.com</Link></li>
            </ul>
            <h2 className="text-2xl font-bold">Sand Catcher - Model BSNE</h2>
            <ul className="mx-8">
                <li>Custom Products</li>
                <li>7204 S Service Rd I-20 PO Box 319</li>
                <li>Big Spring, TX 79720-0546</li>
                <li>Phone: 915-393-5517</li>
                <li>Website: <Link href="http://www.fryreardustsamplers.com">http://www.fryreardustsamplers.com</Link></li>
                <li>Email: <Link href="mailto:dfryrear@crcom.net">dfryrear@crcom.net (Dr. W. Fryrear)</Link></li>
            </ul>
            <h2 className="text-2xl font-bold">Temperature Sensor &amp; Wind direction sensor</h2>
            <ul className="mx-8">
                <li>RM Young Company</li>
                <li>2801 Aero Park Drive</li>
                <li>Traverse City, Michigan 49686</li>
                <li>Phone: 231-946-3980</li>
                <li>Fax: 231-946-4772</li>
            </ul>
            <h2 className="text-2xl font-bold">Anemometers - wind speed/direction sensor - RM Young (preferred)</h2>
            <ul className="mx-8">
                <li>Met-One Instruments</li>
                <li>1600 Washington Blvd.</li>
                <li>Grants Pass, Oregon 97526</li>
                <li>Phone: 541-471-7111</li>
                <li>Fax: 541-471-7116</li>
            </ul>
            <br/>
            <p>
                Never assume everything will simply work fine. It is a good idea to have recorded (and looked at) test data in the lab before setting up your site in the field. The field environment has few facilities to repair or rebuild. And more often than not, your data acquisition program may need adjustment such as data recording format.
            </p>
            <p>
                Always have backup anemometers. All anemometer bearings prematurely fail from dust.
            </p>
            <div className="grid grid-cols-2 justify-around">
                <Resource src={cr1000x_wiring} lnk="/cr1000-wiring.png" lnk_txt="CR1000 Wiring" alt="CR1000x Wiring Diagram" width={400}></Resource>
                <Resource src={site_cost} lnk="/site-cost-breakdown.png" lnk_txt="Site Cost Breakdown" alt="Site Cost Breakdown" width={400}></Resource>
            </div>
            <div>
                <Image
                src={full_system}
                alt="Middle Taklimakan Desert, CHINA Notice the Sensit model H11-LIN erosion sensors are mounted at two different heights."
                className="m-auto">
                </Image>
                <p className="text-center">
                    Middle Taklimakan Desert, CHINA <br/>
                    Notice the Sensit model H11-LIN erosion sensors are mounted at two different heights.
                </p>
            </div>
        </div>
    )
}