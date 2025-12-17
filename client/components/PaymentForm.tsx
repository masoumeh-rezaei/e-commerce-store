import {SubmitHandler, useForm} from "react-hook-form";
import {PaymentFormInputs, paymentFormSchema} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";
import { ShoppingCart} from "lucide-react";
import Image from "next/image";

const PaymentForm=()=>{
    const {
        register,
        handleSubmit,
        formState: { errors },
    }= useForm<PaymentFormInputs>({
        resolver:zodResolver(paymentFormSchema)
    })

    const handlePaymentForm  : SubmitHandler<PaymentFormInputs>=()=>{

    }
    return(
        <div>
            <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(handlePaymentForm)}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="cardHolder" className={'text-xs text-gray-500 font-medium'}>Name On Card</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="cardHolder"   placeholder="Masoomeh Rezaei" {...register('cardHolder')} />
                    {errors.cardHolder && <p className={'text-red-500 text-xs'}>{errors.cardHolder.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="cardNumber" className={'text-xs text-gray-500 font-medium'}>Card Number</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="cardNumber"   placeholder="5046 0610 7767 5055" {...register('cardNumber')} />
                    {errors.cardNumber && <p className={'text-red-500 text-xs'}>{errors.cardNumber.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="expirationDate" className={'text-xs text-gray-500 font-medium'}>Experation Date</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="expirationDate"  placeholder="09106765667" {...register('expirationDate')} />
                    {errors.expirationDate && <p className={'text-red-500 text-xs'}>{errors.expirationDate.message}</p>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor="cvv" className={'text-xs text-gray-500 font-medium'}>CVV</label>
                    <input className={'border-b border-gray-200 outline-0 text-sm '} type="text" id="cvv"  placeholder="rey,Fadaeiyan street" {...register('cvv')} />
                    {errors.cvv && <p className={'text-red-500 text-xs'}>{errors.cvv.message}</p>}
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md"/>
                    <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md"/>
                    <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md"/>
                </div>

                <button
                    type={"submit"}
                    className={'w-full flex items-center justify-center  hover:bg-gray-900 transition-all duration-300 bg-gray-800 cursor-pointer text-white rounded-lg p-2 '}>
                    Continue Shopping
                    <ShoppingCart className="w-5 h-5" />
                </button>
            </form>
        </div>
    )
}
export default PaymentForm;