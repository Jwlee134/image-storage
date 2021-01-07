import React, { useState } from "react";
import styled from "styled-components";
import { PhotoLists } from "../types";
import Detail from "./Detail";
import ModalPortal from "./ModalPortal";

const Item = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  background-color: white;
  box-shadow: 2px 2px 4px 0 #ccc;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`;

const Img = styled.img`
  width: 100%;
`;

interface IProps {
  item: PhotoLists;
}

const List = ({ item }: IProps) => {
  const [isModal, setIsModal] = useState(false);
  const {
    urls: { small: thumb },
    id,
  } = item;

  const handleClick = () => {
    setIsModal(true);
  };

  return !isModal ? (
    <Item onClick={handleClick}>
      <Img alt={id} src={thumb} />
    </Item>
  ) : (
    <ModalPortal>
      <Detail id={id} />
    </ModalPortal>
  );
};

export default List;
