import { ReactNode } from "react";

export default function Button({
  children,
  customStyle,
}: {
  children: ReactNode;
  customStyle?: { [key: string]: any };
}) {
  return (
    <button
      className={`bg-black py-[15px] px-7 rounded-[6px] text-white font-[family-name:var(--font-poppins)] font-[400] text-[14px]`}
      style={customStyle}
    >
      {children}
    </button>
  );
}
