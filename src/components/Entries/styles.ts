import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: calc(100vh - 385px);
  @media (max-width: 780px) {
    height: calc(100vh - 325px);
  }
  border-radius: 10px;
  background-color: white;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    }
    grid-gap: 1rem 0.5rem;
  }
  .transactionItem {
    background-color: #669;
    border-radius: 10px;
    width: 15rem;
    height: 6rem;
    display: flex;
    position: relative;
    color: white;

    span {
      position: absolute;
      font-size: 0.8rem;
      top: 0;
      left: 0;
      padding: 3px;
      border-radius: 0 0 10px 0;
      background-color: #99b;
    }

    .left {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .right {
      flex-basis: 70%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;

        flex: 1 0 70%;
      }
      h3 {
        text-align: center;
        flex: 0 1 30%;
      }
    }
  }
`;
