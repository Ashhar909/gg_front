import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-right">
        <div className="nav-element">
          <a
            class="gb_j"
            data-pid="23"
            href="https://mail.google.com/mail/?authuser=0&amp;ogbl"
            target="_top"
          >
            Gmail
          </a>
        </div>
        <div className="nav-element">
          <a
            class="gb_j"
            data-pid="2"
            href="https://www.google.co.in/imghp?hl=en&amp;authuser=0&amp;ogbl"
            target="_top"
          >
            Images
          </a>{" "}
        </div>
        <div className="nav-element">
          <div className="grid">
            <a
              class="gb_d"
              aria-label="Google apps"
              href="https://www.google.co.in/intl/en/about/products"
              aria-expanded="false"
              role="button"
              tabindex="0"
            >
              <AppsIcon />
            </a>
            <a href="/">
              <AccountCircleIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
