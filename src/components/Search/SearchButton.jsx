import "./SearchButton.css";
import { Search } from "lucide-react";

function SearchButton({ onClick }) {
  return (
    <button
      className="search-button"
      onClick={onClick}
      aria-label="Open Search"
    >
      <Search size={18} />

      <span>Search</span>

      <div className="search-shortcut">
        Ctrl&nbsp;+&nbsp;K
      </div>
    </button>
  );
}

export default SearchButton;