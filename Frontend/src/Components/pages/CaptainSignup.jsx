
import { useState } from "react"
import { Link } from "react-router-dom"
const CaptainSignup = () => {
  const [val,setVal] = useState({
    fullName:{
      firstName:"",
      lastName:""
     },
    email: "",
    password:""
   });
  
  function submithandler (e){
  
    e.preventDefault();
    setVal({
      fullName:{
        firstName:"",
        lastName:""
       },
      email: "",
      password:""
    });
  }
  function handlechange(e) {
    const { name, value } = e.target;
  
    setVal((prev) => {
      if (name === "firstName" || name === "lastName") {
        return {
          ...prev,
          fullName: {
            ...prev.fullName,
            [name]: value,
          },
        };
      }
  
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <>
     <div className="py-7 px-7 h-screen flex flex-col justify-between">
   <div>
   <img className="w-28 bg-transparent
      mb-3" style={{marginLeft:"-10px"}} src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />

<form action="" method="POST" encType="multipart/form-data" onSubmit={submithandler}>

  <h3 className="text-lg mb-2 font-medium">What&apos;s our Captain&apos;s name</h3>
  <div className="flex mb-3  gap-3">
  <input type="text" name="firstName" onChange={handlechange} value={val.fullName.firstName} 
required id="" className="bg-[#eeeeee] mb-5 outline-1 
rounded px-4 py-2 border w-1/2   text-lg placeholder:text-sm" 
placeholder="First name"/>
 
  <input type="text" name="lastName" value={val.fullName.lastName} onChange={handlechange} 
required id="" className="bg-[#eeeeee] mb-5 outline-1
 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-sm" 
placeholder="Last name"/>
</div>

<h3 className="text-lg mb-2 font-medium">What&apos;s our Captain&apos;s email</h3>
<input type="email" name="email" value={val.email} 
required id="" onChange={handlechange} className="bg-[#eeeeee] mb-7 outline-1 rounded px-4 py-2 border w-full text-lg placeholder:text-sm" 
placeholder="Enter Your Email"/>

<h3 className="text-lg mb-2 font-medium">Enter Password</h3>
<input type="password" name="password" value={val.password}  onChange={handlechange}
required placeholder="Enter Your Password"
 id=""  className="bg-[#eeeeee] mb-5 rounded px-4 
 outline-1 py-2 border w-full text-lg placeholder:text-sm" />

<button className="bg-[#111] text-white 
font-semibold mb-3 rounded px-4 outline-none py-2
 border w-full text-lg placeholder:text-sm"
>Continue</button>
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