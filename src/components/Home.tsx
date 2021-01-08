import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "./Input";
import ListItem from "./ListItem";
import "../css/masonry.css";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeList } from "../store/home";
import { RootState } from "../store";

const Target = styled.div`
  height: 20px;
`;

const Home = () => {
  const { list, loading } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();

  const page = useRef<number>(1);
  const target = useRef<HTMLDivElement>(null);

  const fetchAgain = async (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    observer.unobserve(entry.target);
    page.current++;
    dispatch(fetchHomeList(page.current));
  };

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchAgain(entry, observer);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchHomeList(page.current));
  }, [dispatch]);

  useEffect(() => {
    if (target.current !== null) {
      let observer = new IntersectionObserver(callback);
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
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Masonry>
      <Target ref={target}></Target>
    </>
  );
};

export default Home;
