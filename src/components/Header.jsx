import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  const menuItems = ["home", "about", "projects", "contact"];

  return (
    <header className="bg-secondary text-white px-4 py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">medepiero</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-accent"
              className="text-soft text-xl hover:text-accent transition cursor-pointer"
            >
              {t(`header.${item}`)}
            </Link>
          ))}
        </nav>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="ml-4 bg-black text-white px-2 py-1 rounded-md text-xl hover:dark transition"
        >
          {t("header.language")}
        </button>

        {/* Mobile menu toggle */}
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary flex flex-col px-4 pt-4 pb-2 space-y-2"
        >
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="block text-white hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              {t(`header.${item}`)}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
