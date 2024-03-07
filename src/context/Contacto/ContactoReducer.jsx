'use client'

const contactoReducer = (state, action) => { 
    const {type, payload} = action;
    
    switch (type) {
        case "GUARDARCONTACTO":
            localStorage.setItem("id",payload)
            return{
                ...state,
                contacto: payload
                
            }
            
            ;
    }

}

export default contactoReducer;

