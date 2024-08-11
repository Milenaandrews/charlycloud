'use client'
import React, { useReducer } from 'react'
import ContactoReducer from "./ContactoReducer" 
import ContactoContext from './ContactoContext'
import axiosClient from '@/config/axiosClient'


const ContactoProvider = ({children}) => {
    const initialState ={
        contacto:[{
            nombre: "",
            farmacia:"",
            email:""
        }
        ]
    }

    const [state, dispatch] = useReducer(ContactoReducer, initialState)

    const guardarContacto = async(contacto)=>{
        try {
            const contactoGuardado = await axiosClient.post("/contacto", contacto)
            console.log(contactoGuardado)
            
            if(contactoGuardado.data.success){
                dispatch({
                    type:"GUARDARCONTACTO",
                    payload: contactoGuardado.data
                })
               
            } else {
                throw new Error ( guardarContacto.data.msg)
            }
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    return(
        <ContactoContext.Provider 
        value={{ contacto: state.contacto, guardarContacto
        }}>{children}</ContactoContext.Provider>
    )
}

export default ContactoProvider