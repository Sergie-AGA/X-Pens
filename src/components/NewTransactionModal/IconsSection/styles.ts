import styled from "styled-components";

export const IconSelection = styled.div`
  margin-top: 1.5rem;

  h3 {
    color: white;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fill, minmax(3.5rem, 1fr));
    }
    grid-gap: 1rem;
    margin-top: 0.5rem;
  }
`;

interface CategoryButtonProps {
  isActive: boolean;
}

export const CategoryButton = styled.button<CategoryButtonProps>`
  width: 5rem;
  height: 5rem;
  border-radius: 10px;
  background-color: ${(props) => (props.isActive ? "#aac" : "transparent")};
  box-shadow: ${(props) =>
    props.isActive ? "0 0 3px 3px rgba(170, 170, 204, 0.3)" : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: stretch;
  border: 1px solid white;
  outline: 0;
  transition: 0.2s;
  @media (max-width: 780px) {
    width: 3.5rem;
    height: 3.5rem;
  }
  &:hover {
    background-color: ${(props) => (props.isActive ? "#aac" : "#669")};
  }
  &:active {
    transform: scale(0.95);
  }
`;
