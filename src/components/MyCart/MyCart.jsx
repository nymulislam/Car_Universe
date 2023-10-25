import { useState, useEffect } from "react";
import swal from "sweetalert";

const MyCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://car-universe-server.vercel.app/cart/add")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const handleRemoveFromCart = (id) => {
    fetch(`https://car-universe-server.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        swal({
          title: "Success",
          text: "Car removed from the cart.",
          icon: "success",
          button: "OK",
        });

        setCart(cart.filter(product => product._id !== id));

      })
  };

  return (
    <div className="pt-10">
      <div className="p-4 max-w-3xl mx-auto mt-16">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
            <h1 className="text-lg font-bold">Shopping Cart</h1>
          </div>
          <div className="p-4">
            {cart.map((product) => (
              <div key={product._id} className="flex items-center mb-4">
                <img
                  className="h-28 w-28 object-contain rounded-lg mr-4"
                  src={product.image}
                  alt="Product"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{product.model}</h2>
                  <span className="text-gray-600">${product.price}</span>
                </div>
                <button
                  className="text-gray-600 hover:text-red-500"
                  onClick={() => handleRemoveFromCart(product._id)}
                >
                  <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
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
