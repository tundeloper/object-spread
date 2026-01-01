import * as icons from "lucide-react";
import { ComponentProps } from "react";
import { Exempt } from "../../utils/type";

export type IconProps = ComponentProps<"svg"> & {
  size?: number;
  color?: string;
  name: IconName;
  className?: string;
};

export type IconName = keyof typeof icons;

export default function Icon(props: Exempt<IconProps, "children">) {
  const LucideIcon = icons[props.name as IconName] as (typeof icons)["Info"];

  return <LucideIcon {...props} />;
}
