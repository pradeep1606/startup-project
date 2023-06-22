import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CollegeView = () => {
    return (
        <>
            <div className="bg-white p-4 md:flex rounded">
                <div className='flex'>
                    <div>
                        <Image src='/logo/millenium.jpg' width={70} height={70} alt="" />
                    </div>
                    <div>
                        <Link href="/" className='text-blue-700 text-xl'>MGI Group of Institute</Link>
                        <p className=''>Rating 5.0</p>
                        <p className='text-sm mt-2 text-gray-500'>University : Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</p>
                        <p className='text-sm mt-2'>Course : BE, B.Tech, M.Tech</p>
                        <Link href="/" className='text-sm text-blue-400'>View Course Fee</Link>
                    </div>
                </div>
                <div className='flex flex-col ml-auto space-y-4 md:mt-0 mt-3 text-center'>
                    <Link href="/" className="bg-blue-500 text-white px-8 py-[0.30rem] rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</Link>
                    <Link href="/" className='text-blue-600 border border-blue-600 px-8 py-1 rounded-lg hover:bg-blue-500 hover:text-white'>Contact</Link>
                </div>
            </div>
            <div className="bg-white p-4 md:flex rounded">
                <div className='flex'>
                    <div>
                        <Image src='/logo/millenium.jpg' width={70} height={70} alt="" />
                    </div>
                    <div>
                        <Link href="/" className='text-blue-700 text-xl'>MGI Group of Institute</Link>
                        <p className=''>Rating 5.0</p>
                        <p className='text-sm mt-2 text-gray-500'>University : Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</p>
                        <p className='text-sm mt-2'>Course : BE, B.Tech, M.Tech</p>
                        <Link href="/" className='text-sm text-blue-400'>View Course Fee</Link>
                    </div>
                </div>
                <div className='flex flex-col ml-auto space-y-4 md:mt-0 mt-3 text-center'>
                    <Link href="/" className="bg-blue-500 text-white px-8 py-[0.30rem] rounded-lg shadow-lg shadow-blue-500/50 hover:bg-blue-600">Apply Now</Link>
                    <Link href="/" className='text-blue-600 border border-blue-600 px-8 py-1 rounded-lg hover:bg-blue-500 hover:text-white'>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default CollegeView
