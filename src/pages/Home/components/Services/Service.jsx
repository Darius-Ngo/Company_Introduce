import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
// import TweenOneGroup from "rc-tween-one/lib/TweenOneGroup";
import { CloseOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import React from "react";
import { StyledSevices } from "./styled";
import { Button, Tooltip } from "antd";
import { dataArrayImg, textData } from "../data";

let dataArray = dataArrayImg.map((item, i) => ({ ...item, ...textData[i] }));
class PicDetailsDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "pic-details-demo",
  };

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
    };
  }

  onImgClick = (e, i) => {
    const { picOpen } = this.state;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  };

  onClose = (e, i) => {
    const { picOpen } = this.state;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  };

  onTweenEnd = (i) => {
    const { picOpen } = this.state;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  };

  getDelay = (e) => {
    const i = e.index + (dataArray.length % 4);
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 220;
    const imgHeight = 152;
    const imgBoxWidth = 260;
    const imgBoxHeight = 192;
    return dataArray.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof this.state.picOpen[i] === "boolean";
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter
        ? { width: "100%", height: 350, zIndex: 1 }
        : null;
      const liAnimation = isOpen
        ? { boxShadow: "0 2px 8px rgba(140, 140, 140, .35)" }
        : { boxShadow: "0 0px 0px rgba(140, 140, 140, 0)" };
      let aAnimation = isEnter
        ? {
            delay: 400,
            ease: "easeInOutCubic",
            width: imgWidth,
            height: imgHeight,
            onComplete: this.onTweenEnd.bind(this, i),
            left: imgBoxWidth * (i % 4),
            top: isTop ? imgBoxHeight : 0,
          }
        : null;
      aAnimation = isOpen
        ? {
            ease: "easeInOutCubic",
            left: isRight ? imgBoxWidth * 2 - 10 : 0,
            width: "50%",
            height: 350,
            top: 0,
          }
        : aAnimation;

      // 位置 js 控制；
      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component="li"
          className={isOpen ? "open" : ""}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={(e) => {
              isOpen ? this.onClose(e, i) : this.onImgClick(e, i);
            }}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            {!isOpen && (
              <>
                <Tooltip title={title}>
                  <div className="max-line1 div-img-title">
                    <b className="img-title" style={{ paddingBottom: "8px" }}>
                      {title}
                    </b>
                  </div>
                </Tooltip>
              </>
            )}
            <img
              // onmouseover={() => {}}
              className="img-item-hover"
              src={image}
              alt={""}
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                borderRadius: isOpen ? "0px" : "5px",
              }}
            />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0,
                duration: 0,
                type: "from",
                delay: 400,
              },
              {
                ease: "easeOutCubic",
                type: "from",
                left: isRight ? "50%" : "0%",
              },
            ]}
            leave={{ ease: "easeInOutCubic", left: isRight ? "50%" : "0%" }}
            component=""
          >
            {isOpen && (
              <div
                className={`${this.props.className}-text-wrapper`}
                key="text"
                style={{
                  left: isRight ? "0%" : "50%",
                }}
              >
                <div className="content-title">
                  <h1 style={{ fontSize: "24px" }}>{title}</h1>
                  <CloseOutlined onClick={(e) => this.onClose(e, i)} />
                </div>
                {/* <Icon type="cross" onClick={(e) => this.onClose(e, i)} /> */}
                <em />
                {/* <p
                >
                  {content}
                </p> */}

                <div className="content-service scrollbar style-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                </div>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  render() {
    return (
      <StyledSevices>
        <div>
          <div className={`${this.props.className}-wrapper`}>
            <div className={this.props.className}>
              <QueueAnim
                type="bottom"
                className={`${this.props.className}-title`}
              >
                <h1 key="h1">SERVICES WE PROVIDE</h1>
                <p key="p">Provided by Our Caring Professionals</p>
              </QueueAnim>
              <QueueAnim
                delay={this.getDelay}
                component="ul"
                className={`${this.props.className}-image-wrapper`}
                interval={0}
                type="bottom"
              >
                {this.getLiChildren()}
              </QueueAnim>
            </div>
          </div>
        </div>
      </StyledSevices>
    );
  }
}
export default PicDetailsDemo;
