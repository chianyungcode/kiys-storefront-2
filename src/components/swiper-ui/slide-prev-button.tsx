import { MoveLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="rounded-full h-12 w-12 cursor-pointer bg-white absolute left-0 -translate-x-4 transition-all ease-out duration-300 group-hover:translate-x-4 opacity-0 group-hover:opacity-100 top-[50%] z-40 flex items-center justify-center"
    >
      <MoveLeft className="w-4 h-4" />
    </div>
  );
};

export default SlidePrevButton;
