import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary">Consigue hasta un -10% en compras que superen los 150000 ARS</h2>
            <h3 className="mt-3 text-1xl font-semibold">-3% en compras que superen los 75000 ARS  o -5% al gastar 100000 ARS .</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-4">
                <Link href="/shop" className={buttonVariants()}>Comprar</Link>
            </div>
        </div>
    );
}

export default BannerDiscount;