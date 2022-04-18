import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,                  //user is not authenticated initially
    phone: "",
    data: ""
  },
  reducers: {
    setlogin: (state, action) => {   //state: initial state, action: 
      state.isAuth = true;           // when user authenticated
      state.phone = action.payload     //payload with action that is phone number
    },
    setLogout: (state, action) => {
      state.isAuth = false;
      state.phone = "";
      state.data = ""
    },
    setData: (state, action) => {   //state: initial state, action: 
      state.data = action.payload
    }
  }
})

console.log('auth slice', authSlice)