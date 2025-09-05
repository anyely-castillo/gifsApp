import { useRef, useState } from "react";
import { getGifByQuery } from "../actions/get-gif-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({}); //con el useRef convertimos esto a un hook y lo dejamos dentro de nuestro componente, el useRef sirve para que no se este renderizando cada vez

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]); //el current apunta el objeto de Gif[]
      return;
    }

    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    //props
    gifs,

    //methods
    handleSearch,
    previousTerms,
    handleTermClicked,
  };
};
