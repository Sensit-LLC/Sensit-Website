import Link from "next/link"
import Image from "next/image"

import beijing_techno from "../../../public/beijing_techno.jpg"
import custom_products from "../../../public/Custom_Products_Logo.jpg"
import sigma from "../../../public/Sigma_Logo.jpg"
import encosys from "../../../public/Encosys_Logo.jpg"
import climatec from "../../../public/Climatec_Logo_JP.jpg"
import truwel from "../../../public/Truwel_Logo.jpg"
import bacca from "../../../public/Bacca-Trading_Logo.jpg"
import rain_root from "../../../public/Rain_Root_Logo.jpg"
import beijing_bolun from "../../../public/Beijing_BoLun_JingWei_Logo.jpg"

export default function contact_us() {
    return (
        <div className="m-8">
            <h1 className="text-4xl font-bold">
                Purchasing
            </h1>
            <br />
            <p>
                Sensit is currently in full production and welcomes your orders. Please send us an email if you anticipate ordering in the near future. This will help us&nbsp;determine immediate manufacturing requirements to help you receive your Sensit™&nbsp;erosion sensors as soon as possible. Thank you for your never-ending support.
            </p>
            <br />
            <hr className="border-2"></hr>
            <br />
            <h2 className="text-2xl">Contact Us:</h2>
            <p>
                Email:
                <Link href="mailto:sales@sensit.com"> sales@sensit.com</Link><br />
                Phone: (909) 289-9177<br />
                15 Rivers Run Way<br />
                Oak Ridge TN, 37830
            </p>
            <br />
            <p>
                *Please contact Sensit for ordering information via email at <Link href="mailto:sales@sensit.com">sales@sensit.com</Link>
            </p>
            <br />
            <p>
                Other distributors of Sensit products are available to assist you with your order.
            </p>
            <br />
            <p>
                Sensit has been faithful to its customers for over 30 years and will continue supplying you with the superior products you are accustomed to.
            </p>
            <br />
            <h1 className="text-4xl font-bold">Sensit Distributors</h1>
            <br />
            <div className="">
                <h3 className="text-xl text-left font-bold">Beijing TechnoSolutions</h3>
                <div className="flex">
                    <Image src={beijing_techno} alt="Beijing TechnoSolutions Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Room 305, Building No. 10</li>
                        <li>Xinqidian Jiayuan No. 5 Changchunqiao Rd.</li>
                        <li>Beijing Postal code: 100089</li>
                        <li>Sales consultation: 010-88019895, 88019658</li>
                        <li>Email: <Link href="mailto:sales@technosolutions.cn">sales@technosolutions.cn</Link></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">North America</h3>
                <div className="flex">
                    <Image src={custom_products} alt="Custom Products Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Custom Products (Mfg of BSNE mass catchers, site towers and wind tunnels)</li>
                        <li>7204 S Service Rd I-20 PO Box 319 Big Spring, TX 79720-0546</li>
                        <li>Tel: <Link href="tel:9153935517">(915) 393-5517</Link></li>
                        <li>Website: <Link href="http://www.soilerosionproducts.com">http://www.soilerosionproducts.com</Link></li>
                        <li>Email: <Link href="mailto:brad@soilerosionproducts.com">brad@soilerosionproducts.com</Link></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">United Arab Emirates - Dubai</h3>
                <div className="flex">
                    <Image src={sigma} alt="Sigma Enterprises LLC Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Sigma Enterprises L.L.C</li>
                        <li>Abu Dhabi Office: P.O. Box 3555, Abu Dhabi, United Arab Emirates</li>
                        <li>Tel: <a href="tel:+97125511433">+971 2 5511433</a></li>
                        <li>Fax: <a href="tel:+97125511477">+971 2 5511477</a></li><li>Website: <a href="http://www.sigma-epd.com/English/contact/index.aspx">http://www.sigma-epd.com/English/contact/index.aspx</a></li>
                        <li>Email: <a href="mailto:marketing@sep.ae">marketing@sep.ae</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">Korea</h3>
                <div className="flex">
                    <Image src={encosys} alt="Encosys Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Tae Sik, Seo. President. Encosys Co., Ltd RM 232, 8-Dong, Industrial Complex #555-9 Hogae-Dong, Dongan-Ku, Anyang City, Kyunggi-Do, 431-831, South Korea.</li>
                        <li>Tel: <a href="tel:+82314791702">+82 31 479 1702</a></li>
                        <li>Fax: <a href="tel:+82314791704">+82 31 479 1704</a></li>
                        <li>Email: <a href="mailto:encosys@unitel.co.kr">encosys@unitel.co.kr</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">Japan</h3>
                <div className="flex">
                    <Image src={climatec} alt="Climatec Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Hisatoshi YOMOGIDA (Mr.) Certificated Weather Forecaster</li>
                        <li>CLIMATEC Inc.</li>
                        <li>Totaku Bldg. 4F 2-54-1, Ikebukuro Toshima-ku Tokyo 171-0014 JAPAN</li>
                        <li>Tel: <a href="tel:+81339886616">+81-3-3988-6616</a></li>
                        <li>Fax: <a href="tel:+81339886613">+81-3-3988-6613</a></li>
                        <li>Website: <a href="http://www.weather.co.jp">http://www.weather.co.jp</a></li>
                        <li>Email: <a href="mailto:yomogida@weather.co.jp">yomogida@weather.co.jp</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">China</h3>
                <div className="flex">
                    <Image src={truwel} alt="Truwel Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Truwel Scientific Limited, Beijing Office Beijing Truwel Instrument, Inc.</li>
                        <li>Room 821, Jade Apartment, No. A38 Fuxing Road, Haidian District, Beijing 100039, China</li>
                        <li>Tel: <a href="tel:+86-10-88202236-801">+86-10-88202236-801</a></li>
                        <li>Fax: <a href="tel:+86-10-88202336">+86-10-88202336</a></li>
                        <li>Website: <a href="http://www.truwel.com">http://www.truwel.com</a></li>
                        <li>Email: <a href="mailto:sales@truwel.com">sales@truwel.com</a> or <a href="mailto:info1@webedaw.com">info1@webedaw.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">Egypt</h3>
                <div className="flex">
                    <Image src={bacca} alt="Bacca Trading Co. Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Reda Rashad, Sales Manager</li>
                        <li>Bacca Trading Co.</li>
                        <li>39 dobat Buildings Saqr qurish, New Maadi Cairo, Egypt</li>
                        <li>Tel/Fax: <a href="tel:+2027542455">+202 754 2455</a></li>
                        <li>Mobile: <a href="tel:+20213478090">+2012 347 8090</a></li>
                        <li>Website: <a href="http://www.bacca-trading.com/ng.com">http://www.bacca-trading.com/ng.com</a></li>
                        <li>Email: <a href="mailto:reda@baccatrading.com">reda@baccatrading.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">Rain Root</h3>
                <div className="flex">
                    <Image src={rain_root} alt="Rain Root Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Rainroot Scientific Limited</li>
                        <li>Room 904, New Material Building, NO.7 Fenghui Mid Road, Haidian District, Beijing, 100094, China</li>
                        <li>Tel: <a href="tel:+861058937388">+86-10-58937388/55</a></li>
                        <li>Fax: <a href="tel:+861058937355">+86-10-58937355</a></li>
                        <li>Website: <a href="http://www.rainroot.com.cn">http://www.rainroot.com.cn</a></li>
                        <li>Email: <a href="mailto:sales@rainroot.com.cn">sales@rainroot.com.cn</a></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <h3 className="text-xl text-left font-bold">Beijing BoLun JingWei Tech Dev Co Ltd</h3>
                <div className="flex">
                    <Image src={beijing_bolun} alt="Beijing BoLun JingWei Tech Dev Co Ltd Logo" className=""></Image>
                    <ul className="mx-16 flex-col shrink">
                        <li>Beijing BoLun JingWei Tech Dev Co Ltd</li>
                        <li>Room 713, Unit 1, Bldg 3, Zhujiang Mooer INT’L BLDG Beiqing RD Changping DIST Beijing China, 102206</li>
                        <li> Tel: <a href="tel:+861056187396">+86-10-56187396</a></li>
                        <li>Fax: <a href="tel:+861082986829">+86-10-8298-6829</a></li>
                        <li>Website: <a href="http://www.bljw-weather.com">www.bljw-weather.com</a></li>
                        <li>Email: <a href="mailto:bljw_weather@163.com">bljw_weather@163.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}