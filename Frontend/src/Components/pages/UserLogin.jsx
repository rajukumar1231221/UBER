import axios from "axios";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { UserDataContext } from "../../context/UserContext";
const UserLogin = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  // const [userData,setUserData]= useState({});

  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

 const submitHandler = async(e)=>{
  e.preventDefault();
 const UserData={
    email:email,
    password:password
  };

  const response = await axios.post('http://localhost:5000/users/login',UserData)

  if(response.status === 200){
  const data = response.data
  setUser(data.user)
  localStorage.setItem('token',data.token)
  navigate('/home')
}
  // console.log(userData);
  setEmail('')
  setPassword('')



}
  return (
    <>
     <div className="p-7 h-screen flex flex-col justify-between">
   <div>
   <img className="w-20 bg-transparent ml-1 mt-3 mb-4" src="https://th.bing.com/th/id/R.67cf0bb07efc4b9c50e21a1db47e8a20?rik=IvByoJBalTGuBg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG19.png&ehk=m98MZAddxW7I7h0lBtB3aSHZdeeVEtp1w5TA6ctv71w%3d&risl=&pid=ImgRaw&r=0" alt="" />

<form action="" onSubmit={(e)=>{submitHandler(e)}}>
<h3 className="text-lg mb-2 font-medium">What&apos;s your email</h3>

<input type="email" name="email" value={email} onChange={(e)=>{
  setEmail(e.target.value)
}}
required id="" className="bg-[#eeeeee] mb-7 outline-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
placeholder="Enter Your Email"/>

<h3 className="text-lg mb-2 font-medium">Enter Password</h3>

<input type="password" name="password" value={password} onChange={(e)=>{
  setPassword(e.target.value)
}}
required placeholder="Enter Your Password"
 id=""  className="bg-[#eeeeee] mb-7 rounded px-4 outline-1 py-2 border w-full text-lg placeholder:text-base" />

<button className="bg-[#111] text-white 
font-semibold mb-2 rounded px-4 outline-none py-2
 border w-full text-lg placeholder:text-base"
>Login</button>
<p className="text-center">New here?<Link to={'/signup'}
 className="text-blue-400"> Create new Account</Link></p>
</form>
   </div>
   <div>
    <Link to={'/captain-login'} className="bg-[#10b461] flex items-center justify-center  text-white
     font-semibold mb-5
     rounded px-4 outline-none py-2 border w-full text-lg
      placeholder:text-base">Sign up as captain</Link>
   </div>
     </div>
    </>
  )
}

export default UserLogin