import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { photos } from "../api";
import { PhotoLists } from "../types";
import Input from "./Input";
import ListItem from "./ListItem";
import "../css/masonry.css";
import Masonry from "react-masonry-css";

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const Target = styled.div`
  height: 20px;
`;

const Home = () => {
  const [list, setList] = useState<PhotoLists[]>([]);
  const [loading, setLoading] = useState(true);

  const page = useRef(1);
  const target = useRef<HTMLDivElement>(null);

  const fetchAgain = async (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    observer.unobserve(entry.target);
    await fetchList();
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

  const fetchList = async () => {
    try {
      const { data } = await photos.getList(page.current);
      setList([...list, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      page.current++;
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    if (target.current !== null) {
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
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Masonry>
      <Target ref={target}></Target>
    </>
  );
};

export default Home;
