

const Subscribe = () => {
    return (
        <div className="container mx-auto py-12 my-24 flex justify-around rounded-xl bg-gray-200" >
            <div>
                <h2 className="text-4xl w-3/4  font-bold pr-24 pb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text-lg" >Get news on our latest products and ongoing updates.</p>
            </div>
            <div className="flex justify-between items-center">
            <input type="email" name="email" className="mt-1 rounded-full px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
                <button className="bg-primary rounded-full ml-[-40px] py-4 text-md px-3 text-white" type="submit">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;