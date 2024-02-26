import Encabezado from "../../components/Encabezado";
import Formulario from "../../components/Formulario";
import Beneficios from "../../components/Beneficios";
import Caracteristicas from "../../components/Caracteristicas";
import Planes from "../../components/Planes";


export default function Home() {
  return (
    <div>
      <h1 className="text-slate-950">hola soy el home</h1>
      <Encabezado/>
      <Caracteristicas/>
      <Beneficios/>
      <Planes/>
      <Formulario/>
      
    </div>
  )
}
