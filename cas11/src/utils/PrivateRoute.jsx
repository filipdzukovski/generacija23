import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

export const PrivateRoute = ({redirectPath='/login',children}) =>{
    const token = useSelector(state=>state.authReducer.token || localStorage.getItem("token"))
    console.log(token);
    if(!token){
        return <Navigate to={redirectPath}/>
    }
    return children ? children : <Outlet/>
}


PrivateRoute.propTypes={
    redirectPath: PropTypes.string,
    children: PropTypes.element
}