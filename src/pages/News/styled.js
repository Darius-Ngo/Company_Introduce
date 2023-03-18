import styled from "styled-components";

export const StyledNewList = styled.div`
  .news-re {
    /* position: relative;
    top: -220px; */
  }
  .news-one {
    .list-new {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16;
    }
    .div-new-item {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: 10px auto 30px auto;
    }
    .new-item {
      margin-right: 230px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 320px;
      .new-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img {
          /* :hover {
            transform: translateY(-20px);
          } */

          box-shadow: -1px 3px 4px 1px rgb(0 0 0 / 30%);
          width: 80%;
          height: 100%;
          object-fit: cover;
        }
      }
      .new-sumary {
        max-width: 666px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px;
        .new-title {
          font-weight: 600;
          line-height: 27px;
          color: #fff;
          span {
            font-size: 24px !important;
          }
        }
        .new-date {
          font-size: 12px;
          line-height: 16px;
          color: #5f6574;
          margin: 5px 0px 16px 0px;
          color: #fff;
        }
        .new-content {
          font-size: 14px;
          line-height: 16px;
          color: #5f6574;
          color: #fff;
        }
      }
    }
  }
`;
