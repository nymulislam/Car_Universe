import { GrApple } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

const AdExtra = () => {
  return (
    <div className="lg:max-w-5xl mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="lg:w-[500px] lg:h-[300px] bg-gradient-to-b from-[#ff4605] to-[#ff4605] rounded-lg text-white relative transform preserve-3d perspective-1000 transition-all duration-500 ease-in-out cursor-pointer hover:rotate-3d hover:scale-105 hover:shadow-lg">
        <div className="grid grid-cols-2 items-center p-4 lg:p-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">Download our app</h1>
            <button className="text-black bg-white pr-4 lg:pr-6 pl-2 lg:pl-6 py-1 rounded-full text-sm lg:text-lg mb-2 lg:mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605] mr-1">
                  <GrApple />
                </span>
                For iOS
              </div>
            </button>
            <button className="text-black bg-white px-4 lg:px-6 py-1 mb-20 rounded-full text-sm lg:text-lg">
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605] mr-1">
                  <BsGooglePlay />
                </span>
                For Android
              </div>
            </button>
          </div>
          <div>
            <img src="/mobile.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[500px] h-[300px] bg bg-[#222732] text-white relative transform preserve-3d perspective-1000 transition-all duration-500 ease-in-out cursor-pointer hover:rotate-3d hover:scale-105 hover:shadow-lg rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4 lg:p-8 gap-4 lg:gap-10">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">How to buy a car?</h1>
            <button
              type="button"
              className="btn text-white hover:bg-[#ff4605] bg-transparent hover:text-white font-bold text-sm lg:text-base border-[#ff4605] normal-case"
            >
              Read more
            </button>
          </div>
          <div className="grid gap-2 text-sm lg:text-lg text-gray-300">
            <h5>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605]">
                  <BsCheckCircleFill />
                </span>
                best deals
              </div>
            </h5>
            <h5>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605]">
                  <BsCheckCircleFill />
                </span>
                sell your car
              </div>
            </h5>
            <h5>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605]">
                  <BsCheckCircleFill />
                </span>
                car book values
              </div>
            </h5>
            <h5>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605]">
                  <BsCheckCircleFill />
                </span>
                car dealers
              </div>
            </h5>
            <h5>
              <div className="flex items-center space-x-2">
                <span className="text-[#ff4605]">
                  <BsCheckCircleFill />
                </span>
                compare prices
              </div>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdExtra;
