import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return ( 
        <>
            <div className="mt-4 text-center">
                <h1 className="mt-0 text-4xl font-extrabold upperce upperce mb-3 text-white">BIENVENIDO/A A GAMESHOP</h1>
                <h4 className="mt-0 text-3xl font-extrabold upperce upperce mb-3 text-white">Disfruta de tus juegos favoritos en tu plataforma favorita.</h4>
                <Link href="/shop" className={buttonVariants()}>Comprar</Link>
            </div>
        </>
     );
}
 
export default BannerProduct;
