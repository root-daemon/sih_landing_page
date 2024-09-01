import "../../../styles/style.css";
const Content_01 = () => {
  return (
    <>
      {/*...::: Content Section Start_1 :::... */}
      <section id="content-section-1" className="mt-10">
        {/* Section Spacer */}
        <div className="pb-20 xl:pb-[150px]">
          {/* Section Container */}
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-24 xxl:gap-24">
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
                <div className="mb-6">
                  <h2 className="text-6xl">Look what&apos;s happening.</h2>
                </div>
                {/* Section Content Block */}
                <div className="text-justify text-lg leading-[1.4] lg:text-[21px]">
                  <p className="mb-7 last:mb-0">
                    Providing a real-time overview of ongoing projects and
                    initiatives within a government organization. The map-based
                    interface visually displays the location of tasks and their
                    current status, enabling efficient monitoring and
                    management.
                  </p>
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
