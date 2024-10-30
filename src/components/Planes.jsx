"use client";
import { TiTick } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

const Planes = () => {
  return (
    <section
      id="planes"
      className="h-full w-full flex flex-col py-10  bg-charly1 bg-cover text-white"
    >
      <h1 className=" font-bold text-[50px] text-center pb-16 px-5 ">
        {" "}
        ELIGE EL PLAN QUE MÁS TE ACOMODE{" "}
      </h1>

      <div className="flex flex-col lg:flex-row wrap gap-[100px] justify-center items-center ">
        <div className="h-[450px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]  rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3 ">
          <h1 className="text-center text-white font-bold text-[30px] pb-4">
            Básico
          </h1>
          <div className="flex items-center ">
            <ul className="text-[16px]">
              <li className="">
                <TiTick className="text-charly1 " /> Creación y eliminación de
                productos
              </li>
              <li>
                <TiTick className="text-charly1" /> Actualización de productos
              </li>
              <li>
                <TiTick className="text-charly1" /> Importación y exportación de
                Inventario
              </li>
              <li>
                <TiTick className="text-charly1" /> Listado de Precios ISP
              </li>
              <li>
                <TiTick className="text-charly1" /> Filtro de Bioequivalentes
              </li>
              <li>
                <TiTick className="text-charly1" /> Descripción de Principio
                Activo
              </li>

              <li>
                <TiTick className="text-charly1" /> Creación y Eliminación de
                Cajas
              </li>

              <li>
                <TiTick className="text-charly1" /> Aplicación de descuentos
              </li>
              <li>
                <TiTick className="text-charly1" /> Devolución de productos
              </li>
              <li>
                <TiTick className="text-charly1" /> Importación de ventas
                offline
              </li>
              <li>
                <TiTick className="text-charly1" /> Información de la venta
                total
              </li>
              <li>
                <TiTick className="text-charly1" /> Estadísticas de Ventas
              </li>
            </ul>
          </div>
        </div>
        {/* //? TARJETA BASICO PLUS// */}
        <div className="plan-basico-plus h-[450px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]  rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3  ">
          <h1 className="text-center text-white font-bold text-[30px] pb-3">
            Básico Plus
          </h1>
          <h2 className="text-center text-[15px] pb-3">
            Junto a las funciones del Plan Básico, activa aquellas que potencien
            tu farmacia.
          </h2>
          <h2 className="text-center text-[17px] pb-3 font-bold">
            Arma el plan a tu medida.
          </h2>
          <ul>
            <li>
              <TiTick className="text-charly1" /> Filtro Petitorio Mínimo
            </li>
            <li>
              <TiTick className="text-charly1" /> % Convenio CENABAST
            </li>
            <li>
              <TiTick className="text-charly1" /> Fecha de recepción del
              producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Fecha de ingreso del producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Activación Impuestos
              Adicionales
            </li>
            <li>
              <TiTick className="text-charly1" />
              Búsqueda de Clientes por RUT
            </li>
            <li>
              <TiTick className="text-charly1" /> Promociones por Categorías
            </li>
            <li>
              <TiTick className="text-charly1" /> Estadísticas de Clientes
            </li>
          </ul>
        </div>
        <div className="h-[450px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]   rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3 ">
          <h1 className="text-center text-white font-bold text-[30px] ">
            Full
          </h1>
          <div className="flex h-[350px] items-center justify-center">
            <h2 className="text-center text-[25px]" id="centrar">
              Contempla todas las funciones de los planes Básico y Básico plus.
              ¡Lleva a tu farmacia al siguiente Nivel!
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center pt-14 font-semibold text-center gap-5 px-3">
        <h2 className=" text-[50px]">Beneficios adicionales</h2>
        <p className=" text-[30px]">
          Integras un programa de beneficios exclusivo para clientes
        </p>
        <p className=" text-[30px]">
          Acceso a talleres gratuitos en negocio y medioambientales del rubro
          Farmacéutico
        </p>
      </div>
    </section>
  );
};

export default Planes;
