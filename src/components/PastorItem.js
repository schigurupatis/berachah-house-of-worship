import React from 'react'
import { PastorImg1 } from '../utils/constants'



const PastorItem = () => {
    
  return (
    <>
        <div className="bg-white rounded-2xl text-center w-80  transition duration-300">
    
            <img
                src={PastorImg1}
                alt="Pastor profile"
                className="w-full h-80 object-cover rounded-xl shadow-md hover:shadow-xl"
            />

            <h2 className="mt-5 text-2xl font-semibold text-gray-900">
                Nova Babu
            </h2>

            <p className="mt-2 text-gray-500 text-lg">
                Founder and Lead Pastor
            </p>

        </div>

    </>
  )
}

export default PastorItem