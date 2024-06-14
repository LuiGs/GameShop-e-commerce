interface ProductGeneroOrigin {
    genero: string,
    origin: string
}

const ProductGeneroOrigin = (props: ProductGeneroOrigin) => {
    const { origin, genero } = props

    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white
             bg-black rounded-full dark:bg-white dark:text-black w-fit">
                {genero}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-red-900 rounded-full w-fit">
                {origin}
            </p>
        </div>
    );
}

export default ProductGeneroOrigin;