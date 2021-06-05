import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  @media (min-width: 781px) {
    display: none;
  }

  .button2 {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    border: none;
    outline: none;
    transform: translateY(-50%);
    background-color: var(--green);
    color: white;
    transition: 0.2s;
  }

  .button2:hover {
    background-color: var(--green2);
  }
`;
