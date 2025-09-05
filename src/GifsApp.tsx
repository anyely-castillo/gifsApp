import { CustomHeader } from "./components/CustomHeader";
import { SearchBar } from "./components/SearchBar";
import { PreviousSearches } from "./gifs/Components/PreviousSearches";
import { GifList } from "./gifs/Components/GifList";
import { useGifs } from "./gifs/Components/hooks/useGifs";

export const GiftApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gift"
        description="Descubre y comparte el Gif Perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Busquedas Previas*/}
      <PreviousSearches
        searches={previousTerms}
        onLabelClick={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
