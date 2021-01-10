import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 8px;
  position: sticky;
  top: 20px;
  z-index: 1;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SInput = styled.input`
  all: unset;
  background-color: white;
  padding: 10px;
  padding-left: 25px;
  border-radius: 20px;
  width: 35%;
  border: 1px solid #dddddd;
`;

const Input = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    history.push(`/search?term=${value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SInput
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={value}
        />
      </Form>
    </Container>
  );
};

export default Input;
