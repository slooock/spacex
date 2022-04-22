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
