import { useContext } from 'react';
import PageTitle from '../../Components/Shared/PageTitle';
import { useForm } from 'react-hook-form';
import { userContext } from '../../Contexts/MainContext';
const Profile = () => {
    const user = useContext(userContext)
    console.log(user)
    const { register, handleSubmit, } = useForm();
const onSubmit = data =>{
    console.log(data)
}
    return (
        <div>
            <PageTitle title="Account Details" />

            <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto py-4'>
                <div className="space-y-12 mt-6">
                    <div className="border-b border-gray-900/10 pb-8">
                        <h2 className="text-xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4 my-8">
                        <input {...register("firstName")} type="text" required className="input input-bordered input-primary w-full max-w-xs" placeholder="First Name" />
                        <input {...register("lastName")} type="text" required className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Last Name" />
                        <input {...register("email")} type="email" required className="input input-bordered input-primary w-full max-w-xs" placeholder="Email" />
                    </div>
                    <div className="flex gap-4 mt-4 ">

                        <input {...register("phone")} type="phone" required className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Phone" />
                        <input type="date" {...register("dob")} required className="input input-bordered input-primary w-full max-w-xs" />
                        <select {...register("nationality")} required className="input input-bordered input-primary w-full max-w-xs">
                            <option>Select Nationality</option>
                        </select>
                    </div>
                    {/* <div className="flex gap-4 mt-4">

                    </div> */}
                   
                </form>

                        {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('name')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={user?.user?.email}
                                        disabled={true}
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('email')}

                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="space-y-12 mt-8">
                    <div className="border-b border-gray-900/10 pb-8">
                        <h2 className="text-xl font-semibold leading-7 text-gray-900">Personal Address</h2>


                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-3">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="bill-street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('bill-street-address')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 ">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="bill-city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('bill-city')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="bill-region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('bill-region')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="bill-postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('bill-postal-code')}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="space-y-12 mt-8">
                    <div className="border-b border-gray-900/10 pb-8">
                        <h2 className="text-xl font-semibold leading-7 text-gray-900">Billing Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4">
                            <input {...register("date")} type="date" placeholder='Starting Date' required className="input input-bordered input-accent w-full max-w-xs mt-1" />
                            <select {...register("city")} required placeholder='City' className="input input-bordered input-accent w-full max-w-xs mt-1">
                                <option>City</option>
                                <option value={'dhaka'}>Dhaka</option>
                                <option value={'ctg'}>Ctg</option>
                            </select>
                            <input {...register("address")} type="text" placeholder='Address' required className="input input-bordered input-accent w-full max-w-xs mt-1" />
                    </div>
                    {/* <div className="flex gap-4 mt-4">

                    </div> */}
                    <div className="flex gap-4 mt-8">
                            <input {...register("apartment")} type="text" placeholder='Apartment/Villa Number' required className="input input-bordered input-accent w-full max-w-xs mt-1" />
                        <label className="w-full">
                            <input {...register("gmap")} placeholder='Google Maps Link' type="text" required className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>

                            <input {...register("deliveryinstruction")} placeholder='Delivery Instruction' required type="text" className="input input-bordered input-accent w-full max-w-xs mt-1" />

                    </div>
                </form>

                        {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-3">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('Ship-street-address')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('Ship-city')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('Ship-region')}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        {...register('Ship-postal-code')}

                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">

                    <button
                        type="submit"
                        className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Profile;
