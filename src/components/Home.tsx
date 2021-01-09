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
  const { list, loading } = useSelector((state: RootState) => state.home.home);
  const dispatch = useDispatch();

  const target = useRef<HTMLDivElement>(null);
  const page = useRef<number>(1);

  const callback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        page.current++;
        dispatch(fetchHomeList(page.current));
      }
    });
  };

  useEffect(() => {
    dispatch(fetchHomeList(page.current));
  }, [dispatch, page]);

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
