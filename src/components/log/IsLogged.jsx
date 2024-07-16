import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function isLogged({children}) {
    const isAuth = useSelector(state=>state.authSlice.isAuth)

    if(!isAuth){
        return<Navigate to={"/login"}/>
        
    }
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}


