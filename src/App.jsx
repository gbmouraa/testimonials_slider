import Testimonial from "./Testimonial";
import tanyaPic from "./assets/image-tanya.jpg";
// import johnPic from "./assets/image-john.jpg";

function App() {
  const data = [
    {
      name: "Tanya Sinclair",
      profession: "Ux Enginer",
      pic: tanyaPic,
      text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    },
    // {
    //   name: "John Tarkpor",
    //   profession: "Junior Front-end Developer",
    //   pic: johnPic,
    //   text: `“ “ If you want to lay the best foundation possible I’d recommend taking this course.
    // The depth the instructors go into is incredible. I now feel so confident about
    // starting up as a professional developer. ”`,
    // },
  ];

  const Slider = () => {
    return <div className="absolute bottom-0 h-5 w-5 bg-red-500"></div>;
  };

  return (
    <div>
      {data.map((person) => (
        <Testimonial
          key={person.name}
          pic={person.pic}
          text={person.text}
          profession={person.profession}
          slider={Slider()}
        />
      ))}
    </div>
  );
}

export default App;
