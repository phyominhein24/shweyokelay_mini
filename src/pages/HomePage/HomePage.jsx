import "../../../kbzpay";
import "../../../js-sdk.min.js";

import { fetchToken, getRequest } from "../../helpers/api";
import {
  setEndingPoint,
  setGender,
  setSearchResults,
  setSelectedDate,
  setStartingPoint,
  setUserType,
  swapRoute,
} from "../../redux/slices/HomeSlice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BsArrowDownUp } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import Loading from "../../components/Loading";
import MobileMenu from "../../components/MobileMenu";
import { PiGenderIntersexDuotone } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
// import VConsole from "vconsole";
import { endpoints } from "../../constants/endpoints";
import { format } from "date-fns";
import { mobileMenuToggle } from "../../redux/ShareSlice";
import { setKbzpayToken } from "../../redux/slices/KbzInfoSlice";
import { updateBookingInformation } from "../../redux/slices/BookingInfromationSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const { starting_point, ending_point, selected_date, userType, gender } =
    useSelector((state) => state.home);
  const mobileMenu = useSelector((state) => state.share.mobileMenu);
  const selectedDateObj = selected_date ? new Date(selected_date) : new Date();
  const formattedDate = format(selected_date, "MM/dd/yyyy");

  const kbzpayToken = useSelector((state) => state.kbzpayInfo.kbzpayToken);

  const validateForm = () => {
    let newErrors = {};
    if (!starting_point) newErrors.starting_point = true;
    if (!ending_point) newErrors.ending_point = true;
    if (!selected_date) newErrors.selected_date = true;
    if (!userType) newErrors.userType = true;
    if (!gender) newErrors.gender = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = async () => {
    if (!validateForm()) return;
    const searchParams = new URLSearchParams({
      starting_point,
      ending_point,
      selected_date: formattedDate,
    });

    setLoading(true);
    const result = await getRequest(
      `${endpoints.routes}?${searchParams.toString()}`
    );

    const formattedDate2 = new Date(selected_date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(",", "");

    if (result.status === 200) {
      dispatch(setSearchResults(result?.data?.routes));
      dispatch(updateBookingInformation({ selectedDate: formattedDate2 }));
    }
    setLoading(false);
    navigate("/search");
  };

  const fetchCounters = useCallback(async () => {
    setLoading(true);
    const result = await getRequest(`${endpoints.counters}`);
    if (result.status === 200) {
      setCounters(result.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCounters();
  }, []);

  useEffect(() => {
    dispatch(updateBookingInformation({ selectedSeat: [] }));
  }, [gender, dispatch]);

  const GetSSOString = () => {
    return new Promise((resolve, reject) => {
      try {
        window.ma.callNativeAPI(
          "gethwssostring",
          { merchantAppId: "kpe474a3a5101c7edb1bf8b84ffadb1b" },
          (res) => {
            console.log("ssostring: ", res);
            resolve(res);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  };

  useEffect(() => {
    const fetchSSOString = async () => {
      try {
        const res = await GetSSOString();
        // console.log(res, "res sso string");
        // if (res.xm_string_callback_key) {
        if (true) {
          const data = await fetchToken(res.xm_string_callback_key);
          // const data = await fetchToken("bc9e37e73e52b7595bd362918df274f9070415fe9df08b52cd7bdc8562e1dbd2");
          // console.log('##auto login data', data?.response?.customer_info?.openID)
          dispatch(setKbzpayToken(data?.response?.customer_info?.openID));
          setToken(data.response.customer_info.openID);
          // console.log("hello , hi")
          // console.log("data",data)
          // console.log(data?.response?.customer_info?.openID)
        }
      } catch (error) {
        console.error("Error fetching SSO String or Token:", error);
      }
    };

    fetchSSOString();
  }, []);

  return (
    <div>
      {/* <h1>Token: {token} {kbzpayToken}</h1> */}

      <MobileMenu />

      {loading ? (
        <Loading />
      ) : (
        <>
          <section>
            {/* Brand Name */}
            <div className="flex justify-center pb-4">
              <img
                src="/images/brand.png"
                alt="Shwe-Yoke-Lay"
                className="w-[40%] h-auto "
              />
            </div>

            {/* Hamburger */}
            <div className="p-2 block md:hidden">
              <button
                onClick={() => dispatch(mobileMenuToggle())}
                className="cursor-pointer"
              >
                {mobileMenu ? (
                  <FaTimes size="36" color="#3e3d32" />
                ) : (
                  <GiHamburgerMenu size="36" color="#3e3d32" />
                )}
              </button>
            </div>
          </section>

          {/* Search Form */}
          <section>
            <p className="mt-3 text-title leading-none font-bold">
              {t("travel_with_us_now")}
            </p>

            <div className="pt-5">
              <form className="flex flex-col gap-3 ">
                {/* Starting Point */}
                <div
                  className={`flex gap-3 p-2 border-2 ${
                    errors.starting_point ? "border-red-500" : "border-black"
                  } rounded-md`}
                >
                  <IoLocationOutline size={22} className="text-gray-600" />
                  <select
                    value={starting_point || ""}
                    onChange={(e) => dispatch(setStartingPoint(e.target.value))}
                    className="bg-transparent focus:outline-none w-full hover:cursor-pointer text-inputs"
                  >
                    <option value="" disabled>
                      {t("select_origin")}
                    </option>
                    {counters
                      .filter((counter) => counter.id != ending_point) // Exclude selected ending_point
                      .map((counter) => (
                        <option
                          key={counter.id}
                          value={counter.id}
                          className="text-inputs"
                        >
                          {counter.city}
                        </option>
                      ))}
                  </select>
                </div>
                {/* Destination */}
                <div
                  className={`relative flex gap-3 p-2 border-2 ${
                    errors.ending_point ? "border-red-500" : "border-black"
                  } rounded-md`}
                >
                  <GrMapLocation size={20} className="text-gray-500" />
                  <select
                    value={ending_point || ""}
                    onChange={(e) => dispatch(setEndingPoint(e.target.value))}
                    className="bg-transparent focus:outline-none w-full hover:cursor-pointer text-inputs"
                  >
                    <option value="" disabled className="text-inputs">
                      {t("select_destination")}
                    </option>
                    {counters
                      .filter((counter) => counter.id != starting_point) // Exclude selected starting_point
                      .map((counter) => (
                        <option
                          key={counter.id}
                          value={counter.id}
                          className="text-inputs"
                        >
                          {counter.city}
                        </option>
                      ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => dispatch(swapRoute())}
                    className="w-8 h-8 absolute -top-6 right-5 flex justify-center items-center rounded-full border-2 border-black bg-white"
                  >
                    <BsArrowDownUp />
                  </button>
                </div>
                {/* Date Picker */}
                <div
                  className={`flex gap-3 p-2 border-2 ${
                    errors.selected_date ? "border-red-500" : "border-black"
                  } rounded-md`}
                >
                  <CiCalendarDate size={22} className="text-gray-600" />
                  <DatePicker
                    id="selected_date"
                    name="selected_date"
                    selected={selectedDateObj}
                    onChange={(date) => {
                      dispatch(setSelectedDate(date));
                    }}
                    minDate={new Date()}
                    closeOnScroll={true}
                    className="w-full focus:outline-none hover:cursor-pointer text-inputs"
                  />
                </div>
                {/* User Type */}
                <div className="flex gap-2 p-2 border-2 border-black rounded-md relative items-center">
                  <RiAccountPinCircleLine size={20} className="text-gray-500" />
                  <div className="flex gap-4 w-[70%]">
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="userType"
                        value="local"
                        checked={userType === "local"}
                        onChange={(e) => dispatch(setUserType(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("local")}
                    </label>
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="userType"
                        value="foreigner"
                        checked={userType === "foreigner"}
                        onChange={(e) => dispatch(setUserType(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("foreigner")}
                    </label>
                  </div>
                </div>
                {/* Gender */}
                <div className="flex gap-2 p-2 border-2 border-black rounded-md relative items-center">
                  <PiGenderIntersexDuotone
                    size={20}
                    className="text-gray-500"
                  />
                  <div className="flex gap-4 w-[70%]">
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="gender"
                        value="man"
                        checked={gender === "man"}
                        onChange={(e) => dispatch(setGender(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("man")}
                    </label>
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="gender"
                        value="woman"
                        checked={gender === "woman"}
                        onChange={(e) => dispatch(setGender(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("woman")}
                    </label>
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="gender"
                        value="nun"
                        checked={gender === "nun"}
                        onChange={(e) => dispatch(setGender(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("nun")}
                    </label>
                    <label className="flex items-center gap-1 text-inputs">
                      <input
                        type="radio"
                        name="gender"
                        value="monk"
                        checked={gender === "monk"}
                        onChange={(e) => dispatch(setGender(e.target.value))}
                        className="accent-black focus:outline-none"
                      />
                      {t("monk")}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  className="w-full bg-primary-0 hover:bg-secondary-0 shadow-md px-5 py-2 border-none rounded-md text-subtitle font-semibold"
                >
                  {t("search_btn")}
                </button>
              </form>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
