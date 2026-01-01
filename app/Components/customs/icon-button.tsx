import { Button, ButtonProps, } from "@heroui/react";
import { Exempt } from "../../utils/type";
import Image from "next/image";
import { IconProps } from "./icon";
import right from "@/app/assets/arrow-right.svg";
import { ReactNode } from "react";

export type IconButtonProps = ButtonProps & {
        iconProps?: Exempt<IconProps, "name"> & {
        title?: ReactNode;
		position?: "start" | "end";
	};
};

export default function IconButton({
	title,
}: IconButtonProps) {
	return (
		<Button title="Get in Touch"  className="bg-[#342787] hover:bg-[#4F367C85] text-white cursor-pointer px-3 pr-1 py-0.75 rounded-full transition-colors duration-200 flex gap-3" endContent={
                    <Image src={right} alt="Object Spread Logo"   />
                  }>{title}</Button>
	);
}
