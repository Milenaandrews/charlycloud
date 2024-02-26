import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";



const AppBar = () => {
    
  const links = [
    {
      nombre: "Caracteristicas",
      href: "/"
    },
    {
      nombre: "Proyectos",
      href: "/"
    },
  ]
  return (
    <Navbar className="bg-slate-700/80">
      {/* Navbar XS */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center" >
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-gray-950">Charly Cloud</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-white" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}

      </NavbarMenu>

      {/* Navbar XL */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-cyan-400">Charly Cloud</p>
          </Link>
        </NavbarBrand>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-white" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      </Navbar>
  )
}

export default AppBar