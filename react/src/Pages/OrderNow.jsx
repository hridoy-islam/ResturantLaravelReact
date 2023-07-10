import OrderForm from '../Components/OrderForm/OrderForm'
import BreadCumb from '../Components/Shared/BreadCumb'
export default function Ordernow() {
    return (
        <>
            <BreadCumb title="Order Now" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            {/* <OrderStep /> */}
            <OrderForm />
        </>
    )
}


