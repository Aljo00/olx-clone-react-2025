import React from "react";
import footerLinks from "../assets/FooterLinks";
import footerLogos from "../assets/FooterLogos";

const Footer = () => {
  return (
    <div>
      <div
        className="flex justify-between px-40 py-4 mt-10"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        {footerLinks.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h1 className="font-medium">{item.title}</h1>
            <ul className="flex flex-col gap-1 text-gray-500 text-xs font-medium">
              {item.links.map((link, id) => (
                <li key={id}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="px-40 pt-10 pb-4" style={{ backgroundColor: "#004896" }}>
        <div className=" flex w-full items-center">
          <div className="mr-10">
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
              className="h-28"
              alt=""
            />
          </div>

          <div className="h-28 border-l border-white mx-5"></div>

          <div className="flex ml-10 w-full justify-between items-center">
            {footerLogos.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-16" />
            ))}
          </div>
        </div>

        <div className="flex justify-between text-white font-medium text-xs">
          <p>Help - Sitemap</p>
          <p>All rights reserved © 2006-2025 OLX</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
