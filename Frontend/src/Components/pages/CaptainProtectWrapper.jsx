
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../../context/CaptainContext';
import axios from 'axios';
const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)  
consst { isloading, setIsLoading } = useState(true)
    useEffect(() => {


        if (!token) {
            navigate('/captain-login')
        }
    }, [token])

    axios.get('http://localhost:5000/captains/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            setCaptain(response.data)
            setIsLoading(false)
        }
    }).catch((error) => {
        console.log(err);
        navigate('/captain-login')
    })

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper