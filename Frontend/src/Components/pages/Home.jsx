import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationPanel from "./LocationPanel";
import VehiclePanel from "./VehiclePanel";
import ConfirmedRide from "./ConfiredRide";
import LookingForDriver from "./LookingForDriver";
import WaitForDriver from "./WaitForDriver";

const Home = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoading, setIsLoading] = useState(true);
    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [panal, setPanal] = useState(false);
    
    const penalref = useRef(null); // ✅ Correct useRef
    const panellCloserref = useRef(null);
    const [vehiclesPanel, setVehiclesPanel] = useState(false);
    const vehiclePanelref = useRef(null); 
    const confirmRideRef = useRef(null);
    const vehiclefoundRef = useRef(null);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [confirmRide, setConfirmRide] = useState(false);
    const waitForDriverRef = useRef(null);
    const [waitForDriver, setWaitForDriver] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
    };

    // ✅ UseEffect for animations
    useEffect(() => {
        if (penalref.current) {
            gsap.to(penalref.current, {
                duration: 0.5,
                padding: 2,
                height: panal ? "70%" : "0%",
                ease: "power4.inOut",
            });
            gsap.to(panellCloserref.current, {
                opacity: panal ? 1 : 0,
            });
        }
        if (vehiclePanelref.current) {
            gsap.to(vehiclePanelref.current, {
                duration: 0.5,
                translateY: vehiclesPanel ? "0%" : "100%",
                ease: "power4.inOut",
            });
        }
        if (confirmRideRef.current) {
            gsap.to(confirmRideRef.current, {
                duration: 0.5,
                translateY: confirmRide ? "0%" : "100%",
                ease: "power4.inOut",
            });
        }

        if (vehiclefoundRef.current) {
            gsap.to(vehiclefoundRef.current, {
                duration: 0.5,
                translateY: vehicleFound ? "0%" : "100%",
                ease: "power4.inOut",
            });
        }

        if (waitForDriverRef.current) {
            gsap.to(waitForDriverRef.current, {
                duration: 0.5,
                translateY: waitForDriver ? "0%" : "100%",
                ease: "power4.inOut",
            });
        }
    }, [panal, vehiclesPanel,confirmRide,vehicleFound,waitForDriver]); // ✅ Add `vehiclesPanel` to dependencies

    // ✅ Fetch user profile on component mount
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }

        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
                localStorage.removeItem("token");
                navigate("/login");
            });
    }, [token, navigate]);

    return (
        <>
            <div className='h-screen relative overflow-hidden'>
                <img className='w-16 absolute left-5 top-5' src="https://th.bing.com/th/id/R.67cf0bb07efc4b9c50e21a1db47e8a20?rik=IvByoJBalTGuBg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fuber%2fuber_PNG19.png&ehk=m98MZAddxW7I7h0lBtB3aSHZdeeVEtp1w5TA6ctv71w%3d&risl=&pid=ImgRaw&r=0" alt="" />

                <div onClick={()=>{
                    setVehiclesPanel(false)
                }} className='h-screen w-screen'>

                    <img className='h-full w-full object-cover' src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg" alt="" />
                </div>
                <div className=' flex flex-col justify-end h-screen
                 absolute top-0 w-full '>
                    <div className='h-[30%] p-6 bg-white  relative'>
                        <h5 ref={panellCloserref}
                            onClick={
                                () => {
                                    setPanal(false)
                                }
                            }
                            className="absolute opacity-0 top-6 right-6 text-xl"
                        >
                            <i className="ri-arrow-down-wide-line"></i>

                        </h5>
                        <h4 className='text-2xl font-semibold'>Find a trip</h4>
                        <form action="" onSubmit={(e) => { submitHandler(e) }}>
                            <div className='line absolute h-16 w-1 
                          top-[45%] left-10 bg-gray-700 rounded-full'></div>
                            <input
                                onClick={() => { setPanal(true) }}
                                onChange={(e) =>
                                    setPickup(e.target.value)}
                                value={pickup}
                                className='bg-[#eee] 
                            px-12 py-2 text-base rounded-lg w-full mt-5'
                                type="text" placeholder='Add a pick-up location' />
                            <input
                                value={destination}
                                onClick={() => { setPanal(true) }}
                                onChange={(e) =>
                                    setDestination(e.target.value)}
                                className='bg-[#eee] 
                            px-12 py-2 text-base rounded-lg w-full mt-3'
                                type="text" placeholder='Enter your destination' />
                        </form>
                    </div>
                    <div ref={penalref} className=' bg-white h-0'>
                        <LocationPanel 
                        setPanal ={setPanal}  setVehiclesPanel= {setVehiclesPanel}/>
                    </div>
                </div>

                <div ref={vehiclePanelref} className="fixed bg-white translate-y-full w-full px-3 pt-12 py-10 z-10 bottom-0">
                <VehiclePanel setConfirmRide={setConfirmRide} setVehiclesPanel={setVehiclesPanel}/>
                </div>
                <div ref={confirmRideRef} className="fixed bg-white translate-y-full w-full px-3 pt-12 py-6 z-10 bottom-0">
                    <ConfirmedRide setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound}/>
                </div>
                <div ref={vehiclefoundRef}  className="fixed bg-white translate-y-full w-full px-3 pt-12 py-6 z-10 bottom-0">
                    <LookingForDriver setVehicleFound={setVehicleFound}/>
                </div>
                <div   className="fixed bg-white  w-full px-3 pt-12 py-6 z-10 bottom-0">
                    <WaitForDriver />
                </div>
            </div>
        </>
    )
}

export default Home