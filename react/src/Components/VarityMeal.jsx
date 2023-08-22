
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react"
import "./OrderSlider.css"

export default class SimpleSlider extends Component {
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
      <div className="container mx-auto pt-8 pb-8 mt-12">
        <h2 className="lg:text-5xl text-4xl lg:px-0 px-2 text-center py-12 text-secondary font-bold"> Variety Of Delicious Healthy Meals</h2>
        <Slider {...settings}>
        <div>
            <div  className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-4">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">315 Calories</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">30 Protein</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">34 Carb</p>
                            <p className="text-normal font-medium px-2 text-gray-400">6 Fat</p>
                        </div>
            </div>
        </div>
        <div>
            <div  className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-4">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">315 Calories</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">30 Protein</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">34 Carb</p>
                            <p className="text-normal font-medium px-2 text-gray-400">6 Fat</p>
                        </div>
            </div>
        </div>
        <div>
            <div  className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-4">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">315 Calories</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">30 Protein</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">34 Carb</p>
                            <p className="text-normal font-medium px-2 text-gray-400">6 Fat</p>
                        </div>
            </div>
        </div>
        <div>
            <div  className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-2">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">315 Calories</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">30 Protein</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">34 Carb</p>
                            <p className="text-normal font-medium px-2 text-gray-400">6 Fat</p>
                        </div>
            </div>
        </div>
        <div>
            <div  className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-4">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">315 Calories</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">30 Protein</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">34 Carb</p>
                            <p className="text-normal font-medium px-2 text-gray-400">6 Fat</p>
                        </div>
            </div>
        </div>
            
          
        </Slider>
        
        <button className="px-8 py-3 rounded-3xl bg-primary text-lg hover:bg-secondary text-white flex justify-center mx-auto mt-12">View Menu</button>
      </div>
    );
  }
}
