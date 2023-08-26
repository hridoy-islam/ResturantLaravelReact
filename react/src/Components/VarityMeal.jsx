
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { Component,  } from "react";
import  { useEffect, useState } from "react";
import "./OrderSlider.css"
import axios from "axios";
import Menu from "../Pages/Menu";

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
        {/* {homeMenu?.map((plan, index) => 
                <div key={index} className="shadow-xl shadow-gray p-6 rounded-xl  ">
                        <img className="w-70 mx-auto" src={plan.img} alt="Image"/>
                        <p className="text-xl font-bold py-12 text-center">{plan.name}</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">{plan.calories}  Kcal</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">Protein {plan.protein}g</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">Carbs {plan.carb}g</p>
                            <p className="text-normal font-medium px-3 text-gray-400"> Fat {plan.fat}g</p>
            </div>
                </div>
                )} */}
                {/* <div key={index} className="shadow-xl shadow-gray p-6 rounded-xl  ">
                        <img className="w-70 mx-auto" src={plan.img} alt="Image"/>
                        <p className="text-xl font-bold py-12 text-center">{plan.name}</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">{plan.calories}  Kcal</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">Protein {plan.protein}g</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">Carbs {plan.carb}g</p>
                            <p className="text-normal font-medium px-3 text-gray-400"> Fat {plan.fat}g</p>
            </div>
                </div> */}
        </div>
            
          
        </Slider>
        
        <button className="px-8 py-3 rounded-3xl bg-primary text-lg hover:bg-secondary text-white flex justify-center mx-auto mt-12">View Menu</button>
      </div>
    );
  }
}
