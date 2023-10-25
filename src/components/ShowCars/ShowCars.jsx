import { Link, useLoaderData, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdSlider from "../AdSlider/AdSlider";

const ShowCars = () => {
  const { brandName } = useParams();
  const cars = useLoaderData();

  const filteredCars = cars.filter((car) => car.brand === brandName);

  return (
    <div>
      <AdSlider></AdSlider>
      <div className="py-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div key={car._id} className="pb-10">
                <div className="bg-white p-6 h-[95%] relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                  <img
                    className="rounded-t-lg w-[90%] h-[60%]"
                    src={car.image}
                    alt="Product Image"
                  />
                  <div className="py-6 px-2 rounded-lg">
                   <div>
                   <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                      Name: {car.model}
                    </h1>
                    <p className="text-gray-700 tracking-wide">
                      Brand: {car.brand}
                    </p>
                    <p className="text-gray-700 tracking-wide">
                      Type: {car.type}
                    </p>
                    <p className="text-gray-700 tracking-wide">
                      Rating: {car.rating}.0
                    </p>
                   </div>
                    <div className="flex justify-between items-baseline pb-10">
                    <Link to={`/detailPage/${car._id}`}>
                    <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-4">
                      Details
                    </button>
                    </Link>
                    <Link to={`/updatePage/${car._id}`}>
                    <button className="mt-2 py-2 px-4 bg-lime-500 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      Update
                    </button>
                    </Link>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 py-2 px-4 bg-[#ff4605] text-white rounded-lg">
                    <span className="text-md font-medium">${car.price}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="card w-96 bg-base-100 shadow-xl ml-[300px] mt-10">
              <figure>
                <img src="/notFound.png" alt="notFound" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center hover:text-gray-900 transition duration-400">
                  Result Not Found!
                </h2>
                <p className="text-gray-500">
                  Whoops!... this information is not available at the moment.
                </p>
                <div className="card-actions justify-center">
                  <Link to="/">
                    <button className="btn btn-outline text-[#ff4605] hover:bg-[#ff4605]">
                      Go Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
  );
};

export default ShowCars;
