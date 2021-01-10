import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "./Input";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeList, fetchMoreHomeList } from "../store/home";
import { RootState } from "../store";
import Layout from "./Layout";
import triggerObserver from "../utils/triggerObserver";

const Target = styled.div`
  height: 20px;
`;

const Home = () => {
  const { list, loading } = useSelector((state: RootState) => state.home.home);
  const dispatch = useDispatch();

  const page = useRef<number>(1);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    page.current = 1;
    dispatch(fetchHomeList(page.current));
  }, [dispatch, page]);

  useEffect(() => {
    triggerObserver({
      target: target.current,
      callback: (
        [entry]: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          page.current++;
          dispatch(fetchMoreHomeList(page.current));
        }
      },
    });
  });

  return (
    <>
      <Input />
      {loading ? (
        <></>
      ) : (
        <>
          <Layout>
            {list.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </Layout>
          <Target ref={target}></Target>
        </>
      )}
    </>
  );
};

export default Home;
