import Image from "next/image";

import { useCallback, useEffect, useRef } from "react";

import closeIcon from "@/assets/img/icons/close.svg"

const PlaceCard = ({ }) => {

    const trigger = useRef(null)
    const popup = useRef(null)
    const close = useRef(null)

    useEffect(() => {
        trigger.current.addEventListener('click', () => {
            popup.current.classList.add("active")
        })

        close.current.addEventListener('click', () => {
            popup.current.classList.remove("active")
        })
    }, [])

    return (
        <>
            <div className="video-popup-wrapper" ref={popup}>
                <div className="popup-card">

                    <div className="popup-close-wrapper">
                        <button className="popup-close" ref={close}>
                            <p>CLOSE</p>
                            <Image src={closeIcon} alt="Close Pop Up" />
                        </button>
                    </div>


                    <div className="video-wrapper">

                        <iframe className="videoElement" width="560" height="315" src="https://www.youtube.com/embed/_BATAV4wqNo?si=pBgIKUSBxcFOupS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>
            </div>
        </>

    );
};

export default PlaceCard;
