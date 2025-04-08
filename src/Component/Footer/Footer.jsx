import React from "react";
import logo from "../../assets/تنزيل (5).png";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center md:gap-x-15 gap-x-7 px-20 pt-20 pb-15">
        <a href="https://github.com/11ziad">
          <i className="text-2xl md:text-4xl fa-brands fa-github"></i>
        </a>
        <a href="https://www.facebook.com/share/15EUeFquJy/">
          <i className="text-2xl md:text-4xl fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/ziad-mostafa-859256291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <i className="text-2xl md:text-4xl fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="flex flex-col justify-center pb-15 items-center">
        <img src={logo} className=" w-[200px]" alt="" />
        <h4 className=" mt-2 text-amber-500">ziad.n.mostafa@gmail.com</h4>
      </div>
    </>
  );
}
