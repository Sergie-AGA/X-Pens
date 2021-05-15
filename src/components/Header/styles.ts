import styled from "styled-components";

export const Container = styled.header`
  background: white;
  border-radius: 10px;
  max-width: 1200px;
  margin: 20px auto 1rem;
  padding: 1rem;
  @media (max-width: 780px) {
    border-radius: 0 0 10px 10px;
    margin-top: 0;
  }
`;

export const Segment = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 3rem;
    margin-right: 0.5rem;
  }
`;

export const Totals = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  overflow-x: auto;

  div {
    color: white;
    flex-grow: 1;
    height: 10rem;
    border-radius: 10px;
    background-color: red;
    display: flex;
    flex-direction: column;
    min-width: 280px;

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
    &:first-of-type {
      background-color: var(--green3);
    }
    &:nth-of-type(2) {
      background-color: var(--red);
    }
    &:last-of-type {
      background-color: var(--background);
    }

    h2 {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      font-size: 4rem;
      display: block;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
