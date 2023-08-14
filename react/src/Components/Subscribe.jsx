import { useState } from "react";


const Subscribe = () => {
    const [subscribe, setSubscribe] = useState({});
    const handleAddSubscribe = event => {
        event.preventDefault();
        console.log(subscribe)
        
        fetch('https://fitnessdineserver.vercel.app/subscibe', {
                 method: 'POST',
                 headers: {
                'content-type': 'application/json'
            },
                body: JSON.stringify(subscribe)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert('Email added');
                    event.target.reset();
                }
            })
    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newSubs = { ...subscribe }
        newSubs[field] = value;
        setSubscribe(newSubs);
        console.log(newSubs)
    }

    return (
        <div className="container lg:w-10/12 px-6 mx-auto py-12 my-24 lg:flex lg:justify-around rounded-xl bg-primary relative mb-[-100px] z-10" >
            <div className="lg:w-7/12 pl-8">
                <h2 className="text-4xl lg:w-3/4 text-white  font-bold pr-24 pb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text- text-white" >Get news on our latest products and ongoing updates.</p>
            </div>
            <form onClick={handleAddSubscribe} className="flex justify-between items-center lg:w-5/12 lg:mt-0 mt-8">
                <input onBlur={handleInputBlur} type="email" name="email" className="  rounded-full  px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
                <button className="bg-secondary rounded-full ml-[-50px]  py-3.5 text-md font-medium px-8 text-white" type="submit" value="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;