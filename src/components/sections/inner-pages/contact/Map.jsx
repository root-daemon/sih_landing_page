const Map = () => {
  return (
    <section className="map-section">
      {/* Section Spacer */}
      <div className="bg-[#191919] pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
              <h2 className="text-white text-5xl">
                Bridging Departments, Building the Future: Collaborative Mapping for Smarter Cities{" "}
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Map Block */}
          <div className="relative">
            <img src="assets/img/th-1/mapbase.svg" alt="mapbase" className="h-auto lg:w-[50vw] w-full mx-auto" />
            {/* Location 1 */}
            <div className="group absolute hidden sm:flex gap-2 top-[21%] left-[29%] sm:left-[35%] ">
              <div className="relative w-[50px] h-[50px]">
                <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </button>
                <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                  <div className="flex gap-1 font-bold pb-3">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Delhi, India
                  </div>
          
                </div>
              </div>
            </div>
            {/* Location 1 */}
            {/* Location 2 */}
            <div className="group absolute hidden sm:flex gap-2 top-[45%]  left-[66%] sm:left-[63%]">
              <div className="relative w-[50px] h-[50px]">
                <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </button>
                <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                  <div className="flex gap-1 font-bold pb-3">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Kolkata, West Bengal
                  </div>
                
                </div>
              </div>
            </div>
            {/* Location 2 */}
            {/* Location 3 */}
            <div className="group absolute hidden sm:flex gap-2 top-[59%] left-[12.6%] sm:left-[23%]">
              <div className="relative w-[50px] h-[50px]">
                <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </button>
                <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                  <div className="flex gap-1 font-bold pb-3">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Mumbai, Maharashtra
                  </div>
        
                </div>
              </div>
            </div>
            {/* Location 3 */}
            {/* Location 4 */}
            <div className="group absolute hidden sm:flex gap-2 top-[77%]  
            left-[28%] sm:left-[33%]">
              <div className="relative w-[50px] h-[50px]">
                <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </button>
                <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                  <div className="flex gap-1 font-bold pb-3">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Bengaluru, Karnataka
                  </div>
       
                </div>
              </div>
            </div>
            {/* Location 4 */}
            {/* Location 5 */}
            <div className="group absolute hidden sm:flex gap-2 top-[78%] left-[39%] sm:left-[42%]">
              <div className="relative w-[50px] h-[50px]">
                <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 group-hover:opacity-0 transition-all duration-300"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  />
                </button>
                <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                  <div className="flex gap-1 font-bold pb-3">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Chennai, Tamil Nadu
                  </div>
           
                </div>
              </div>
            </div>
            {/* Location 5 */}
          </div>
          {/* Map Block */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Map;
