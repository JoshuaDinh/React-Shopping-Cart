import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;
