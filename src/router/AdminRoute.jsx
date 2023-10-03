import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../customhooks/useAuth";
import useAdmin from "../customhooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  const {isAdmin,isAdminLoading} = useAdmin();

  if (loader || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-solid"></div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
