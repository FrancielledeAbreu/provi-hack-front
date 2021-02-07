import api from "../../services";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const login = (data) => {
  return { type: LOGIN, data };
};

export const isValidUser = (values) => (dispatch) => {
  api
    .get(
      `login?filter[email]=${values.email}&filter[password]=${values.password}`
    )
    .then(({ data }) => {
      dispatch(login(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
