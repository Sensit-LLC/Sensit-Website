import Image from "next/image"
import h14_dev from "../../../public/H14-development.jpg"
import sbir_udsa from "../../../public/sbir-usda.png"
import h11 from "../../../public/Sensit_Model_H11.gif"
import fp5 from "../../../public/FP5-Trans.gif"
import parabola from "../../../public/PARABOLA_III_2_.jpg"
import samfi from "../../../public/Samfi.jpg"
import drop_tube from "../../../public/DropTube.jpg"
import prototypes from "../../../public/Collage.gif"
import calibrator from "../../../public/Calibrator.jpg"
import covarian from "../../../public/Covarian.jpg"
import amp from "../../../public/10ChAmp.jpg"
import E3F3 from "../../../public/E3-F3.jpg"
import dale from "../../../public/Dale_DAG_lab_wind_tunnel.jpg"
import tunnel from "../../../public/Tunnel.jpg"
import DAS from "../../../public/DAS.png"
import GT1 from "../../../public/Soil_Moisture_GT1.jpg"
import rainKE from "../../../public/RainKE.jpg"

export default function about()
{
    return(
        <div className="m-8">
            <h1 className="text-4xl font-bold">About Us</h1>
            <section className="grid grid-cols-2 justify-center-safe">
                <Image
                    src={h14_dev}
                    alt="An H14 sensor on a workbench hooked up to a testing aparatus and oscilloscope."
                    className="m-auto">
                </Image>
                <p>
                    Sensit company (started in 1978), is the leader in erosion measurement sensors. The design of these sensors has been provided in part by the USDA-SBIR (Small Business through Innovative Research) program. We have been awarded three SBIR research grants for erosion sensor design and feasibility. All three research studies were successful. <br/><br/>
                    Sensit company currently manufacturers two state-of-the-art, remote site erosion sensors as shown below. The model H14-LIN is vertically mounted above the surface of the ground and is used for mass flux and movement monitoring. The model FP5 is an extremely sensitive flat plate surface movement detector providing data the instant movement occurs. When this data is processed with wind speed data, very accurate values for the threshold of movement (wind speed or stress, U*) throughout an erosion event are easily determined.
                </p>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <p>
                    Sensit Company has been awarded 4 USDA-SBIR (Small Business through Innovative Research) research grants; three were for erosion sensor studies. <br/><br/>

                    The model H11-LIN sensor was awarded Phase I feasibility study and Phase II commercialization research grants. USDA/SBIR funding provided the opportunity to thoroughly understand the true response of the sensor and establish many essential design criteria like the necessary dynamic range of the response to adequately process the energy of very small impacts to extremely large impacts traveling over a wide range of velocities including particle mass also over a wide range.<br/><br/>

                    The required dynamic range for sensor response was found to be ~105, a difficult task. Sales slowly but continually increased since 1981 until the sensor, casually became referred to as simply the “Sensit” and eventually became an industry-standard term.<br/><br/>

                    Sensit Company was also awarded a USDA-SBIR Phase I feasibility study for the flat plate sensor. This effort was very successful in designing an impact sensor with a dynamic range of 106. New, state-of-the-art technology is used throughout the design allowing an excellent application-specific design that operates at low power.<br/><br/>

                    Sensit Company was also awarded a USDA-SBIR Phase I feasibility study toward the understanding of a design for a soil moisture sensor. The study found the sensor to be feasible but the industry of primary market interest turned their attention to real-time satellite weather data to determine irrigation requirements in advance.
                </p>
                <Image
                    src={sbir_udsa}
                    alt="USDA CSREES & SBIR logos"
                    className="m-auto">
                </Image>
            </section>
            <section className="grid grid-cols-2 justify-center-safe">
                <Image
                    src={h11}
                    alt="The H11 Sensor"
                    className="m-auto">
                </Image>
                <p>
                    H14-LIN Eroding mass flux sensor
                    Model H14-LIN Wind Eroding Mass Flux sensor. A cylindrical crystal is suspended between rubber mounts on a 2.54cm diameter stainless steel post. The crystal surface is hardened stainless steel. Data outputs for the number of particle impacts and movement via kinetic energy are TTL/CMOS pulses to be counted by any data logger capable of high-speed counting. The power required is 0.84 watts (12V@70ma).<br/><br/>

                    Today, the Sensit Model H14-LIN remains the industry standard for wind eroding mass monitoring and measurement. The original request to produce such a field sensor was made by Dr. Fryrear, USDA, in June of 1981. The first wind tunnel instrument was a vertically oriented array of ten flat rectangular piezoelectric sensors and was used for the investigation of horizontal momentum flux [Gillette and Stockton, 1986]. Test results were encouraging after the prototype wind tunnel sensors were constructed. The USDA funded SBIR Phase I and Phase II awards for what is now the model H14-LIN eroding mass sensor. The drop tube provided control of the particle size (mass), velocity, and impact rate (simulating a saturation condition). Results clearly showed linearity to kinetic energy as the transfer of energy is due to the deceleration of the particle hence <var>v</var><sup>2</sup>.
                </p>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <p>
                    Model FP5 Flat Plate Movement Sensor. The sensor&apos;s active surface is 2.54cm in diameter and extremely sensitive. Like the H14-LIN, produces a TTL/CMOS compatible pulse for each particle impact. The low power requirement is 103mW at 12V supply voltage. The acceptable voltage range is 7VDC -&gt; 20DC. The current draw for the entire voltage range is a constant 8.6ma. Like the H14-LIN the FP5 is well suited for remote use under all environmental conditions including the extreme environment of Antarctica. It comes with 6 meters of shielded cable (stainless steel wrapped conduit, 7mm OD). There are three wires; +12V (red), ground (black), and a particle count output wire (green). The sensor comes with 600u and 1,000u glass spheres for quick testing. A detachable wind diffuser is also supplied to help prevent scouring around the sensor in the sand. This disk is 2mm thick plastic and will be replaced free except for a UPS letter pouch shipping cost. The sensor base has a 1/4″-20TPI hole in the bottom for mounting which will fit most camera tripods. A variety of stainless steel hardware is also supplied for attachment including a 1/4″ x 9″ shaft that screws into the base to penetrate the ground keeping the sensor upright and misc. bolts, threaded stock, etc. are also included.
                </p>
                <Image
                    src={fp5}
                    alt="A closeup of the FP5 sensor plate"
                    width={400}
                    className="m-auto">
                </Image>
            </section>
            <section className="grid grid-cols-2 justify-center-safe">
                <Image
                    src={parabola}
                    alt="The PARABOLA III on a workbench"
                    className="m-auto">
                </Image>
                <p>
                    In 1993 – 1995 Sensit Company produced a full 4pi sphere multi-channel scanning radiometers called the PARABOLA III (Portable Apparatus for Rapid Acquisition of Bidirectional Landmass Areas) shown below. Long ago the first PARABOLA, produced by NASA was a three-channel scanning radiometer with 12-bit resolution. The Sensit PARABOLA III (complete re-design) upgraded this to 8 channels (near-infrared, PAR, and visible bandwidths), each having a 20-bit resolution of reflectance data. Two of these systems were produced by Sensit and purchased by NASA and JPL for ground truth reflectance calibration of the MISER satellite off-NADIR data. Off-NADIR refers to satellites capable of “looking” in directions other than straight down.
                </p>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <p>
                    The first laboratory erosion sensor from Sensit was designed and built by Paul Stockton (Sensit Company 1981) for wind tunnel studies by Dr. Dale Gillette.  It had 10 vertical channels. The number of particle impacts for each channel data was printed on paper tape.<br/><br/>

                    Results of this study were published in the book “Aeolian Geomorphology”.  Gillette (1986), D.A., and Stockton, P.H., “Mass Momentum and Kinetic Energy Fluxes of Saltating Particles”, Book: Aeolian Geomorphology, chapter III, pp. 35 - 56, ISBN: 0-04-551133-0, printed in Canada.<br/><br/>

                    The first field-worthy wind eroding mass sensor eventually became an industry term known as the “Sensit”. The crystal height of the first few was 25cm. The crystal cylinder&apos;s active surface was only 0.100sqin. This narrow active surface was chosen to help reduce the possibility of coincidence impacts and secondly to have a small exposed segment that defines a resolution height definition. Eventually, this cylinder&apos;s active surface height became 0.500″. Shown are the first field sensors produced. They had a particle impact pulse output and two forms of kinetic energy output. One was a digital pulse representing a fixed amount of energy and a second analog vs. time output that was reset by a “excite” pulse from the data logger. The latter output was never used as far as I know.<br/><br/>
                </p>
                <Image
                    src={samfi}
                    alt="The original Sensit"
                    className="m-auto">
                </Image>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <div>
                    <h2 className="text-2xl font-bold">
                        The First Sensit
                    </h2>
                    <p>
                        The erosion sensor seen here is mounted in one of the “drop tube” test apparatus used in a USDA-SBIR research Phase 1 feasibility study. The study concluded the response of the sensor was linear to kinetic energy. The cylindrical sensing crystal is deformed by the impacting particle. The particle undergoes negative acceleration thus transferring its momentum as kinetic energy to the crystal.
                    </p>
                </div>
                <Image
                    src={drop_tube}
                    alt="Erosion Sensor mounted in a drop tube apparatus"
                    className="m-auto">
                </Image>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={prototypes}
                    alt="some of the early models of Sensit erosion sensors throughout their development"
                    className="m-auto">
                </Image>
                <p>
                    These images show some of the early models of Sensit erosion sensors throughout their development.
                </p>
            </section>
            <hr className="border-2"></hr>
            <h2 className="text-2xl font-bold">Other Instruments Used for Research</h2>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={calibrator}
                    alt="H14-LIN hooked up on a calibration rig with a stepper motor to rotate"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        Sensit model H14-LIN Sensor Calibrator
                    </h3>
                    <p>
                        This erosion sensor calibrator uses a stepper motor to turn the Sensit model H14-LIN sensor through 360 degrees. Every 10 degrees the pulse height output of the sensor is recorded along with the number of impacts contributing to the energy values. These data are post-processed in the spreadsheet called Excel to produce the sensor calibration sheet which includes radial graphs of the sensors&apos; response symmetry. These results are provided with every sensor.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={covarian}
                    alt="Sensit Covariance Instrument"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        ~1980: Sensit 9 vs 1 Channel Covariance Instrument C&apos;avgU&apos;avg/W&apos;avg.
                    </h3>
                    <p>
                        Sensit produced a covariance instrument used for EPA pollution studies.  The concentration of suspended dust particles as input to the X channel and the covariance for concentration vs. any of 9 other variables such as vertical wind turbulence was solved. Data was output for data logger recording. Two instruments were produced, one for Oregon State University and another for the Canadian Power Company.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={amp}
                    alt="general-purpose precision laboratory signal amplifier"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">                
                        ~1984 Sensit 10ChAmp, 10 channel DC -&gt; 1MHz precision amplifier
                    </h3>
                    <p>
                        Sensit produced this general-purpose precision laboratory signal amplifier. Each channel has precision offset via a 10-turn dial, or external analog input, and variable gain. 
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={E3F3}
                    alt="Sensit Wind Velocity Vertical Profiling Kite System Model E3F3"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">  
                        1978: Sensit Wind Velocity Vertical Profiling Kite System Model E3F3
                    </h3>
                    <p>
                        This instrument held a spool of string and hoisted a “sled” shaped kite over the Columbia Gorge between Oregon and Washington. The power of the wind pulling on the kite was processed by this instrument. Converting the wind energy felt by the kite to wind speed was accomplished by designing a compound pulley where each radius of the two pulleys varied in diameter. One pulley had a leader wrapped on it which attached to the kite string. The other pulley was under tension by a constant torque spring. The difference between the pull of the spring and the pull of the kite was translated into the linear rotational motion of the pulley. Encoders then converted the pulley rotation into wind speed. Azimuth and elevation were also converted into binary numbers which were in turn converted to analog voltages to be recorded by primitive data loggers. <br/><br/>

                        Eight of these wind profiling devices were produced by Sensit Company in ~1978. The wind study determined that there was sufficient wind energy to build large-scale wind turbine fields on and around the rim of the Columbia Gorge for the production of electric power.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={dale}
                    alt="Wind tunnel at NOAA"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        1983: Sensit made this small wind tunnel for saltation sutdies at NOAA
                    </h3>
                    <p>
                        National Oceanic and Atmospheric Administration (NOAA), Boulder Colorado. Shown here is Dr. D. Gillette, renowned wind erosion theorist. It has been my pleasure to be his engineering support and good friend for 30 years. A man who is as kind and considerate as is his exceptional mathematical prowess. We met while working at the National Center for Atmospheric Research also located in Boulder, Colorado in 1973.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={tunnel}
                    alt="Wind tunnel for USDA-SBIR"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        2007: Sensit made this small wind tunnel for flat plate sensor USDA-SBIR study
                    </h3>
                    <p>
                        Sensit Company received a Phase I USDA-SBIR (Small Business through Innovative Research) award for a feasibility study regarding the flat plate erosion sensor.  Sensit constructed another small wind tunnel exactly like the first wind tunnel made for NOAA in 1978. Engineering results were excellent, sensitivity was found to be in excess of expectations. Sensitivity is so great that it responded to surface activity while buried 2cm under a sand surface in a blowout.  Beginning in September 2012, I continued the development effort producing the final product now referred to as the Sensit model FP5 Flat Plate Movement sensor which was commercially announced in January 2013. Interest has been great but just as the original model H11-LIN vertical sensor, it will take time for research scientists to exploit its potential. This will no doubt prove to be as interesting as the H11-LIN introduction period as researchers find new erosion applications not previously realized.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={DAS}
                    alt="Data Acquisition System 1"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        1991: Sensit produced the DAS-1 (Data Acquisition System) field data logger
                    </h3>
                    <p>
                        Sensit Company was awarded the Phase II USDA-SBIR research award for pursuing commercialization of the Wind Eroding Mass Sensor model H11-LIN. The field testing portion of the Phase II award included establishing 10 complete erosion monitoring stations located in deserts from Big Spring, Texas to Yuma Arizona. Results of the study were excellent showing the ability of the H11-LIN to accurately provide wind eroding mass data in high resolution. The words “high resolution” here refers to one data point every 15 seconds or whatever the researcher thinks his data logger can handle. The Sensit DAS-1 data logger used the first truly pocket computer made by Fujitsu in 1989 (I think), called the POQET computer. Sensit made an interface that fits into the very tiny but complete PC bus on the backside of the POQET and programed it in Pascal to control analog and digital I/O boards also designed and produced by Sensit. It was a truly nice data logger, very easy to use with virtually unlimited expansion capability. I did not care to produce this data logger as a commercial product because it was simply too physically complicated which would drive to price too high for this market niche.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={GT1}
                    alt="GT-1 soil moisture sensor"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        1991: Sensit produced the GT-1 Conductance/Temperature sensor
                    </h3>
                    <p>
                        The Sensit GT-1 soil conductance/temperature unit was designed in 1991 for use in the USDA-SBIR Phase II research project. The Sensit made DAS-1 data logger read this sensor to provide additional data regarding soil conditions that could affect edibility. Several GT-1 soil moisture sensors were sold commercially but interest in soil moisture parameters slowly diminished and so did the product.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-2 justify-center-safe p-4">
                <Image
                    src={rainKE}
                    alt="GT-1 soil moisture sensor"
                    className="m-auto">
                </Image>
                <div>
                    <h3 className="text-xl font-bold">
                        1995: Sensit produced a kinetic energy of rain sensor model V4
                    </h3>
                    <p>
                        Sensit received inquiries regarding the design of a kinetic energy of rain sensor. The model V4 (shown left) was produced but few were sold. This sensor was a direct spin-off from the model H11-LIN wind eroding mass sensor. It was used successfully by Dr. Larry Madden of Ohio State University studying spore dispersion resulting from rain energy on lower canopy plants. The dynamic range of this sensor was very low due to the linear analog circuitry. This was eventually discontinued due to its limited response. Rain impacts are more difficult to measure than soil particle impacts. <br/><br/>
                        
                        Nonetheless, a new rain sensor is being considered based on the exception circuitry now developed for the new flat plate sensor.
                    </p>
                </div>
            </section>
        </div>
    )
}