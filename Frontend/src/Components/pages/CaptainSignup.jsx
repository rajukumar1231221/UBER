
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CaptainDataContext } from "../../context/CaptainContext";
import axios from "axios";
const CaptainSignup = () => {
  const [email,setEmail]= useState('');
  const [firstName,setFirstName]= useState('');
  const [password,setPassword]= useState('');
  const [lastName,setLastName]= useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  // const [userData,setUserData]= useState('');

  const navigate = useNavigate()
 
 const { captain, setCaptain } = useContext(CaptainDataContext)  
 const submitHandler = async(e)=>{
  e.preventDefault();
   const CaptainData = {
    fullName:{
      firstName:firstName,
      lastName:lastName
    },
    email:email,
    password:password,
    vehicle:{
      vehicleType:vehicleType,
      plate:vehiclePlate,
      color:vehicleColor,
      capacity:vehicleCapacity
    } 
   }
   const response = await axios.post(`http://localhost:5000/captains/register`,CaptainData)   
   if (response.status === 201){
    const data = response.data;
    setCaptain(data.captain)
    localStorage.setItem('token',data.token)  
    navigate('/Captain-home') 
   }
   
   setEmail('')
   setFirstName('') 
   setLastName('')
   setPassword('')
   setVehicleCapacity('') 
   setVehicleColor('')  
   setVehiclePlate('')  
   setVehicleType('')
  
   
   
}
  return (
    <>
     <div className="py-7 px-7 h-screen flex flex-col justify-between">
   <div>
   <img className="w-28 bg-transparent
      mb-3" style={{marginLeft:"-10px"}} src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />

<form action="" method="POST" encType="multipart/form-data" onSubmit={(e)=>{submitHandler(e)}}>

  <h3 className="text-lg mb-2 font-medium">What&apos;s our Captain&apos;s name</h3>
  <div className="flex mb-3  gap-3">
  <input type="text" name="firstName" onChange={(e)=>{
  setFirstName(e.target.value)
}} value={firstName} 
required id="" className="bg-[#eeeeee] mb-5 outline-1 
rounded px-4 py-2 border w-1/2   text-lg placeholder:text-sm" 
placeholder="First name"/>
 
  <input type="text" name="lastName" value={lastName} onChange={(e)=>{
  setLastName(e.target.value)
}}
required id="" className="bg-[#eeeeee] mb-5 outline-1
 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-sm" 
placeholder="Last name"/>
</div>

<h3 className="text-lg mb-2 font-medium">What&apos;s our Captain&apos;s email</h3>
<input type="email" name="email" value={email} 
required id="" onChange={(e)=>{
  setEmail(e.target.value)
}} className="bg-[#eeeeee] mb-7 outline-1 rounded px-4 py-2 border w-full text-lg placeholder:text-sm" 
placeholder="Enter Your Email"/>

<h3 className="text-lg mb-2 font-medium">Enter Password</h3>
<input type="password" name="password" value={password} onChange={(e)=>{
  setPassword(e.target.value)}}
required placeholder="Enter Your Password"
 id=""  className="bg-[#eeeeee]
  mb-5 rounded px-4 outline-1 py-2 border w-full text-lg 
  placeholder:text-sm" />

<h3 className="text-lg mb-2 font-medium">Vehicle Details</h3>
<div className="grid grid-cols-2 gap-3">
  <select 
    value={vehicleType} 
    onChange={(e) => setVehicleType(e.target.value)}
    className="bg-[#eeeeee] mb-5 outline-1 rounded px-4 py-2 border w-full text-lg"
    required
  >
    <option value="">Select Vehicle Type</option>
    <option value="car">Car</option>
    <option value="auto">Auto</option>
    <option value="motorcycle">Motorcycle</option>
  </select>

  <input 
    type="text" 
    value={vehiclePlate}
    onChange={(e) => setVehiclePlate(e.target.value)}
    className="bg-[#eeeeee] mb-5 outline-1 rounded px-4 py-2 border w-full text-lg"
    placeholder="Vehicle Plate Number"
    required
  />

  <input 
    type="text"
    value={vehicleColor}
    onChange={(e) => setVehicleColor(e.target.value)}
    className="bg-[#eeeeee] mb-5 outline-1 rounded px-4 py-2 border w-full text-lg"
    placeholder="Vehicle Color"
    required
  />

  <input 
    type="number"
    value={vehicleCapacity}
    onChange={(e) => setVehicleCapacity(e.target.value)}
    className="bg-[#eeeeee] mb-5 outline-1 rounded px-4 py-2 border w-full text-lg"
    placeholder="Vehicle Capacity"
    required
    min="1"
  />
</div>

<button className="bg-[#111] text-white 
font-semibold mb-3 rounded px-4 outline-none py-2
 border w-full text-lg placeholder:text-sm"
>Create Catain account?</button>
<p className="text-center">Already have a account?<Link  to={'/captain-login'}
className="text-blue-400"> Login here</Link></p>
</form>
   </div>
   <div>
   <p className="text-xs leading-tight">
   This site is protected by reCAPTCHA  and the <span className="underline">Google Private Policy </span> 
    and <span className="underline">Terms of Service apply</span>
   </p>
   </div>
     </div>
    </>
  )
}


export default CaptainSignup