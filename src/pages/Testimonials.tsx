import Graphic3 from "../assests/Graphic3.png";
import SliderComp from "../components/SliderComp";
const Testimonials = () => {
  return (
    <section className="container mb-20 relative overflow-x-hidden">
      <img src={Graphic3} alt="" className="absolute right-0" />
      <div className="text-center">
        <h4 className="text-[18px] text-[#FFAD60]">Testimonials</h4>
        <h3 className="font-bold text-[42px]">Our Client Reviews</h3>
      </div>
      <div className="my-20 w-11/12 sm:w-full xl:w-11/12 mx-auto overflow-x-hidden">
        <SliderComp />
      </div>
    </section>
  );
};

export default Testimonials;
