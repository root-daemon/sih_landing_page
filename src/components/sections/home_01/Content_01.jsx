import "../../../styles/style.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id="content-section-1" className="mt-10">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-start justify-start gap-12 md:grid-cols-2 lg:gap-20 xl:gap-24 xxl:gap-12">
              {/* Content Left Block */}
              <div
                className="jos order-2 overflow-hidden rounded-3xl drop-shadow-2xl md:order-1"
                data-jos_animation="fade-left"
              >
                <img
                  src="assets/img/map.jpeg"
                  alt="content-image-1"
                  width="526"
                  height="450"
                  className="h-auto w-full rounded-3xl"
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div
                className="jos order-1 md:order-2"
                data-jos_animation="fade-right"
              >
                {/* Section Content Block */}
                <div className="flex flex-col items-start justify-start gap-4">
                  <h2 className="mb-3 text-[4rem]">Functionalities</h2>

                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-center justify-center gap-2">
                      <div class="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gray-50 sm:p-2">
                        <div class="mx-auto max-w-7xl">
                          <div class="group relative">
                            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div class="items-top relative flex w-[21rem] items-center justify-center space-x-6 rounded-lg bg-white px-2 py-5 leading-none ring-1 ring-gray-900/5">
                              <div class="space-y-2">
                                <p class="text-2xl font-semibold text-slate-800">
                                  Digital Signature
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mr-2 w-64 text-sm">
                          Streamline approvals and secure documents with fast,
                          encrypted digital signatures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-center justify-center gap-2">
                      <div class="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gray-50 sm:p-2">
                        <div class="mx-auto max-w-7xl">
                          <div class="group relative">
                            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div class="items-top relative flex w-[21rem] items-center justify-center space-x-6 rounded-lg bg-white px-2 py-5 leading-none ring-1 ring-gray-900/5">
                              <div class="space-y-2">
                                <p class="text-2xl font-semibold text-slate-800">
                                Mappls Geo Locations
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mr-2 w-64 text-sm">
                        Send location-based alerts for nearby projects or meetings to boost engagement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-center justify-center gap-2">
                      <div class="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gray-50 sm:p-2">
                        <div class="mx-auto max-w-7xl">
                          <div class="group relative">
                            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div class="items-top relative flex w-[21rem] items-center justify-center space-x-6 rounded-lg bg-white px-2 py-5 leading-none ring-1 ring-gray-900/5">
                              <div class="space-y-2">
                                <p class="text-2xl font-semibold text-slate-800">
                                Effective Task Prioritization
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mr-2 w-64 text-sm">
                        Focus on high-priority tasks for better coordination and productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full items-start justify-start">
                    <div className="flex items-center justify-center gap-2">
                      <div class="relative flex flex-col justify-center overflow-hidden rounded-xl bg-gray-50 sm:p-2">
                        <div class="mx-auto max-w-7xl">
                          <div class="group relative">
                            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <div class="items-top relative flex w-[21rem] items-center justify-center space-x-6 rounded-lg bg-white px-2 py-5 leading-none ring-1 ring-gray-900/5">
                              <div class="space-y-2">
                                <p class="text-2xl font-semibold text-slate-800">
                                Multilingual
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="mr-2 w-64 text-sm">
                        A web solution supporting 32 languages for seamless, barrier-free government coordination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End_1 :::... */}
    </>
  );
};

export default Content_01;
