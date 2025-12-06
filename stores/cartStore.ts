import { create } from 'zustand'
import {cartStoreActionType, cartStoreStateType} from "@/types";

const useCartStore = create<cartStoreStateType & cartStoreActionType>((set) => ({
    cart: [],
    addToCart:(product) => set((state) => ({ cart: [...state.cart,product] })),
    removeFromCart: (product) =>  set((state) => ({ cart: state.cart.filter(p=>p.id !== product.id) })),
    clearCarts: () =>set({ cart :[]})
}))

export default useCartStore;
