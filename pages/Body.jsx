import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import qr from "qr-image";
import phone from "../public/Assets/iPhoneimg (1).png";
import staticqr from "../public/Assets/qrimg.png"
import Footer from './components/Footer';
function Body() {
    const [is, setIs] = useState(false);
    const [data, setData] = useState({
        URL: "",
        QR: ""
    })

    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
            }
        })
        tl.to("#phone", {
            top: "120%",
            left: "0%"
        }, 'orange')
        tl.to("#qr-img", {
            top: "160%",
            left: "23%"
        }, 'orange')


        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
            }
        })


        tl2.to("#qr-img", {
            left: "10%",
            top: "230%"
        }, 'ca')
        tl2.to("#phone", {
            top: "215%",
            left: "10%",
        }, 'ca')

        //tablet

        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".one",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
            }
        })
        tl3.to("#phone_m", {
            top: "3%",
            left: "30%"
        }, 'orange')
        tl3.to("#qr-img_m", {
            top: "10%",
            left: "33%"
        }, 'orange')



        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
            }
        })
        tl.to("#phone_m", {
            top: "60%",
            left: "-15%"
        }, 'orange')
        tl.to("#qr-img_m", {
            top: "80%",
            left: "35%"
        }, 'orange')


        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
            }
        })


        tl2.to("#qr-img_m", {
            left: "3%",
            top: "185%"
        }, 'ca')
        tl2.to("#phone_m", {
            top: "180%",
            left: "5%",
        }, 'ca')

        //mobile

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 50%",
                end: "90% 50%",
                scrub: true,
            }
        })
        tl.to("#phone_m1", {
            top: "225%",
            left: "5%",
            duration: 0.1
        }, 'orange')
        tl.to("#qr-img_m1", {
            top: "225%",
            left: "5%",
            duration: 0.1
        }, 'orange')


    }, [])

    const generateQr = async (e) => {
        e.preventDefault();

        const url = data.URL;
        const qr_svg = qr.imageSync(url, { type: 'svg' });

        setData({ ...data, QR: qr_svg });
        console.log(data.URL);
        console.log(data.QR);
        setIs(true);  
        
    }

    const downloadQr = async () => {
        const qrBlob = new Blob([data.QR], { type: 'image/svg+xml' });
        const qrUrl = URL.createObjectURL(qrBlob);
        const link = document.createElement('a');
        link.href = qrUrl;
        link.download = 'QR.svg';
        link.click();
        URL.revokeObjectURL(qrUrl);
    }


    return (
        <div>
            <div id="main">
                <div className="one">
                    <h1>ScanIt!</h1>
                    <Image id='qr-img' src={staticqr} alt='QR'></Image>
                    <Image src={phone} id='phone' alt='Image' height={550}></Image>
                    <Image id='qr-img_m' src={staticqr} alt='QR'></Image>
                    <Image src={phone} id='phone_m' alt='Image' height={550}></Image>
                    <Image id='qr-img_m1' src={staticqr} alt='QR'></Image>
                    <Image src={phone} id='phone_m1' alt='Image' height={550}></Image>
                </div>
                <div className="two" id='QR-Generator'>
                    <div className="lft-two">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#e04428" d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <div className="rght-two">
                        <h1>QR Generator</h1>
                        <p className='para'>By following these steps, you can create a QR codes to use in various contexts, such as sharing links or accessing digital content.
                        </p>
                        <div id='inst'>
                            <ul>
                                <li>Paste an Existing URL/Link in Input Box</li>
                                <li>Hit the "Enter" Button</li>
                            </ul>
                        </div>
                        <p>
                            <input type="text" id='input' placeholder='Paste URL/Link' value={data.URL} onChange={(e) => setData({ ...data, URL: e.target.value })} />
                        </p>
                        <div className="buttons"><button type="submit" id='btn' onClick={generateQr}>Enter</button>
                            <a href="#scanner" id='btn2'>Show Scanner</a></div>

                    </div>
                </div>
                <div className="three" id='scanner'>

                    {is ? <div className="card">
                        <div id='svg' dangerouslySetInnerHTML={{ __html: data.QR }} />
                        <h1>Scan It</h1>
                        <button id='download' onClick={downloadQr}>Download</button>
                    </div>
                        :
                        <div className="card">
                            <h2>Please input the URL/Link into </h2>
                            <h2>the designated box and tap the</h2>
                            <h2>enter button for activation</h2>
                        </div>
                    }
                </div>
            </div>
            < Footer />
        </div>
    )
}

export default Body