import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LogoDark = () => {
  return (
    <Link to="/" className='flex flex-row items-center '>
      <img src="/assets/img/icobw.svg" alt="Coordina" className="w-8" />
      <div className='px-4 font-bold text-xl uppercase'>Coordina</div>
    </Link>
  );
};

export default LogoDark;
