import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const DetailPage = () => {
  const car = useLoaderData();
  const [cartAdded, setCartAdded] = useState(false);

  const handleAddCart = () => {
    fetch(`https://car-universe-server.vercel.app/cars/${car._id}`)
      .then((res) => res.json())
      .then((carDetails) => {
        fetch("https://car-universe-server.vercel.app/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carDetails),
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              title: "Success!",
              text: "Product added to the cart.",
              icon: "success",
              button: "OK",
            });

            setCartAdded(true);
          });
      });
  };
  return (
    <div className="max-w-4xl mx-auto py-24">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="absolute top-2 right-2 py-2 px-4 bg-[#ff4605] text-white rounded-lg">
          <span className="text-md font-semibold">${car.price}</span>
        </div>
        <figure>
          <img src={car.image} alt="car image" />
        </figure>
        <div className="card-body">
          <p className="text-xl font-semibold text-gray-500 hover:text-gray-700 transition duration-300">
            Brand: {car.brand}
          </p>
          <p className="text-xl text-gray-500 hover:text-gray-700 transition duration-300 font-medium">
            <strong>Model:</strong> {car.model}
          </p>
          <p className="text-xl text-gray-500 hover:text-gray-700 transition duration-500">
            <strong>Description:</strong> {car.description}
          </p>
          <div className="card-actions justify-end mt-7">
            {!cartAdded ? (
              <button className="btn btn-primary" onClick={handleAddCart}>
                Add Cart
              </button>
            ) : (
              <p>Product added to cart</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
