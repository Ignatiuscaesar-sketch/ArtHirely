import "./searchresultlist.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results }) => {
  // Check if results is undefined or null before accessing it
  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.description} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList;