import { authSlice } from "./authSlice";

const { actions: slice } = authSlice;


// login action 
export const LoginAction = (phone) => (dispatch) => {
  dispatch(slice.setlogin(phone))
}

// logout action 
export const LogoutAction = () => (dispatch) => {
  dispatch(slice.setLogout())
}

// get data 
export const getDataAction = () => (dispatch) => {

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('Something went wrong!')
      }
    })
    .then(data => dispatch(slice.setData(data)))
    .catch(err => console.log(err))
}