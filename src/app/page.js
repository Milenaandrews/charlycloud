import Encabezado from "../components/Encabezado";
import Formulario from "../components/Formulario";
// import Beneficios from "../components/Beneficios";
import Planes from "../components/Planes";
import Footer from "@/components/Footer";
import { BeneficiosCaracteristicas } from "@/components/BeneficiosCaracteristicas";


export default function Home() {
  return (
    <div>
      <Encabezado/>
      <BeneficiosCaracteristicas/>     
      <Planes/>
      <Formulario/>
      <Footer/>
      
      
    </div>
  )
}
