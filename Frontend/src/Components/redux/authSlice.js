import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";
import { hideAlert, showAlert } from "./alertSlice";
import { emptyAlertSliceData } from "../utils/EmptyAlertSliceData";

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
      state.user_id = null;
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
  return async (dispatch, getState) => {
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
        dispatch(
          showAlert({ type: "success", message: "Login successfully." })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
        dispatch(authSlice.actions.updateIsLoading({ error: false }));
      })
      .catch(function (error) {
        console.log(error);
        dispatch(authSlice.actions.updateIsLoading({ error: true }));
        dispatch(
          showAlert({
            type: "error",
            message: "Login failed. Please try again.",
          })
        );
        emptyAlertSliceData(dispatch);
      })
      .finally(() => {
        setTimeout(() => {
          if (!getState().authentication.error) {
            window.location.href = "/";
          }
        }, 1000);
      });
  };
}

export function registerUser(formValues) {
  return async (dispatch, getState) => {
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
        dispatch(
          showAlert({
            type: "error",
            message: "Login failed. Please try again.",
          })
        );
        emptyAlertSliceData(dispatch);
        dispatch(authSlice.actions.updateIsLoading({ error: true }));
      })
      .finally(() => {
        if (!getState().authentication.error) {
          window.location.href = "/login";
        }
      });
  };
}

export function logoutUser() {
  return async (dispatch) => {
    window.localStorage.removeItem("user_id");
    dispatch(authSlice.actions.signOut());
  };
}
