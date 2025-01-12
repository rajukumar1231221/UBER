import { Link } from "react-router-dom"

const Home = () => {
  return (
   <div>
    <div className="h-screen pt-5  bg-[url(/src/assets/traficlight.jpeg)]  flex justify-between flex-col w-full">
    <img className="w-20 bg-transparent  ml-8" src="https://th.bing.com/th/id/R.67cf0bb07efc4b9c50e21a1db47e8a20?rik=IvByoJBalTGuBg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG19.png&ehk=m98MZAddxW7I7h0lBtB3aSHZdeeVEtp1w5TA6ctv71w%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <div className="bg-white pb-7 py-4 px-4">
        <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
        <Link to={'/login'} className="w-full items-center justify-center flex bg-black text-white py-3 rounded-lg mt-5">Continue <span className="ml-5 text-lg">&#10230;</span></Link>
      </div>
    </div>
   </div>
  )
}

export default Home