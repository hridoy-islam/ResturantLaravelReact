const OrderList = () => {
    return (
        <div className="overflow-x-auto container mx-auto py-4">
            <table className="table table-sm">
                <thead>
                    <tr className="text-md">
                        <th className="text-lg font-bold text-secondary">Order ID</th>
                        <th className="text-lg font-bold text-secondary">Meal Type</th>
                        <th className="text-lg font-bold text-secondary">Address</th>
                        <th className="text-lg font-bold text-secondary">Payment</th>
                    </tr>
                </thead>
                <tbody className="pt-4">
                    <tr>
                        <td className="text-sm font-medium text-secondary">Keto</td>
                        <td className="text-sm font-medium text-secondary">20 Days a week</td>
                        <td className="text-sm font-medium text-secondary">Littel, Schaden and Vandervort</td>
                        <td className="text-sm font-medium text-secondary">92 AED</td>
                    </tr>
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    );
};

export default OrderList;
