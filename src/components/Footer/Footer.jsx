import React from "react";
import { Logo } from "../Navbar/Logo";
import navigation from "../ItemRoutes/ItemRoutes";
import { FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const items = navigation;
  return (
    <div
      style={{
        background: "#fff",
        boxShadow: "rgb(236, 236, 236) -9px 3px 11px 0px",
        zIndex: "1000",
        position: "relative",
      }}
      className="footer w-full py-32 px-6 pt-14 lg:px-8"
    >
      <div className="sectionFil flex flex-col md:flex-row gap-8">
        <div className="basis-full md:basis-1/3">
          <Logo />
          <p className="text-start text-whi-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            explicabo rerum voluptatibus vero accusamus magnam cum vel suscipit,
            voluptatum quis illo voluptate nisi ducimus magni blanditiis
            pariatur! Mollitia, debitis soluta!
          </p>
          <div
            className="flex flex-row gap-5 mt-6"
            style={{ color: "rgb(2 164 205)" }}
          >
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="basis-full md:basis-1/6">
          <p className="text-gray mb-4">
            <b>Menu</b>
          </p>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="basis-full md:basis-1/6">
          <p className="text-gray mb-4">
            <b>Menu</b>
          </p>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="basis-full md:basis-1/6">
          <p className="text-gray mb-4">
            <b>Menu</b>
          </p>
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-gray"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
