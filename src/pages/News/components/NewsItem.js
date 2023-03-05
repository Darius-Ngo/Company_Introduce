import styled from "styled-components";

const StyledNewsItem = styled.div`
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
    :hover {
      transform: translateY(-10px);
    }
    box-shadow: -1px 1px 4px 1px rgb(0 0 0 / 5%);
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 270px;
    .new-img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 170px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .new-sumary {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      padding: 16px;
      .new-title {
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
      }
      .new-date {
        font-size: 12px;
        line-height: 16px;
        color: #5f6574;
        margin: 5px 0px 16px 0px;
      }
      .new-content {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
`;
const NewsItem = () => {
  return (
    <StyledNewsItem>
      <div className="div-new-item">
        <div className="new-item">
          <div className="new-img">
            <img
              src="https://img.freepik.com/premium-photo/woman-mediacal-nurse-doctor-uniform-sick-online-video-call-webcam_754108-449.jpg?w=2000"
              alt=""
            />
          </div>
          <div className="new-sumary">
            <div className="new-title max-line1">
              <span>How redefining autism could improve research...</span>
            </div>
            <div className="new-date ">Wednesday, 20.07.2022</div>
            <div className="new-content max-line3">
              Autism is typically thought of as a collection of traits:
              restricted interests, repetitive behaviors and difficulty with
              social communication. But by the time those traits can be detected
              and a child diagnosed...
            </div>
          </div>
        </div>
      </div>
    </StyledNewsItem>
  );
};

export default NewsItem;
