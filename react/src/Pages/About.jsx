import BreadCumb from '../Components/Shared/BreadCumb';

const About = () => {
    return (
        <>
            <div>
                <BreadCumb title="About Us" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            </div>
            <div className="lg:py-16 container mx-auto md:py-12 md:px-6 py-9 px-4">
                <div className="w-full">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Fitnessdine</h1>
                    <p className="text-xl leading-8 text-gray-600 my-4">At Fitness Dine, we understand the importance of nutrition in achieving your fitness goals. That`s why our team of talented master chefs, known for their culinary expertise, meticulously crafts meals that meet your daily nutrient requirements. We source the freshest natural ingredients and skillfully blend flavors to create delicious, healthy dishes that will tantalize your taste buds. Our chefs are committed to the art of preparing complex yet delectable cuisine that caters to the diverse needs of your body.</p>
                    <p className="text-xl leading-8 text-gray-600 my-4">
                        To support you on your fitness journey, we have a team of dedicated and highly efficient nutritionists who are experts in guiding you through personalized diet plans. They will work closely with you, providing valuable insights and ongoing support every step of the way. Our nutritionists take pride in creating custom meal plans that are tailored to your specific needs, helping you achieve your desired shape and overall wellness.
                    </p>
                    <p className="text-xl leading-8 text-gray-600 my-4">

                        At Fitness Dine, we understand the importance of convenience. That`s why we offer doorstep delivery of your healthy meals, ensuring they reach you in user-friendly packaging. Our delivery staff consists of responsible professionals who are committed to their duties and ensure that your meals are delivered promptly and efficiently.
                    </p>
                    <p className="text-xl leading-8 text-gray-600 my-4">
                        Join us at Fitness Dine and embark on a transformative fitness journey. We are here to support you with our team of world-class chefs, dedicated nutritionists, and reliable delivery staff. Together, we will help you achieve your fitness goals while enjoying delicious, healthy meals every step of the way.
                    </p>
                </div>


            </div>

            <div className="bg-primary text-white">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">Mission</h2>
                        <p className="text-xl leading-8 my-4 text-white">Our Mission is to make each individual healthier by providing customized meal plans delivered to the doorsteps. We ensure your meals are prepared keeping in mind your eating habits, portion size, calorie requirements, allergies, and other preferences.</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >
                            <h2 className="text-2xl font-bold leading-9">Vision</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                                Our Vision is to make the world better by providing proper nutrition. Food plays a vital role in keeping the body healthy. A healthy and energetic body can perform well, do more and achieve more. It's a blessing for individuals and society.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >
                            <h2 className="text-2xl font-bold leading-9">Value</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                                We are committed to providing nutrition-rich fresh meals that can keep the body healthy. Many health challenges are because of the lack of proper nutrients. A well balanced meal can fulfill this gap and provide proper nourishment to the body.
                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >


                            <h2 className="text-2xl font-bold leading-9">Goals</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                                Our Goal is to make the world healthy. The entire world needs help with the right eating and proper body functioning. We are here to help each individual with nutritional gaps by providing the necessary nutrients. Be healthy for yourself and the entire world.
                            </p>
                        </a>


                    </div>


                </div>
            </div>
        </>
    );
};

export default About;



