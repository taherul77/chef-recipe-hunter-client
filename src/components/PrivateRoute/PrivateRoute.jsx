/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useContext } from 'react';
import { AuthContext } from '../../pages/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ProgressBar } from  'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return (
          <ProgressBar
          height="80"
          width="mx-auto"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor = '#F4442E'
          barColor = '#51E5FF'
        />
        );
      }
    
      if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
      }
      return children;
};

export default PrivateRoute;