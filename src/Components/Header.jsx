import React from "react";
import { ReactTyped } from "react-typed";
function Header() {
  return (
    <header className="bg-dark text-center py-2">
      <div className="text-white">
        <h1>
          <span>توصيل </span>
          <ReactTyped
            strings={["سريع", "مجاني"]}
            typeSpeed={100}
            loop
            backSpeed={50}
          />
          <span> لكل الولايات </span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
