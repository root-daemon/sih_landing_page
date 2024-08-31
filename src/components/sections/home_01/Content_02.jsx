const Content_02 = () => {
  return (
    <>
      {/*...::: Content Section Start_2 :::... */}
      <section id="content-section-2">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
              {/* Content Left Block */}
              <div
                className="jos order-2 overflow-hidden rounded-3xl shadow-xl"
                data-jos_animation="fade-left"
              >
                <img
                  src="assets/img/todolist.jpeg"
                  alt="content-image-2"
                  width="526"
                  height="450"
                  className="h-auto w-full rounded-3xl"
                />
              </div>
              {/* Content Left Block */}
              {/* Content Right Block */}
              <div className="jos order-1" data-jos_animation="fade-right">
                {/* Section Content Block */}
                <div className="mb-6">
                  
                  <h2 className="text-6xl">Plan it, Manage and Push it.</h2>
                </div>
                {/* Section Content Block */}
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                  Providing a clear board layout, you can easily visualize the progress of your initiatives. Assign tasks, track their status, and identify potential bottlenecks effortlessly. Designed to streamline your workflow and enhance productivity.
                  </p>
                  <ul className="flex flex-col gap-y-5 font-dmSans text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[28px]">
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      Streamline workflow, boost efficiency.
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      Look what&apos;s happening in real-time.
                    </li>
                    <li className="flex items-start gap-x-3">
                      <div className="mt-[2.5px] h-[30px] w-[30px]">
                        <img
                          src="assets/img/th-1/check-circle.svg"
                          alt="check-circle"
                          width="30"
                          height="30"
                          className="h-full w-full"
                        />
                      </div>
                      Intuitive interface, easy to use.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Content Right Block */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Content Section End :::... */}
    </>
  );
};

export default Content_02;
