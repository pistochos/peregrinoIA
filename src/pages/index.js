import Head from "next/head";
import localFont from "next/font/local";
import Hero from "@/containers/hero";
import About from "@/containers/about";
import Footer from "@/containers/footer";
import Navbar from "@/containers/navbar";
// import SideButton from "@/components/side-button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const helveticaNeueRoman = localFont({
  src: "./fonts/HelveticaNeue-Roman.woff",
  variable: "--font-helvetica-neue-roman",
  weight: "400",
});

export default function Home() {
  const rootRef = useRef();

  // Smooth Scroll
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  useLenis(() => {
    // called every scroll
    ScrollTrigger.update();
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      const boxRef = document.querySelector(".bb.column-one");
      const box2Ref = document.querySelector(".bb.column-two");

      mm.add("(min-width: 1030px)", () => {
        gsap.to(box2Ref, {
          bottom: 0,
          transformOrigin: "center bottom",
          ease: "linear",
          scrollTrigger: {
            trigger: boxRef,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });

      // Parallax
      const parallax = gsap.utils.toArray(".parallax-wrapper");

      parallax.forEach((item) => {
        const insideP = item.querySelectorAll(".parallax");

        insideP.forEach((ele) => {
          gsap.fromTo(
            ele,
            { yPercent: 15 },
            {
              yPercent: -15,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                scrub: true,
              },
            }
          );
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Head>
        {/* Title + Description */}
        <title>PEREGRINO</title>
        <meta
          name="description"
          content="FIND A GREAT PLACE, WE'LL DO THE REST."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (SEO redes sociales) */}
        <meta property="og:title" content="PEREGRINO" />
        <meta
          property="og:description"
          content="FIND A GREAT PLACE, WE'LL DO THE REST."
        />
        <meta property="og:url" content="https://peregrinocompany.com/" />
        <meta property="og:image" content="/meta-img.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="PEREGRINO" />
        <meta
          property="twitter:description"
          content="FIND A GREAT PLACE, WE'LL DO THE REST."
        />
        <meta property="twitter:image" content="/meta-img.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactLenis root ref={lenisRef} autoRaf={false}>
        <div className={`${helveticaNeueRoman.variable}`} ref={rootRef}>
          <main>
            <Navbar />
            {/* <SideButton /> */}
            <Hero />
            <About />
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
