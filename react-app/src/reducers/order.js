import { ACTION_TYPES } from "../actions/api";
const initialState = {
    list: []
}


export const order = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.ORDER.OFETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        case ACTION_TYPES.ORDER.OCREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        case ACTION_TYPES.ORDER.OUPDATE:
            return {
                ...state,
                list: state.list.map(x => x.id === action.payload.id ? action.payload : x)
            }

        case ACTION_TYPES.ORDER.ODELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload)
            }
            
        default:
            return state
    }
}