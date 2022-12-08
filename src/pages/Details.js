import React from "react";

const Details = () => {
    return(
        <div className="container mx-auto p-5">
            <div className='container mx-auto p-8 rounded shadow-lg bg-gray-700'>
                <div className='grid grid-flow-row sm:grid-flow-col gap-3 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-6 mx-auto'>
                    <div className="sm:col-span-1 md:col-span-2 bg-slate-500"><h1>hello</h1></div>
                    <div className='sm:col-span-1 md:col-span-4 min-h-[20rem] bg-white'>
                        <h1>ge</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;