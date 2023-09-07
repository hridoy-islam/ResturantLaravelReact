
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Component } from "react";
import "./CustomerReview.css"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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
                        slidesToShow: 1,
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
            <div className="container mx-auto lg:py-12">
                <h2 className="text-5xl text-center  py-12 text-secondary font-bold">Our Customer Review</h2>
                <Slider {...settings}>

                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                            
                            <h3 className="text-md font-normal text-justify pb-4">I have just started this program, and I love, love and love it! Now planning to switch to their monthly plan, and I am surprised how delicious the food is! Recommended!</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://prepmeal.ae/assets/front/images/Aurora-James-Arabian-Ranches-Dubai.jpeg' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">Aurora James</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                            <h3 className="text-md font-normal text-justify pb-4">The food was finger-licking good, and I have reached my target weight during this month. I would order again. <br/>Highly recommended!</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://prepmeal.ae/assets/front/images/Emma-Emirates-Hill-Dubai.jpeg' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">Emily David</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                            
                            <h3 className="text-md font-normal text-justify pb-4">The rep was so kind and efficient. The chat service itself was fantastic because it was so easy and quick to get my requests handled. Awesome service!</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://user-images.trustpilot.com/64dd02649325d900110c15be/73x73.png' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">TJ Stuart</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                        <h3 className="text-md font-normal text-justify pb-4">The food arrived warm. It is unknown how long it was warm, so I won't chance eating it. Complete bummer. The customer service was wonderful.</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://user-images.trustpilot.com/5ca9fcab1afc26744b8514ac/73x73.png' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">Wilson Ranch Nubians</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                            <h3 className="text-md font-normal text-justify pb-4">The Fitness Dine offers a fresh, delicious and healthy meal plan, and I loved the food! I would recommend it to my friends for subscription and ordering.</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://prepmeal.ae/assets/front/images/FawazBaderRawdahAbuDhabi.jpeg' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">Fawaz Bader</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#7ab3354c] lg:h-[320px] py-10 px-6 rounded-3xl w-11/12 mx-auto text-center">
                            
                            <h3 className="text-md font-normal text-justify pb-4">The Fitnessdine is the best and is serving the delicious yet healthiest and fresh food in UAE. They made us feel welcomed and gave us an amazing experience.</h3>
                            <div className="flex items-center justify-start">
                                <img className="w-12 h-12 rounded-full mr-3" src='https://hips.hearstapps.com/rover/profile_photos/a33a35da-1d06-4583-a75d-2b1c1b69dcbf_1588263546.png?fill=1:1&resize=160:*' alt="profile" />
                                <span className="text-left">
                                    <h2 className="text-lg font-medium text-secondary">Shanon</h2>
                                    <span className="flex items-center">
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                        <AiFillStar className="text-[#f7d600db] text-xl mr-1"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>




                </Slider>
            </div>
        );
    }
}
