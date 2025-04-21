import Link from "next/link";

type BreadCrumbComponentLevelType = {
  id: number | string;
  label: string;
  route: string;
};

type BreadCrumbComponentType = {
  levels: BreadCrumbComponentLevelType[];
};

const BreadCrumbComponent = ({ levels }: BreadCrumbComponentType) => {
  return (
    <div className="flex w-[100%] gap-4 mb-[24px]">
      {levels.map((item, idx) => (
        <>
          {idx !== levels.length - 1 && (
            <Link
              className="font-[family-name:var(--font-poppins)] font-[500] text-[#6C757D] text-[14px]"
              href={item?.route}
            >
              {item?.label}
            </Link>
          )}
          {idx === levels.length - 1 && (
            <span className="font-[family-name:var(--font-poppins)] font-[500] text-[#222222] text-[14px]">
              {item?.label}
            </span>
          )}
          {idx !== levels.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#6C757D"
            >
              <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
            </svg>
          )}
        </>
      ))}
    </div>
  );
};

export default BreadCrumbComponent;
