import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

 const UserLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    axios.get('http://localhost:5000/user/logout',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    })
  return (
    <div>
        
    </div>
  )
}
export default UserLogout;