"use client"
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart"; 

const PageSuccess = () => {
    const router = useRouter();
    const { removeAll } = useCart(); 

    useEffect(() => {
        removeAll();
    }, [removeAll]);

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[300px]">
                    <Image src="/sucess.png" alt="Success" width={200} height={400} className="rounded-lg" />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-2">Gracias de nuevo por confiar en nosotros para satisfacer tu amor por los videojuegos.</p>
                    <p className="my-2 text-center">¡Disfruta de tus juegos!</p>

                    <div className="flex justify-center mt-1">
                        <Button onClick={() => router.push("/")}>Volver al inicio</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;
