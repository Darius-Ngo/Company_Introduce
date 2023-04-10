import { WrapHeader } from "../../layouts/header/styled";
import { WrapAboutPage } from "./styled";
import bgr from "src/access/img/about_us.png";

const AboutPage = () => {
  return (
    <div className="">
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${bgr})` }}
        >
          <h2>Warm heart - Warms hands</h2>
        </div>
      </WrapHeader>
      <WrapAboutPage className="page-common">
        <div className="title-main">Heart and Virtue</div>
        <div className="subtitle">ABOUT US:</div>
        <div className="content">
          Heart and Virtue is a company dedicated to providing compassionate and
          comprehensive care to individuals with disabilities. Our team of
          highly trained professionals is committed to helping our clients live
          happy, healthy, and fulfilling lives. With our focus on kindness and
          empathy, we strive to create a warm and welcoming environment for
          everyone we work with. Our slogan, "Warm heart, warm hands," reflects
          our belief that a caring and supportive approach is the key to helping
          people with disabilities thrive. Whether you're in need of respite
          care, personal support, or community participation services, Heart and
          Virtue is here to help.
        </div>
        <div className="subtitle mt-20">OUR VISION:</div>
        <div className="content">
          At Heart and Virtue, we believe that everyone deserves to live a
          fulfilling and meaningful life, regardless of their disabilities.
          That's why our vision is to create a world where individuals with
          disabilities are valued and supported, and where they have access to
          the resources and services they need to thrive. We are committed to
          promoting a culture of inclusion, respect, and kindness, and to
          providing compassionate and personalized care to each and every one of
          our clients. With our focus on warmth and empathy, we strive to create
          a welcoming and supportive environment that empowers individuals with
          disabilities to reach their full potential.
        </div>
        <div className="subtitle mt-20">OUR COMMITMENT</div>
        <div className="content">
          Our company is committed to providing personalized support that meets
          each individual's unique needs. We are excited to collaborate with you
          and your team in the upcoming months to achieve our shared goal of
          positively impacting the lives of those we serve. By working together,
          we can exceed expectations and make a meaningful difference in the
          lives of those we support.
        </div>
        <div className="subtitle mt-20">WHO ARE HEART AND VIRTUE TOGETHER?</div>
        <div className="content">
          Our company is highly skilled in providing support to individuals with
          complex needs, which may include autism, mental health conditions, and
          other health-related challenges that can be difficult to manage. We
          are dedicated to providing tailored and compassionate care to ensure
          that each person's unique needs are met.
        </div>
        <div className="content">
          At Heart and Virtue, we are dedicated to providing compassionate and
          diligent care to help individuals live fulfilling and healthy lives.
          We strongly believe in empowering our clients to enhance their daily
          living skills and foster healthy relationships, while also helping
          them build confidence and independence. Our team is committed to
          putting our hearts into every aspect of our work to make a positive
          impact on the lives of those we serve.
        </div>
      </WrapAboutPage>
    </div>
  );
};
export default AboutPage;
