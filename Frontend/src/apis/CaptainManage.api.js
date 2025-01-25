import axios from 'axios'

const captainApi = `${import.meta.env.VITE_BASE_URL}/captains/register`;
const captainLoginApi = `${import.meta.env.VITE_BASE_URL}/captains/login`;

export const captainCall = async (CaptainData) => {
    try {
        const response = await axios.post(captainApi, CaptainData,{
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

 export const captainLoginCall = async (CaptainData) => {
    try {
        const response = await axios.post(captainLoginApi, CaptainData,{
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


