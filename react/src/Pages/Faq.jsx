import BreadCumb from '../Components/Shared/BreadCumb';

const Faq = () => {
    const faqitems = [
        {
            question: 'CAN I CHOOSE MY MENU?',
            answer: 'We offer a set menu of delicious meals that rotates weekly, as well as seasonally.',
        },
        {
            question: 'HOW DO I ADD MY ALLERGIES / PREFERENCES TO MY ORDER?',
            answer: 'After choosing your meal plan in the ordering process, you are able to make certain customizations.',
        },
        {
            question: 'WHERE DO YOU DELIVER?',
            answer: 'We currently deliver across Al Ain, Abu Dhabi, Dubai, Sharjah, Ajman and Ras Al-Khaimah!'
        },
        {
            question: 'HOW DOES THE DELIVERY WORK?',
            answer: 'We deliver meals daily. Every Sunday, Monday, Tuesday, Wednesday, Thursday & Friday between 5-10 pm. There are no deliveries on Saturday.',
        },
        {
            question: 'WHEN SHOULD I CONSUME THE MEALS?',
            answer: 'Food is delivered daily in the evening between 5-10 pm and is to be consumed the following day.',
        },
        {
            question: 'DO YOU HAVE A 7 DAY MEAL-PLAN?',
            answer: 'At the moment, we have 5 and 6 day meal-plan options per week with one day off.'
        },
        {
            question: 'WILL THE FOOD STAY FRESH?',
            answer: 'Fitbar meals have a shelf life of three days, we can guarantee the quality & freshness of all deliveries.',
        },
        {
            question: 'DO YOU DELIVER IN COOLER BAGS?',
            answer: 'Yes, we deliver in a cooler bag for all meal-plans for an additional amount of 80 AED (Refundable)',
        },
        {
            question: 'WHERE CAN I FIND NUTRITIONAL INFORMATION ABOUT YOUR MEALS?',
            answer: 'Each meal has a sticker label with all the nutrition facts.',
        }
        ,
        {
            question: 'HOW ARE THE MEALS PREPARED? IS ANYTHING FRIED?',
            answer: 'Every meal is made from scratch, just like you would prepare in your own home (only in much larger portions). None of our food is fried – our professional chefs typically bakes or steams ingredients to maximize nutrient availability (and taste).',
        },
        {
            question: 'WHAT DO I DO WHEN I RECEIVE MY MEALS?',
            answer: 'Upon receiving your delivery, refrigerate your meals as soon as possible.',
        },
        {
            question: 'DO MY MEALS REQUIRE ANY PREPARATION BEFORE I CAN EAT THEM?',
            answer: 'Our goal is to take the hassle out of healthy eating, so all you have to do is heat and eat. After peeling off the label, simply microwave your meal for 2-3 minutes. You can also reheat your food on the stove or in the oven if you prefer.',
        },
        {
            question: 'HOW MUCH WEIGHT WILL I LOOSE WITH THE LEAN PLAN?',
            answer: 'On average client’s reduce anywhere from 3-7 Kilos per month. However, this really depends on your commitment to the plan and physical exercise.',
        }
    ];
    return (
        <div>
            <BreadCumb title="FAQ" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className='container mx-auto max-w-6xl py-10'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Faq;
