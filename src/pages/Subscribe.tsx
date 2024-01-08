import top from "../assests/top.png";
import bottom from "../assests/bottom.png";
import tele from "../assests/tele.png";
import plus from "../assests/plus.png";
import rings from "../assests/rings.png";

const Subscribe = () => {
  return (
    <section className="container my-20 relative">
      <img
        src={plus}
        alt=""
        className="absolute right-[-50px] bottom-[-75px] z-0"
      />
      <div className="wrapper flex flex-col justify-evenly items-center relative">
        <img src={top} alt="" className="absolute right-0" />
        <img
          src={bottom}
          className="absolute left-10 bottom-0 opacity-25 z-0"
        />
        <img src={tele} className="absolute right-[-5px] top-[-15px] " />
        <img src={rings} className="absolute left-[-50px] top-[-35px] " />
        <p className="text-[25px] lg:text-[33px] font-semibold text-black text-center">
          Subscribe to get information, latest news and other <br /> interesting
          offers about agency
        </p>

        <form className="w-7/12 mx-auto gap-2 flex justify-between items-center z-10">
          <input
            type="email"
            placeholder="Your email."
            className="py-2 px-4 w-full border-2 rounded-lg border-[#000]"
          />
          <input
            type="submit"
            value="subscribe"
            className="btn bg-[#FFAD60] cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
