import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 3px 3px 0 #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");
  font-family: "Dancing Script", cursive;
`;

const Header = () => {
  return (
    <Container>
      <Text>Image Hunter</Text>
    </Container>
  );
};

export default Header;
