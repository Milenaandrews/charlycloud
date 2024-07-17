import Encabezado from "../components/Encabezado";
import Formulario from "../components/Formulario";
// import Beneficios from "../components/Beneficios";
import Planes from "../components/Planes";
import Footer from "@/components/Footer";
import  {BeneficiosCaracteristicas} from "@/components/BeneficiosCaracteristicas";
import { FinalCaracteristicas } from "@/components/FinalCaracteristicas";



export default function Home() {
  return (
    <div>
      <Encabezado/>
      <BeneficiosCaracteristicas/>
      <FinalCaracteristicas/> 
      <Planes/>
      <Formulario/>
      <Footer/>
      
      
    </div>
  )
}
