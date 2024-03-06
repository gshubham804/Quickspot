import { createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../utils/axios";

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
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

export default authSlice.reducer;

// middleware functions

export function LoginUser(formValues) {
  // formValues >> {email,password}
  console.log(formValues);
  // return async (dispatch) => {
  //   await axiosInstance
  //     .post(
  //       "/auth/login",
  //       {
  //         ...formValues,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //       dispatch(
  //         authSlice.actions.logIn({
  //           isLoggedIn: true,
  //           token: response?.data?.token,
  //         })
  //       );
  //       window.localStorage.setItem("user_id", response.data.user_id);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
}

// export function registerUser(formValues) {
//   return async (dispatch, getState) => {
//     dispatch(authSlice.actions.updateIsLoading({ error: false }));
//     await axiosInstance
//       .post(
//         "/auth/register",
//         {
//           ...formValues,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response);
//         dispatch(
//           authSlice.actions.updateRegisterEmail({ email: formValues.email })
//         );
//         dispatch(authSlice.actions.updateIsLoading({ error: false }));
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(authSlice.actions.updateIsLoading({ error: true }));
//       })
//       .finally(() => {
//         if (!getState().auth.error) {
//           window.location.href = "/";
//         }
//       });
//   };
// }
