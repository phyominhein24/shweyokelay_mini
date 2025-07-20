import { useDispatch, useSelector } from "react-redux";

import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import PropTypes from "prop-types";
import { mobileMenuToggle } from "../redux/ShareSlice";

const AppBar = ({ pageTitle, goTo }) => {
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state) => state.share.mobileMenu);

  return (
    <div>
      <div className="py-2 flex justify-between items-center">
        {/* Back Button Section */}
        <Link to={goTo}>
          <MdOutlineArrowBack size={24} />
        </Link>

        <div className="text-title font-medium">{pageTitle}</div>

        {/* Hamburger Menu */}
        <div className="p-2 block md:hidden">
          <button
            // onClick={() => dispatch(mobileMenuToggle())}
            className="cursor-pointer"
            onClick={() => dispatch(mobileMenuToggle())}
          >
            {mobileMenu ? (
              <FaTimes size="36" color="#3e3d32" className="inline-block" />
            ) : (
              <GiHamburgerMenu
                size="36"
                color="#3e3d32"
                className="inline-block"
              />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu mobileMenuState={mobileMenu} />
    </div>
  );
};

AppBar.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  goTo: PropTypes.string.isRequired,
};

export default AppBar;
