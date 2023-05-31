import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Modal from "../Modal/Modal";
export const InfoReserva = () => {
  const [showModal, setShowModal] = useState(false);
  const onclose = () => {
    setShowModal(false);
  };
  return (
    <div className="px-6 pt-14 lg:px-8">
      <div className="sectionFil">
        <h1
          style={{ color: "#02a3cd" }}
          className="text-2xl text-center font-bold tracking-tight sm:text-4xl"
        >
          Solicita tu examen
        </h1>
        <p className="text-center text-xl">
          En <b>3</b> simples pasos
        </p>
        <div className="flex flex-col md:flex-row justify-content-between gap-5 mt-6 ">
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-lg leading-8 text-gray-600">
              1. Ingresa tu informacion personal
            </h5>
          </div>
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-lg leading-8 text-gray-600">
              2. Proporciona los detalles del examen
            </h5>
          </div>
          <div
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-lg leading-8 text-gray-600">
              3. Confirma y envia tu solicitud
            </h5>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-center gap-5"
        style={{ maxWidth: "1181px", margin: "0 auto" }}
      >
        <Modal visible={showModal} onclose={onclose} />
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 mt-6 btnFil rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          A por ello <FiArrowUpRight />
        </button>
      </div>
    </div>
  );
};
