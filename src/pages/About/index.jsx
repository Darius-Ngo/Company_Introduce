import { WrapAboutPage } from "./styled";

const AboutPage = () => {
  return (
    <div className="page-common">
      <WrapAboutPage>
        <div className="title-main">Heart and Virtue</div>
        <div className="subtitle">Warm heart- Warm hands</div>
        <p>
          We focus on empowering individuals, encouraging them to develop skills
          for daily life and healthy relationships, as well as supporting them
          to boost their confidence every day.
        </p>
        <div className="subtitle">Our vision </div>
        <p>
          We put our hearts, our professional and conscientious care in a
          generation to ensure people live happier, healthier and more
          meaningful lives.
        </p>
        <div className="subtitle">Who are Heart and Virtue together?</div>
        <p>
          We have a strong expertise in supporting people with particularly
          complex needs, including autism, behaviours which may challenge mental
          health conditions and associated complex health needs. We ensure that
          the support we provide is tailored to the person’s needs and we look
          forward to working with you and your teams over the coming months.
          Together, we can continue to exceed expectations and make a real
          difference to the lives of people we support.
        </p>
      </WrapAboutPage>
    </div>
  );
};
export default AboutPage;
