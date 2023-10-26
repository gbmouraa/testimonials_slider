const Testimonial = (props) => {
  return (
    <div className="p-5">
      {/* colocar img aqui */}
      <div className="relative">
        <figcaption>
          <img src={props.pic} alt={props.name} className="h-full w-full" />
        </figcaption>
        {props.slider}
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
