import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Pildomatch = () => {
  return (
    <aside className=" flex flex-col lg:flex-row h-full w-full bg-white items-center justify-evenly lg:gap-[50px] py-10 lg:py-0">
      <p className="text-[50px] text-[#800294] font-extrabold text-center">
        En asociación con:
      </p>
      <Link href="https://www.pilldomatch.com/farmacias" target="blank">
        <Image
          src="https://res.cloudinary.com/dzppqa6a9/image/upload/v1713395850/cambio_4__edited_1_bbnxtw.webp"
          width={400}
          height={400}
        />
      </Link>
    </aside>
  );
};
