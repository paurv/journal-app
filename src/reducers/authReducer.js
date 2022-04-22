import { types } from "../types/types";

// Este es el reducer solo de la autenticacion.

// El state va a estar vacio cuando no haya un usuario autenticado
// {
//     uid: dsafdsafd,
//     name: 'Pau'
// }

export const authReducer = ( state = {}, action ) => {
    // manejaremos las acciones con un switch
    switch ( action.type ) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.diplayName
            }
        case types.logout:
            return{ }
        default:
            return state;
    }
}