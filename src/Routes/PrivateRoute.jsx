import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>

        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;