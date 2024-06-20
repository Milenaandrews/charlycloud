import Link from "next/link"
import { FaArrowCircleRight } from "react-icons/fa"

export const ButtonMasInfo = () => {
    return (
        <div>
            <Link href={'#form'}>
                <button className="btn btn-info btn-lg text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
            </Link>
        </div>
    )
}
