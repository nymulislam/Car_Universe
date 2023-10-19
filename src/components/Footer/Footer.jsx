import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer p-10 max-w-7xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 mb-6">
          <div className="">
            <h6 className="text-left">About</h6>
            <p className="text-justify">
              CarUniverse.com is your gateway to a world of automotive
              exploration. Discover, connect, and learn about everything related
              to cars on our user-friendly platform. Whether you are buying,
              selling, or simply passionate about automobiles, CarUniverse.com
              is your trusted companion on the road to automotive discovery.
            </p>
          </div>

          <div>
            <h6>Categories</h6>
            <ul className="footer-links text-left ml-28">
              <li>
                <a href="#">Sedan</a>
              </li>
              <li>
                <a href="#">Coupe</a>
              </li>
              <li>
                <a href="#">SUV</a>
              </li>
              <li>
                <a href="#">Hatchback</a>
              </li>
              <li>
                <a href="#">Convertible</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h6>Quick Links</h6>
            <ul className="footer-links text-right mr-28">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">Add Listing</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mt-6">
          <div className="">
            <p className="copyright-text">
              Copyright © 2023 All Rights Reserved by <span></span>
              <a href="#">Car Universe</a>.
            </p>
          </div>

          <div className="">
            <ul className="social-icons">
              <li>
                <button
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-6 h-6 fill-current ln ms text-white"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button aria-label="Log in with X" className="p-3 rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-twitter-x ln ft text-white"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  aria-label="Log in with GitHub"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-6 h-6 fill-current ln ms text-white"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
