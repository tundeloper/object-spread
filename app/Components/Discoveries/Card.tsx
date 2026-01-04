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

        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/50 text-white backdrop-blur">
          {tag}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-purple-600 transition">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">{date}</p>

        <div className="flex items-center gap-2 mt-3">
          <Image
            src={avatar}
            alt={author}
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-sm text-gray-700">{author}</span>
        </div>
      </div>
    </div>
  );
}
