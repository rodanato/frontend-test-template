"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { GameCard } from "@/components/game-card";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Game {
  id: number;
  name: string;
  genre: string;
  price: number;
  image: string;
  isNew: boolean;
}

interface Config {
  genre: string;
  page: string;
  totalPages: string;
  genres: string[];
}

function CatalogContent() {
  const config = useRef<Config>({
    genre: "",
    page: "1",
    totalPages: "1",
    genres: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [gamesList, setGames] = useState<Game[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const getGames = useCallback(async () => {
    try {
      const params = getParams();
      const req = await fetch("/api/games?" + params, { cache: "force-cache" });
      const data = await req.json();
      return data;
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 300);
    }
  }, []);

  function getParams() {
    const { genre, page } = config.current;
    return `&genre=${genre}&page=${page}`;
  }

  function updateUrl() {
    const { genre, page } = config.current;
    router.push(`?genre=${genre}&page=${page}`);
  }

  function getUrl() {
    const genre = searchParams.get("genre");
    const page = searchParams.get("page");
    return { page, genre };
  }

  async function requestGames() {
    setIsLoading(true);
    const data = await getGames();
    const newGames = data.games;
    const isOnFirstPage = config.current.page === "1";
    const newValues = isOnFirstPage ? newGames : [...gamesList, ...newGames];
    setGames(newValues);
    setIsLoading(false);
  }

  function mustHideSeeMore(): boolean {
    const { page, totalPages, genre } = config.current;
    return +page === +totalPages || genre !== "";
  }

  function updateConfig(newConfig: Partial<Config>) {
    config.current = {
      ...config.current,
      ...newConfig,
    };

    requestGames();
    updateUrl();
  }

  function seeMore() {
    const newPage = +config.current.page + Number(1);
    updateConfig({ page: newPage.toString() });
  }

  function changeGenre(e: any) {
    const selectedGenre = e.target.value;
    updateConfig({
      page: "1",
      genre: selectedGenre,
    });
  }

  useEffect(
    function onInit() {
      async function getGamesAsync() {
        const { totalPages, availableFilters } = await getGames();
        const { genre } = getUrl();

        updateConfig({
          genres: availableFilters,
          totalPages,
          genre: genre ?? config.current.genre,
          page: "1",
        });
      }

      getGamesAsync();
    },
    [getGames, setGames]
  );

  return (
    <>
      <header className="w-full border-b border-gray">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold w-full mb-16 mt-12 ">
            Top Sellers
          </h1>

          <div className="w-full flex justify-start sm:justify-end">
            <div className="flex items-center gap-2 mb-14">
              <span className="text-xl text-muted-foreground font-bold">
                Genre
              </span>
              <hr className="w-[1px] h-4 border-0 bg-darkgray my-0 mr-2 ml-1" />

              <select
                className="text-xl"
                onChange={changeGenre}
                value={config.current.genre}
              >
                <option value="">All</option>
                {config.current.genres.map((genre, i) => (
                  <option key={`${genre}-${i}`} value={genre.toLowerCase()}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl py-12 text-darkgray">
        {isLoading && config.current.page === "1" ? (
          <div className="w-full flex justify-center py-4">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamesList.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                genre={game.genre}
                price={game.price}
                imageUrl={game.image}
                isNew={game.isNew}
              />
            ))}
          </div>
        )}

        {!mustHideSeeMore() && (
          <div className="flex justify-start mt-8">
            <button
              className="w-full sm:w-32 h-14 rounded-md bg-darkgray text-white"
              onClick={seeMore}
            >
              SEE MORE
            </button>
          </div>
        )}
      </div>
    </>
  );
}


export default function Catalog() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  )
}