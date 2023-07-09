import location_icon from '../../src/assets/location_icon.svg';

export default function Location() {
    return (
        <div className="my-24">
            <h1 className="text-2xl mb-12 text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
                We deliver Healthy Meal Plans Across <span className="text-primary">UAE</span>
            </h1>
            <div className='grid grid-cols-3 gap-8 w-10/12 mx-auto'>
                <div className="place py-6 rounded-lg shadow-lg shadow-slate-300 flex flex-col justify-center items-center ">
                    <img className='w-12' src={location_icon} alt="location_icon" />
                    <h3 className='font-bold text-2xl pt-2 text-secondary'>Dubai</h3>
                </div>
                <div className="place py-6 rounded-lg shadow-lg shadow-slate-300 flex flex-col justify-center items-center ">
                    <img className='w-12' src={location_icon} alt="location_icon" />
                    <h3 className='font-bold text-2xl pt-2 text-secondary'>Sharjah </h3>
                </div>
                <div className="place py-6 rounded-lg shadow-lg shadow-slate-300 flex flex-col justify-center items-center ">
                    <img className='w-12' src={location_icon} alt="location_icon" />
                    <h3 className='font-bold text-2xl pt-2 text-secondary'>Ajman</h3>
                </div>


            </div>
        </div>
    );
}

