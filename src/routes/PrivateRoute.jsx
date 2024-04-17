import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import { Hourglass } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
            />
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes ={
    children:PropTypes.node
}

export default PrivateRoute;