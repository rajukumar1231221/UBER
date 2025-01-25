import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userThunk } from '../../redux/user.slice';
const UserSignup = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate()


  const dispatch = useDispatch();
  const result = useSelector((state)=>state.user.usersData)  
 console.log(result);
  const submitHandler = async (e) => {
    e.preventDefault();
    if(firstName && lastName && email && password
    ){
          try {

            const newUser = {
              fullName: {
                firstName: firstName,
                lastName: lastName,
              },
              email: email,
              password: password,
            };
          const response =  await dispatch(userThunk(newUser)).unwrap();
        localStorage.setItem('token',response.token)

            navigate("/home")
          } catch (e) {
            console.log(e);
            
          }

    }else{
      alert("all fields are required")
    }
  setEmail('');
  setFirstName('');
  setLastName('');
  setPassword('');

}


return (
  <>
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-20 bg-transparent   mb-3" src="https://th.bing.com/th/id/R.67cf0bb07efc4b9c50e21a1db47e8a20?rik=IvByoJBalTGuBg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG19.png&ehk=m98MZAddxW7I7h0lBtB3aSHZdeeVEtp1w5TA6ctv71w%3d&risl=&pid=ImgRaw&r=0" alt="" />

        <form action="" method="POST" encType="multipart/form-data" onSubmit={(e) => { submitHandler(e) }}>

          <h3 className="text-lg mb-2 font-medium">What&apos;s your name</h3>
          <div className="flex mb-3  gap-3">
            <input type="text" name="firstName" onChange={(e) => {
              setFirstName(e.target.value)
            }} value={firstName}
              required id="" className="bg-[#eeeeee] mb-5 outline-1 
rounded px-4 py-2 border w-1/2   text-lg placeholder:text-sm"
              placeholder="First name" />

            <input type="text" name="lastName" value={lastName} onChange={(e) => {
              setLastName(e.target.value)
            }}
              required id="" className="bg-[#eeeeee] mb-5 outline-1
 rounded px-4 py-2 border w-1/2  text-lg placeholder:text-sm"
              placeholder="Last name" />
          </div>

          <h3 className="text-lg mb-2 font-medium">What&apos;s your email</h3>
          <input type="email" name="email" value={email}
            required id="" onChange={(e) => {
              setEmail(e.target.value)
            }} className="bg-[#eeeeee] mb-7 outline-1 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            placeholder="Enter Your Email" />

          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input type="password" name="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
            required placeholder="Enter Your Password"
            id="" className="bg-[#eeeeee] mb-5 rounded px-4 
 outline-1 py-2 border w-full text-lg placeholder:text-sm" />

          <button className="bg-[#111] text-white 
font-semibold mb-3 rounded px-4 outline-none py-2
 border w-full text-lg placeholder:text-sm"
          >Continue</button>
          <p className="text-center">Already have a account?<Link to={'/login'}
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


