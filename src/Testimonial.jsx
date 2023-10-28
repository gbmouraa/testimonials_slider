import patternBg from "../src/assets/pattern-bg.svg";

const Testimonial = (props) => {
  return (
    <div className="p-5">
      <div className="relative mb-5">
        <img
          src={patternBg}
          alt="Background"
          className="relative left-0 top-0"
        />
        <figcaption className="absolute top-1/2 flex -translate-y-1/2 justify-center">
          <img
            src={props.pic}
            alt={props.name}
            className="shadow-pattern block  w-[79%] rounded-lg"
          />
          {props.slider}
        </figcaption>
      </div>
      <div>
        <figcaption>
          <blockquote>{props.text}</blockquote>
          <cite>
            {props.name}
            <span>{props.profession}</span>
          </cite>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
