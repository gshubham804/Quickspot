import { hideAlert } from "../redux/alertSlice";

export const emptyAlertSliceData =(dispatch)=>{
    setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
}