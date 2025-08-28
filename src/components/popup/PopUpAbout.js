import Image from "next/image";
import dynamic from "next/dynamic";

import closeIcon from "@/assets/img/icons/close.svg"

import { useEffect, useRef } from "react";

const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
);

const PopUpAbout = ({ title, content, img, lottie, elementsList, bigPointer, index }) => {

    const popup = useRef(null)
    const close = useRef(null)

    useEffect(() => {
        // Only run DOM manipulation on client side
        if (typeof window === 'undefined') return;

        close.current?.addEventListener('click', () => {
            popup.current.classList.remove("active")
        })
    }, [])

    return (

        <div className="about-popup-wrapper" id={`about-popup-${index}`} ref={popup}>
            <div className="popup-card">

                <div className="popup-close-wrapper">
                    <button className="popup-close" ref={close}>
                        <p>CLOSE</p>
                        <Image src={closeIcon} alt="Close Pop Up" />
                    </button>
                </div>

                <div className="popop-content-wrapper">
                    <div className="info-wrapper">
                        <p className="heading" dangerouslySetInnerHTML={{ __html: title }}></p>
                        <p className="description" dangerouslySetInnerHTML={{ __html: content }} />
                        <div className="structureContent">
                            <div className="list-content">
                                {elementsList && elementsList.length > 0 ? (
                                    elementsList.map((element, index) => (
                                        <div className="element-area" key={index}>
                                            <div className="image-wrapper">
                                                <Image src={element.image} alt="Icon Element" />
                                            </div>
                                            <p>{element.text}</p>
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                            {bigPointer && (
                                <div className="extra-content">
                                    <div className="pointer-wrapper">
                                        <Image src={bigPointer} alt="Pointer" />
                                    </div>
                                    <p className="main-term">Trámites más simples</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="render-wrapper">
                        {
                            lottie ?
                                <Player
                                    autoplay={true}
                                    loop
                                    src={lottie}
                                    speed={1}
                                />
                                :
                                <Image src={img} alt={title} />
                        }
                    </div>
                </div>


            </div>
        </div>

    );
};

export default PopUpAbout;
