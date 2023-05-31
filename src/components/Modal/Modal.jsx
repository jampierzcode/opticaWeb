"use client";
import React from "react";
import { FiX } from "react-icons/fi";
const Modal = ({ visible, onclose }) => {
  const handleClose = (target) => {
    if (target.id === "container") {
      onclose();
    }
  };
  if (!visible) {
    return null;
  }
  return (
    <>
      <div
        id="container"
        onClick={(e) => handleClose(e.target)}
        style={{ zIndex: 5000 }}
        className="fixed flex inset-0 bg-black bg-opacity-30 justify-center items-center backdrop-blur-sm"
      >
        <div className="bg-white p-8 pr-10 rounded w-1/3 relative">
          <div className="absolute top-0 right-0 ">
            <button
              className="flex items-center justify-center p-2 border w-7"
              onClick={onclose}
            >
              <FiX />
            </button>
          </div>
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Solicita tu examen en
          </h1>
          <p className="text-center text-gray-700 mb-5">3 Simples pasos</p>

          {/* cards */}
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span
                      className="w-8 h-8 rounded-full text-white bg-black inline-flex items-center justify-center"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil
                      image"
                    >
                      1
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white mb-3">
                      Informacion personal
                    </p>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="Nombres Completos"
                      />
                      <input
                        type="email"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="Correo Electrónico"
                      />
                      <input
                        type="text"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="Numero de Celular"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span
                      className="w-8 h-8 rounded-full text-white bg-black inline-flex items-center justify-center"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil
                      image"
                    >
                      2
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-medium text-gray-900 truncate dark:text-white mb-3">
                      Detalla tu examen
                    </p>
                    <div className="flex flex-col">
                      <textarea
                        type="text"
                        className="border border-gray-700 p-2 rounded mb-5"
                        placeholder="Tengo problemas para ver ..."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span
                      className="w-8 h-8 rounded-full text-white bg-black inline-flex items-center justify-center"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil
                      image"
                    >
                      3
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* <p className="text-xl font-medium text-gray-900 truncate dark:text-white mb-3">
                      Enviar Solicitud
                    </p> */}
                    <button className="w-full px-5 py-2 btnFil rounded">
                      Realizar solicitud
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* end cards */}
          <div className="text-center flex gap-2"></div>
        </div>
      </div>
    </>
  );
};
export default Modal;
