import {SubmitHandler, useForm} from "react-hook-form";
import {ShippingFormInputs, shippingFormSchema} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

const ShippingForm=({setShippingForm}:{setShippingForm:(data : ShippingFormInputs)=>void})=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
    }= useForm<ShippingFormInputs>({
        resolver:zodResolver(shippingFormSchema)
    })
    const router= useRouter()
    const handleShippingForm  : SubmitHandler<ShippingFormInputs>=(data)=>{
        setShippingForm(data)
        router.push('/cart?step=3',{scroll:false})
    }
    return(
        <div>
            <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(handleShippingForm)}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="name" className={'text-xs text-gray-500 font-medium'}>Name</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="name"   placeholder="Masoomeh Rezaei" {...register('name')} />
                    {errors.name && <p className={'text-red-500 text-xs'}>{errors.name.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="email" className={'text-xs text-gray-500 font-medium'}>Email</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="email"   placeholder="Masoomeh@gmail.com" {...register('email')} />
                    {errors.email && <p className={'text-red-500 text-xs'}>{errors.email.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="phone" className={'text-xs text-gray-500 font-medium'}>Phone Number</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="phone"  placeholder="09106765667" {...register('phone')} />
                    {errors.phone && <p className={'text-red-500 text-xs'}>{errors.phone.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="address" className={'text-xs text-gray-500 font-medium'}>Address</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="address"  placeholder="rey,Fadaeiyan street" {...register('address')} />
                    {errors.address && <p className={'text-red-500 text-xs'}>{errors.address.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="city" className={'text-xs text-gray-500 font-medium'}>City</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="city"   placeholder="Tehran" {...register('city')} />
                    {errors.city && <p className={'text-red-500 text-xs'}>{errors.city.message}</p>}
                </div>
                <button
                    type={"submit"}
                    className={'w-full flex items-center justify-center  hover:bg-gray-900 transition-all duration-300 bg-gray-800 cursor-pointer text-white rounded-lg p-2 '}>
                    Continue Shopping
                    <ArrowRight className="w-5 h-5" />
                </button>
            </form>
        </div>
    )
}
export default ShippingForm;