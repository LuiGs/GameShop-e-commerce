import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductGenero from "@/components/shared/product-genero-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const { removeItem } = useCart()
    return (
        <li className="flex py-6 border-b">
            <ProductImageMinuature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p className="font-bold">{formatPrice(product.attributes.price)}</p>
                    
                    <ProductGenero origin={product.attributes.origin} genero={product.attributes.genero} />

                </div>
                <div>
                    <button
                        className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition text-black")}
                    >
                        <X size={20} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default CartItem;