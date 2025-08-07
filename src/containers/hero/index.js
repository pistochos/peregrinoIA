import Image from "next/image";

import logo from "@/assets/img/hero/hero-logo.svg"

const Hero = () => {

    return (
        <div className="hero-wrapper">
            <div className="logo-wrapper">
                <Image src={logo} alt="Peregrino" />
            </div>

            <div className="heading-wrapper">
                <h1>
                    FIND A GREAT PLACE, WE&apos;LL DO THE REST.
                </h1>
            </div>


        </div>

    );
};

export default Hero;