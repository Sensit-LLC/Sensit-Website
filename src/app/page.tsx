import desert_photo from "../../public/Wind_erosion_observation_system_in_Middle_Taklimakan_Desert.jpg"
import Image from "next/image";
import fp5_sensor from "../../public/FP5-Diffuser-19.gif"
import H14 from "../../public/H14-LIN.jpg"
import H15 from "../../public/H15-LIN.jpg"

export default function Home() {
  return (
    <div className="">
      <section className="text-pretty">
        <Image
          className="m-auto"
          src={desert_photo}
          alt="Wind Erosion Observation System In Middle Taklimakan Desert"
        />
        <h2 className="text-2xl font-bold m-auto">
          Wind Blown Erosion Measurement Solutions
        </h2>
        <p>
          Sensit company currently manufacturers two state-of-the-art, remote site erosion sensors as shown below. The model H14-LIN is vertically mounted above the surface of the ground and is used for mass flux and movement monitoring. The model FP5 is an extremely sensitive flat plate surface movement detector providing data the instant movement occurs. When this data is processed with wind speed data, very accurate values for the threshold of movement (wind speed or stress, U*) throughout an erosion event are easily determined.
        </p>
      </section>
      <section>
          <h3 className="text-center text-2xl">New & In Production: H15-LIN Sensor</h3>
          <Image
            className="m-auto border-4 border-black"
            src={H14}
            height={600}
            alt="H14-LIN sensor and conduit"
          />
      </section>
      <section className="flex justify-around">
        <div>
          <h3 className="text-center text-2xl">Model H14-LIN</h3>
          <Image
            className="m-auto border-4 border-black"
            src={H14}
            height={441}
            alt="H14-LIN sensor and conduit"
          />
          <p className="max-w-[331]">
            The H14-LIN has stainless steel flexible cable shielding. It also does not require a radial symmetry calibration due to the exceptionally consistent and uniform radial response. This updated sensor is in production and is currently shipping.
          </p>
        </div>
        <div>
        <h3 className="text-center text-2xl">Model FP5-REV C</h3>
        <Image
          className="m-auto border-4 border-black"
          src={fp5_sensor}
          alt="FP5 sensor with diffuser and case"
        />
        <p className="max-w-[331]">
          The FP5 sensor is provided as a complete package with mounting hardware, glass spheres, and a battery. The orange disk is a wind diffuser that thwarts scouring around the sensor base by allowing sand to fill in gaps about the sensor. The goal is to allow surface movement called “creep” to move along the ground in a natural way to the sensor.
        </p>
        </div>
      </section>
    </div>
  );
}
