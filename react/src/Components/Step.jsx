import img1 from "../assets/gettting-started-icon1.svg"
import img2 from "../assets/gettting-started-icon2a.svg"
import img3 from "../assets/gettting-started-icon3.svg"

export default function Step() {

    return (
        <div className="bg-[#e6f2e4] py-8 lg:py-24 lg:mt-24">
            <div className="text-2xl lg:mb-6 text-center font-bold tracking-tight text-secondary sm:text-5xl">
                <h1 className="capitalize">
                    Getting started
                </h1>
                <h2> <span className="text-primary">Fitness Dine</span> is as easy as a few steps </h2>
            </div>
            <p className="text-center w-10/12  lg:w-2/4 mx-auto text-sm pt-3 lg:text-xl text-gray-500 font-semibold">The reason we eat unhealthy is because we get lazy to think of something healthy.
                Fitness Dine provides healthy food in Dubai and across all UAE

            </p>
            <div className="w-10/12 mx-auto mt-12 lg:flex justify-between">
                <div className=" text-center pb-6 lg:pb-0">
                    <div className="">
                        <img className="mx-auto" src={img1} alt="" />
                    </div>
                    <h2 className="lg:text-2xl text-xl py-2 lg:py-4 font-bold text-secondary">Choose A Plan</h2>
                    <p className="lg:text-xl text-md text-gray-500 font-semibold w-3/4 mx-auto">Choose your desired plan from our
                        three options</p>
                </div>
                <div className=" text-center pb-12 lg:pb-0">
                    <div className="">
                        <img className="mx-auto" src={img2} alt="" />
                    </div>
                    <h2 className="lg:text-2xl text-xl py-2 lg:py-4 font-bold text-secondary">Create your own</h2>
                    <p className="lg:text-xl text-md text-gray-500 font-semibold w-3/4 mx-auto">Choose your desired plan from our
                        three options</p>
                </div>
                <div className=" text-center">
                    <div className="">
                        <img className="mx-auto" src={img3} alt="" />
                    </div>
                    <h2 className="lg:text-2xl text-xl py-2 lg:py-4 font-bold text-secondary">Doorstep food delivery</h2>
                    <p className="lg:text-xl text-md text-gray-500 font-semibold w-3/4 mx-auto">Choose your desired plan from our
                        three options</p>
                </div>
            </div>


        </div>
    )
}





