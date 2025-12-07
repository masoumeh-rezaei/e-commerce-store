'use client'
import {ProductType} from "@/types";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {Minus, Plus, ShoppingCart} from "lucide-react";
import {useState} from "react";
import useCartStore from "@/stores/cartStore";
import toast from "react-hot-toast";

const ProductInteraction =({product,selectedSize,selectedColor}:{
    product:ProductType;
    selectedColor:string;
    selectedSize:string;
})=>{

    const router = useRouter()
    const pathname=usePathname()
    const searchParams=useSearchParams()
    const [quantity,setQuantity]=useState(1)

    const {addToCart}= useCartStore()

    const handleTypeChange =(type:string,value:string) => {
        const params= new URLSearchParams(searchParams.toString());
        params.set(type,value)
        router.push(`${pathname}?${params.toString()}`,{scroll:false});

    }
    const handleQuantityChange=(type:'increment' | 'decrement')=>{
        if(type==='increment'){
            setQuantity(prev=>prev+1)
        }else {
            if(quantity>1){
                setQuantity(prev=>prev-1)
            }
        }
    }

    const handleAddToCart=()=>{
        addToCart(
            {
                ...product,
                quantity,
                selectedSize,
                selectedColor,
            }
        )
        toast.success('Product Added To Cart')

    }
    return(
        <div className={'flex flex-col gap-4 mt-4'}>
            {/*size*/}
            <div className={'flex flex-col gap-2 text-sm'}>
                <span className={'text-gray-500'}>Size</span>
                <div className={'flex  items-center gap-2'}>
                    {product.sizes.map((size)=>(
                        <div
                            onClick={()=>handleTypeChange('size',size)}
                            key={size}
                            className={`cursor-pointer border-1 p-[2px] transition-all duration-300 ${selectedSize === size ?'border-gray-600' :'border-gra-300'}  `}>
                            <div className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${selectedSize === size ?'bg-black text-white' : 'bg-white text-black'}`}>{size.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/*color*/}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Color</span>
                <div className="flex items-center gap-2">
                    {product.colors.map((color) => (
                        <div
                            className={`cursor-pointer border-1 p-[2px] ${
                                selectedColor === color ? "border-gray-300" : "border-white"
                            }`}
                            key={color}
                            onClick={() => handleTypeChange("color", color)}
                        >
                            <div className={`w-6 h-6`} style={{ backgroundColor: color }} />
                        </div>
                    ))}
                </div>
            </div>
            {/*quentity*/}
            <div className={'flex flex-col gap-2 text-sm'}>
                <span className={'text-gray-500'}>Quentity</span>
                <div className="flex items-center gap-2">
                    <button
                        className="cursor-pointer border-1 border-gray-300 p-1"
                        onClick={() => handleQuantityChange("decrement")}
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <span>{quantity}</span>
                    <button
                        className="cursor-pointer border-1 border-gray-300 p-1"
                        onClick={() => handleQuantityChange("increment")}
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>
            {/* BUTTONS */}
            <button
                onClick={handleAddToCart}
                className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
            >
                <Plus className="w-4 h-4" />
                Add to Cart
            </button>
            <button className="ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium">
                <ShoppingCart className="w-4 h-4" />
                Buy this Item
            </button>
        </div>
    )
}
export default ProductInteraction;