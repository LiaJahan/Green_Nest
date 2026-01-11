import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Nourish Nature, Nurture Life",
    subtitle: "Breathe Fresh Air",
    image:
      "https://i.ibb.co/JjrbG6JQ/road-green-trees-beautiful-landscape-nature-road-green-tree-nice-landscape-nature.jpg",
  },
  {
    id: 2,
    title: "Nature's Beauty, Our Duty ",
    subtitle: "Low Maintenance",
    image:
      "https://i.ibb.co/fYQkCq6H/istockphoto-506856658-612x612.jpg",
  },
  {
    id: 3,
    title: "Plant Dreams, Grow Joy",
    subtitle: "For your future generation's better life",
    image:
      "https://i.ibb.co/TBBLRNwr/project-update-e11a5586a6991fe354f9db00e5ed94e4.webp",
  },
  {
    id: 4,
    title: "We Be-leaf in a Greener Future",
    subtitle: "protecting mother nature",
    image:
      "https://i.ibb.co/5Wwxxt8R/planet-with-tree-it-7023-8397.jpg",
  },
];

const PlantSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      loop={true}
      className="w-full h-[70vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="h-full">
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            
            <div className="absolute inset-0 bg-black/40"></div>

           
            <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PlantSlider;
