import patternBg from "../src/assets/pattern-bg.svg";
import quote from "../src/assets/pattern-quotes.svg";

const Testimonial = (props) => {
  return (
    <div className="font-inter animate-soft p-5">
      <div className="relative mb-[54px]">
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

      <div className="relative">
        <img
          src={quote}
          alt="Quote"
          className="absolute -top-6 right-1/2 w-[60px] translate-x-1/2 "
        />

        <figcaption className="text-center text-lg text-[#202046]">
          <blockquote className="font-light ">{props.text}</blockquote>
          <cite className="mt-5 flex flex-col font-bold not-italic">
            {props.name}
            <span className="font-medium text-[#babacf]">
              {props.profession}
            </span>
          </cite>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
