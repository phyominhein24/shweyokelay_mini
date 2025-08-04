import "../i18n";

import { languageToggle, mobileMenuToggle } from "../redux/ShareSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import Flag from "react-world-flags";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { mobileMenu, language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(mobileMenuToggle());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <>
      <nav>
        {mobileMenu && (
          <div
            ref={menuRef}
            className={`w-[85vw] h-fit fixed z-40 top-44 -translate-x-1/2 left-1/2 bg-stone-200 rounded-md transition-all duration-500 ease-in-out transform ${
              mobileMenu
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="flex flex-col text-subtitle ">
              <Link
                to="/"
                onClick={() => dispatch(mobileMenuToggle())}
                className={`p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 ${
                  location.pathname === "/" ? "text-primary-0 bg-stone-300" : ""
                }`}
              >
                {t("home")}
              </Link>
              <Link
                to="/my-tickets"
                onClick={() => dispatch(mobileMenuToggle())}
                className={`p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 ${
                  location.pathname === "my-tickets"
                    ? "text-primary-0 bg-stone-300"
                    : ""
                }`}
              >
                {t("ticket")}
              </Link>
              <Link
                to="/faqs"
                onClick={() => dispatch(mobileMenuToggle())}
                className={`p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 ${
                  location.pathname === "faqs"
                    ? "text-primary-0 bg-stone-300"
                    : ""
                }`}
              >
                {t("faqs")}
              </Link>
              <Link
                to="/terms"
                onClick={() => dispatch(mobileMenuToggle())}
                className={`p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 ${
                  location.pathname === "terms"
                    ? "text-primary-0 bg-stone-300"
                    : ""
                }`}
              >
                {t("terms_and_conditions")}
              </Link>
              <Link
                to="/about"
                onClick={() => dispatch(mobileMenuToggle())}
                className={`p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 ${
                  location.pathname === "about"
                    ? "text-primary-0 bg-stone-300"
                    : ""
                }`}
              >
                {t("about_us")}
              </Link>
              {/* language */}
              <button
                onClick={() => {
                  dispatch(mobileMenuToggle());
                  dispatch(languageToggle());
                }}
                className="p-5 text-center text-md font-semibold transition-colors duration-400 hover:text-primary-0 hover:bg-stone-300"
              >
                {language === "en" ? (
                  <div>
                    <Flag
                      code="MM"
                      style={{
                        width: 40,
                        height: 20,
                        display: "inline-block",
                        paddingRight: 10,
                      }}
                      alt="Myanmar Flag"
                    />
                    <span>မြန်မာ</span>
                  </div>
                ) : (
                  <div>
                    <Flag
                      code="GB"
                      style={{
                        width: 40,
                        height: 20,
                        display: "inline-block",
                        paddingRight: 10,
                      }}
                      alt="English Flag"
                    />
                    <span>English</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileMenu;
