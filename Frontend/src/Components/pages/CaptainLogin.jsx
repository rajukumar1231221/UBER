import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { captianLoginThunk } from "../../redux/captain.slice";
import { useDispatch, useSelector } from "react-redux";
const CaptainLogin = () => {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');

  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const result = useSelector((state)=>state.captain.captainData); 
  console.log(result);
 const submitHandler = async(e)=>{
  e.preventDefault();
  
      e.preventDefault();
      if(email && password){
        const CaptainLoginData = {
          email:email,
          password:password,
         }
        
        try {
         const response = await dispatch(captianLoginThunk(CaptainLoginData)).unwrap()
          console.log("logged in successfully");
          
          localStorage.setItem('token',response.token)
          navigate("/captain-home")
          
        } catch (e) {
          console.log(e);
          
        }
  
      }else{
        alert("all field are required")
      } 
      
      setEmail('')
      setPassword('')
  
      
  
  
    }
  return (
    <>
     <div className="p-7 h-screen flex flex-col justify-between">
   <div>
   <img className="w-28 bg-transparent   mb-3"
   style={{marginLeft:'-10px'}} src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />

<form method="POST" onSubmit={(e)=>{submitHandler(e)}} encType="multipart/form-data" action="" >
<h3 className="text-lg mb-2 font-medium">What&apos;s your email</h3>

<input type="email" name="email" value={email} onChange={(e)=>{
  setEmail(e.target.value)
}}
required id="" className="bg-[#eeeeee] mb-7 outline-1 rounded px-4 py-2 border w-full text-lg placeholder:text-base" 
placeholder="Enter Your Email"/>

<h3 className="text-lg mb-2 font-medium">Enter Password</h3>

<input type="password" name="password" value={password}  onChange={(e)=>{
  setPassword(e.target.value)
}}
required placeholder="Enter Your Password"
 id=""  className="bg-[#eeeeee] mb-7 rounded px-4 outline-1 py-2 border w-full text-lg placeholder:text-base" />

<button className="bg-[#111] text-white 
font-semibold mb-2 rounded px-4 outline-none py-2
 border w-full text-lg placeholder:text-base"
>Login</button>
<p className="text-center">join a fleet?<Link to={'/captain-signup'}
className="text-blue-400"> Register as Captain</Link></p>
</form>
   </div>
   <div>
    <Link to={'/login'} className="bg-[#d5622d] flex items-center justify-center  text-white
     font-semibold mb-5
     rounded px-4 outline-none py-2 border w-full text-lg
      placeholder:text-base">Sign up as User</Link>
   </div>
     </div>
    </>
  )
}
export default CaptainLogin;

