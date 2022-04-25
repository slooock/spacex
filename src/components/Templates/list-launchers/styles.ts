import styled from "styled-components";

export const List = styled.main`
  display: grid;
  grid-template-columns: 30rem 30rem;
  justify-content: center;
  grid-gap: 15px;
`;

export const GroupButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  button + button {
    margin-left: 20px;
  }
`;

export const LottieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  span {
    margin-top: -15px;
  }
  div {
    height: 100px !important;
    width: 100px !important;
  }
`;
