import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import swal from 'sweetalert';
import signup from '../../assets/img/signuplogo.png';
import LogoDark from '../../components/logo/Logo';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();  

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === '' || input.password === '') {
      swal('Oops', 'Please fill all fields', 'error');
      return;
    }

    // Simulate authentication success with a popup
    swal('Success', 'Authentication successful!', 'success')
      .then(() => {
        // Redirect to dashboard after popup confirmation
        navigate('/dashboard');
      });

    // Add actual login functionality here if needed
  };

  return (
    <>
      <main className='main-wrapper relative overflow-hidden bg-[#EFEAE3]'>
        {/*...::: Login Section Start :::... */}
        <div className='mt-6 ml-[4.2rem] '>
          <LogoDark />
        </div>
        <section id='login-section'>
          <div className='flex justify-center items-center'>
            <img className='w-[18rem]' src={signup} alt="" />
          </div>
          {/* Section Spacer */}
          <div className='py-20 pt-24 xl:pb-[150px] xl:pt-[30px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='mx-auto max-w-[610px] text-center'>
                <div className='block rounded-2xl bg-white px-[20px] py-[30px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10'>
                  {/* Login Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-5'
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-6'>
                      {/* Email Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='login-email'
                          className='text-lg font-bold leading-[1.6]'
                        >
                          Govt Id
                        </label>
                        <input
                          type='string'
                          name='email'
                          value={input.email}
                          onChange={handleInput}
                          id='login-email'
                          placeholder='XXXXXX'
                          className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Password Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='login-password'
                          className='text-lg font-bold leading-[1.6]'
                        >
                          Enter Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          value={input.password}
                          onChange={handleInput}
                          id='login-password'
                          placeholder='............'
                          className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Remember Me and Forgot Password */}
                      <div className='flex flex-wrap justify-between gap-x-10 gap-y-4'>
                        <div className='flex gap-x-8 gap-y-[10px]'>
                          <input
                            type='checkbox'
                            className="relative appearance-none text-base after:absolute after:left-0 after:top-[6px] after:h-4 after:w-4 after:rounded-[3px] after:border after:border-[#7F8995] after:bg-white after:text-white after:transition-all after:delay-300 checked:after:border-colorOrangyRed checked:after:bg-colorOrangyRed checked:after:bg-[url('/assets/img/th-1/icon-white-checkmark-filled.svg')]"
                            name='login-check'
                            id='login-check'
                            required=''
                          />
                          <label
                            htmlFor='login-check'
                            className='text-base leading-[1.6]'
                          >
                            Remember me
                          </label>
                        </div>
                        <Link
                          to='/reset-password'
                          className='text-base hover:text-colorOrangyRed'
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <button
                      type='submit'
                      className='button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                    >
                      Sign in
                    </button>
                  </form>
                  {/* Login Form End */}
                </div>
              </div>
            </div>
            {/* Section Container End */}
          </div>
          {/* Section Spacer End */}
        </section>
        {/*...::: Login Section End :::... */}
      </main>
    </>
  );
};

export default Login;
