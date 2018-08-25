import React from "react";

const Nav = () => (
  <nav className=" uk-navbar uk-navbar-container uk-container">
    <div className="uk-navbar-left uk-logo"><a href="/"><strong>Balivana</strong></a>
      <ul className="uk-navbar-nav">
        <li className="uk-active"><a href="/submit">Submit A Balisong</a></li>
        <li className="uk-active"><a href="/all">See All Balisongs</a></li>
      </ul>
    </div>
  </nav>
);

export default Nav;