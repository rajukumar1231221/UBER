
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Captianhome = () => {
    const navigate = useNavigate()
    const [token,setToken] = useState(localStorage.getItem('token'))

    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        if(!token ){
            navigate('/captain-login')
        }
    } , [token,navigate])   

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
      if(response.status === 200){
          console.log(response.data)
          setIsLoading(false)
      }
    }).catch((error) => {
        console.log(error)  
        localStorage.removeItem("token")
        navigate('/captain-login')
    })
     

    if(isLoading){
        return <div>Loading...</div>
    }
  return (
   <>
  <div>hello captain</div>
   </>
  )
}

export default Captianhome