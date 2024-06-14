import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/shop" className="block">Tienda</Link>
                <Link href="/category/pc" className="block">PC</Link>
                <Link href="/category/ps-5" className="block">Xbox Series S/X</Link>
                <Link href="/category/xbox-series-s-x" className="block">PS5</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;