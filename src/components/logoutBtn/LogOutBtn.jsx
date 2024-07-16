import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../pages/rtk/Slice/authSlice'
import { Button } from 'bootstrap'

export default function LogOutBtn() {
    const dispatch = useDispatch()

  return (
    <>
    <button className='btn btn-primary' onClick={()=>{dispatch(logout())}}>LogOut</button>  
    </>
  )
}
