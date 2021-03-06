import React, { useState } from "react";
import styled from "styled-components";
import { Photo } from "../types";
import Detail from "./Detail";
import ModalPortal from "./ModalPortal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CloseFontAwesomeIcon } from "../css/detail";

const Item = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
  @media screen and (max-width: 500px) {
    padding: 5px;
  }
  background-color: white;
  box-shadow: 2px 2px 4px 0 #ccc;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    box-shadow: 4px 4px 8px 0 #ccc;
  }
`;

const Img = styled.img`
  width: 100%;
`;

interface IProps {
  item: Photo;
}

const List = ({ item }: IProps) => {
  const [isModal, setIsModal] = useState(false);
  const {
    urls: { small: thumb },
    id,
  } = item;

  const openModal = () => {
    setIsModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <Item onClick={openModal}>
        <Img alt={id} src={thumb} />
      </Item>
      {isModal && (
        <ModalPortal>
          <Detail id={id} setIsModal={setIsModal}>
            <CloseFontAwesomeIcon
              icon={faTimes}
              size="lg"
              onClick={closeModal}
            />
          </Detail>
        </ModalPortal>
      )}
    </>
  );
};

export default List;
