import {configureStore} from '@reduxjs/toolkit'
import userSlice from './user.slice';


const store = configureStore({
    reducer:{
        Users:userSlice
    }
});

export default store;