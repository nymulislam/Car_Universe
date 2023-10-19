const Featured = () => {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10  border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Why Choose <span className="text-[#ff4605]">Us?</span>
          </h2>
          <div className="bg-[#ff4605] w-24 h-1 mx-auto"></div>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            CarUniverse.com is your one-stop shop for a wide selection of
            top-tier car brands like BMW, Tesla, Honda, Hyundai, and Mercedes.
            As a top multi-brand car seller, we provide quality, variety, and
            affordability all in one place. Discover the perfect ride to match
            your style and needs with us.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255, 70, 5, 0.2) 0%, rgba(255, 70, 5, 0.2) 100%)",
                borderColor: "rgb(255,70,5)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="34"
                viewBox="0 0 24 34"
              >
                <g id="medal" transform="translate(-71.962)">
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M89.3,23.828l1.527-2.523,2.755-.957.305-2.947,2.073-2.078-.985-2.789.985-2.79L93.889,7.666l-.305-2.947-2.755-.957L89.3,1.239l-2.888.355L83.962,0,81.509,1.594l-2.887-.355L77.1,3.762l-2.755.957-.305,2.947L71.962,9.744l.985,2.79-.985,2.79L74.035,17.4l.305,2.947,2.755.957,1.527,2.523,2.888-.355,2.453,1.594,2.453-1.594ZM75.523,12.534a8.441,8.441,0,1,1,16.879,0,8.441,8.441,0,1,1-16.879,0Z"
                    transform="translate(0 0)"
                    fill="#ff4605"
                  ></path>
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M163.072,89.333a6.6,6.6,0,1,0,6.482,6.6A6.55,6.55,0,0,0,163.072,89.333Z"
                    transform="translate(-79.11 -83.401)"
                    fill="#ff4605"
                  ></path>
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M89.039,345.326l-3.435.422-1.815-3-.617-.214-2.661,8.471,4.791-.268,3.748,3.051,2.206-7.021Z"
                    transform="translate(-7.992 -319.789)"
                    fill="#ff4605"
                  ></path>
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M274.168,342.749l-1.815,3-3.435-.422-2.217,1.441,2.206,7.021,3.748-3.051,4.791.268-2.661-8.471Z"
                    transform="translate(-182.041 -319.789)"
                    fill="#ff4605"
                  ></path>
                </g>
              </svg>
            </div>
            <h3 className="my-6 text-gray-400 text-2xl font-semibold">Wide range of brands</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Explore our wide range of top-tier car brands. With
              CarUniverse.com, you&rsquo;ll find the perfect vehicle to suit
              your style and needs.
            </p>
          </div>

          <div className="rounded-md border border-neutral-800 bg-neutral-900 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(73, 223, 11, 0.2) 0%, rgba(73, 223, 11, 0.2) 100%)",
                borderColor: "#49df0b",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 37.001 32"
              >
                <g id="trust" transform="translate(0.001)">
                  <path
                    id="Path_271"
                    data-name="Path 271"
                    d="M243.168,1.072a1.084,1.084,0,0,0-2.168,0V5.665a1.084,1.084,0,0,0,2.168,0Zm0,0"
                    transform="translate(-223.585)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_272"
                    data-name="Path 272"
                    d="M147.238,52.326a1.092,1.092,0,0,0,1.533,0,1.064,1.064,0,0,0,0-1.516l-2.322-2.3a1.092,1.092,0,0,0-1.533,0,1.064,1.064,0,0,0,0,1.516Zm0,0"
                    transform="translate(-134.149 -44.754)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_273"
                    data-name="Path 273"
                    d="M306.35,52.64a1.086,1.086,0,0,0,.766-.314l2.322-2.3a1.064,1.064,0,0,0,0-1.516,1.092,1.092,0,0,0-1.533,0l-2.322,2.3a1.063,1.063,0,0,0,0,1.516,1.087,1.087,0,0,0,.766.314Zm0,0"
                    transform="translate(-283.206 -44.754)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_274"
                    data-name="Path 274"
                    d="M15.364,141.319l-.032.027-4.687,3.973a2.418,2.418,0,0,1-1.562.571H5.727A5.693,5.693,0,0,0,0,151.554V161.89a1.078,1.078,0,0,0,1.084,1.072h9.288a1.078,1.078,0,0,0,1.084-1.072v-9.842l5.516-4.676a1.251,1.251,0,0,0,.444-.954V142.3a1.266,1.266,0,0,0-2.052-.983Zm0,0"
                    transform="translate(0 -130.962)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_275"
                    data-name="Path 275"
                    d="M282.689,145.89h-3.357a2.417,2.417,0,0,1-1.562-.571l-4.687-3.973-.032-.027A1.266,1.266,0,0,0,271,142.3v4.116a1.251,1.251,0,0,0,.444.954l5.516,4.676v9.841a1.078,1.078,0,0,0,1.084,1.072h9.288a1.078,1.078,0,0,0,1.084-1.072V151.554a5.693,5.693,0,0,0-5.727-5.664Zm0,0"
                    transform="translate(-251.416 -130.962)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_276"
                    data-name="Path 276"
                    d="M25.2,86.982A4.567,4.567,0,1,0,20.634,91.5,4.547,4.547,0,0,0,25.2,86.982Zm0,0"
                    transform="translate(-14.906 -76.571)"
                    fill="#49df0b"
                  ></path>
                  <path
                    id="Path_277"
                    data-name="Path 277"
                    d="M378.67,86.982A4.567,4.567,0,1,0,374.1,91.5,4.547,4.547,0,0,0,378.67,86.982Zm0,0"
                    transform="translate(-342.831 -76.571)"
                    fill="#49df0b"
                  ></path>
                </g>
              </svg>
            </div>
            <h3 className="my-6 text-gray-400 text-2xl font-semibold">Trusted by our clients</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              CarUniverse.com, trusted by many, offers an excellent car-buying
              experience. Discover why we&rsquo;re the reliable choice.
            </p>
          </div>

          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(5, 117, 255, 0.2) 0%, rgba(5, 117, 255, 0.2) 100%)",
                borderColor: "#0575ff",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="40"
                viewBox="0 0 28 44"
              >
                <g id="money2" transform="translate(-91.358)">
                  <g
                    id="Group_568"
                    data-name="Group 568"
                    transform="translate(91.358)"
                  >
                    <g
                      id="Group_564"
                      data-name="Group 564"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_288"
                        data-name="Path 288"
                        d="M118.257,24.848c-.5-.392-5.733-6.2-7.146-7.019V2.762A2.76,2.76,0,0,0,108.348,0H94.12a2.76,2.76,0,0,0-2.762,2.762V29.141A2.76,2.76,0,0,0,94.12,31.9h6.2l-.255-2.169c-.082-.073-.137-.118-.219-.191H97.11a2.8,2.8,0,0,0-3.4-3.409V5.6a3.126,3.126,0,0,0,.51.046,2.8,2.8,0,0,0,2.8-2.8,3,3,0,0,0-.046-.492h8.5a3,3,0,0,0-.046.492,2.793,2.793,0,0,0,2.8,2.8,3.126,3.126,0,0,0,.51-.046V25.641h0V31.4a10.463,10.463,0,0,1-2.042-2.935s-.529-5.916-3.528-5.916a2.059,2.059,0,0,0-.237.009s-2.27.191-.392,6.681l.839,7.21a16.375,16.375,0,0,0,3.528,6.618v.8a.784.784,0,0,0,.784.784h8.431a.78.78,0,0,0,.775-.693c.3-2.807,1.468-13.244,2.151-14.83a2.992,2.992,0,0,0,.237-.784A3.6,3.6,0,0,0,118.257,24.848Z"
                        transform="translate(-91.358 0)"
                        fill="#0575ff"
                      />
                    </g>
                    <g
                      id="Group_565"
                      data-name="Group 565"
                      transform="translate(8.504 5.642)"
                    >
                      <circle
                        id="Ellipse_125"
                        data-name="Ellipse 125"
                        cx="1.677"
                        cy="1.677"
                        r="1.677"
                        fill="#0575ff"
                      />
                    </g>
                    <path
                      id="Union_22"
                      data-name="Union 22"
                      d="M-16320,20218.059a6.054,6.054,0,0,1,6.055-6.059,6.063,6.063,0,0,1,6.061,6.059,6.066,6.066,0,0,1-1.913,4.422,4.662,4.662,0,0,0-2.2-.543,3.734,3.734,0,0,0-.492.025,3.5,3.5,0,0,0-2.518,1.578,4.23,4.23,0,0,0-.264.436A6.072,6.072,0,0,1-16320,20218.059Z"
                      transform="translate(16323.819 -20201.918)"
                      fill="#0575ff"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h3 className="my-6 text-gray-400 text-2xl font-semibold">Fast & easy financing</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              When it comes to financing your dream car, we&rsquo;ve got you
              covered. Our fast and easy financing options make the journey to
              your new vehicle smoother than ever.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
            borderColor: "rgba(92, 79, 240, 0.2)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Featured;
