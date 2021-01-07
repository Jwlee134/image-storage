import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 8px;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
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
          placeholder="키워드로 검색..."
          onChange={handleChange}
          value={value}
        />
      </Form>
    </Container>
  );
};

export default Input;
