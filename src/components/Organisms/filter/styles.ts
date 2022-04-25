import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  justify-content: center;
  margin-bottom: 50px;

  .booleanButtons {
    width: 150px;
    height: 57px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;

  .switchies {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .dates {
    display: flex;
    width: 50%;
    margin-right: 30px;
    span + span {
      margin-left: 20px;
    }
  }

  .flex {
    display: flex;
    width: 100%;

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      /* background-color: red; */

      .dates {
        /* background-color: green; */
        display: flex;
        justify-content: space-between;
        margin-right: 0px;
        span + span {
          margin-left: 20px;
          /* width: 240px; */
        }
      }
    }

    @media (max-width: 675px) {
      .dates {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        /* background-color: blue; */
        span {
          width: 100%;
          /* background-color: red; */
          .MuiFormControl-root {
            /* background-color: blue; */
            width: 100%;
          }
        }
      }

      .switchies {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
`;
