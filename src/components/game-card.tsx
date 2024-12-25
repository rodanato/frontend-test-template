import Image from "next/image";

interface GameCardProps {
  name: string;
  genre: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
}

export function GameCard({
  name,
  genre,
  price,
  imageUrl,
  isNew,
}: GameCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border border-[#8f8f8f] p-5">
      <div className="relative aspect-[16/9]">
        <Image src={imageUrl} alt={name} fill className="object-cover rounded-tl-lg rounded-tr-lg" />
        {isNew && <span className="absolute top-2 left-2">New</span>}
      </div>
      <div className="p-4 space-y-3 flex justify-between flex-wrap">
        <div className="uppercase text-base text-mediumgray font-bold">{genre}</div>

        <div className="w-full flex justify-between">
          <h3 className="font-bold truncate text-lg" title={name}>
            {name}
          </h3>
          <span className="font-semibold text-xl">${price}</span>
        </div>

        <button className="h-14 text-base font-bold w-full flex items-center justify-center rounded-md border border-[#8f8f8f]">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
