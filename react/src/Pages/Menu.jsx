
import BreadCumb from "../Components/Shared/BreadCumb";

const Menu = () => {
    const plans = [
        {
            id: '1',
            name: 'WEIGHT LOSS',
            image: '',
            price: '200',
        },
        {
            id: '2',
            name: 'WEIGHT GAIN',
            image: '',
            price: '200',
        },
        {
            id: '3',
            name: 'MUSCLES GAIN',
            image: '',
            price: '200',
        },
        {
            id: '4',
            name: 'KETO',
            image: '',
            price: '200',
        },
        {
            id: '5',
            name: 'VEGETARIAN',
            image: '',
            price: '200',
        },
        {
            id: '6',
            name: 'DIABETIC',
            image: '',
            price: '200',
        },
        {
            id: '7',
            name: 'WEIGHT GAIN',
            image: '',
            price: '200',
        },
        {
            id: '8',
            name: 'KETO',
            image: '',
            price: '200',
        },
    ]
    return (
        <div>
            <BreadCumb title="Our Menu" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className="py-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">Meals packed with flavor</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600 text-center">Choose the menu that’s right for you</p>
            </div>
            <div className="grid grid-cols-3 gap-4 container mx-auto text-center py-10">
            {plans.map((plan, index) => 
                <div key={index} className="shadow p-6 hover:bg-gray-50">
                    <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                    <h2 className="text-3xl font-bold my-2">{plan.name}</h2>
                    <h3 className="text-2xl my-2">Starting from</h3>
                    <p className="text-2xl font-bold">{plan.price} AED</p>
                </div>
                )}
            </div>
            
        </div>
    );
};

export default Menu;