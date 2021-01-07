import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { photos } from "../api";
import { APhoto } from "../types";

const Container = styled.div`
  width: 80%;
  background-color: white;
`;

interface IId {
  id: string;
}

const Detail = ({ id }: IId) => {
  const [item, setItem] = useState<APhoto>();
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const { data } = await photos.getOne(id);
      console.log(data);
      setItem(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return loading ? <></> : <Container></Container>;
};

export default Detail;
