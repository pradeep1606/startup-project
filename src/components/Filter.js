import React from 'react'

export const MobileFilter = () => {
    return (
        <div>
            <div className='md:hidden font-semibold text-2xl flex justify-center'>Filter</div>
            <div>First div with 25% width - Content goes here</div>
            <div>First div with 25% width - Content goes here</div>
        </div>
    )
}

export const DesktopFilter = () => {
    return (
        <>
            <div className='bg-white p-4 rounded'>First div with 25% width - Filter goes here</div>
            <div className='bg-white p-4 rounded'>First div with 25% width - Filter goes here</div>
        </>
    )
}


