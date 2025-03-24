import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
const ProtectedRoute = (props) => {
  const jwt = Cookies.get("JWTTOKEN");
  if (jwt === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};
export default ProtectedRoute;
