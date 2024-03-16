import Logo1 from "../assets/svg/Logo1";
import Logo2 from "../assets/svg/Logo2";
import Logo3 from "../assets/svg/Logo3";
import Logo4 from "../assets/svg/Logo4";
import Logo5 from "../assets/svg/Logo5";
import Logo6 from "../assets/svg/Logo6";

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Let The 🧠s Construct
      </h5>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" className="flex justify-center items-center">
            <Logo1 />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Logo2 />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Logo3 />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Logo4 />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Logo5 />
          </a>
          <a href="#" className="flex justify-center items-center">
            <Logo6 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
