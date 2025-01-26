import React from 'react';

const LocationPanel = (props) => {
    const locations = [
        'E-55 Cemetent Siding, Shakur Basti, Delhi - 110034',
        'WZ-9, Shakur Basti, Delhi - 110034',
        'E/32, Vaishali, Ghaziabad - 110034',
        '2/3A, Shakur Basti, Delhi - 110034',
    ];

    return (
        <div>
            {locations.map((item, index) => (
                <div
                    key={index}
                    onClick={() =>{
                         props.setVehiclesPanel(true)
                         props.setPanal(false)
                        }}
                    className="flex gap-4 border-2 border-green-50 hover:border-black p-3 rounded-xl my-2 items-center justify-start cursor-pointer transition-all"
                >
                    <h2 className="bg-[#eee] h-10 flex items-center justify-center w-12 rounded-full">
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className="font-medium">{item}</h4>
                </div>
            ))}
        </div>
    );
};

export default LocationPanel;
