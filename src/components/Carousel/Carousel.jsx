import "./Carousel.css"

const Carousel = () => {
  return (
    <div>
      <ul className="slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
        <li>
          <span>Image 04</span>
        </li>
        <li>
          <span>Image 05</span>
        </li>
        <li>
          <span>Image 06</span>
        </li>
      </ul>
      <div className="container">
        <header>
          <h1 className="text-6xl font-semibold">
            Find Your <span className="text-[#ff4605]">Perfect</span> Car
          </h1>
        </header>
      </div>
    </div>
  );
};

export default Carousel;
