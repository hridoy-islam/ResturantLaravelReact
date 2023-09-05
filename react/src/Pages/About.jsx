import BreadCumb from '../Components/Shared/BreadCumb';
import about from '../assets/about.jpg';

const About = () => {
    return (
        <>
            <div>
                <BreadCumb title="About" image={about} />
            </div>
            <div className="lg:py-16 container mx-auto md:py-12 md:px-6 py-9 px-4">
                <div className="w-full">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="text-xl leading-8 text-gray-600 my-4">Welcome to Fitnessdine.com – your partner on the journey to a healthier lifestyle. We're more than just a meal delivery company; we're your solution for convenient, nourishing, and delicious meals that align with your fitness goals.</p>
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
                    {/* <div className="mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">Mission</h2>
                        <p className="text-xl leading-8 my-4 text-white">Our Mission is to make each individual healthier by providing customized meal plans delivered to the doorsteps. We ensure your meals are prepared keeping in mind your eating habits, portion size, calorie requirements, allergies, and other preferences.</p>
                    </div> */}

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >
                            <h2 className="text-2xl font-bold leading-9">Our Mission</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                            At Fitnessdine.com, our mission is to make health and wellness accessible to everyone. We understand that busy schedules and modern lifestyles can often hinder our ability to prioritize nutrition. That's where we step in. We're here to provide you with freshly prepared, balanced meals that are not only good for your body but also your taste buds.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >
                            <h2 className="text-2xl font-bold leading-9">Our Expertise</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                            Backed by a team of experienced chefs, nutritionists, and fitness enthusiasts, we craft meals that are as flavorful as they are wholesome. We believe that healthy eating doesn't have to be bland or restrictive. With a focus on quality ingredients and innovative culinary techniques, we've designed a menu that caters to a variety of dietary preferences and requirements.

                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-secondary p-8 shadow-xl transition hover:border-secondary hover:shadow-secondary"
                        >


                            <h2 className="text-2xl font-bold leading-9">What Sets Us Apart</h2>

                            <p className="text-xl leading-8 my-4 text-white">
                            What sets Fitnessdine.com apart is our commitment to quality, convenience, and customization. We're not just a one-size-fits-all meal delivery service. We offer a range of meal plans that can be tailored to your dietary needs, whether you're looking to lose weight, build muscle, or simply maintain a balanced diet.
                            </p>
                        </a>


                    </div>


                </div>
            </div>
            <div className=" container mx-auto my-12">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Why Choose Fitnessdine.com:</h1>
                    <p className="text-lg font-base leading-8 text-gray-600 my-3">1. Quality Ingredients: We source the freshest ingredients to ensure that every bite you take is bursting with flavor and nutrition.</p>
                    <p className="text-lg font-base leading-8 text-gray-600 my-3">2. 
                    Chef-Curated Menus: Our skilled chefs work tirelessly to create diverse menus that cater to various tastes while meeting your nutritional goals.
                    </p>
                    <p className="text-lg font-base leading-8 text-gray-600 my-3">3. 
                    Convenience: Say goodbye to meal prep and grocery shopping. Our meals are delivered straight to your doorstep, saving you time and effort.
                    </p>
                    <p className="text-lg font-base leading-8 text-gray-600 my-3">4. 
                    Customization: Every body is unique, and so are its nutritional requirements. Our customizable meal plans allow you to choose meals that fit your preferences and needs.
                    </p>
            </div>
            <div className=" container mx-auto my-16">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Join Our Community</h1>
                    <p className="text-lg font-medium leading-8 text-gray-600 my-3">Fitnessdine.com isn't just a meal service; it's a community of individuals who are passionate about health and wellness. We're here to support you on your journey, providing not only nourishing meals but also guidance, tips, and inspiration to help you achieve your fitness aspirations.</p>
            </div>
        </>
    );
};

export default About;



