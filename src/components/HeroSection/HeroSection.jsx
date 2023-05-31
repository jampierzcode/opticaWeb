import React from "react";

export const HeroSection = () => {
  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8"
      style={{ background: "#f2f4f3" }}
    >
      <div className="sectionFil flex flex-col md:flex-row items-center gap-8 py-32 sm:py-48 lg:py-20 ">
        <div
          className="text-start md:basis-1/2 sm:basis-full"
          data-aos="fade-right"
        >
          <h1
            style={{ color: "#02a3cd" }}
            className="text-2xl font-bold tracking-tight sm:text-4xl"
          >
            Visión clara y estilo en un solo lugar
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {" "}
            Nuestro equipo de expertos en salud visual está aquí para ofrecerte
            exámenes completos de la vista, asegurando que tus ojos reciban el
            cuidado que merecen. ¡Mejora tu visión y realza tu estilo con
            nosotros!
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              style={{ background: "#cae005", color: "#4f5500" }}
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Visión Total
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Comprar <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="md:basis-1/2 sm:basis-full">
          {/* <img
              src="https://prooptimania.s3.us-east-2.amazonaws.com/web/homeNew/Filtro-tipo-de-rostro.webp"
              alt=""
            /> */}
          <img
            style={{ width: "100%" }}
            src="https://img.freepik.com/foto-gratis/muchacha-bonita-joven-sonriente-que-corrige-vidrios_176420-9485.jpg?w=1480&t=st=1685461389~exp=1685461989~hmac=070bdd1772e449eec9085f8094767331c8ba58b96c51aeb2e69f4c792aa6898d"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
