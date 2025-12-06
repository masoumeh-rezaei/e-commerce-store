'use client'
import {ProductType} from "@/types";
import Link from "next/link";
import Image from "next/image";
import {ShoppingCart} from "lucide-react";
import {useState} from "react";
import useCartStore from "@/stores/cartStore";
import toast from "react-hot-toast";


const ProductCard=({product}:{product:ProductType})=>{
    const [productTypes,setProductTypes]=useState({
        size:product.sizes[0],
        color:product.colors[0],
    })
    const handleProductType=({type,value}:{type:'size'| 'color',value:string})  => {
         setProductTypes((prev)=>({
             ...prev,
             [type]:value,
         }))
    }
    const {addToCart}=useCartStore();

    const handleAddToCart=()=>{
        addToCart({
            ...product,
            quantity:1,
            selectedSize:productTypes.size,
            selectedColor:productTypes.color,
        }),
            toast.success('product added to cart')

    }
    return (
        <div className={'shadow-lg rounded-lg overflow-hidden'}>
           {/*IMAGE*/}
            <Link href={`/products/${product.id}`}>
                <div className={' relative aspect-[2/3]'}>
                    <Image src={product.images[productTypes.color]} alt={product.name} fill  className={'object-cover hover:scale-105 transition-all duration-300'}/>
                </div>
            </Link>
            {/*Product detail*/}
            <div className={'flex flex-col gap-4 p-4'}>
                <h1 className={'font-medium'}>{product.name}</h1>
                <p className={'text-sm text-gray-500'}>{product.shortDescription}</p>
                {/*PRODUCT DETAIL*/}
                <div className={'flex items-center gap-4 text-xs'}>
                    {/*SIZE*/}
                    <div className={'flex flex-col gap-1'}>
                        <span className={'text-gray-500'}>Size</span>
                        <select name={'size'}
                                id={'size'}
                                onChange={e=>handleProductType({type:'size',value:e.target.value})}
                                className={'ring ring-gray-300 rounded-md px-2 py-1'}>
                            {product.sizes.map(size => (
                                <option className={' bg-gray-700 text-white hover:bg-green-400'} key={size} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/*colors*/}
                    <div className={'flex flex-col'}>
                        <span className={'text-gray-500'}>Color</span>
                        <div className={'flex items-center gap-2'}>
                            {product.colors.map(color => (
                                <div className={`cursor-pointer border-1 ${productTypes.color === color ? 'border-gray-400' : 'border-gray-200'} rounded-full p-[1.2px]`}
                                     key={color}
                                     onClick={()=>handleProductType({type:'color',value:color})}
                                >
                                    <div className={'w-[14px] h-[14px] rounded-full'} style={{backgroundColor:color}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/*PRICE AND ADD TO CART*/}
                <div className={'flex items-center justify-between'}>
                    <p className={'font-medium'}>${product.price.toFixed(2)}</p>
                    <button
                        onClick={handleAddToCart}
                        className={'ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2'}>
                        <ShoppingCart  className={'h-4 w-4'}/>
                        Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;