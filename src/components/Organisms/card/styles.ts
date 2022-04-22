import styled from "styled-components";

interface FavoriteProps {
  active: boolean;
}

export const Container = styled.main`
  background-color: var(--background-card);
  display: flex;
  flex-direction: column;
  /* width: 30rem; */
  padding: 15px;
  padding-bottom: 70px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #26292d;
  position: relative;

  height: 300px;

  img {
    width: 10rem;
    height: 10rem;
    margin-right: 20px;
  }

  .content {
    display: flex;
    height: 100%;
    width: 100%;
    .align {
      display: flex;
      align-items: center;
    }
  }
`;

export const Favorite = styled.div<FavoriteProps>`
  position: absolute;
  top: 10px;
  right: 15px;

  button {
    color: var(--ter);
    color: ${(props) => (props.active ? "#1AAADC" : "#3d3d3d")};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 0px;
    margin: 0px;
    font-size: 25px;
  }

  .year {
    margin-top: -11px;
    color: var(--gray-300);
  }

  h3 {
    margin-top: 10px;
  }

  .text {
    /* 
    height: 100%;
    overflow: auto; */
    overflow: auto;
    width: 100%;

    height: 100%;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

export const Status = styled.div<FavoriteProps>`
  /* background-color: var(--green); */
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
  padding: 5px;
  border-radius: 4px;
  font-weight: 500;

  position: absolute;
  bottom: 15px;

  background-color: ${(props) => (props.active ? "#00875f" : "#952020")};
`;
