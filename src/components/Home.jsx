import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';
import Pagination from './Pagination';
import SingleCar from './SingleCar';
import '../index.css'


const Home = () => {

    const { data, loading } = useContext(CarContext);

    const [isModeOpen, setIsModeOpen] = useState(false);

    const itemsPerPage = 3;

    const [currentPage, setCurrentPage] = useState(1);

    const [selectedItem, setSelectedItem] = useState(null);

    if (loading) {
        return <div>Loading...</div>
    }

    const stratIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = stratIndex + itemsPerPage;
    const currentData = data.slice(stratIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setSelectedItem(null);
    }

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsModeOpen(true);
    }

    const handleClosePopup = () => {
        setSelectedItem(null);
        setIsModeOpen(false)
    }

    return (
        <>
            <div>
                <h1 className='font-bold text-3xl text-center text-yellow-400 mt-8'>ALL CARS INFORMATION</h1>
                <div className='mt-16'>
                    <ul className='flex  justify-center gap-20 '>
                        {currentData.map((item) => (
                            <li key={item.id} className='text-center font-bold text-gray-300border-white border-2 round bg-slate-700' onClick={() => handleItemClick(item)}>
                                <div><img src="https://images5.alphacoders.com/133/thumbbig-1330753.webp" alt="" className='w-80' /></div>
                                <div className='text-white'>
                                    <div>CAR : {item.make}</div>
                                    <div>MODEL : {item.model}</div>
                                    <div>MODEL YEAR : {item.year}</div>
                                    <div>COLOUR : {item.color}</div>
                                    <div>PRICE : ${item.price}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Pagination
                    totalItems={data.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />

                {isModeOpen && (
                    <div className='fixed inset-0 flex items-center justify-center z-50 bg-opacity-95 bg-black'>
                        <SingleCar
                            item={selectedItem}
                            onClose={handleClosePopup}
                        />
                        
                    </div>
                )}

            </div>
        </>
    )
}

export default Home