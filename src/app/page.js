import Encabezado from "../components/Encabezado";
import Formulario from "../components/Formulario";
import Beneficios from "../components/Beneficios";
import Caracteristicas from "../components/Caracteristicas";
import Planes from "../components/Planes";
import  ByC  from "@/components/ByC";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Encabezado/>
      <ByC/>     
      <Planes/>
      <Formulario/>
      <Footer/>
      
      
    </div>
  )
}
