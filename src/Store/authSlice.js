import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice(
    {
        name: "auth",
        initialState: {
            user: {},
            isLoggedIn: false,
        },
        reducers: {
            signup: (state, action) => {
                state.user = action.payload
                const stringifyUser = JSON.stringify(action.payload);
                localStorage.setItem("user", stringifyUser);
            },
            login: (state, action) => {
                 console.log(state.user);
                 console.log(state.isLoggedIn);
                if (state.user.email === action.payload.email && state.user.password === action.payload.password) {
                    state.isLoggedIn = true;
                    const stringifyLoginState = JSON.stringify({ isLoggedIn: true})
                    localStorage.setItem("isLoggesIn", stringifyLoginState);
                }
            },
            StoreData: (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = action.payload.isLoggedIn;
            },
            Logout: (state, action) => {
                state.user = {}
                state.isLoggedIn = false
                localStorage.setItem("user", "");
                localStorage.setItem("isLoggedIn", false)
            }
        }
    })
export const { signup, login, StoreData, Logout } = authSlice.actions;
export default authSlice.reducer;




