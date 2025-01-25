import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../../redux/user.slice';

const UserLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await dispatch(logoutUserThunk()).unwrap(); 
                localStorage.removeItem('token'); 
                navigate('/login'); 
            } catch (error) {
                console.log("Logout failed:", error);
            }
        };

        handleLogout();
    }, [dispatch, navigate]);

    return <div>Logging out...</div>;
};

export default UserLogout;
