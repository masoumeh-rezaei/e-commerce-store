import { create } from 'zustand'
import {cartStoreActionType, cartStoreStateType} from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<cartStoreStateType & cartStoreActionType>()(
    persist(
        (set) => ({
            cart: [],
            hasHydrated:false,
            addToCart:(product) => set((state) => {
                const existingIndex=state.cart.findIndex(p=>
                    p.id === product.id &&
                    p.selectedSize === product.selectedSize &&
                    p.selectedColor === product.selectedColor
                )
                if (existingIndex !== -1) {
                    const updateCart = [...state.cart]
                    updateCart[existingIndex].quantity += product.quantity || 1
                    return {cart: updateCart}
                }
                return {
                    cart:[
                        ...state.cart,
                {...product}
                        ]
                }
                }),
            removeFromCart: (product) =>  set((state) => ({ cart: state.cart.filter(p=> !(
                p.id === product.id &&
                    p.selectedSize === product.selectedSize &&
                    p.selectedColor === product.selectedColor
                ))})),
            clearCarts: () =>set({ cart :[]})
        })
    ,
    {
        name: 'cart',
        storage: createJSONStorage(()=>localStorage),
        onRehydrateStorage:()=>(state)=>{
            if(state){
                state.hasHydrated=true;
            }
        }
    }
))

export default useCartStore;
