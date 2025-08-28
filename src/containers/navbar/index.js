import Image from "next/image";

import logo from "@/assets/img/navbar/peregrino-logo.svg";

const Navbar = () => {

    return (
        <div className="navbar-wrapper">
            <div className="nav-item nav-left">
                <a href="https://calendly.com/peregrinocompany-info/30min" rel="noopener noreferrer"><p>SCHEDULE A MEETING</p></a>
            </div>

            <div className="nav-item">
                <a href="https://catalogo-peregrino.lovable.app/" target="_blank" rel="noopener noreferrer"><p>CATALOG</p></a>
            </div>

            <div className="nav-item nav-right">
                <a href="https://api.whatsapp.com/send/?phone=525639500342&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><p>PHONE</p></a>
            </div>
        </div>

    );
};

export default Navbar;
