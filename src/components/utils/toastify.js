import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


export const errorAlert = () => {
    toast.error('Error en los datos ingresados', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    
        });
};

export const successAlert = () =>{
    toast.success('El E-book fue enviado con éxito a tu e-mail', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}