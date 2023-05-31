import React from "react";

const CardProducts = () => {
  const productos = [
    {
      id: 1,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597626309_1_f536c946-eedf-4653-8fee-b12058593179_720x720.png?v=1667908084",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 2,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/4044709508432_1_e94c18bc-2757-4019-b68e-acc57adc4580_720x720.png?v=1663819478",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 3,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597519045_1_720x720.jpg?v=1667908996",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 4,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597519045_1_720x720.jpg?v=1667908996",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 5,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597519045_1_720x720.jpg?v=1667908996",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 6,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597519045_1_720x720.jpg?v=1667908996",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 7,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/8056597141284_1_720x720.jpg?v=1667909749",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
    {
      id: 8,
      nombre: "lentes 1",
      imgUrl:
        "https://cdn.shopify.com/s/files/1/0050/9893/0225/products/805289742463_1_720x720.png?v=1667909463",
      categoria: "Lentes de Sol",
      marca: "Rayban",
      precio: 1200,
    },
  ];
  return (
    <div className="px-6 pt-14 lg:px-8">
      <div className="title-site">
        <div className="sectionFil flex flex-col md:flex-row items-center gap-8">
          <div className="bg-white">
            <div className="mx-auto py-16">
              <h1
                style={{ color: "#02a3cd" }}
                className="text-2xl text-start font-bold tracking-tight sm:text-4xl"
              >
                Ofertas en Lentes
              </h1>
              <p className="text-start">
                Todos nuestros examenes son completamente <b>Gratis</b>
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productos.map((pro, index) => {
                  return (
                    <div className="group relative" key={index}>
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={pro.imgUrl}
                          alt="Front of men&#039;s Basic Tee in black."
                          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {pro.nombre}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {pro.categoria}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          ${pro.precio}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
