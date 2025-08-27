import Image from "next/image";

import plus from "@/assets/img/icons/more.svg"

import { useEffect, useRef } from "react";

const AboutCard = ({ preview, title, shortContent, index }) => {

    const trigger = useRef(null)

    useEffect(() => {
        // Only run DOM manipulation on client side
        if (typeof window === 'undefined') return;

        trigger.current?.addEventListener('click', () => {
            const popId = `about-popup-${index}`
            const popup = document.querySelector(`#${popId}`)
            popup.classList.add("active")
        })
    }, [])

    return (
        <div className="about-card-wrapper">
            <div className="card-img-wrapper">
                <Image src={preview} alt={title} />
            </div>

            <div className="card-content">
                <p className="heading" dangerouslySetInnerHTML={{ __html: title }}></p>

                {/* <p className="description">{shortContent}</p> */}

                <button ref={trigger}>
                    <Image src={plus} alt="view more" />
                    <span>Ver más</span>
                </button>
            </div>
        </div>
    );
};

export default AboutCard;
