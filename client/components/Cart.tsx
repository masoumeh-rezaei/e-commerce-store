'use client'
import {useRouter, useSearchParams} from "next/navigation";
import {ArrowRight, Trash2} from "lucide-react";
import {useState} from "react";
import ShippingForm from "@/components/ShippingForm";
import PaymentForm from "@/components/PaymentForm";
import { ShippingFormInputs} from "@/types";
import useCartStore from "@/stores/cartStore";


const steps=[
    {
        id:1,
        title:'Shopping Cart'
    }, {
        id:2,
        title:'Shipping Address'
    }, {
        id:3,
        title:'Payment Method'
    },
]

//temporary
// const cartItems :CartItemsType= [
//     {
//         id: 1,
//         name: "Adidas CoreFit T-Shirt",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 39.9,
//         sizes: ["s", "m", "l", "xl", "xxl"],
//         colors: ["gray", "purple", "green"],
//         images: {
//             gray: "/products/1g.png",
//             purple: "/products/1p.png",
//             green: "/products/1gr.png",
//         },
//         quantity:1,
//         selectedSize :'m',
//         selectedColor:'gray',
//     },
//     {
//         id: 2,
//         name: "Puma Ultra Warm Zip",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 59.9,
//         sizes: ["s", "m", "l", "xl"],
//         colors: ["gray", "green"],
//         images: { gray: "/products/2g.png", green: "/products/2gr.png" },
//         quantity:1,
//         selectedSize :'m',
//         selectedColor:'gray',
//     },
//     {
//         id: 3,
//         name: "Nike Air Essentials Pullover",
//         shortDescription:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         description:
//             "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
//         price: 69.9,
//         sizes: ["s", "m", "l"],
//         colors: ["green", "blue", "black"],
//         images: {
//             green: "/products/3gr.png",
//             blue: "/products/3b.png",
//             black: "/products/3bl.png",
//         },
//         quantity:1,
//         selectedSize :'m',
//         selectedColor:'gray',
//     },
// ]
const Cart = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [shippingForm ,setShippingForm]=useState<ShippingFormInputs>()

    const activeStep = parseInt(searchParams.get('step') || '1')
    const {cart,removeFromCart}=useCartStore()
    return (
        <div className={'flex flex-col gap-8 items-center justify-center mt-12'}>
            {/*TITLE*/}
            <h1 className={'text-2xl font-medium'}>Your Shopping Cart</h1>
            {/*STEPS*/}
            <div className={'flex flex-col lg:flex-row items-center gap-8 lg:gap-16'}>
                {steps.map((step) => (
                    <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id=== activeStep ? 'border-gray-800' : " border-gray-200"} `} key={step.id}>
                        <div className={` w-6 h-6 text-white rounded-full flex items-center justify-center ${step.id === activeStep ? 'bg-gray-800' : 'bg-gray-400'}`}>
                            {step.id}
                        </div>
                        <p className={`text-sm font-medium ${step.id=== activeStep ? 'text-gray-800' : " text-gray-400"}`}>{step.title}</p>
                    </div>
                ))}
            </div>
            {/*STEPS AND DETAILS*/}
            <div className={` w-full flex flex-col lg:flex-row gap-16`}>
                {/*STEPS*/}
                <div className={'w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8'}>
                    {
                        activeStep === 1 ? (
                            cart.map((cartItem) => (
                                /*SINGLE CART ITEM*/
                                <div className={'flex items-center justify-between'}  key={cartItem.id + cartItem.selectedSize + cartItem.selectedColor}>
                                    {/*image and detail*/}
                                    <div className={'flex gap-8'}>
                                        {/*IMAGE*/}
                                        <div className={'relative h-32 w-32 rounded-lg overflow-hidden bg-gray-50 '}>
                                            <img src={cartItem.images[cartItem.selectedColor]} alt={cartItem.name}  />
                                        </div>
                                        {/*item details*/}
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm font-medium">{cartItem.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    Quantity: {cartItem.quantity}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Size: {cartItem.selectedSize}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Color: {cartItem.selectedColor}
                                                </p>
                                            </div>
                                            <p className="font-medium">${cartItem.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    {/*delete button*/}
                                    <button
                                        onClick={()=>removeFromCart(cartItem)}
                                        className={'w-8 h-8 hover:bg-red-200 transition-all duration-200 rounded-full bg-red-100 text-red-400 flex items-center justify-center cursor-pointer'}>
                                        <Trash2 className={'w-4 h-4 '}/>
                                    </button>
                                </div>
                            ))
                        ) : activeStep === 2 ? (
                            <ShippingForm setShippingForm={setShippingForm}/>
                        ) : activeStep === 3 ? (
                            shippingForm ? <PaymentForm /> : <p className={'text-sm text-gray-500'}>please fill in the shipping form to continue.</p>
                        ) : null
                    }
                </div>

                {/*DETAILS*/}
                <div className={` w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8`}>
                    <h2 className={'font-semibold'}>Cart Details</h2>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex justify-between '}>
                            <p className={'text-sm text-gray-500'}>SubTotal</p>
                            <p className={' font-medium '}>${cart.reduce((acc,item)=>acc+item.price*item.quantity,0.).toFixed(2)}</p>
                        </div>
                        <div className={'flex justify-between '}>
                            <p className={'text-sm text-gray-500'}>Discount</p>
                            <p className={' font-medium '}>$10</p>
                        </div>
                        <div className={'flex justify-between '}>
                            <p className={'text-sm text-gray-500'}>Shipping fee</p>
                            <p className={' font-medium '}>$10</p>
                        </div>
                        <hr className={'border-gray-200'}/>
                        <div className={'flex justify-between '}>
                            <p className={'text-gray-800'}>Total Number</p>
                            <p className={' font-medium '}>${cart.reduce((acc,item)=>acc+item.price*item.quantity,0.).toFixed(2)}</p>
                        </div>
                    </div>
                    {activeStep===1 &&<button onClick={()=>router.push('/cart?step=2' ,{scroll:false})} className={'w-full flex items-center justify-center  hover:bg-gray-900 transition-all duration-300 bg-gray-800 cursor-pointer text-white rounded-lg p-2 '}>
                        Continue Shopping
                        <ArrowRight className="w-5 h-5" />
                    </button>}
                </div>
            </div>

        </div>
    )
}
export default Cart;