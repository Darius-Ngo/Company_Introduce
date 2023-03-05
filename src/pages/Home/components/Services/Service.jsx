import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
// import TweenOneGroup from "rc-tween-one/lib/TweenOneGroup";
import { CloseOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom";
import React from "react";
import { StyledSevices } from "./styled";
import { Button, Tooltip } from "antd";

const textData = [
  {
    title: "Supported Independent Living",
    content: `Supported Independent 
    Living is one type of help or supervision with daily tasks to help you live as independently as possible, 
    while building your skills.  
    Our qualified professionals are adept in helping participants with various tasks, 
    irrespective of their disabilities. So, you can expect all-inclusive support from them. 
    Moreover, they will guide you in developing the skills required to accomplish different tasks without requiring additional guidance.`,
  },
  {
    title: "Respite Accommodation",
    content: `Supported Independent 
    Respite, we focus on enabling people with disabilities to be independent and achieve their goals in a supportive environment.
We provide respite accommodation, which is a great place to meet people, enjoy activities and have the support of fully qualified staff to support your daily living needs. Our homes are purpose-built, fully accessible and fitted with appropriate assistive technologies and supported by highly trained and qualified staff.
`,
  },
  {
    title: "Support Coordination",
    content: `At Heart and Virtue, our well-trained and highly qualified Support Coordinators will provide you with support that is impartial and tailored to your individual needs. 
    Your Heart and Virtue Support Coordinator will provide support uniquely suited to you, to build your confidence and capacity to manage your plan going forward
    `,
  },
  {
    title: "Community Participation",
    content: `Take part and go shopping, movies, theatre, swimming, gym, riding, walk along the beach, enjoy a nice coffee, visit clubs and parks, sporting and more ...
 
    We know that people have busy lives and therefore an essential service is supported to access various activities in the community including social and recreational. 
     
    Support is individual and customised to your needs and activity; however, the aim of the support is always to add value to your experience of life and self-determination. Whether it’s going to a doctor’s appointment, getting to work, playing sports or seeing a movie we believe that it is important that people are able to participate fully in life and activities of their choice.
    `,
  },
  {
    title: "Group & Centre-Based Activities",
    content: `Heart and Virtue focus on rendering quality services and excellent support to the community in the country. We aim to lend a helping hand to differently abled people and help them in improving their morality, independence, and mobility through our NDIS social activities. Through our various programs rendered by trained professionals, we cater to the mental and physical well- being of our participants. Hear and Virtue is led by experts from the field that approach and attend to our participants with the utmost care and empathy, meanwhile ensuring that they are helped in all possible ways.
    `,
  },
  {
    title: "Household Tasks",
    content: `Due to their limited mobility, many individuals with disabilities cannot clean their homes on their own. At Heart and Virtue, we offer household help for disabled individuals which includes basic cleaning in kitchens, bedrooms, bathrooms, laundry rooms, and toilets. We take care of all the needs and domestic activities that NDIS participants cannot do on their own. Cleaning and laundry, house maintenance, gardening and landscaping, food preparation, dishwashing, ironing, new linen, banking and shopping, meal delivery, and assistance with specialist equipment are duties that are usually assigned to our team. We help participants in creating and maintaining a healthy, safe, and enjoyable living environment. A tidy home is an essential aspect of ensuring general well-being. Heart and Virtue is here to offer reliable assistance for NDIS household tasks.
    `,
  },
  {
    title: "Medication Management",
    content: `That’s where Heart and Virtue  comes in. Trained caregivers can:
    Provide medication reminders
    Ensure medication directions are followed such as taking with food or a certain time of day
    Check expiration dates
    Provide transportation to pick up prescriptions and over-the-counter medications or to speak with the pharmacist 
    Medication reminders are just one of the many ways Heart and Virtue can help you or a loved one live their best life possible. 
    `,
  },
  {
    title: "Travel & Transport",
    content: `Heart and Virtue provides Travel and Transport Assistance for NDIS participants to achieve their plan goals. Participants generally access funding through NDIS for transport assistance if they can’t use public transport without substantial difficulty due to disability.  
    Travel assistance allows participants to complete daily tasks and meets their need to live a sustainable life.
    Heart and Virtue can help you improve your daily living, including the following tasks:
    Learn to use public transport,
    Go grocery shopping with your Support Worker,
    Visit your local chemist to pick up your prescriptions,
    Attend your appointments,
    Get involved in your community by attending events, groups, or clubs,
    Visit the park or library.
    `,
  },
  {
    title: "Personal Care",
    content: `Care and support with personal needs such as washing or showering, grooming, dressing, walking or mobility, or a companion with personal outings. We provide personalised care that is personal to you. Some examples of personal care services include assistance with:
    Bathing
    Toileting
    Dressing
    Grooming
    Eating and meal prep
    Medication reminders
    Mobility
    `,
  },
  {
    title: "Development Skilled",
    content: `Develop skills which will assist you to build a positive future. Our group day service and post school options offer a wide range of program options which allow you to learn skills, pursue your interests, build confidence and increase your independence.
    Individual Skills Development and Training includes, but are not limited to-
    Public transport training and support
    Money handling skills
    Developing skills for community, social and recreational participation
    Developing skills for road safety
    Developing decision making skills
    Improving social interaction and communication skills
    Improved decision making skills
    Problem solving skills
    Personal hygiene skills
    Literacy and Numeracy skills
    `,
  },
];
let dataArray = [
  { image: "https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png" },
  // { image: "https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png" },
  // { image: "https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png" },
];
dataArray = dataArray.map((item, i) => ({ ...item, ...textData[i] }));
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
                  <h1>{title}</h1>
                  <CloseOutlined onClick={(e) => this.onClose(e, i)} />
                </div>
                {/* <Icon type="cross" onClick={(e) => this.onClose(e, i)} /> */}
                <em />
                <p>{content}</p>
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
