import patternBg from "../src/assets/pattern-bg.svg";
import quote from "../src/assets/pattern-quotes.svg";

const Testimonial = (props) => {
  return (
    <div className="m-auto max-w-[549px] animate-soft p-5 font-inter lg:flex lg:max-w-full">
      <div className="relative mb-[54px] max-w-[550px] lg:order-2">
        <img
          src={patternBg}
          alt="Background"
          className="relative left-0 top-0"
        />

        <figcaption className="absolute top-1/2 flex -translate-y-1/2 justify-center">
          <img
            src={props.pic}
            alt={props.name}
            className="block w-[79%]  rounded-lg shadow-pattern"
          />
          {props.slider}
        </figcaption>
      </div>

      <div className="z-10 flex items-center lg:translate-x-28">
        <figcaption className="relative text-center text-2xl text-[#202046] lg:max-w-[480px] lg:text-left">
          <img
            src={quote}
            alt="Quote"
            className="absolute -top-6 right-1/2 w-[60px] translate-x-1/2 lg:left-8 "
          />

          <blockquote className="font-light">{props.text}</blockquote>
          <cite className="mt-5 flex flex-col text-lg font-bold not-italic lg:flex-row">
            {props.name}
            <span className="font-medium text-[#babacf] lg:ml-2">
              {props.profession}
            </span>
          </cite>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
