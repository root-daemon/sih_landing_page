import delhi from "../../../../assets/img/delhimap.png";
import kol from "../../../../assets/img/kolmap.png";
import blr from "../../../../assets/img/blrmap.png";
import chn from "../../../../assets/img/chnmap.png";
import mumbai from "../../../../assets/img/mumbaimap.png";
import indore from "../../../../assets/img/indoremap.png";
import nagpur from "../../../../assets/img/nagpurmap.png";

const Map = () => {
  return (
    <section className="map-section">
      {/* Section Spacer */}
      <div className="bg-[#191919]">
        {/* Section Container */}
        <div className="global-container">
          {/* Section Content Block */}
          <div className="flex flex-row-reverse items-center justify-center gap-5 px-24">
            <div>
              <div className="mb-10 text-center lg:mb-16 xl:mb-20">
                <div>
                  <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
                    <h2 className="pl-10 text-4xl text-[#F5F2E6]">
                      Bridging Departments, Building the Future: Collaborative
                      Mapping for{" "}
                      <span className="text-orange-500">Smarter Cities</span>{" "}
                    </h2>
                  </div>

                  <div className="ml-10 mt-12 flex items-center justify-center gap-3">
                    <div className="block max-w-sm rounded-lg border border-orange-500 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Across cities
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        100+
                      </p>
                    </div>

                    <div className="block max-w-sm rounded-lg border border-gray-200 bg-orange-500 p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Across cities
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        100+
                      </p>
                    </div>

                    <div className="block max-w-sm rounded-lg border border-orange-500 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Across cities
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        100+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Map Block */}

            <div>
              <div className="relative">
                <img
                  src="assets/img/th-1/mapbase.svg"
                  alt="mapbase"
                  className="mx-auto h-[55rem]"
                />
                {/* Location 1 */}
                <div className="group absolute left-[38%] hidden gap-2 sm:flex lg:left-[26%] lg:top-[33%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={delhi}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={delhi}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Delhi, India
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 1 */}
                {/* Location 2 */}
                <div className="group absolute left-[59%] hidden gap-2 sm:flex lg:left-[66%] lg:top-[45%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={kol}
                        alt="icon-gray-location-marker"
                        width={50}
                        height={150}
                        className="w-[10rem] opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={kol}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Kolkata,
                        <br /> West Bengal
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 2 */}
                {/* Location 3 */}
                <div className="group absolute hidden gap-2 sm:left-[30%] sm:flex lg:left-[12.6%] lg:top-[56%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={mumbai}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={mumbai}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Mumbai, Maharashtra
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 3 */}
                {/* Location 4 */}
                <div className="group absolute hidden gap-2 sm:left-[38%] sm:flex lg:left-[26%] lg:top-[66%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={blr}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={blr}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 z-50 w-[170px] rounded-[8px] bg-white p-4 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Bengaluru, Karnataka
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 4 */}
                {/* Location 5 */}
                <div className="group absolute hidden gap-2 sm:left-[43.5%] sm:flex lg:left-[35%] lg:top-[64%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={chn}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={chn}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-1 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Chennai, <br /> Tamil Nadu
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 5 */}
                {/* Location 6 */}
                <div className="group absolute hidden gap-2 sm:left-[43.5%] sm:flex lg:left-[22%] lg:top-[46%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={indore}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={indore}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 z-50 w-[170px] rounded-[8px] bg-white p-1 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Indore, <br /> Madhya Pradesh
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 6 */}
                {/* Location 7 */}
                <div className="group absolute hidden gap-2 sm:left-[43.5%] sm:flex lg:left-[36%] lg:top-[48%]">
                  <div className="relative h-[50px] w-[50px]">
                    <button className="group relative flex h-[50px] w-[50px] items-center justify-center transition-all duration-300">
                      <img
                        src={nagpur}
                        alt="icon-gray-location-marker"
                        width={150}
                        height={150}
                        className="opacity-100 transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={nagpur}
                        alt="icon-gray-location-marker"
                        width={90}
                        height={90}
                        className="absolute scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      />
                    </button>
                    <div className="invisible absolute bottom-0 right-0 w-[170px] rounded-[8px] bg-white p-1 text-sm opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:right-[50px] xl:translate-y-12 xxl:left-[50px] xxl:right-auto">
                      <div className="flex gap-1 pb-1 font-bold">
                        <img
                          src="assets/img/th-1/icon-black-location-marker.svg"
                          alt="icon-black-location-marker"
                          width={27}
                          height={27}
                        />
                        Nagpur, <br /> Maharashtra
                      </div>
                    </div>
                  </div>
                </div>
                {/* Location 7 */}
              </div>
            </div>
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
