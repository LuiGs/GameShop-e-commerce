"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/product"
import { useState } from "react"

export default function Page() {
    const params = useParams()
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug)
    const [filtergenero, setFiltergenero] = useState('')
    const [searchTerm, setSearchTerm] = useState('') // Estado para el término de búsqueda
    const router = useRouter()

    const filteredProducts = result !== null && !loading && (
        filtergenero === '' && searchTerm === ''
            ? result.filter((product: ProductType) => product.attributes.active === true)
            : result.filter((product: ProductType) => {
                const matchesGenero = filtergenero === '' || product.attributes.genero === filtergenero;
                const matchesSearchTerm = searchTerm === '' || product.attributes.productName.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesGenero && matchesSearchTerm && product.attributes.active === true;
            })
    )

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">{result[0].attributes.category.data.attributes.categoryName}</h1>
            )}
            <Separator />

            <div className="flex flex-col sm:flex-row sm:justify-between mt-8">
                <div className="sm:w-1/4 sm:mr-4 mb-0 sm:mb-0">
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        placeholder="Buscar productos..." 
                        className="w-full p-2 mb-0 border border-gray-300 rounded"
                    />
                    <div className="mt-2">
                        <FiltersControlsCategory setFiltergenero={setFiltergenero} />
                    </div>
                </div>
                
                <div className="sm:w-3/4 grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.length > 0 ? (
                            filteredProducts.map((product: ProductType) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p>No hay productos activos con estas características.</p>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
