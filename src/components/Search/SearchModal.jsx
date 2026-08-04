import { useEffect, useMemo, useRef, useState } from "react";
import "./SearchModal.css";
import { Search, X } from "lucide-react";
import { searchData } from "./searchData";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchData;

    const q = query.toLowerCase();

    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(q)
        )
      );
    });
  }, [query]);

  const handleClick = (item) => {
    switch (item.type) {
      case "section":
        document.querySelector(item.target)?.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "link":
        window.open(item.url, "_blank");
        break;

      case "download":
        window.open("/Rahul_Raj_Sah_Resume.pdf", "_blank");
        break;

      case "info":
        alert(item.value);
        break;

      case "coming-soon":
        alert("Coming Soon 🚀");
        break;

      default:
        break;
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div
        className="search-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-header">
          <Search size={20} />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="search-results">
          {filteredResults.length === 0 ? (
            <div className="no-results">
              No matching results found.
            </div>
          ) : (
            filteredResults.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className="search-item"
                  onClick={() => handleClick(item)}
                >
                  <Icon size={20} />

                  <div className="search-item-text">
                    <h4>{item.title}</h4>
                    <span>{item.category}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}