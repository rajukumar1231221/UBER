
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate()
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [isLoading, setIsLoading] = useState(true)    ;
    useEffect(()=>{
        if(!token ){
            navigate('/login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
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
            navigate('/login')
        })
    } , [token,navigate])   

  
  return (
   <>
  <div>hello</div>
   </>
  )
}

export default Home