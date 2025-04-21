import SearchIcon from "@/app/images/search-icon.svg";
import Image from "next/image";

const NavSearch = () => {
  return (
    <div className="flex items-center">
      <input
        className="w-[300px] bg-[#58606627] rounded-tl-md rounded-bl-md py-[7px] px-[10px] text-[13px] outline-none m-0"
        placeholder="Search product"
      />
      <button className="bg-[#000] py-[2px] rounded-tr-md rounded-br-md px-[10px]">
        <Image src={SearchIcon} alt="search" className="scale-75 " />
      </button>
    </div>
  );
};

export default NavSearch;
