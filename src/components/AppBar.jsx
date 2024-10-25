import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import Image from "next/image";

const AppBar = () => {
  const links = [
    {
      nombre: "Planes",
      href: "#planes",
    },
    {
      nombre: "Contacto",
      href: "#form",
    },
  ];
  return (
    <Navbar className="bg-gray-200/80 flex h-[85px]" justify="start">
      {/* Navbar XS */}
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Image
            alt="logo"
            src="https://res.cloudinary.com/dzppqa6a9/image/upload/v1709075705/logocharlysinfondo_omzz7l.png"
            width={120}
            height={300}
          />
          <Link href="/">
            <p className="font-bold text-charly1 text-[15px]">
              Charly Cloud &#174;
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className="pt-[30px]">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-charly1" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>

      {/* Navbar XL */}

      <NavbarContent className="hidden sm:flex  gap-5">
        <NavbarBrand>
          <NavbarItem>
            <Image
              alt="logo"
              src="https://res.cloudinary.com/dzppqa6a9/image/upload/v1709075705/logocharlysinfondo_omzz7l.png"
              width={200}
              height={400}
            />
          </NavbarItem>

          <Link href="/">
            <p className="font-bold text-charly1 text-[25px]">
              Charly Cloud &#174;
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  ml-[300px]" justify="end">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link
              className="text-charly1 font-bold text-[20px]"
              href={link.href}
            >
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default AppBar;
