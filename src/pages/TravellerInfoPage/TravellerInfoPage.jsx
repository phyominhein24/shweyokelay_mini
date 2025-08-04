import { GrCalendar, GrLocation, GrMapLocation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AppBar from "../../components/AppBar";
import CountdownTimer from "../../components/CountDownTimer";
import { HiArrowNarrowDown } from "react-icons/hi";
import { PiSeat } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { seatTypeColors } from "../../helpers/asset";
import { townshipData } from "../../helpers/TownshipData";
import { updateBookingInformation } from "../../redux/slices/BookingInfromationSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TravellerInfoPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const dispatch = useDispatch();
  const {
    bookerName,
    phone,
    nrcRegion,
    nrcTownship,
    nrcCitizen,
    nrcNumber,
    specialRequest,
    selectedSeat,
    selectedRoute,
    selectedDate,
  } = useSelector((state) => state.bookingInformation);
  const [errors, setErrors] = useState({});
  const { userType } = useSelector((state) => state.home);
  const navigate = useNavigate();

  // NRC Form
  const [townships, setTownships] = useState([]);
  const regions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  useEffect(() => {
    // getting township
    setTownships(townshipData[nrcRegion] || []);
  }, [dispatch, nrcRegion]);

  const validateForm = () => {
    let newErrors = {};

    if (!bookerName.trim())
      newErrors.bookerName = "Traveller Name is required.";
    if (!phone.trim()) newErrors.phone = "Phone Number is required.";

    if (userType === "local"){
      if (!nrcRegion) newErrors.nrcRegion = "NRC Region is required.";
      if (!nrcTownship) newErrors.nrcTownship = "NRC Township is required.";
      if (!nrcCitizen) newErrors.nrcCitizen = "NRC Citizen Type is required.";
      if (!nrcNumber.trim()) newErrors.nrcNumber = "NRC Number is required.";
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitClicked = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const fullNrc = `${nrcRegion}/${nrcTownship}${nrcCitizen}${nrcNumber}`;
    dispatch(updateBookingInformation({ nrc: fullNrc }));
    navigate("/verify");
  };

  return (
    <>
      <AppBar pageTitle={t("traveller_information")} goTo="/select" />

      {/* Time Left */}
      <div className="mt-3 mb-3 p-3 bg-stone-50 rounded-md shadow-md flex justify-between text-red-600 text-subtitle">
        <div>{t("time_left_message")}</div>
        <div>
          <CountdownTimer />
        </div>
      </div>

      <div className="p-2 mb-3">
        <div>
          <div className="pb-3 text-primary-0 font-semibold text-title">
            {selectedRoute?.busType}
          </div>

          {/* Origin and Destination */}
          <div className="w-full ">
            <div className="w-full flex mb-1 ">
              <GrLocation
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6 mr-3"
              />
              <div className="w-[30%]">{selectedRoute?.startingPoint}</div>
              <div className="grow">
                {selectedRoute?.departureTime}, {selectedDate}
              </div>
            </div>
            <div className="h-5 ml-1.5">
              <HiArrowNarrowDown />
            </div>
            <div className="flex pb-3">
              <GrMapLocation
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6 mr-3"
              />
              <div className="w-[30%]">{selectedRoute?.endingPoint}</div>
              <div className="grow">{selectedRoute?.arrivalTime}</div>
            </div>
          </div>

          {/* Trip Info */}
          <div className="mb-3 flex gap-4">
            <div className="flex items-center">
              <GrCalendar className="inline-block mr-2" />
              <span>{selectedDate}</span>
            </div>
            <div className="flex items-center">
              <RiAccountPinCircleLine className="inline-block mr-2" />
              <span>{userType}</span>
            </div>
            <div className="flex items-center">
              <PiSeat className="inline-block mr-2" />
              <span>{selectedSeat.length} Seat</span>
            </div>
          </div>

          {/* Selected seat */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <div className="w-[40%] font-semibold text-subtitle">
                {t("selected_seat")}
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedSeat &&
                  selectedSeat?.map((seat) => (
                    <p
                      className={`inline-block min-w-[40px] text-center px-3 py-1 border border-gray-500 rounded-lg ${
                        seatTypeColors[seat.type]?.color || "bg-gray-300"
                      }`}
                      key={seat.number}
                    >
                      {seat.number}
                    </p>
                  ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-[40%] font-semibold text-subtitle">
                {t("total_amount")}
              </div>
              <div className="font-semibold text-title">
                {selectedSeat.length * selectedRoute?.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* old */}
      <div className="w-full">
        {/* Traveller Info */}
        <div className="flex flex-col border border-black p-3 md:p-5">
          <div className="w-full">
            <form onSubmit={submitClicked} className="flex flex-col gap-4">
              <p className="mb-5 py-3 border-b border-b-black text-title font-bold text-center">
                {t("traveller_info_form_title")}
              </p>

              {/* Traveller Name */}
              <div className="flex items-center">
                <div className="w-[30%]">
                  <label className="font-semibold">
                    {t("traveller_name")}
                    <span className="text-red-500">&nbsp;*</span>
                  </label>
                </div>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name="bookerName"
                    value={bookerName}
                    placeholder={`${t("traveller_name_placeholder")}`}
                    onChange={(e) =>
                      dispatch(
                        updateBookingInformation({ bookerName: e.target.value })
                      )
                    }
                    className="w-full p-1 border border-stone-500"
                  />
                  {errors.bookerName && (
                    <span className="text-red-500 text-xs">
                      {t("traveller_name_required")}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center">
                <div className="w-[30%]">
                  <label className="font-semibold">
                    {t("phone_number")}
                    <span className="text-red-500">&nbsp;*</span>
                  </label>
                </div>
                <div className="w-[70%]">
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="+959 XXX XXX XXX, +959 XXX XXX XXX"
                    onChange={(e) =>
                      dispatch(
                        updateBookingInformation({ phone: e.target.value })
                      )
                    }
                    className="w-full p-1 border border-stone-500"
                  />
                  {!errors.phone && (
                    <span className="text-black-500 text-body">
                      {t("multi_phone_number")}
                    </span>
                  )}

                  {errors.phone && (
                    <span className="text-red-500 text-xs">
                      {t("phone_number_required")}
                    </span>
                  )}
                </div>
              </div>

              {/* NRC */}
              {userType === "local" && (
                <div className="flex items-center">
                  <div className="w-[30%]">
                    <label className="font-semibold">
                      {t("nrc_number")}
                      <span className="text-red-500">&nbsp;*</span>
                    </label>
                  </div>
                  <div className="w-[70%]">
                    <div className="flex gap-1">
                      {/* region */}
                      <div className="w-fit flex-none">
                        <select
                          id="region"
                          value={nrcRegion}
                          onChange={(e) =>
                            dispatch(
                              updateBookingInformation({
                                nrcRegion: e.target.value,
                              })
                            )
                          }
                          className="p-1 border border-stone-500 bg-transparent"
                        >
                          <option value="" disabled>
                            ရွေးပါ
                          </option>

                          {regions.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Township */}
                      <div className="w-fit flex-none">
                        <select
                          id="code"
                          value={nrcTownship}
                          onChange={(e) =>
                            dispatch(
                              updateBookingInformation({
                                nrcTownship: e.target.value,
                              })
                            )
                          }
                          className="p-1 border border-stone-500 bg-transparent"
                        >
                          <option value="" disabled>
                            ရွေးပါ
                          </option>
                          {townships.length > 0 ? (
                            townships.map((township, index) => (
                              <option key={index} value={township}>
                                {township}
                              </option>
                            ))
                          ) : (
                            <option value="">မရှိပါ</option>
                          )}
                        </select>
                      </div>

                      {/* type */}
                      <div className="w-fit flex-none">
                        <select
                          id="nrcCitizen"
                          value={nrcCitizen}
                          onChange={(e) =>
                            dispatch(
                              updateBookingInformation({
                                nrcCitizen: e.target.value,
                              })
                            )
                          }
                          className="p-1 border border-stone-500 bg-transparent"
                        >
                          <option value="">ရွေးပါ</option>
                          <option value="(နိုင်)">(နိုင်)</option>
                          <option value="(ဧည့်)">(ဧည့်)</option>
                          <option value="(ပြု)">(ပြု)</option>
                        </select>
                      </div>

                      {/* Card no. */}
                      <div className="grow">
                        <input
                          type="text"
                          id="nrcNumber"
                          minLength="6"
                          maxLength="7"
                          value={nrcNumber}
                          onChange={(e) =>
                            dispatch(
                              updateBookingInformation({
                                nrcNumber: e.target.value,
                              })
                            )
                          }
                          className="w-full p-1 border border-stone-500"
                          placeholder="123456"
                        />
                      </div>
                    </div>
                    {errors.nrcNumber && (
                      <span className="text-red-500 text-xs">
                        {t("nrc_number_required")}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Special Request */}
              <div className="flex items-center">
                <div className="w-[30%]">
                  <label className="font-semibold">
                    {t("special_request")}
                  </label>
                </div>
                <div className="w-[70%]">
                  <textarea
                    name="specialRequest"
                    id="specialRequest"
                    value={specialRequest}
                    rows={3}
                    onChange={(e) =>
                      dispatch(
                        updateBookingInformation({
                          specialRequest: e.target.value,
                        })
                      )
                    }
                    className="w-full p-1 border border-stone-500"
                    placeholder={`${t("special_request_placeholder")}`}
                  ></textarea>
                </div>
              </div>

              <div className="w-full flex justify-center text-title pb-5">
                <button
                  type="submit"
                  className="w-full bg-primary-0 hover:bg-secondary-0 px-5 py-2 border-none rounded-md text-subtitle font-semibold transition-colors duration-400 "
                >
                  {t("submit_btn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="mt-3 p-3 bg-stone-50 rounded-md shadow-md">
        <h1 className="text-orange-400 font-semibold text-subtitle">
          {t("warning")}!
        </h1>
        <p>- {t("take_your_nrc")}</p>
        <p>- {t("proceed_your_booking")}</p>
      </div>
    </>
  );
};

export default TravellerInfoPage;
