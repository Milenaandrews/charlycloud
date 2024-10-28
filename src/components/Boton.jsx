"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import classNames from "classnames";

export const Boton = ({ children, className, iconClass }) => {
  return (
    <div>
      <Link href={"#form"}>
        <Button
          className={classNames(
            "bg-charly4 text-charly1 font-extrabold text-[20px] h-[80px] w-[250px] gap-4 ",
            className // Combina la clase recibida con las clases existentes
          )}
        >
          {children}{" "}
          <FaArrowCircleRight className={classNames("scale-150", iconClass)} />
        </Button>
      </Link>
    </div>
  );
};
