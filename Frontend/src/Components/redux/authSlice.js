import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  user: null,
  user_id: null,
  email: "",
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
    updateIsLoading(state, action) {
      state.error = action.payload.error;
    },
  },
});

export default authSlice.reducer;

// middleware functions

export function LoginUser(formValues) {
  // formValues >> {email,password}
  return async (dispatch) => {
    await axiosInstance
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        dispatch(
          authSlice.actions.logIn({
            isLoggedIn: true,
            token: response?.data?.token,
            user_id: response?.data?.user_id,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(authSlice.actions.updateIsLoading({ error: true }));
      });
  };
}

export function registerUser(formValues) {
  return async (dispatch) => {
    dispatch(authSlice.actions.updateIsLoading({ error: false }));
    await axiosInstance
      .post(
        "/auth/register",
        {
          fullName: formValues?.username,
          email: formValues?.email,
          password: formValues?.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(
          authSlice.actions.updateRegisterEmail({ email: formValues.email })
        );
        dispatch(authSlice.actions.updateIsLoading({ error: false }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authSlice.actions.updateIsLoading({ error: true }));
      });
  };
}
