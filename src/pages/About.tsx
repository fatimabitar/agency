import vid from "../assests/vid.png";
import play from "../assests/play.png";

const About = () => {
  return (
    <section className="container mb-20">
      <div className="about">
        <h2 className="font-bold text-[40px] lg:text-[60px]">
          why should choose us ?
        </h2>
        <p className="text-[16px] lg:text-[20px] lg:mr-20">
          Let's see what makes you have to choose us,
          <br /> it's all in this video.
        </p>
      </div>
      <div className="m-auto z-10 relative">
        <img src={vid} alt="" className="mx-auto"></img>
        <img src={play} alt="" className="play-btn" />
      </div>
    </section>
  );
};

export default About;
