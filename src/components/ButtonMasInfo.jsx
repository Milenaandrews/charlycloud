'use client'
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"

export const ButtonMasInfo = () => {
    return (
        <div>
            <Link href={'#form'}>
                <Button className="bg-charly4 text-charly font-extrabold" size="lg" variant="shadow" >MÁS INFO  <FaArrowCircleRight className='scale-150' /></Button>
            </Link>
        </div>
    )
}
