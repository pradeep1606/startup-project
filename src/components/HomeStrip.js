import Image from 'next/image';

const HomeStrip = () => {
    return (
        <>
            <div className="h-40 w-full flex justify-center items-center" style={{ background: 'linear-gradient(to right, #f2870d, #3f53d9f0)' }}>
                <div className="grid grid-cols-3 gap-32 text-gray-200">
                    {/* first item */}
                    <div className="flex items-center justify-center">
                        <div className="mr-2">
                            <Image src="/logo/college.png" height={50} width={50} alt="" />
                        </div>
                        <div className="text-left">
                            <div>
                                <span className="block text-xl font-bold">50,000+</span>
                                <span className="block">College Listed</span>
                            </div>
                        </div>
                    </div>
                    {/* second item */}
                    <div className="flex items-center justify-center">
                        <div className="mr-2">
                            <Image src="/logo/expert.png" height={50} width={50} alt="" />
                        </div>
                        <div className="text-left">
                            <div>
                                <span className="block text-xl font-bold">100+</span>
                                <span className="block">Expert Available Every Time</span>
                            </div>
                        </div>
                    </div>
                    {/* third item */}
                    <div className="flex items-center justify-center">
                        <div className="mr-2">
                            <Image src="/logo/admission.png" height={50} width={50} alt="" />
                        </div>
                        <div className="text-left">
                            <div>
                                <span className="block text-xl font-bold">4,000+</span>
                                <span className="block">Admissions This Year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeStrip;
