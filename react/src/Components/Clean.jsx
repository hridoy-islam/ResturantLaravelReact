import { Link } from 'react-router-dom'
import clean_img from '../../src/assets/clean.png'

export default function Clean() {

    return (
        <div className="bg-white lg:flex justify-around items-center">
            <div className=''>
                <img className='lg:pt-24 pt-12 w-10/12 mx-auto lg:w-full' src={clean_img} alt="" />
            </div>
            <div>
                <div className="relative isolate px-6 pt-6 lg:px-8">

                    <div className="mx-auto max-w-2xl pt-12 lg:pt-0 lg:py-20">

                        <div className="lg:text-left text-center">
                            <h2 className='text-2xl font-bold text-primary tracking-widest'>CLEAN</h2>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                You’re looking to maintain your body
                            </h1>
                            <p className="mt-6 lg:w-10/12 text-lg leading-8 text-gray-600">
                            Fitnessdine will  provides Tasty, Affordable, and Healthy meal plans in Dubai. All Our Meals are 100% Healthy, Fresh, Organic with No Added Sugar or Preservatives
                            </p>
                            <div className="mt-10 flex items-center lg:justify-start justify-center gap-x-6">
                                <Link
                                    to={'/meal-plan'}
                                    className="rounded-full flex items-center justify-around bg-primary lg:px-6 lg:py-3 px-4 py-2 text-md lg:text-md text-md font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <span className='p-2 mr-2 rounded-full bg-white text-gray-900'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="lg:w-6 lg:h-6 w-4 h-4">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                    </span>  Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}




