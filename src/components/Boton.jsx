"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export const Boton = ({ children }) => {
  return (
    <div>
      <Link href={"#form"}>
        <Button
          className="bg-charly4 text-charly1 font-extrabold text-[20px] h-[80px] w-[250px]"
          variant="shadow"
        >
          {children} <FaArrowCircleRight className="scale-150" />
        </Button>
      </Link>
    </div>
  );
};
