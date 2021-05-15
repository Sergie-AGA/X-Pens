import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 780px) {
    display: none;
  }
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0;
  color: white;

  h3 {
    font-size: 2rem;
  }

  span {
    display: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: white;
    background-color: var(--green);
    border: 0;
    border-radius: 10px;
    padding: 0 2rem;
    height: 3rem;
    cursor: pointer;
    transition: 0.2s;
    width: 6rem;

    &:hover {
      width: 160px;
      background-color: var(--green2);
      width: 12rem;
      span {
        margin-left: 0.5rem;
        display: inline-block;
      }
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
