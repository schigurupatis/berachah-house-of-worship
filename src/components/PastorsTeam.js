import React from 'react'
import PastorItem from './PastorItem'

const PastorsTeam = () => {
  return (
    <>
        <div className="w-full lg:w-[1024px] mx-auto">
    
            <h1 className="text-2xl font-bold mb-12">
                Our Pastoral Team
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                
                <PastorItem />
                <PastorItem />
                <PastorItem />

            </div>

        </div>
    </>
  )
}

export default PastorsTeam