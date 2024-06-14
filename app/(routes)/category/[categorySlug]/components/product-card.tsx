/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import ProductGeneroOrigin from "@/components/shared/product-genero-origin";
import { useCart } from "@/hooks/use-cart";


type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const router = useRouter()
    const { addItem } = useCart()
    
    return (

        <Link href={`/product/${product.attributes.slug}`}
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                 <ProductGeneroOrigin origin={product.attributes.origin} genero={product.attributes.genero} />
            </div>
            <Carousel

                opts={{
                    align: "start"
                }}
                className="w-full max-w-sm"
            >
                <CarouselContent>
                    {product.attributes.images.data.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                                alt="Image"
                                className="rounded-xl"
                            />
                            <div className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.attributes.slug}`)}
                                        icon={
                                            <Expand size={20} className="text-gray-600" />
                                        }
                                    />
                                    <IconButton onClick={() => addItem(product)}
                                        icon={
                                            <ShoppingCart size={20} className="text-gray-600" />
                                        }
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-2xl text-center">{product.attributes.productName}</p>
            <p className="font-bold text-center">{formatPrice(product.attributes.price)}</p>
        </Link>
    );
}

export default ProductCard;