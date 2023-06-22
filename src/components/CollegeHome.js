

const CollegeHome = () => {
  return (
    <>
      <div className='mt-12 px-4 pb-12 sm:px-8 bg-white'>
        <div className='p-4 text-2xl sm:text-3xl text-[#262626] font-bold'>Top College</div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div className='border-2'>
            <div className='h-40 sm:h-56 bg-cover text-white px-4' style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("/images/1.jpeg")', display: 'flex', alignItems: 'flex-end' }}>
              <div>
                <span className='font-semibold text-lg'>Millennium Group of Institute</span>
                <p className='text-sm font-normal px-1'>Millennium Campus, Nathu Barkheda Road Near Neelbad Chouraha Bhopal M.P. 462044</p>
              </div>
            </div>
            <div className='divide-y p-4'>
              <div className='grid grid-cols-2 pb-2 sm:pb-4'>
                <div>
                  <p className='font-semibold'>BE/B.Tech</p>
                  <p className='text-gray-600 text-sm'>55000 Total Fees</p>
                </div>
                <div className='text-right'>Rating 9/10</div>
              </div>
              <div className='py-1 text-sm'><a href='#'>Show All Courses</a></div>
              <div className='py-1 text-sm'><a href='#'>Download Brochure</a></div>
              <div className='py-1 text-sm'><a href='#'>Admission</a></div>
            </div>
          </div>

          <div className='border-2'>
            <div className='h-40 sm:h-56 bg-cover text-white px-4' style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("/images/2.jpeg")', display: 'flex', alignItems: 'flex-end' }}>
              <div>
                <span className='font-semibold text-lg'>Millennium Group of Institute</span>
                <p className='text-sm font-normal px-1'>Millennium Campus, Nathu Barkheda Road Near Neelbad Chouraha Bhopal M.P. 462044</p>
              </div>
            </div>
            <div className='divide-y p-4'>
              <div className='grid grid-cols-2 pb-2 sm:pb-4'>
                <div>
                  <p className='font-semibold'>BE/B.Tech</p>
                  <p className='text-gray-600 text-sm'>55000 Total Fees</p>
                </div>
                <div className='text-right'>Rating 9/10</div>
              </div>
              <div className='py-1 text-sm'><a href='#'>Show All Courses</a></div>
              <div className='py-1 text-sm'><a href='#'>Download Brochure</a></div>
              <div className='py-1 text-sm'><a href='#'>Admission</a></div>
            </div>
          </div>

          <div className='border-2'>
            <div className='h-40 sm:h-56 bg-cover text-white px-4' style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url("/images/3.jpeg")', display: 'flex', alignItems: 'flex-end' }}>
              <div>
                <span className='font-semibold text-lg'>Millennium Group of Institute</span>
                <p className='text-sm font-normal px-1'>Millennium Campus, Nathu Barkheda Road Near Neelbad Chouraha Bhopal M.P. 462044</p>
              </div>
            </div>
            <div className='divide-y p-4'>
              <div className='grid grid-cols-2 pb-2 sm:pb-4'>
                <div>
                  <p className='font-semibold'>BE/B.Tech</p>
                  <p className='text-gray-600 text-sm'>55000 Total Fees</p>
                </div>
                <div className='text-right'>Rating 9/10</div>
              </div>
              <div className='py-1 text-sm'><a href='#'>Show All Courses</a></div>
              <div className='py-1 text-sm'><a href='#'>Download Brochure</a></div>
              <div className='py-1 text-sm'><a href='#'>Admission</a></div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default CollegeHome
