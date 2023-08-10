import banner_img from '../../assets/banner_img.png'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container mx-auto pb-8">
        <Slider {...settings}>
        <div>
            <div className="bg-white lg:flex justify-around items-center">
                <div>
                    <div className="relative  px-6 pt-6 lg:px-8">

                        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-20">

                            <div className="lg:text-left text-center">
                                <h2 className='text-2xl font-bold text-primary tracking-widest'>Classic</h2>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Eat Good
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Feel Good
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Look Good
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    Curated healthy meal plans to achieve your fitness goals
                                </p>
                                <div className="mt-10 flex items-center lg:justify-start justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-full flex items-center justify-around bg-primary lg:px-6 lg:py-3 px-4 py-2 text-md lg:text-md font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <span className='p-2 mr-3 rounded-full bg-white text-gray-900'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                        </span>  Get started
                                    </a> 
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
                <div className=''>
                    <img className='pt-12' src={banner_img} alt="" />
                </div>

            </div>
        </div>
        <div>
            <div className="bg-white lg:flex justify-around items-center">
                <div>
                    <div className="relative px-6 pt-6 lg:px-8">

                        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-20">

                            <div className="lg:text-left text-center">
                                <h2 className='text-2xl font-bold text-primary tracking-widest'>Classic</h2>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Choose your
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Daily Meal 
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Plan Now
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    Select the Best Meal Plan that fits your requirement & Save Time in preparing them
                                </p>
                                <div className="mt-10 flex items-center lg:justify-start justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-full flex items-center justify-around bg-primary lg:px-6 lg:py-3 px-4 py-2 text-md lg:text-md font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <span className='p-2 mr-3 rounded-full bg-white text-gray-900'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                        </span>Meal Plan
                                    </a> 
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
                <div className=''>
                    <img className='pt-12' src={banner_img} alt="" />
                </div>

            </div>
        </div> 
        <div>
            <div className="bg-white lg:flex justify-around items-center">
                <div>
                    <div className="relative px-6 pt-6 lg:px-8">

                        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-20">

                            <div className="lg:text-left text-center">
                                <h2 className='text-2xl font-bold text-primary tracking-widest'>Classic</h2>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Balanced Dite
                                </h1>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Balanced Life
                                </h1>
                                {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Look Good
                                </h1> */}
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    There is no better time than now to start living healthy
                                </p>
                                <div className="mt-10 flex items-center lg:justify-start justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-full flex items-center justify-around bg-primary lg:px-6 lg:py-3 px-4 py-2 text-md lg:text-md font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <span className='p-2 mr-3 rounded-full bg-white text-gray-900'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 lg:w-6 lg:h-6">
                                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                        </span>  Meal Plan Menu
                                    </a> 
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
                <div className=''>
                    <img className='pt-12' src={banner_img} alt="" />
                </div>

            </div>
        </div> 
        </Slider>
        
        <button className="px-8 py-3 rounded-3xl bg-primary text-lg hover:bg-secondary text-white flex justify-center mx-auto mt-12">View Menu</button>
      </div>
    );
  }
}

