import Encabezado from "../components/Encabezado";
import Formulario from "../components/Formulario";
// import Beneficios from "../components/Beneficios";
import Planes from "../components/Planes";
import Footer from "@/components/Footer";
import  {BeneficiosCaracteristicas} from "@/components/BeneficiosCaracteristicas";
import  {BeneficiosCaracteristicas1} from "@/components/BeneficiosCaracteristicas1";
import  {BeneficiosCaracteristicas2} from "@/components/BeneficiosCaracteristicas2";
import  {BeneficiosCaracteristicas3} from "@/components/BeneficiosCaracteristicas3";
import { FinalCaracteristicas } from "@/components/FinalCaracteristicas";
import { Pildomatch } from "@/components/Pildomatch";
import { EvitaMultas } from "@/components/EvitaMultas";
import { InicioCaracterisiticas } from "@/components/InicioCaracteristicas";



export default function Home() {
  return (
    <div>
      <Encabezado/>.
      <InicioCaracterisiticas/>
      <BeneficiosCaracteristicas1/>
      <BeneficiosCaracteristicas2/>
      <BeneficiosCaracteristicas3/>
      <EvitaMultas/>
      <FinalCaracteristicas/> 
      <Planes/>
      <Formulario/>
      <Pildomatch/>
      <Footer/>
      
      
    </div>
  )
}
