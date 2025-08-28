'use client';

import Image from "next/image";
import closeIcon from "@/assets/img/icons/close.svg";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// 👉 Cargar Lottie SOLO en el navegador (evita "document is not defined")
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(m => m.Player ?? m.default),
  { ssr: false }
);

const PopUpAbout = ({ title, content, img, lottie, elementsList, bigPointer, index }) => {
  const popup = useRef(null);
  const close = useRef(null);

  useEffect(() => {
    const btn = close.current;
    const node = popup.current;
    const handler = () => node?.classList.remove("active");
    btn?.addEventListener("click", handler);
    return () => btn?.removeEventListener("click", handler);
  }, []);

  return (
    <div className="about-popup-wrapper" id={`about-popup-${index}`} ref={popup}>
      <div className="popup-card">
        <div className="popup-close-wrapper">
          <button className="popup-close" ref={close}>
            <span>Cerrar</span>
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
                  elementsList.map((element, i) => (
                    <div className="element-area" key={i}>
                      <div className="image-wrapper">
                        <Image src={element.image} alt="Icon Element" />
                      </div>
                      <p>{element.text}</p>
                    </div>
                  ))
                ) : null}
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
            {lottie ? (
              <Player autoplay loop src={lottie} speed={1} />
            ) : (
              <Image src={img} alt={title} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpAbout;