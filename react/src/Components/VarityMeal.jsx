import axios from "axios";
import { Component, } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CustomerReview.css";

export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/menu`);
        this.setState({ menu: response.data });
    }
    render() {


        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
                        slidesToScroll: 1,
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
            <div className="container mx-auto pt-8 pb-8 mt-12">
                <h2 className="lg:text-5xl text-4xl lg:px-0 px-2 text-center py-12 text-secondary font-bold"> Variety Of Delicious Healthy Meals</h2>
                <Slider {...settings}>
                    {this.state.menu.length > 0 && this.state.menu?.map((plan, index) =>
                        <div key={index} className="md:py-5 sm:py-1 ">
                            <div className="shadow-xl shadow-gray lg:h-[590px] md:h-[720px] sm:h-[550px] h-[510px] lg:mx-2 md:mx-2 sm:mx-2 mx-3 my-12 p-6 rounded-xl">
                                <img className="lg:w-[360px] lg:h-[360px] md:w-[260px] md:h-[260] w-[280px] h-[280px] rounded-full mx-auto" src={plan.img} alt="Image" />
                                <p className="text-xl font-bold py-12 text-center">{plan.name}</p>
                                <div className="flex justify-between items-end border-t-2 pt-3 ">
                                    <p className="text-normal font-medium border-r-2 border-gray-400 pr-1 lg:px-3 text-gray-400">{plan.calories}  Kcal</p>
                                    <p className="text-normal font-medium border-r-2 border-gray-400 pr-1 lg:px-2 text-gray-400">Protein {plan.protein}g</p>
                                    <p className="text-normal font-medium border-r-2 border-gray-400 pr-1 lg:px-3 text-gray-400">Carbs {plan.carb}g</p>
                                    <p className="text-normal font-medium pr-1 lg:px-3 text-gray-400"> Fat {plan.fat}g</p>
                                </div>
                            </div>
                        </div>
                    )}


                </Slider>

                <Link to={'/menu'} className="px-8 w-48 py-3 rounded-3xl bg-primary text-lg hover:bg-secondary text-white flex justify-center mx-auto lg:mt-12 ">View Menu</Link>
            </div>
        );
    }
}
