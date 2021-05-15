import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    color: white;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 2px solid #ddd;
    border-bottom: 3px solid #bbb;
    border-left: 3px solid #bbb;
    background: #ddd;
    outline: none;
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    &:focus {
      border-bottom: 3px solid var(--green);
      border-left: 3px solid var(--green);
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green2);
    color: white;
    border-radius: 10px;
    border: 0;
    font-size: 1.5rem;
    transition: 0.2s;
    margin-top: 1.5rem;
    font-weight: 700;
    &:hover {
      background: var(--green);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

interface TypeButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: [
    "rgba(190,252,190, 1)",
    "rgba(190,252,190, 0.3)",
    "rgba(215,252,215, 1)",
  ],
  red: [
    "rgba(217,146,130, 1)",
    "rgba(217,146,130, 0.3)",
    "rgba(217,176,150, 1)",
  ],
};

export const TypeButton = styled.button<TypeButtonProps>`
  flex: 1 0 49%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 4rem;

  border: ${(props) => (props.isActive ? "0" : "1px solid white")};

  background-color: ${(props) =>
    props.isActive ? colors[props.activeColor][0] : "transparent"};

  color: ${(props) => (props.isActive ? "black" : "white")};

  box-shadow: ${(props) =>
    props.isActive ? `0 0 3px 3px ${colors[props.activeColor][1]}` : "none"};

  font-size: 1.5rem;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.isActive ? colors[props.activeColor][2] : "#669"};
  }
  &:active {
    transform: scale(0.95);
  }
  span {
    margin-left: 0.5rem;
  }
  &:first-of-type {
    margin-right: 5px;
  }
  &:last-of-type {
    margin-left: 5px;
  }
`;

export const ValueContainer = styled.div`
  position: relative;
  span {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(0.5px);
    font-size: 1.2rem;
  }
`;
