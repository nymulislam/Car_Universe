import "./BrandCard.css";

const BrandCard = () => {
  return (
    <div className="wrapper mb-10">
      <h2>
        <strong className="text-4xl ln">
        Explore Our Luxury Lineup
        </strong>
      </h2>

      <div className="cards grid grid-cols-3 justify-items-center max-w-5xl mx-auto">
        <figure className="card">
          <img src="tesla.png" />

          <figcaption>T E S L A</figcaption>
        </figure>

        <figure className="card">
          <img src="mercedes.png" />

          <figcaption>MERCEDES</figcaption>
        </figure>

        <figure className="card">
          <img src="bmw.png" />

          <figcaption>B M W</figcaption>
        </figure>

        <figure className="card">
          <img src="honda.png" />

          <figcaption>H O N D A</figcaption>
        </figure>
        <figure className="card">
          <img src="hyundai.png" />

          <figcaption>H Y U N D A I</figcaption>
        </figure>
        <figure className="card">
          <img src="nissan.png" />

          <figcaption>N I S S A N</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default BrandCard;
