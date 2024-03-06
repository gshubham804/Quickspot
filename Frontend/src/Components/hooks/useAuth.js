import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { isLoggedIn } = useSelector((state) => state?.authentication);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    navigate("/login");
  }

  return isLoggedIn;
};

export default useAuth;
