import Section from "../components/Section";
import { check } from "../assets";
import robot from "../assets/robot.png";
import { socials } from "../constants";
import Contactform from "../components/Contactform";
import { PhotoChatMessage2 } from "../components/Services";

const Contact = () => {
  return (
    <Section crosses id="contact">
      <div className="container lg:flex">
        <div className="relative z-1 grid gap-5 lg:grid-cols-2 w-full max-w-6xl mx-auto">
          <div className="p-4  border border-n-1/10 rounded-[2.5rem] overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Contact Us</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                Use the links for easy access to our socials, @beyndtech.
              </p>
              <ul className="flex items-center justify-between mb-8">
                {socials.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center w-10 h-10 bg-n-6 md:w-15 md:h-15 border-2 border-[#252134] hover:border-[#2DE8CA] transition-all`}
                  >
                    <a
                      href={item.url}
                      className={
                        "flex items-center justify-center w-full h-full"
                      }
                    >
                      <img
                        src={item.iconUrl}
                        width={24}
                        height={24}
                        alt={item.title}
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <Contactform />
            </div>
          </div>

          <div className="relative min-h-[39rem] border border-n-1/10 rounded-[2.5rem] overflow-hidden">
            <div className="absolute top-0 left-0 max-w-full">
              <img
                className="w-full"
                src={robot}
                width={550}
                height={550}
                alt="Grid"
              />
            </div>

            <PhotoChatMessage2 />

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/50 to-n-8/100 lg:p-15">
              <h4 className="h4 mb-4">Here's What Comes Next:</h4>

              <li className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={check} />
                <p className="ml-4 body-1 text-n-3">
                  We'll respond within 48 hours with a personalized reply.
                </p>
              </li>

              <li className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={check} />
                <p className="ml-4 body-1 text-n-3">
                  If needed, we'll schedule a call to discuss details.
                </p>
              </li>

              <li className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={check} />
                <p className="ml-4 body-1 text-n-3">
                  Within a week, we'll send you a proposal with our recommended
                  services, timelines, and pricing.
                </p>
              </li>

              <li className="flex items-start py-4 border-t border-n-6">
                <img width={24} height={24} src={check} />
                <p className="ml-4 body-1 text-n-3">
                  We'll be available for any questions or support throughout our
                  collaboration.
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
