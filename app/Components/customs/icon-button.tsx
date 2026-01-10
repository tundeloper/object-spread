import { Button, ButtonProps } from "@heroui/react";
// import { Exempt } from "../../utils/type";
import Image from "next/image";
// import { IconProps } from "./icon";
import right from "@/app/assets/arrow-right.svg";
import { ReactNode } from "react";

export type IconButtonProps = ButtonProps & {
  // iconProps?: Exempt<IconProps, "name"> & {
  title?: ReactNode;
  position?: "start" | "end";
};

export default function IconButton({ title }: IconButtonProps) {
  return (
    <Button
      title={title}
      className="bg-linear-to-r from-[#9848FF] to-[#E196FB] group hover:bg-[#9848FF] text-white cursor-pointer px-3 pr-1 py-0.75 rounded-full transition-colors duration-200 flex gap-2"
      endContent={
        <Image src={right} alt="Object Spread Logo group-hover:translate-x-1" />
      }
    >
      {title}
    </Button>
  );
}
