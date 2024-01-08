import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import { testimonials } from "../data";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="overflow-hidden">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="rounded-xl h-[250px] bg-white text-black text-center relative"
        >
          <div>
            <img src={item.img} alt="" className="mx-auto" />
          </div>
          <div>
            <h3 className="text-[18px] font-bold my-2">{item.Name}</h3>
            <h4 className="text-[12px] text-[#555] my-2">{item.job}</h4>
            <p className="text-[14px] my-2 p-3">{item.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComp;
