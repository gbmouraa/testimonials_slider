import { useState, useEffect } from "react";
import data from "./data";
import Testimonial from "./Testimonial";
import chevronLeft from "./assets/icon-prev.svg";
import chevronRight from "./assets/icon-next.svg";
import patternCurve from "./assets/pattern-curve.svg";

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        setSlide(0);
      } else if (e.key === "ArrowRight") {
        setSlide(1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const Slider = () => {
    return (
      <div className="shadow-area-btn absolute -bottom-5 z-50 flex h-[38px]  w-[80px] items-center rounded-full bg-slate-50  lg:left-[120px]">
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
    <div className="relative h-screen w-full items-center justify-center overflow-hidden lg:flex lg:max-h-screen">
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
        className="absolute bottom-0 left-0 -z-10 w-full xl:w-[90%] xl:translate-y-40"
      />
    </div>
  );
}

export default App;
