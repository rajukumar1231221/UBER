import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
          <h5 onClick={()=>{
                   props. setVehiclesPanel(false)
                  }} className="p-1 w-[93%] text-center absolute top-0 ">
                    <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
                    </h5>
                  <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
                    <div 
                    onClick={()=>{props.setConfirmRide(true)
                        
                    }}
                    className="flex px-3 py-3 mb-2 border-2 active:border-black  rounded-xl w-full items-center justify-between">
                        <img className="h-12 "
                            src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"
                            alt="" />
                        <div className="ml-2 w-1/2">
                            <h4 className="font-medium text-lg">
                                UberGo <span className=''><i className="ri-user-3-fill"></i>
                                    4</span>
                            </h4>
                            <h5 className="font-medium text-sm">2 Mins away</h5>
                            <p className="font-medium text-xs text-gray-600">Affordable,Compact rides</p>

                        </div>
                        <h2 className="text-2xl  font-semibold">₹193.20</h2>
                    </div>
                    <div   onClick={()=>{props.setConfirmRide(true)
                        
                    }} className="flex px-3 py-3 mb-2 border-2 active:border-black  rounded-xl w-full items-center justify-between">
                        <img className="h-12"
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                            alt="" />
                        <div className="ml-2 w-1/2">
                            <h4 className="font-medium text-lg">
                                Moto <span className=''><i className="ri-user-3-fill"></i>
                                    1</span>
                            </h4>
                            <h5 className="font-medium text-sm">4 Mins away</h5>
                            <p className="font-medium text-xs text-gray-600">Affordable, motercycle rides</p>

                        </div>
                        <h2 className="text-2xl  font-semibold">₹93.20</h2>
                    </div>
                    <div   onClick={()=>{props.setConfirmRide(true)
                        
                    }} className="flex px-3 py-3 mb-2 border-2 active:border-black  rounded-xl w-full items-center justify-between">
                        <img className="h-12"
                            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
                            alt="" />
                        <div className="ml-2 w-1/2">
                            <h4 className="font-medium text-lg">
                                UberAuto <span className=''><i className="ri-user-3-fill"></i>
                                    3</span>
                            </h4>
                            <h5 className="font-medium text-sm">7 Mins away</h5>
                            <p className="font-medium text-xs text-gray-600">Affordable,auto rides</p>

                        </div>
                        <h2 className="text-2xl  font-semibold">₹110.20</h2>
                    </div>
    </div>
  )
}

export default VehiclePanel