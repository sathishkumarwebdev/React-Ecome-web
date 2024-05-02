import { Navigate } from "react-router-dom";
export function ProtectedRoute({ children }) {
  const accesstoken = localStorage.getItem("access-token");
  const localStoragData = accesstoken && JSON.parse(accesstoken);

  if (localStoragData?.access_token) {
    return children;
  }

  return <Navigate to="/Products" />;
}
