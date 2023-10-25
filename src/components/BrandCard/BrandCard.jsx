import { Link } from "react-router-dom";
import "./BrandCard.css";
import { useState, useEffect } from "react";

const BrandCard = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="wrapper mb-10">
      <h2 className="text-center">
        <strong className="text-4xl ln ">Explore Our Luxury Lineup</strong>
      </h2>

      <div className="cards grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:max-w-5xl mx-auto">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/showCars/${brand.brandName}`}>
            <figure className="card">
              <img src={brand.brandImage} alt={brand.brandName} />
              <figcaption className="text-center">{brand.brandName}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
