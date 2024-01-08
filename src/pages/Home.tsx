import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import shape1 from "../assests/shape1.png";
import shape2 from "../assests/shape2.png";
import shape3 from "../assests/shape3.png";
import shape4 from "../assests/shape4.png";

const Home = () => {
  return (
    <section className="container mb-20">
      <img src={shape1} className="absolute lg:right-28 top-52 right-6" />
      <img src={shape2} className="absolute lg:right-28 top-[52%] right-6" />
      <img src={shape3} className="absolute lg:left-28 top-52 left-6" />
      <img src={shape4} className="absolute lg:left-28 top-[52%] left-6" />
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
