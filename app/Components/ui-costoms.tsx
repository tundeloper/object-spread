import {
  extendVariants,
  Button as HeroButton,

} from "@heroui/react";


export const Button = extendVariants(HeroButton, {
  variants: {
    variant: {
      link: "text-primary bg-transparent underline",
    },
    spacing: {
      none: "px-0",
      compact: "px-1",
      normal: "px-2",
      wide: "px-4",
    },
  },
  defaultVariants: {
    size: "sm",
    radius: "sm",
    color: "primary",
  },
});