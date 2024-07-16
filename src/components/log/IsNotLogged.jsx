import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function isNotLogged({children}) {
    const isAuth = useSelector(state=>state.authSlice.isAuth)

    if(isAuth) return<Navigate to={"/"}/>
        
    
  return (
    <div>
      {children}
    </div>
  )
}

