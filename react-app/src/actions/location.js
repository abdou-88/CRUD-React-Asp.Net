import { ACTION_TYPES } from "./api";
import api from "./api";

export const fetchAll = () => (dispatch) => {
  api
    .client()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CLIENT.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
