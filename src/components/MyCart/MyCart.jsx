const MyCart = () => {
  return (
    <div className="pt-10">
      <div className="p-4 max-w-3xl mx-auto mt-16 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200 ">
            <h1 className="text-lg font-bold">Shopping Cart</h1>
            <span className="text-gray-600">(3 items)</span>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4 ">
              <img
                className="h-28 w-28 object-contain rounded-lg mr-4"
                src="https://picsum.photos/200/200"
                alt="Product"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">Product Title</h2>
                <span className="text-gray-600">$29.99</span>
              </div>
              <button className="text-gray-600 hover:text-red-500">
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center mb-4">
              <img
                className="h-28 w-28 object-contain rounded-lg mr-4"
                src="https://picsum.photos/200/200"
                alt="Product"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">Product Title</h2>
                <span className="text-gray-600">$19.99</span>
              </div>
              <button className="text-gray-600 hover:text-red-500">
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <img
                className="h-28 w-28 object-contain rounded-lg mr-4"
                src="https://picsum.photos/200/200"
                alt="Product"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">Product Title</h2>
                <span className="text-gray-600">$24.99</span>
              </div>
              <button className="text-gray-600 hover:text-red-500">
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg">$74.97</span>
            </div>
            <button className="block w-full mt-4 bg-[#ff4605] hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
