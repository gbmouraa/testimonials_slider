import { useState } from "react";
import Testimonial from "./Testimonial";
import tanyaPic from "./assets/image-tanya.jpg";
import chevronLeft from "./assets/icon-prev.svg";
import chevronRight from "./assets/icon-next.svg";
import johnPic from "./assets/image-john.jpg";
import patternCurve from "./assets/pattern-curve.svg";

function App() {
  const [slide, setSlide] = useState(0);

  const data = [
    {
      name: "Tanya Sinclair",
      profession: "Ux Enginer",
      pic: tanyaPic,
      text: `“ I’ve been interested in coding for a while but never taken the jump, until now.
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    excited about the future. ”`,
    },
    {
      name: "John Tarkpor",
      profession: "Junior Front-end Developer",
      pic: johnPic,
      text: `“ If you want to lay the best foundation possible I’d recommend taking this course.
    The depth the instructors go into is incredible. I now feel so confident about
    starting up as a professional developer. ”`,
    },
  ];

  const Slider = () => {
    return (
      <div className="absolute -bottom-5 flex h-[38px] w-[80px] items-center  rounded-full bg-slate-50 lg:left-[100px]">
        <button
          className="flex h-full w-1/2 items-center justify-center"
          onClick={() => setSlide(0)}
        >
          <img src={chevronLeft} alt="Icon prev" className="h-4" />
        </button>
        <button
          className="flex h-full w-1/2 items-center justify-center"
          onClick={() => setSlide(1)}
        >
          <img src={chevronRight} alt="Icon next" className="h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="relative h-screen items-center overflow-hidden lg:flex lg:max-h-screen">
      {!slide ? (
        <Testimonial
          key={data[0].name}
          name={data[0].name}
          pic={data[0].pic}
          text={data[0].text}
          profession={data[0].profession}
          slider={Slider()}
        />
      ) : (
        <Testimonial
          key={data[1].name}
          name={data[1].name}
          pic={data[1].pic}
          text={data[1].text}
          profession={data[1].profession}
          slider={Slider()}
        />
      )}

      <img
        src={patternCurve}
        alt="Illustration"
        className="absolute bottom-0 left-0  -z-10 w-full lg:translate-y-72"
      />
    </div>
  );
}

export default App;
