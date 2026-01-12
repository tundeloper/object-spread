import { CardProps } from "@/app/utils/type";
import Image from "next/image";

export default function Card({
  image,
  tag,
  title,
  date,
  author,
  avatar,
}: CardProps) {
  return (
    <div className="group animate-fadeUp">
      {/* Image */}
      <div className="relative h-56 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Tag */}
        {/* <AppleButton>
        {tag}
      </AppleButton> */}
        <span
          className="absolute top-3 left-3 inline-flex items-center justify-center
    px-4 py-1.5
    rounded-full
    text-sm font-medium
    select-none
    text-white
    transition-all duration-300
    backdrop-blur-md
    bg-white/10
    border border-white/20
    shadow-[inset_0_0_0_0.5px_rgba(255, 255, 255, 0.35),_0_1px_2px_rgba(0,0,0,0.25)]
    hover:bg-white/15
    active:bg-white/20
"
        >
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3
          className=" font-semibold leading-snug text-[#05051B]
      transition duration-300
      group-hover:bg-linear-to-r group-hover:from-[#E196FB] group-hover:to-[#9848FF]
      group-hover:bg-clip-text group-hover:text-transparent"
        >
          {title}
        </h3>

        <p className="text-sm text-[#828282] mt-2">{date}</p>

        <div className="flex items-center gap-2 mt-3">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <Image src={avatar} alt={author} width={28} height={28} />
          </div>
          <span className="text-sm text-[#353535]">{author}</span>
        </div>
      </div>
    </div>
  );
}
