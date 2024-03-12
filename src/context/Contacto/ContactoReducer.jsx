'use client'

const contactoReducer = (state, action) => { 
    const {type, payload} = action;
    
    switch (type) {
        case "GUARDARCONTACTO":
            return{
                ...state,
                contacto: payload
                
            }
            
            ;
    }

}

export default contactoReducer;

