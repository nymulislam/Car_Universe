import { useState } from "react";
import swal from "sweetalert";

const AddCar = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectRating, setSelectRating] = useState("");

  const handleCar = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const model = form.elements.model.value;
    const brand = form.elements.brand.value;
    const price = form.elements.price.value;
    const image = form.elements.image.value;
    const description = form.elements.description.value;

    form.reset();

    const getValue = {
      model,
      brand,
      type: selectedType,
      price,
      image,
      description,
      rating: selectRating,
    };

    console.log(getValue);

    fetch("https://car-universe-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "You added a Car!",
            icon: "success",
            button: "ok!",
          });
        }
      });
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectRating(e.target.value);
  };

  return (
    <div className="py-16">
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white ln">
          Add Listing
        </h1>
        <hr className="mb-8 mt-2" />

        <form onSubmit={handleCar}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Model
              </label>
              <input
                type="text"
                name="model"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="488 Spider"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ferrari"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Type
              </label>
              <select
                id="carType"
                name="type"
                value={selectedType}
                onChange={handleTypeChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Sedan</option>
                <option>Coupe</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Convertible</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                id="phone"
                min="0"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="$"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Image url
            </label>
            <input
              type="text"
              name="image"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://placehold.co/600x400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="message"
              name="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a sort description..."
            ></textarea>
          </div>

          <div className="mb-6 text-center">
            <div className="rating rating-lg ">
              <input
                type="radio"
                name="rating"
                value="1"
                checked={selectRating === "1"}
                onChange={handleRatingChange}
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating"
                value="2"
                checked={selectRating === "2"}
                onChange={handleRatingChange}
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating"
                value="3"
                checked={selectRating === "3"}
                onChange={handleRatingChange}
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating"
                value="4"
                checked={selectRating === "4"}
                onChange={handleRatingChange}
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating"
                value="5"
                checked={selectRating === "5"}
                onChange={handleRatingChange}
                className="mask mask-star-2 bg-[#ff4605]"
              />
            </div>
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="text-white btn bg-[#ff4605] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-[#ff4605] dark:hover:bg-orange-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCar;
