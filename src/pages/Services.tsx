import Graphic1 from "../assests/Graphic1.png";
import { data } from "../data";

const Services = () => {
  return (
    <section className="container mb-20">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-bold text-[35px] lg:text-[60px] mb-8">
            What services <br /> do we offer?
          </h2>
          <p className="text-[16px] lg:text-[20px] mb-8">
            These are some of the services that you will get if <br /> you
            cooperate with us, of course there are many <br /> more.
          </p>
          <a
            href="#"
            className="text-[24px] font-medium text-[#96ceb4] underline"
          >
            See More
          </a>
        </div>
        {/* Services */}
        <div className="columns-1 lg:columns-2 flex-1">
          {data.map((item) => (
            <div key={item.id} className="services pt-10">
              <img src={item.icon} alt="" />
              <h3 className="font-semibold my-6 text-[#FFAD60] text-[24px]">
                {item.title}
              </h3>
              <p className="mb-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={Graphic1} alt="" className=" relative left-[-5%] top-3" />
    </section>
  );
};

export default Services;
