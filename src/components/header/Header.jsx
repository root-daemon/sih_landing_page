import { useState } from "react";

import Logo from "../logo/Logo";

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="site-header site-header--absolute is--white py-3"
      id="sticky-menu"
    >
      <div className="global-container">
        <div className="flex items-center justify-between gap-x-8">
          {/* Header Logo */}
          <Logo />
          {/* Header Logo */}
          {/* Header Navigation */}

          {/* Header Navigation */}
          {/* Header User Event */}
          <div className="flex items-center gap-6">
            <a href="/dashboard" className={loginCSS}>
              Dashboard
            </a>

            {/* Responsive Off-canvas Menu Button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger ${light ? "is-white" : "is-black"}`}
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header;
