/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Alert = ({ type, message }) => {
  useEffect(() => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }, [type, message]);

  return null;
};

export default Alert;
