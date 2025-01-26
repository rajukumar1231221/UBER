import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
    <h5 onClick={() => {
      props.setVehiclesPanel(false)
    }} className="p-1 w-[93%] text-center absolute top-0 ">
      <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
    </h5>
    <div className='flex items-center justify-between4'>
      <img className='h-12' src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png" alt="" />
      <div className=' text-right'>
    <h2 className='text-lg font-medium'>Raju</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>mkdds se</h4>
    <p className='text-sm text-gray-600'>Maruti suzuki</p>
 </div>
    </div>

    <div className='flex gap-2  flex-col justify-between items-center'>
      <div className='w-full'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className='text-lg ri-map-pin-fill'></i>
          <div>
            <h3 className='text-lg font-medium'>562/33 </h3>
            <p className='text-sm text-gray-600 -mt-1'>Rani bagh,delhi </p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className='text-lg ri-map-pin-user-fill'></i>
          <div>
            <h3 className='text-lg font-medium'>562/33 </h3>
            <p className='text-sm text-gray-600 -mt-1'>Rani bagh,delhi </p>
          </div>
        </div>
        <div className='flex items-center gap-5 p-3 '>
          <i className='text-lg ri-currency-line'></i>
          <div>
            <h3 className='text-lg font-medium'>₹193.20 </h3>
            <p className='text-sm text-gray-600 -mt-1'>Cash Payment</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default WaitForDriver