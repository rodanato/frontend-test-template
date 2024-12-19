import Image from 'next/image'

interface GameCardProps {
  title: string
  genre: string
  price: number
  imageUrl: string
  isNew?: boolean
}

export function GameCard({ title, genre, price, imageUrl, isNew }: GameCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        {isNew && (
          <span className="absolute top-2 left-2">
            New
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="uppercase text-xs text-muted-foreground">
          {genre}
        </div>
        <h3 className="font-medium truncate" title={title}>
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-semibold">${price}</span>
          <button className='w-full'>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

