import React, { useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import useQuery from "../hooks/useQuery";
import { RootState } from "../store";
import { fetchMoreSearchList, fetchSearchList } from "../store/home";
import Input from "./Input";
import ListItem from "./ListItem";

const Target = styled.div`
  height: 20px;
`;

const Search = () => {
  const term = useQuery() as string;
  const dispatch = useDispatch();

  const page = useRef<number>(2);
  const target = useRef<HTMLDivElement>(null);

  const { searchList, loading } = useSelector(
    (state: RootState) => state.home.search
  );

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch(fetchMoreSearchList({ page: page.current, term }));
        page.current++;
      }
    });
  };

  useEffect(() => {
    dispatch(fetchSearchList({ page: 1, term }));
  }, [dispatch, term]);

  useEffect(() => {
    if (target.current !== null) {
      console.log("Mounted");
      let observer = new IntersectionObserver(callback, {
        rootMargin: "500px",
      });
      observer.observe(target.current);
    }
  });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return loading ? (
    <></>
  ) : (
    <>
      <Input />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {searchList.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Masonry>
      <Target ref={target}></Target>
    </>
  );
};

export default Search;
