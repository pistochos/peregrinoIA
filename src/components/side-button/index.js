import arrow from "@/assets/img/icons/arrow.svg"
import Image from "next/image";
import { useEffect } from "react";

const SideButton = () => {

    useEffect(() => {
        const wrapper = document.querySelector("#sides-wrapper")
        const trigger = document.querySelector("#trigger-side")

        trigger.addEventListener('click', () => {
            if (wrapper.classList.contains("right-side")) {
                wrapper.classList.remove("right-side")
                trigger.classList.remove("mobile-side-right")
            } else {
                wrapper.classList.add("right-side")
                trigger.classList.add("mobile-side-right")
            }
        })
    }, [])

    return (
        <button className="mobile-side" id="trigger-side">
            <Image src={arrow} alt="Show other side" />
        </button>
    );
};

export default SideButton;