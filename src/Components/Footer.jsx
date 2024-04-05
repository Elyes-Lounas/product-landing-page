import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
function Footer() {
  return (
    <footer className="container my-5 ">
      <div className=" position-relative ">
        <div className=" d-flex justify-content-center gap-4 text-primary bg-white mx-auto w-50">
          <a
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100082874253094"
            target="_blank"
          >
            <FaFacebook size={25} />
          </a>
          <FaInstagram size={25} />
          <FaTiktok size={25} />
        </div>
        <div className="position-absolute w-100 footer-line"></div>
      </div>
      <h4 className="text-center mt-3">
        Copyright &copy; 2024
        <a
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100082874253094"
          className="fs-5 ms-2"
          target="_blank"
        >
          Elyes Lounas
        </a>
      </h4>
    </footer>
  );
}

export default Footer;
