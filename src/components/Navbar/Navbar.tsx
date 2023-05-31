"use client";
import React, { useState } from "react";

import { FaStar, FaBars } from "react-icons/fa";

import { Logo } from "./Logo";
import navigation from "../ItemRoutes/ItemRoutes";
export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-white fixed inset-x-0 top-0 z-50 p-2 lg:px-8">
      <div
        className="sectionFil flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#">
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
