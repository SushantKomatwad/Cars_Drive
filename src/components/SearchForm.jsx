import React from 'react'

const SearchForm = () => {
    return (
        <>
            <div className='flex flex-col items-center font-bold mt-4'>
                <h1 className='text-3xl text-yellow-400'>SELECT CAR BY YEAR</h1>
                <div className='mt-4'>
                    <label htmlFor="" className='text-xl '>Select Year : </label>
                    <select name="" id="" className='text-gray-800 w-20 px-2 rounded-lg'><option value="">2022</option><option value="">2021</option><option value="">2020</option><option value="">2019</option></select>
                </div>
                <button className='mt-4 bg-sky-500 px-3 py-1 rounded-lg'>SEARCH</button>
            </div>
        </>
    )
}

export default SearchForm