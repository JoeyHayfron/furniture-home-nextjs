"use client";
import React, { useState, useRef, useEffect, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import CollectionItem from "./CollectionItem";
import { INFINITE_SCROLL_VIEW_CHILD_VIEWS } from "@/helpers/constants";

type InfiniteScrollViewProps = {
  baseUrl: string;
  childComponent: INFINITE_SCROLL_VIEW_CHILD_VIEWS;
};

const InfiniteScrollView = ({
  baseUrl,
  childComponent,
}: InfiniteScrollViewProps) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  const fetchMoreData = async () => {
    if (loading) return;
    setLoading(true);

    //Use Rick and Morty API till BE is ready
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        if (!response?.info?.next) setHasMore(false);
        else setHasMore(true);
        setItems([...items, ...response?.results]);
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERROR OCCURRED", error);
      });
  };

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasMore && !loading) {
        setPage(page + 1);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, loading]);

  useEffect(() => {
    //Some function to fetch data
    fetchMoreData();
  }, [page]);

  return (
    <div className="w-[100%] flex flex-col items-center px-[8%]">
      <ul className="flex flex-wrap gap-5">
        {items.map((item: any) => {
          if (
            childComponent === INFINITE_SCROLL_VIEW_CHILD_VIEWS.COLLECTION_ITEM
          )
            return (
              <CollectionItem
                {...item}
                img={item.image}
                name={item.name}
                price="29.99"
              />
            );
        })}
      </ul>
      {loading && (
        <ClipLoader
          color="#000"
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!hasMore && <p>No more items to load</p>}
      {/* Sentinel Element */}
      <div
        ref={observerRef}
        style={{
          height: "20px",
          margin: "20px 0",
          // background: "red",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default InfiniteScrollView;
