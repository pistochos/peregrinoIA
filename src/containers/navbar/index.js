import Image from "next/image";

import logo from "@/assets/img/navbar/peregrino-logo.svg";

const Navbar = () => {

    return (
        <div className="navbar-wrapper">
            <div className="nav-item nav-left">
                <a href="mailto:info@peregrinocompany.com" target="_blank" rel="noopener noreferrer"><p>info@peregrinocompany.com</p></a>
            </div>

            <div className="nav-item">
                <a href="https://catalogo-peregrino.lovable.app/" target="_blank" rel="noopener noreferrer"><p>Go to catalog</p></a>
                <a href="https://www.jotform.com/es/243035503869055#preview" target="_blank" rel="noopener noreferrer">REALIZAR PEDIDO</a>
            </div>

            <div className="nav-item nav-right">
                <a href="https://wa.link/pw1u84" target="_blank" rel="noopener noreferrer">+52 55 4360 9202</a>
            </div>
        </div>

    );
};

export default Navbar;
