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
        <div className="h-[500px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]  rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3 ">
          <h1 className="text-center text-white font-bold text-[20px] pb-3">
            Básico
          </h1>
          <ul className="">
            <li className="">
              <TiTick className="text-charly1" /> Creación y eliminación de
              productos
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Eliminación de productos
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Actualización (editar
              productos)
            </li>
            <li>
              <TiTick className="text-charly1" /> Importación y exportación de
              Inventario
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Exportación de Inventario
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Listado de Precios
            </li>
            <li>
              <TiTick className="text-charly1" /> Bioequivalente
            </li>
            <li>
              <TiTick className="text-charly1" /> Descripción del Principio
              Activo
            </li>
            <li>
              <TiTick className="text-charly1" /> Creación y eliminación de Caja
              Registradora
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Eliminación de Caja
              Registradora
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Aplicación de descuentos
            </li>
            <li>
              <TiTick className="text-charly1" /> Devolución del producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Importación de productos
              (offline)
            </li>
            <li>
              <TiTick className="text-charly1" /> Información de la venta total
            </li>
            <li>
              <TiTick className="text-charly1" /> Ventas
            </li>
          </ul>
        </div>
        {/* //? TARJETA BASICO PLUS// */}
        <div className="h-[500px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]  rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3 ">
          <h1 className="text-center text-white font-bold text-[20px] pb-3">
            Básico Plus
          </h1>
          <ul>
            <li className="">
              <TiTick className="text-charly1" /> Todós los módulos del plan
              básico
            </li>
            <li>
              <TiTick className="text-charly1" /> Petitorio Mínimo
            </li>
            <li>
              <TiTick className="text-charly1" /> Convenio CENABAST (comisión %)
              Inventario
            </li>
            <li>
              <TiTick className="text-charly1" /> Fecha de recepción del
              producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Fecha de ingreso del producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Impuesto Adicional 1
            </li>
            <li>
              <TiTick className="text-charly1" /> Impuesto Adicional 2 Activo
            </li>
            <li>
              <TiTick className="text-charly1" /> Creación de Caja Registradora
              Registradora
            </li>
            <li>
              <TiTick className="text-charly1" />
              Búsqueda de Clientes por RUT
            </li>
            <li>
              <TiTick className="text-charly1" /> Promociones por Categorías
            </li>
            <li>
              <TiTick className="text-charly1" /> RUT Clientes
            </li>
          </ul>
        </div>
        <div className="h-[500px] w-[300px] bg-[rgba(8,61,95,0.9)] hover:bg-[#083d5f]   rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl p-3 ">
          <h1 className="text-center text-white font-bold text-[20px] pb-3">
            Full
          </h1>
          <ul>
            <li className="">
              <TiTick className="text-charly1" /> Creación y eliminación de
              productos
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Eliminación de productos
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Actualización (editar
              productos)
            </li>
            <li>
              <TiTick className="text-charly1" /> Importación y exportación de
              Inventario
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Exportación de Inventario
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Listado de Precios
            </li>
            <li>
              <TiTick className="text-charly1" /> Bioequivalente
            </li>
            <li>
              <TiTick className="text-charly1" /> Descripción del Principio
              Activo
            </li>
            <li>
              <TiTick className="text-charly1" /> Creación y eliminación de Caja
              Registradora
            </li>
            {/* <li>
              <TiTick className="text-charly1" /> Eliminación de Caja
              Registradora
            </li> */}
            <li>
              <TiTick className="text-charly1" /> Aplicación de descuentos
            </li>
            <li>
              <TiTick className="text-charly1" /> Devolución del producto
            </li>
            <li>
              <TiTick className="text-charly1" /> Importación de productos
              (offline)
            </li>
            <li>
              <TiTick className="text-charly1" /> Información de la venta total
            </li>
            <li>
              <TiTick className="text-charly1" /> Ventas
            </li>
          </ul>
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
