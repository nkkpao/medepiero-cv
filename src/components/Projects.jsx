import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const projectsData = [
  {
    id: 1,
    titleKey: "projects.p1.title",
    descKey: "projects.p1.description",
  },
  {
    id: 2,
    titleKey: "projects.p2.title",
    descKey: "projects.p2.description",
  },
  {
    id: 3,
    titleKey: "projects.p3.title",
    descKey: "projects.p3.description",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const imageCount = 7;

  return (
    <section
      id="projects"
      className="bg-dark bg-opacity-70 text-soft px-4 md:px-12 py-16 my-12 mx-auto rounded-xl max-w-[1600px] self-center"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-dark bg-opacity-80 p-6 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                {t(project.titleKey)}
              </h3>
              <p className="text-soft text-xl">{t(project.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full mt-12">
          <h3 className="text-3xl font-bold text-soft text-center mb-6">
            {t("projects.imagesTitle")}
          </h3>

          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation, Mousewheel]}
            effect={"coverflow"}
            slidesPerView={"3"}
            centeredSlides={true}
            mousewheel={true}
            loop={true}
            grabCursor={true}
            style={{
              "--swiper-navigation-color": "#fff",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={16}
            navigation
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="max-w-screen-xl mx-auto"
          >
            {Array.from({ length: imageCount }, (_, i) => (
              <SwiperSlide
                key={i}
                className="w-[300px] h-[400px] overflow-hidden cursor-pointer rounded-lg shadow-md flex items-center justify-center"
                onClick={() => setSelectedImage(`/images/image${i + 1}.png`)}
              >
                <img
                  src={`/images/image${i + 1}.png`}
                  alt={`Пример ${i + 1}`}
                  className="object-contain max-w-full max-h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Модальное окно для полноразмерного изображения */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Просмотр"
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
