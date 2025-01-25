import { configureStore } from '@reduxjs/toolkit';

import userSclice from './user.slice';
import captainSlice from './captain.slice';




const store = configureStore({
    reducer: {
        user: userSclice,
      captain: captainSlice,
    
    }
});

export default store;


