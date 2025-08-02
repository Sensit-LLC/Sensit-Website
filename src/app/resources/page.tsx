import h14_thumb from "../../../public/H14-DPnC-preview.jpg"
import fp5_thumb from "../../../public/FP5-Manual-thumbnail.jpg"
import fp5_spec from "../../../public/specifications-flat-plate-model-fp5.png"
import h14_spec from "../../../public/H14-spec-thumbnail.png"
import tc1 from "../../../public/technote1.png"
import tc2 from "../../../public/technote2.png"
import tc3 from "../../../public/technote3.png"
import tc4 from "../../../public/technote4.png"
import tc5 from "../../../public/technote5.png"
import tc6 from "../../../public/technote6.png"
import cr1000x from "../../../public/cr1000x-data-logger.png"
import cr6 from "../../../public/cr6-data-logger.png"
import Link from "next/link"

import Resource from "@/components/resource/resource"

export default function resources()
{
    return(
        <div>
            <div className="grid grid-cols-2">
                <Resource src={h14_thumb} lnk="/H14-Manual.pdf" alt="H14 Manual" lnk_txt="H14 Manual" width={500}/>
                <Resource src={fp5_thumb} lnk="/FP5-Manual.pdf" alt="FP5 Manual" lnk_txt="FP5 Manual" width={500}/>
                <Resource src={h14_spec} lnk="/H14-Spec.pdf" alt="H14 Specification" lnk_txt="H14 Specification" width={500}/>
                <Resource src={fp5_spec} lnk="/FP5-Spec.pdf" alt="FP5 Specification" lnk_txt="FP5 Specification" width={500}/>
                <Resource src={tc1} lnk="/Tech_Note_1.pdf" alt="Technical Note 1" lnk_txt="Technical Note 1" width={500}/>
                <Resource src={tc2} lnk="/Tech_Note_2.pdf" alt="Technical Note 2" lnk_txt="Technical Note 2" width={500}/>
                <Resource src={tc3} lnk="/Tech_Note_3.pdf" alt="Technical Note 3" lnk_txt="Technical Note 3" width={500}/>
                <Resource src={tc4} lnk="/Tech_Note_4.pdf" alt="Technical Note 4" lnk_txt="Technical Note 4" width={500}/>
                <Resource src={tc5} lnk="/Tech_Note_5.pdf" alt="Technical Note 5" lnk_txt="Technical Note 5" width={500}/>
                <Resource src={tc6} lnk="/Tech_Note_6.pdf" alt="Technical Note 6" lnk_txt="Technical Note 6" width={500}/>
            </div>
            <h2 className="text-2xl font-bold">Recommended Data Loggers</h2>
            <div className="grid grid-cols-2">
                <Resource src={cr1000x} lnk="/cr1000x-data-logger.png" alt="CR1000x Data Logger" lnk_txt="CR1000x Data Logger" width={500}/>
                <Resource src={cr6} lnk="/cr6-data-logger.png" alt="CR6 Data Logger" lnk_txt="CR6 Data Logger" width={500}/>
            </div>
            <h2 className="text-2xl font-bold">Archived Resources</h2>
            <div className="flex justify-around text-xl">
                <Link href={"/CR10X_Code.pdf"}>CR10X Code</Link>
                <Link href={"/CR1000_Code.pdf"}>CR1000 Code</Link>
                <Link href={"/CR510_Code.pdf"}>CR510 Code</Link>
            </div>
        </div>
    )
}