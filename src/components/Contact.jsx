import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaTelegram, FaTwitter, FaTiktok, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const links = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:your@email.com",
    },
    {
      icon: <FaTelegram />,
      label: "Telegram",
      href: "https://t.me/medepiero",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://twitter.com/medepiero",
    },
    {
      icon: <FaTiktok />,
      label: "TikTok",
      href: "https://www.tiktok.com/@medepiero",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-secondary text-white px-4 md:px-12 py-16"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("contact.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {links.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-black text-white border border-white rounded-full px-8 py-4 text-xl hover:bg-white hover:text-black transition duration-300 gap-2 items-center"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>

        <div className="text-sm text-gray-300 mt-8">
          © {currentYear} medepiero · 2D Digital Artist. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
