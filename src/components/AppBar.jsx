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
    <Navbar className="bg-gray-200/80 flex h-[70px]" justify="start">
      {/* Navbar XS */}
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 " justify="center">
        <NavbarBrand>
          <Image
            alt="logo"
            src="https://res.cloudinary.com/dyiu99z2a/image/upload/v1730506600/Dise%C3%B1o_sin_t%C3%ADtulo_dx1esw.png"
            width={100}
            height={100}
          />
          <Link href="/">
            <p className="font-bold text-charly1 text-[15px] ml-1">
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
              src="https://res.cloudinary.com/dyiu99z2a/image/upload/v1730506600/Dise%C3%B1o_sin_t%C3%ADtulo_dx1esw.png"
              width={120}
              height={100}
              alt="logo"
            />
          </NavbarItem>

          <Link href="/">
            <p className="font-bold text-charly1 text-[25px] ml-3">
              Charly Cloud <span className="font-normal">&#174;</span>
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
