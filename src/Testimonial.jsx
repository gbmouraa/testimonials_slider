import patternBg from "../src/assets/pattern-bg.svg";

const Testimonial = (props) => {
  return (
    <div className="font-inter p-5">
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
            className="block w-[79%]  rounded-lg shadow-pattern"
          />
          {props.slider}
        </figcaption>
      </div>
      <div>
        <figcaption>
          <blockquote className="font-light ">{props.text}</blockquote>
          <cite>
            <span>{props.profession}</span>
          </cite>
        </figcaption>
      </div>
    </div>
  );
};

export default Testimonial;
