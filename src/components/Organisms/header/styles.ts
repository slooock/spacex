import styled from "styled-components";

export const Container = styled.main`
  border-bottom: 1px solid var(--border);

  padding: 5px 15px 5px 15px;
  .content {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;
  }

  .menuItems {
    /* background-color: blue; */
    display: flex;
    flex-direction: row;
    align-items: center;

    span + span {
      margin-left: 20px;
    }

    .itemMenu {
      position: relative;

      color: white;
    }
  }
`;
