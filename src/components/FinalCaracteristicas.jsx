import { Button } from "@nextui-org/react"
import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"


export const FinalCaracteristicas = () => {
    return (
        <section className='flex h-screen w-full justify-center items-center text-white bg-charly1]  px-5  '>

            <div className="flex flex-col text-center items-center gap-10">
                <p className="text-[50px]">CHARLY CLOUD ES UN SOFTWARE DE FARMACIA  DISEÑADO POR  FARMACÉUTICOS</p>
                <p className="text-[30px] w-[1200px]">Poseemos años de experiencia tras el mesón . Entendemos tus desafíos y  dolencias Proponemos soluciones que realmente funcionan en una farmacia.</p>
                <p className="text-[30px] md:pb-10">Hablamos con propiedad. Registrate para recibir nuestro e-book “Gestión de Farmacia”</p>
                <Link href={'#form'}>
                    <Button className="bg-charly4 text-charly font-extrabold" size="lg" variant="shadow" >REGISTRATE AQUÍ  <FaArrowCircleRight className='scale-150' /></Button>
                </Link>
            </div>


        </section>
    )
}
