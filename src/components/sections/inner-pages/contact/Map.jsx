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
              <h2 className="text-5xl text-white">
                Bridging Departments, Building the Future: Collaborative Mapping
                for Smarter Cities{" "}
              </h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Map Block */}
          <div className="relative">
            <img
              src="assets/img/th-1/mapbase.svg"
              alt="mapbase"
              className="mx-auto h-auto w-full lg:w-[50vw]"
            />
            {/* Location 1 */}
            <div className="group absolute left-[29%] top-[21%] hidden gap-2 sm:left-[38%] sm:flex">
              <div className="relative h-[50px] w-[50px]">
                <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </button>
                <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                  <div className="flex gap-1 pb-1 font-bold">
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
            <div className="group absolute left-[66%] top-[45%] hidden gap-2 sm:left-[59%] sm:flex">
              <div className="relative h-[50px] w-[50px]">
                <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </button>
                <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                  <div className="flex gap-1 pb-1 font-bold">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Kolkata,
                    <br /> West Bengal
                  </div>
                </div>
              </div>
            </div>
            {/* Location 2 */}
            {/* Location 3 */}
            <div className="group absolute left-[12.6%] top-[59%] hidden gap-2 sm:left-[30%] sm:flex">
              <div className="relative h-[50px] w-[50px]">
                <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </button>
                <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                  <div className="flex gap-1 pb-1 font-bold">
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
            <div className="group absolute left-[28%] top-[77%] hidden gap-2 sm:left-[38%] sm:flex">
              <div className="relative h-[50px] w-[50px]">
                <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </button>
                <div className="invisible absolute bottom-0 right-0 z-50 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                  <div className="flex gap-1 pb-1 font-bold">
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
            <div className="group absolute left-[39%] top-[78%] hidden gap-2 sm:left-[43.5%] sm:flex">
              <div className="relative h-[50px] w-[50px]">
                <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                  <img
                    src="assets/img/th-1/icon-gray-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={35}
                    height={35}
                    className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="assets/img/th-1/icon-orange-location-marker.svg"
                    alt="icon-gray-location-marker"
                    width={50}
                    height={50}
                    className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </button>
                <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-1 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                  <div className="flex gap-1 pb-1 font-bold">
                    <img
                      src="assets/img/th-1/icon-black-location-marker.svg"
                      alt="icon-black-location-marker"
                      width={17}
                      height={17}
                    />
                    Chennai, <br /> Tamil Nadu
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
