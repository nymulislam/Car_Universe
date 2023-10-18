import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="flex-container w-screen h-screen">
      <div>
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">PAGE NOT FOUND</h3>
          <Link to="/">
            <button type="button" className="border-[#ff4605]" name="button">
              Return To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
