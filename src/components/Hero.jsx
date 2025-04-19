import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-20 bg-dark bg-opacity-70 my-12 mx-auto rounded-xl max-w-[1600px] self-center"
    >
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t("hero.title")}
        </h2>
        <p className="text-lg md:text-2xl mb-6">{t("hero.subtitle")}</p>
        <a
          href="#contact"
          className="inline-block bg-black text-white border border-white rounded-full px-8 py-4 text-xl hover:bg-white hover:text-black transition duration-300"
        >
          {t("hero.cta")}
        </a>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 w-64 h-64 bg-secondary rounded-xl shadow-xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Ожидаю пока художник закончил иллюстрацию */}
      </motion.div>
    </section>
  );
};

export default Hero;
