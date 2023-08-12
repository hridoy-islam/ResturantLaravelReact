import banner_img from '../../assets/banner_img.png'
import banner_2 from '../../assets/banner_2.png'
import banner_3 from '../../assets/banner_3.png'

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
      <div className="container mx-auto lg:pb-8 lg:px-12">
        <Slider {...settings}>
        <div>
            <div className="bg-white lg:flex md:flex-row lg:flex-row flex flex-col-reverse justify-around items-center">
                <div className='w-full'>
                    <div className="relative  px-6 pt-6 lg:px-8">

                        <div className="lg:ml-12 max-w-2xl sm:py-48 lg:py-20">

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
                    </div>
                </div>
                <div className='lg:mr-12'>
                    <img className='pt-12 ' src={banner_img} alt="" />
                </div>

            </div>
        </div>
        <div>
            <div className="bg-white lg:flex md:flex-row lg:flex-row flex flex-col-reverse justify-around items-center">
                <div className='w-full'>
                    <div className="relative px-6 pt-6 lg:px-8">

                        <div className="lg:ml-12 max-w-2xl  sm:py-48 lg:py-20">

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
                    </div>
                </div>
                <div className='lg:mr-12'>
                    <img className='pt-12 lg:w-10/12 lg:ml-auto' src={banner_2} alt="" />
                </div>

            </div>
        </div> 
        <div>
            <div className="bg-white lg:flex md:flex-row lg:flex-row flex flex-col-reverse justify-around items-center">
                <div className='w-full'>
                    <div className="relative px-6 pt-6 lg:px-8">

                        <div className="lg:ml-12 sm:py-48 lg:py-20">

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
                        
                    </div>
                </div>
                <div className='lg:mr-12'>
                    <img className='pt-12 lg:w-10/12 lg:ml-auto w-full mx-auto' src={banner_3} alt="" />
                </div>

            </div>
        </div> 
        </Slider>
      </div>
    );
  }
}

