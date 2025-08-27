import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "@/utils/EmblaCarouselSelectedSnapDisplay";

import prevIcon from "@/assets/img/icons/arrow-left-s-line.svg"
import nextIcon from "@/assets/img/icons/arrow-left-s-line-1.svg"
import plus from "@/assets/img/icons/more.svg"
import closeIcon from "@/assets/img/icons/close.svg"

const PlaceCard = ({ img, title, videoIframe, carrusel, carruselDes }) => {
    const trigger = useRef(null)
    const triggerVideo = useRef(null)
    const popup = useRef(null)
    const close = useRef(null)
    const popupVideo = useRef(null)
    const closeVideo = useRef(null)

    const emblaSettings = {
        loop: true, 
        duration: 30
    }
    const [emblaRef, emblaApi] = useEmblaCarousel(emblaSettings, [ClassNames()])
    const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const updateIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        updateIsMobile();
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    useEffect(() => {
        // Only run DOM manipulation on client side
        if (typeof window === 'undefined') return;

        trigger.current?.addEventListener('click', () => {
            popup.current.classList.add("active")
        })

        close.current?.addEventListener('click', () => {
            popup.current.classList.remove("active")
        })
    }, [])

    useEffect(() => {
        // Only run DOM manipulation on client side
        if (typeof window === 'undefined') return;

        if (videoIframe) {
            triggerVideo.current?.addEventListener('click', () => {
                popupVideo.current.classList.add("active")
            })

            closeVideo.current?.addEventListener('click', () => {
                popupVideo.current.classList.remove("active")
            })
        }
    }, [videoIframe])

    useEffect(() => {
        // Only run DOM manipulation on client side
        if (typeof window === 'undefined') return;

        const cards = document.querySelectorAll(".place-card-wrapper .card-img-wrapper");
        const cursors = document.querySelectorAll(".place-card-wrapper .card-img-wrapper .cursor-move");

        cards.forEach((card) => {
            const cursor = card.querySelector(".cursor-move");
            const cursorDot = cursor?.querySelector(".cursor-dot");

            if (window.screen.width >= 1030) {
                card.onmouseenter = () => {
                    cursorDot?.classList.add("show");
                };

                card.onmouseleave = () => {
                    cursorDot?.classList.remove("show");
                };
            }
        })

        if (window.screen.width >= 1030) {
            function moveCursor(event) {
                cursors.forEach((cursor) => {
                    cursor.style.transform = `translate3d(calc(${event.clientX}px - 50vw), calc(${event.clientY}px - 50vh), 0)`;
                })
            }

            window.onmousemove = moveCursor;
            window.onpointermove = moveCursor;

            return () => {
                window.onmousemove = null;
                window.onpointermove = null;
            };
        }
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!emblaApi) return;

            if (event.key === 'ArrowLeft') {
                emblaApi.scrollPrev();
            } else if (event.key === 'ArrowRight') {
                emblaApi.scrollNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [emblaApi]);

    return (
        <>
            <div className="place-card-trigger">
                <div className="place-card-wrapper">
                    <button className="card-img-wrapper parallax-wrapper" ref={trigger}>
                        <Image
                            src={img}
                            width={2000}
                            height={1040}
                            sizes="(max-width: 767px) 50vw, (min-width: 768px) 50vw"
                            className="parallax desktop-img main-image"
                            alt={title}
                        />

                        <div className="cursor no-click">
                            <div className="cursor-move">
                                <div className="cursor-dot">
                                    <div className="text-wrapper-cursor">
                                        <Image src={plus} alt="view more" className="plus"/>
                                        <div className="cursor-text">VER MÁS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <div className="card-content">
                        <p dangerouslySetInnerHTML={{ __html: title }}></p>
                        {videoIframe && (
                            <button ref={triggerVideo}>
                                <Image src={plus} alt="view video" />
                                <span>Ver video</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {videoIframe && (
                <div className="video-popup-wrapper" ref={popupVideo}>
                    <div className="popup-card">
                        <div className="popup-close-wrapper">
                            <button className="popup-close" ref={closeVideo}>
                                <span>Cerrar</span>
                                <Image src={closeIcon} alt="Close Pop Up" />
                            </button>
                        </div>
                        <div className="video-wrapper" dangerouslySetInnerHTML={{ __html: videoIframe }} />
                    </div>
                </div>
            )}

            <div className="place-popup-wrapper" ref={popup}>
                <div className="popup-card">
                    <div className="popup-close-wrapper">
                        <button className="popup-close" ref={close}>
                            <span>Cerrar</span>
                            <Image src={closeIcon} alt="Close Pop Up" />
                        </button>
                    </div>

                    <div className="embla">
                        <div className="embla__viewport" ref={emblaRef}>
                            <div className="embla__container">
                                {carrusel.map((item, index) => {
                                    const isMainImage = item.img === img;
                                    const hasMobileVersion = !!item.imgMob;

                                    if (isMainImage) return null;

                                    // Simplified logic: during SSR and initial client render, show desktop version
                                    // Only filter mobile items after client hydration
                                    if (isClient && isMobile && !hasMobileVersion) return null;

                                    return (
                                        <div className={`embla__slide ${item.slideSize}-slide`} key={index}>
                                            {/* Desktop Image - always present during SSR and when not mobile */}
                                            {(!isClient || !isMobile) && (
                                                <Image
                                                    src={item.img}
                                                    width={2000}
                                                    height={1040}
                                                    sizes="(max-width: 767px) 50vw, (min-width: 768px) 50vw"
                                                    className={`desktop-img ${hasMobileVersion ? 'has-mobile-version' : 'not-main'}`}
                                                    alt={`${carruselDes} ${index}`}
                                                />
                                            )}

                                            {/* Mobile Image - only when client-side and mobile and has mobile version */}
                                            {isClient && isMobile && hasMobileVersion && (
                                                <Image
                                                    src={item.imgMob}
                                                    width={2000}
                                                    height={1040}
                                                    sizes="(max-width: 767px) 50vw, (min-width: 768px) 50vw"
                                                    className="mobile-img"
                                                    alt={`${carruselDes} ${index}`}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="carousel-info">
                            <p className="carousel-description" dangerouslySetInnerHTML={{ __html: carruselDes }}></p>
                            <div className="carousel-controls">
                                <button className="embla__prev control-prev" onClick={scrollPrev}>
                                    <Image src={prevIcon} alt="prev icon" />
                                </button>
                                <SelectedSnapDisplay
                                    selectedSnap={selectedSnap}
                                    snapCount={snapCount}
                                />
                                <button className="embla__next control-next" onClick={scrollNext}>
                                    <Image src={nextIcon} alt="next icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceCard;
