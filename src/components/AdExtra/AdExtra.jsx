import { GrApple } from "react-icons/gr";
import { BsGooglePlay } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import "./AdExtra.css";
const AdExtra = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-5xl mx-auto my-20 grid grid-cols-2 gap-14">
        <div className="ad-card">
          <div className="ad-card-content grid grid-cols-2 items-center">
            <div className="text-left ml-5">
              <h1 className="text-4xl font-bold mb-11">Download our app</h1>
              <button className="text-black bg-white pr-14 pl-6 py-1 rounded-full text-lg mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff4605]">
                    <GrApple></GrApple>
                  </span>
                  For iOS
                </div>
              </button>
              <button className="text-black bg-white px-6 py-1 rounded-full text-lg mb-11">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff4605]">
                    <BsGooglePlay></BsGooglePlay>
                  </span>
                  For Android
                </div>
              </button>
            </div>
            <div>
              <img src="mobile.png" alt="" />
            </div>
          </div>
        </div>
        <div className="ad-card">
          <div className="ad-card-content bg">
            <div className="grid grid-cols-2 items-center text-left gap-10 p-6">
              <div>
                <h1 className="text-3xl font-bold mb-11">How to buy a car?</h1>
                <button
                  type="button"
                  className="btn text-white hover:bg-[#ff4605] bg-[rgba(0,0,0,0)] hover:text-white font-bold text-base border-[#ff4605] normal-case"
                >
                  Read more
                </button>
              </div>
              <div className="grid gap-2 text-lg text-gray-300">
                <h5>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#ff4605]">
                      <BsCheckCircleFill></BsCheckCircleFill>
                    </span>
                    best deals
                  </div>
                </h5>
                <h5>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#ff4605]">
                      <BsCheckCircleFill></BsCheckCircleFill>
                    </span>
                    sell your car
                  </div>
                </h5>
                <h5>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#ff4605]">
                      <BsCheckCircleFill></BsCheckCircleFill>
                    </span>
                    car book values
                  </div>
                </h5>
                <h5>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#ff4605]">
                      <BsCheckCircleFill></BsCheckCircleFill>
                    </span>
                    car dealers
                  </div>
                </h5>
                <h5>
                  <div className="flex items-center">
                    <span className="mr-2 text-[#ff4605]">
                      <BsCheckCircleFill></BsCheckCircleFill>
                    </span>
                    compare prices
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdExtra;
