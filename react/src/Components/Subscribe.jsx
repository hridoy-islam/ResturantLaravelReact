

const Subscribe = () => {
    return (
        <div className="container mx-auto py-12 flex justify-around rounded-xl bg-gray-300" >
            <div>
                <h2 className="text-4xl  font-bold pr-24">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text-lg" >Get news on our latest products and ongoing updates.</p>
            </div>
            <div className="flex justify-between items-center">
            <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                <button className="bg-primary rounded-xl py-2 px-3 text-white" type="submit">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Subscribe;