const AddCar = () => {
  return (
    <div className="py-16">
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white ln">
          Add Listing
        </h1>
          <hr className="mb-8 mt-2" />

        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Model
              </label>
              <input
                type="text"
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
                id="countries"
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
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a sort description..."
            ></textarea>
          </div>

          <div className="mb-6">
            <div className="rating rating-lg">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#ff4605]"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-[#ff4605]"
              />

              
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-[#ff4605]"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-[#ff4605]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white btn bg-[#ff4605] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#ff4605] dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Add
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddCar;
