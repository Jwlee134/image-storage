import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 3px 3px 0 #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const SmallText = styled.div`
  font-size: 10px;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Text>Image Storage</Text>
      </Link>
      <SmallText>Powered By Unsplash API</SmallText>
    </Container>
  );
};

export default Header;
