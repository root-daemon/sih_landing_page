import { Link } from "react-router-dom";
import heroimg from '../../../assets/img/heroimg.png'

const Hero = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id="section-hero">
        <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-28 xxl:pb-[133px] xxl:pt-[195px]">
          <div className="global-container">

            <div className="flex  px-20">
            <div className="mb-14 mt-16 flex flex-col items-center lg:mb-20">
              <h1 className="jos slide-from-bottom mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px] text-6xl">
                India's Infrastructure Revolution{" "}
              </h1>
              <p className="jos slide-from-bottom mb-11 max-w-[700px] lg:text-[18px] font-semibold sm:text-xl xl:max-w-[980px]">
                From Plans to Progress: Unified Action for India's Infrastructure Growth- Transform ideas into
                actionable plans with coordinated efforts across departments to build a stronger nation.
              </p>
              <div className="jos flex flex-wrap justify-center gap-6" data-jos_animation="fade">
                <Link
                  to="#"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Get started for free
                </Link>
                <Link
                  to="#"
                  className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="jos slide-from-bottom"><img
                src={heroimg}
                alt="hero-dashboard"
                className="h-auto w-full"
              /></div>
            </div>

            <div className="jos hero-img overflow-hidden rounded-xl bg-black shadow-lg" data-jos_animation="zoom">
              <img
                src="assets/img/hero.svg"
                alt="hero-dashboard"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

          <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div>
        </div>
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default Hero;
