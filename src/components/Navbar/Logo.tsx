"use client";
import Image from "next/image";
import React from "react";

import logo from "../../assets/logohilmora.png";
// import { useRouter } from "next/router";
export const Logo = () => {
  // const router = useRouter();
  return (
    <Image className="h-16 w-auto" width={200} height={200} src={logo} alt="" />
  );
};
