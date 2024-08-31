import { Link } from 'react-router-dom';

const Footer_01 = () => {


  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      <div className='py-[60px] xl:pb-[100px] xl:pt-[130px]'>
        <div className='overflow-hidden'>
          {/* Footer Text Slider */}
          <div className='footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap'>
            {/* Footer Slide Item  */}
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Let&apos;s revolutionize
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
            India's Infrastructure
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              For a Better Future
            </div>

            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Let&apos;s revolutionize
            </div>
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
            India's Infrastructure
            </div>
            <img
              src='assets/img/th-1/footer-text-slider-icon.svg'
              alt='footer-text-slider-icon'
              width={60}
              height={60}
              className='h-10 w-10 lg:h-[60px] lg:w-[60px]'
            />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              For a Better Future
            </div>
            {/* Footer Slide Item  */}
          </div>
        </div>
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Center */}
        <div className='lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_auto] xl:gap-20 xl:py-[100px]'>
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            <Link to='/' className='flex flex-row items-center '>
              <img
                src="/assets/img/icobw.svg" 
                alt='logo'
                className='w-8 h-8'
              />
              <div className='px-4 font-bold text-xl uppercase'>Coordina</div>
            </Link>
            <p>
            From Plans to Progress: Unified Action for India's Infrastructure Growth- Transform ideas into
            actionable plans with coordinated efforts across departments to build a stronger nation.
            </p>
       
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='w-32' />
     
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
        {/* Footer Bottom */}
        {/* <div className='py-9 text-center'>
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            
          </p>
        </div> */}
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div>
      {/* Footer Background Shape 2  */}
      <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div>
    </footer>
  );
};

export default Footer_01;
