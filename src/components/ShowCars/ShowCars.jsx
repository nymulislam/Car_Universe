import { Link, useLoaderData, useParams } from "react-router-dom";

const ShowCars = () => {
  const { brandName } = useParams();
  const cars = useLoaderData();

  const filteredCars = cars.filter((car) => car.brand === brandName);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car._id} className="max-w-sm mx-auto pb-10">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img
                  className="rounded-t-lg"
                  src={car.image}
                  alt="Product Image"
                />
                <div className="py-6 px-2 rounded-lg">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    Product Name
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
                  <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 mr-4">
                    Details
                  </button>
                  <button className="mt-2 py-2 px-4 bg-blue-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Update
                  </button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span
                    className="text-md font-medium
                "
                  >
                    ${car.price}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="card w-96 bg-base-100 shadow-xl ml-[500px] mt-10">
            <figure>
              <img
                src="/notFound.png"
                alt="notFound"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center hover:text-gray-900 transition duration-400">Result Not Found!</h2>
              <p className="text-gray-500">Whoops!... this information not <br /> available for this moment.</p>
              <div className="card-actions justify-center">
                <Link to="/">
                <button className="btn btn-outline text-[#ff4605] hover:bg-[#ff4605]">Go Back</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCars;
