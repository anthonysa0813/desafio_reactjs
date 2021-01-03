import React from "react";

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand font-weight-light" to="/">
          Lasfam<span className="font-weight-bolder">Store</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <CartWidget />
      </nav>
    </>
  );
};

export default Navbar;
