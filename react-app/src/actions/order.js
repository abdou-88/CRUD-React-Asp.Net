import api from "./api";

import { ACTION_TYPES } from "./api";


export const fetchAll = () => dispatch => {
    api.order().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.ORDER.OFETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    
    api.order().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.ORDER.OCREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    
    api.order().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.ORDER.OUPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.order().delete(id)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.ORDER.ODELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}