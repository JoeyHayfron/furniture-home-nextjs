import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "@/app/images/placeholder-image.jpg";

export interface CollectionItemProps {
  id: string | number;
  name: string;
  price: number;
  img: string;
}

export default function CollectionItem({
  id,
  name,
  price,
  img,
}: CollectionItemProps) {
  return (
    <Link
      href={`/collection/details/${id}`}
      className="flex flex-col items-center h-[410px] w-[320px] "
    >
      <Image
        src={img}
        width={320}
        height={336}
        alt={name}
        placeholder="blur"
        // loader={({ src: PlaceholderImage }) => ""}
        style={{ background: "#000" }}
        blurDataURL="../app/images/placeholder-image.jpg"
        className="hover:shadow-md hover:scale-105"
      />
      <p className="mt-[26px] text-[18px] font-[600]">{name}</p>
      <p className="text-[16px] font-[400]">$ {price}</p>
    </Link>
  );
}
