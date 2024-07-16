import { createSlice } from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem("loggedInUser") || null)

const authSlice = createSlice({
    name: "auth",
    initialState:{
        isAuth:localStorageData ? true : false,
        loggedData:localStorageData
    },
    reducers:{
        login:(state,action)=>{
            state.isAuth =true
            state.loggedData=action.payload
            localStorage.setItem("loggedInUser",JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.isAuth =false
            state.loggedData=null
            localStorage.removeItem("loggedInUser")

            
        }
    }

})
export const {login,logout} = authSlice.actions;

export default authSlice.reducer;