import React, { useState, useRef, useCallback } from "react";
import useSearch from "../hooks/useSearch";
import classes from "../App.module.css";

function Container(): React.ReactNode {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { items, loading, error } = useSearch(pageNumber);
  const myObserver = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (myObserver.current) myObserver.current.disconnect();
      myObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting)
          setPageNumber((prevPage) => prevPage + 1);
      });
      if (node) myObserver.current.observe(node);
    },
    [loading]
  );

  return (
    <div>
      {items.map((book) => {
        if (book.id === items.length)
          return (
            <div
              className={classes.bookTitle}
              key={book.id}
              ref={lastElementRef}
            >
              {book.title}
            </div>
          );
        else
          return (
            <div key={book.id} className={classes.bookTitle}>
              {book.title}
            </div>
          );
      })}
      {loading && <div className={classes.loader}></div>}
      {error && <>Error</>}
    </div>
  );
}

export default Container;
