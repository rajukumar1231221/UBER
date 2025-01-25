import axios from 'axios'

const userApi = `${import.meta.env.VITE_BASE_URL}/users/register`;
const userLoginApi = `${import.meta.env.VITE_BASE_URL}/users/login`;


export const userCall = async (newUser) => {
    try {
        const response = await axios.post(userApi, newUser,{
            headers: {
              'Content-Type': 'application/json',
            },
          })

        return response.data
    } catch (e) {
        if (e.response
            // .data.message === "Email already exists"
        ) {
            console.log(`Error: ${e.response.data.message}`)
           

        }
        throw new Error(e.message);
    }
}

export const userLoginCall = async (newUser) => {
    try {
        const response = await axios.post(userLoginApi, newUser,{
            headers: {
              'Content-Type': 'application/json',
            },
          })

        return response.data
    } catch (e) {
        if (e.response
            // .data.message === "Email already exists"
        ) {
            console.log(`Error: ${e.response.data.message}`)
           

        }
        throw new Error(e.message);
    }
}


