import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-secondary text-white px-4 md:px-12 py-16">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("about.title")}
        </h2>
        <p className="text-2xl text-soft leading-relaxed">
          {t("about.description")}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
