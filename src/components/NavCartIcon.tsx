import ShoppingCart from "@/app/images/shopping-cart.svg";
import Image from "next/image";

const NavCartIcon = () => {
  return (
    <div className="relative">
      <Image src={ShoppingCart} alt="shopping-cart" className="scale-125" />
      <div className="h-[20px] w-[20px] bg-[#000] rounded-[10px] text-white absolute top-[-10px] text-[10px] text-center right-[-15px] font-bold pt-[2px]">
        10
      </div>
    </div>
  );
};

export default NavCartIcon;
