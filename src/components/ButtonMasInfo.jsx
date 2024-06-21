import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"

export const ButtonMasInfo = () => {
    return (
        <div>
            <Link href={'#form'}>
                <button className="btn  btn-secondary btn-lg text-primary text-[20px] rounded-[40px]">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
            </Link>
        </div>
    )
}
