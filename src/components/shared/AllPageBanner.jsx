const AllPageBanner = ({pageTitle, breadcrumb}) => {
  return (
    <div
      className="section page-banner-section"
      style={{backgroundImage:"url('/images/bg/page-banner.jpg')"}}
    >
      <div className="shape-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="944px" height="894px">
          <defs>
            <linearGradient
              id="PSgrad_0"
              x1="88.295%"
              x2="0%"
              y1="0%"
              y2="46.947%"
            >
              <stop offset="0%" stop-color="rgb(67,186,255)" stop-opacity="1" />
              <stop
                offset="100%"
                stop-color="rgb(113,65,177)"
                stop-opacity="1"
              />
            </linearGradient>
          </defs>
          <path
            fill-rule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M39.612,410.76 L467.344,29.824 C516.51,-13.476 590.638,-9.93 633.938,39.613 L914.192,317.344 C957.492,366.50 953.109,440.637 904.402,483.938 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          />
          <path
            fill="url(#PSgrad_0)"
            d="M39.612,410.76 L467.344,29.824 C516.51,-13.476 590.638,-9.93 633.938,39.613 L914.192,317.344 C957.492,366.50 953.109,440.637 904.402,483.938 L476.671,864.191 C427.964,907.492 353.376,903.109 310.76,854.402 L29.823,576.670 C-13.477,527.963 -9.94,453.376 39.612,410.76 Z"
          />
        </svg>
      </div>
      <div className="shape-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="726.5px"
          height="726.5px"
        >
          <path
            fill-rule="evenodd"
            stroke="rgb(255, 255, 255)"
            stroke-width="1px"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            opacity="0.302"
            fill="none"
            d="M28.14,285.269 L325.37,21.217 C358.860,-8.851 410.655,-5.808 440.723,28.14 L704.777,325.36 C734.846,358.859 731.802,410.654 697.979,440.722 L400.955,704.776 C367.132,734.844 315.338,731.802 285.269,697.978 L21.216,400.954 C-8.852,367.132 -5.808,315.337 28.14,285.269 Z"
          />
        </svg>
      </div>
      <div className="shape-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="515px" height="515px">
          <defs>
            <linearGradient
              id="PSgrad_0"
              x1="0%"
              x2="89.879%"
              y1="0%"
              y2="43.837%"
            >
              <stop offset="0%" stop-color="rgb(67,186,255)" stop-opacity="1" />
              <stop
                offset="100%"
                stop-color="rgb(113,65,177)"
                stop-opacity="1"
              />
            </linearGradient>
          </defs>
          <path
            fill-rule="evenodd"
            fill="rgb(43, 142, 254)"
            d="M19.529,202.280 L230.531,14.698 C254.559,-6.661 291.353,-4.498 312.714,19.528 L500.295,230.531 C521.656,254.558 519.493,291.353 495.466,312.713 L284.463,500.295 C260.436,521.655 223.641,519.492 202.281,495.465 L14.699,284.462 C-6.660,260.435 -4.498,223.640 19.529,202.280 Z"
          />
          <path
            fill="url(#PSgrad_0)"
            d="M19.529,202.280 L230.531,14.698 C254.559,-6.661 291.353,-4.498 312.714,19.528 L500.295,230.531 C521.656,254.558 519.493,291.353 495.466,312.713 L284.463,500.295 C260.436,521.655 223.641,519.492 202.281,495.465 L14.699,284.462 C-6.660,260.435 -4.498,223.640 19.529,202.280 Z"
          />
        </svg>
      </div>
      <div className="shape-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="972.5px"
          height="970.5px"
        >
          <path
            fill-rule="evenodd"
            stroke="rgb(255, 255, 255)"
            stroke-width="1px"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            fill="none"
            d="M38.245,381.102 L435.258,28.158 C480.467,-12.32 549.697,-7.964 589.888,37.244 L942.832,434.257 C983.23,479.466 978.955,548.697 933.746,588.888 L536.733,941.832 C491.524,982.23 422.293,977.955 382.103,932.745 L29.158,535.732 C-11.32,490.523 -6.963,421.293 38.245,381.102 Z"
          />
        </svg>
      </div>
      <div className="container">
        <div className="page-banner-wrap">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Banner Content Start */}
              <div className="page-banner text-center">
                <h2 className="title">{pageTitle}</h2>
                <ul className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumb}
                  </li>
                </ul>
              </div>
              {/* Page Banner Content End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPageBanner;
