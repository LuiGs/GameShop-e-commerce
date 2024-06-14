"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageError = () => {
    const router = useRouter()

    return (
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/error.png" alt="Error" width={250} height={500} className="rounded-lg" />
                </div>

                <div>
                    <h1 className="text-2xl">No se pudo finalizar la compra D:</h1>
                    <p className="my-3">Revisa los datos ingresados e intentalo de nuevo.</p>
                    <div className="flex justify-center mt-0 space-x-2">
                        <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
                        <Button onClick={() => router.push("/cart")}>Regresar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageError;
