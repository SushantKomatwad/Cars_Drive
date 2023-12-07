import React, { useState } from 'react'

const Pagination = ( {totalItems , itemsPerPage , onPageChange} ) => {

   const totalPages = Math.ceil(totalItems / itemsPerPage);

   const [currentPage , setCurrentPage] = useState(1);

   const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage)
   }

  return (
    <>
       <div className='font-bold  text-xl mt-12 flex justify-center gap-4'>
          <button
           disabled ={currentPage === 1}
           onClick={() => handlePageChange(currentPage - 1)}
           className='bg-red-500 py-1 px-3 rounded-xl'
          >
            Previous
          </button>

          <span className=''>
              {currentPage} of {totalPages}
          </span>

          <button
           disabled = {currentPage === totalPages}
           onClick={()=>handlePageChange(currentPage + 1)}
           className='bg-green-500 py-1 px-3 rounded-xl'
          >
             Next
          </button>
       </div>
    </>
  )
}

export default Pagination