import { GameCard } from "@/components/game-card";

const games = [
  {
    id: 1,
    title: "Elden Ring",
    genre: "Action RPG",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 2,
    title: "Hollow Knight",
    genre: "Metroidvania",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 3,
    title: "Fortnite",
    genre: "Battle Royale",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 4,
    title: "Destiny 2",
    genre: "FPS",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 5,
    title: "Counter Strike 2",
    genre: "FPS",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 6,
    title: "Apex Legends",
    genre: "Battle Royale",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 7,
    title: "Little Nightmares",
    genre: "Horror",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: true,
  },
  {
    id: 8,
    title: "Dead by Daylight",
    genre: "Horror",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 9,
    title: "Grand Theft Auto V",
    genre: "Action",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: true,
  },
  {
    id: 10,
    title: "Helldivers",
    genre: "Shooter",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: true,
  },
  {
    id: 11,
    title: "Fallout 4",
    genre: "RPG",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: false,
  },
  {
    id: 12,
    title: "Call of Duty: Warzone",
    genre: "Battle Royale",
    price: 119,
    imageUrl: "/game-images/amongus.jpeg",
    isNew: true,
  },
];

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-darkgray">
      <h1 className="text-4xl font-bold w-full mb-16 ">Top Sellers</h1>

      <div className="w-full flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-xl text-muted-foreground font-bold">Genre</span>
          <hr className="w-[1px] h-4 border-0 bg-darkgray my-0 mr-2 ml-1" />

          <select className="text-xl">
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="rpg">RPG</option>
            <option value="fps">FPS</option>
            <option value="horror">Horror</option>
            <option value="battle-royale">Battle Royale</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            imageUrl={game.imageUrl}
            isNew={game.isNew}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button>SEE MORE</button>
      </div>
    </div>
  );
}
