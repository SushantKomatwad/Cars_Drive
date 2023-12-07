import React from 'react'

const SingleCar = ({ item, onClose }) => {

    if (!item) {
        return null;
    }
    return (
        <>
            <div className='fixed inset-0 flex items-center justify-center z-50 '>
                <div className='border-2 border-white mx-16 px-4 rounded-3xl'>
                    <div className='flex justify-center gap-28 '>
                        <div className='flex items-center'>
                            <p><img src="https://images5.alphacoders.com/133/thumbbig-1330753.webp" alt="" className='rounded-3xl h-72 ml-8' /></p>
                        </div>
                        <div className='text-2xl font-bold space-y-3 text-white my-4 '>
                            <h2>{item.make}</h2>
                            <p>Model: {item.model}</p>
                            <p>Year: {item.year}</p>
                            <p>Color: {item.color}</p>
                            <p>Price: ${item.price}</p>
                            <p>FuelType : {item.fuelType}</p>
                            <p>Engine : {item.engine}</p>
                            <p>Features : {item.features[0]}</p>
                        </div>
                        <span className='text-3xl mr-4 cursor-pointer text-red-300' onClick={onClose}>
                            &times;
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCar