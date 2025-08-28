import Image from "next/image";

import logo from "@/assets/img/hero/hero-logo.svg"
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="footer-wrapper">

            <div className="info-wrapper">
                <div className="info-col footer-heading">
                    <p>CONTACT</p>
                </div>

                <div className="info-col">
                    <a href="mailto:info@peregrinocompany.com" target="_blank" rel="noopener noreferrer">info@peregrinocompany.com</a>
                    <a href="https://wa.link/pw1u84" target="_blank" rel="noopener noreferrer">+52 55 4360 9202</a>
                    <a href="https://www.google.com/maps/place/Tokali,+S.A.+de+C.V./@19.2842901,-99.4458631,15.75z/data=!4m10!1m2!2m1!1stokali!3m6!1s0x85cdf5dc4148bf9b:0x35f31e0d9c86b4ba!8m2!3d19.2857724!4d-99.4381979!15sCgZ0b2thbGmSAQxtYW51ZmFjdHVyZXLgAQA!16s%2Fg%2F11sjgvg8ky?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><p>Address</p></a>
                </div>

                <div className="info-col">
                    <a href="https://www.instagram.com/peregrino_company" target="_blank" rel="noopener noreferrer">instagram</a>
                    <a href="https://storage.net-fs.com/hosting/6464914/19/" target="_blank" rel="noopener noreferrer"><p>Virtual Reality</p></a>
                    {/* <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">facebook</a>
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TIKTOK</a> */}
                </div>

                <div className="info-col">
                    <p>PEREGRINO: STRESS-FREE DWELLING</p>

                    {/* <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/3Hb2N2FmKAPmDUI6qUQl8Q?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                    {/* <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/playlist/6Ipb7S96bM1mgA71d6BGj2?si=9HH6D49JR4OSn_u6Zk3OTQ " width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                    <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/6Ipb7S96bM1mgA71d6BGj2?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div className="logo-wrapper">
                <Image src={logo} alt="Peregrino" />
            </div>
        </footer>

    );
};

export default Footer;
