import { curve, heroBackground, robot } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";
import { BackgroundCircles, BottomLine, Gradient } from "../components/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../components/Generating";
import Notification from "../components/Notification";
import CompanyLogos from "../components/CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="w-full px-12 max-sm:px-5 relative" ref={parallaxRef}>
        <div className="relative z-1 w-full h-[80vh] rounded-[20px] overflow-hidden mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[8.25rem]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.itransition.com/static/e66860518af2f2ff66db0853bb7aa322/header-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          <div className="relative px-1 z-1 bg-[#01010280] flex flex-col items-center justify-center w-full h-full mx-auto text-center">
            <h1 className="h1 max-sm:text-[45px] mb-6 max-sm:mb-2">
              {" "}
              {` `}
              Scale Your Business <br className="max-sm:hidden" /> One{" "}
              <span className="max-sm:text-xl max-sm:font-light max-sm:block pt-4 max-sm:font-grotesk">
                Algorithm at a Time!
              </span>{" "}
            </h1>
            <img
              src={curve}
              className="w-[55%] h-5 xl:-mt-6 xl:mb-7 max-sm:w-[90%] max-sm:h-1 max-sm:mb-2"
              width={624}
              height={20}
              alt="Curve"
            />
            <p className="body-1 max-w-[600px] mx-auto mb-6 text-n-2 lg:mb-8 max-sm:hidden">
              We use an entrepreneurial approach to get you to market fast. Our
              clients' businesses are at all stages and sizes, we build new
              product ideas for Fortune 500 corporations to early-stage startups
              and everything in between.
            </p>
            <p className="text-[17px] max-sm:block hidden my-8 font-grotesk text-white/80">
              Limitless Satisfaction Beyond Utopia. <br /> Build Business
              Software That Scales.
            </p>
            <Button href="/#contact" white>
              contact us
            </Button>
          </div>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
