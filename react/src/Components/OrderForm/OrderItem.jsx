const OrderItem = ({ item }) => {
    const { image, name } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="text-lg font-medium">{name}</h3>
                <div className="card-actions">

                    <input type="checkbox" className="checkbox checkbox-success" id={name} /> <label htmlFor={name}>Add</label>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
