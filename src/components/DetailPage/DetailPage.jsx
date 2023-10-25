import { useLoaderData } from "react-router-dom";

const DetailPage = () => {
    const car = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto py-24">
      <div className="card card-compact bg-base-100 shadow-xl">
      <div className="absolute top-2 right-2 py-2 px-4 bg-[#ff4605] text-white rounded-lg">
                    <span className="text-md font-semibold">${car.price}</span>
                  </div>
        <figure>
          <img
            src={car.image}
            alt="car image"
          />

        </figure>
        <div className="card-body">
          <p className="text-xl font-semibold text-gray-500 hover:text-gray-700 transition duration-300">Brand: {car.brand}</p>
          <p className="text-xl text-gray-500 hover:text-gray-700 transition duration-300 font-medium"><strong>Model:</strong> {car.model}</p>
          <p className="text-xl text-gray-500 hover:text-gray-700 transition duration-500"><strong>Description:</strong> {car.description}</p>
          <div className="card-actions justify-end mt-7">
            <button className="btn btn-primary">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
