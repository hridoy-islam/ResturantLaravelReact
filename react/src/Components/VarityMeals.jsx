
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { Component } from "react";
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
    const plans = [
        {
            id: '1',
            name: 'WEIGHT LOSS',
            image: '',
            price: 'Shrimp Penne Pasta',
            cal: '315 Calories',
            pro: '30 Protein',
            crab: '34 Carb',
            fat: '6 Fat'
        },
        {
            id: '2',
            name: 'WEIGHT GAIN',
            image: '',
            price: 'Shrimp Penne Pasta',
            cal: '315 Calories',
            pro: '30 Protein',
            crab: '34 Carb',
            fat: '6 Fat'

        },
        {
            id: '3',
            name: 'MUSCLES GAIN',
            image: '',
            price: 'Shrimp Penne Pasta',
            cal: '315 Calories',
            pro: '30 Protein',
            crab: '34 Carb',
            fat: '6 Fat'
        }
        
    ]
    return (
        <div>
            
            <div className="py-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">Variety Of Delicious Healthy Meals</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 container w-11/12 mx-auto text-center ">
                    <Slider {...settings}>
                {plans.map((plan, index) => 
                    <div key={index}>
                        <div  className="shadow p-6 hover:bg-gray-50">
                        <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                        <p className="text-xl font-bold py-12">{plan.price} AED</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{plan.cal}</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{plan.pro}</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{plan.crab}</p>
                            <p className="text-normal font-medium px-2 text-gray-400">{plan.fat}</p>
                        </div>
                        </div>
                    </div>
                
                    )}</Slider>
                </div>
                <button className="px-6 py-3 rounded-3xl bg-primary text-white flex justify-center mx-auto mt-12">View Menu</button>
            </div>
    );
}
}
