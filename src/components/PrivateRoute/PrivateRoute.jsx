/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useContext } from 'react';
import { AuthContext } from '../../pages/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { MagnifyingGlass } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return (
          <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
        );
      }
    
      if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
      }
      return children;
};

export default PrivateRoute;