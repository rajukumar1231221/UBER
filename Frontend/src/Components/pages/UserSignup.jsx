

import { useState } from "react"
import { Link } from "react-router-dom"
const UserSignup = () => {
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

  console.log(val);
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
     <div className="p-7 h-screen flex flex-col justify-between">
   <div>
   <img className="w-20 bg-transparent   mb-3" src="https://th.bing.com/th/id/R.67cf0bb07efc4b9c50e21a1db47e8a20?rik=IvByoJBalTGuBg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG19.png&ehk=m98MZAddxW7I7h0lBtB3aSHZdeeVEtp1w5TA6ctv71w%3d&risl=&pid=ImgRaw&r=0" alt="" />

<form action="" method="POST" encType="multipart/form-data" onSubmit={submithandler}>

  <h3 className="text-lg mb-2 font-medium">What&apos;s your name</h3>
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

<h3 className="text-lg mb-2 font-medium">What&apos;s your email</h3>
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
<p className="text-center">Already have a account?<Link  to={'/login'}
className="text-blue-400"> Login here</Link></p>
</form>
   </div>
   <div>
   <p className="text-xs leading-tight">
   This site is protected by reCAPTCHA  and the <span className="underline">Google Private Policy</span> 
    and <span className="underline">Terms of Service apply</span>
   </p>
   </div>
     </div>
    </>
  )
}
export default UserSignup;


