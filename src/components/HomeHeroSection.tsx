import Image from "next/image";
import leafImage from "../app/images/leaf.svg";
import Button from "@/components/Button";
import ShopNowArrow from "@/app/images/shop-now-arrow.svg";

export default function HomeHeroSection() {
  return (
    <header className="h-[745px] bg-[#ddf3f4] w-full flex relative">
      <div className="h-full w-[50%] z-20">
        <h1 className="text-[14px] font-[300] color-[#222222] mb-[11px] ml-[91px] mt-[69px]">
          Furniture Home
        </h1>
        <h2 className="text-[124px] font-[family-name:var(--font-cormorant)] leading-[123px] ml-[86px] max-w-[491px]">
          Embrace Peaceful Oasis
        </h2>
        <Button
          customStyle={{
            marginLeft: "97px",
            marginTop: "28px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Shop Now <Image src={ShopNowArrow} alt="arrow" />
        </Button>
      </div>
      <div className="absolute h-full w-full flex justify-center">
        <Image
          src={leafImage}
          alt="image-of-leaf"
          className="mix-blend-multiply absolute bottom-[-160px]"
        />
      </div>
      <div className="bg-[url('../app/images/hero-image.webp')] bg-cover h-full w-[50%] z-20"></div>
    </header>
  );
}
