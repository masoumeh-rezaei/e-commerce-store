import { Suspense } from "react";
import CartClient from "@/components/Cart";

export default function CartPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <CartClient />
        </Suspense>
    );
}
