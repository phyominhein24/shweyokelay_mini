import { GrCalendar, GrLocation, GrMapLocation } from "react-icons/gr";
import { capitalize, seatTypeColors } from "../../helpers/asset";
import { resetTimer, startCountdown } from "../../redux/slices/countdownSlice";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "../../components/AppBar";
import { HiArrowNarrowDown } from "react-icons/hi";
import { PiSeat } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import StandardSeatLayout from "../../components/StandardSeatLayout";
import VipSeatLayout from "../../components/VipSeatLayout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import StandardSeatLayout from "../../components/StandardSeatLayout";

const SeatSelectionPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedRoute, selectedSeat } = useSelector(
    (state) => state.bookingInformation
  );
  const { selected_date, userType } = useSelector((state) => state.home);

  const formattedDate = new Date(selected_date)
    .toLocaleDateString("en-GB")
    .split("/")
    .join(".");

  const handleContinue = () => {
    dispatch(resetTimer());
    dispatch(startCountdown());
    navigate("/info");
  };

  return (
    <>
      <AppBar pageTitle={t("select_seat")} goTo="/search" />

      {/* Search Edit Section */}
      <div className="p-2 mb-3">
        <div className="mb-3">
          {/* Origin and Destination */}
          <div className="w-full ">
            <div className="w-full flex mb-1 ">
              <GrLocation
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6 mr-3"
              />
              <div className="w-[30%]">{selectedRoute?.startingPoint}</div>
              <div className="grow">{selectedRoute?.departureTime}</div>
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

          <div className="flex justify-between pb-3 text-primary-0 font-semibold text-title">
            <div>{selectedRoute?.busType}</div>
            <div>
              {selectedRoute?.price} / {t("seat")}
            </div>
          </div>

          {/* Trip Info */}
          <div className="flex gap-4">
            <div className="flex items-center">
              <GrCalendar className="inline-block mr-2" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <RiAccountPinCircleLine className="inline-block mr-2" />
              <span>{capitalize(userType)}</span>
            </div>
            {selectedSeat && (
              <div className="flex items-center">
                <PiSeat className="inline-block mr-2" />
                <span>{selectedSeat?.length} Seat</span>
              </div>
            )}
          </div>
        </div>

        {/* Seat Selection */}
        {selectedRoute?.layout === "2:1" ? (
          <VipSeatLayout />
        ) : (
          <StandardSeatLayout />
        )}

        {/* <StandardSeatLayout /> */}
        {selectedSeat.length > 0 ? (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex items-center">
                <div className="w-[40%] font-semibold text-subtitle">
                  {t("selected_seat")}
                </div>
                <div className="w-[60%] flex flex-wrap gap-2">
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

              <div className="flex items-center mb-3">
                <div className="w-[40%] font-semibold text-subtitle">
                  {t("total_amount")}
                </div>
                <div className="w-[60%] font-semibold text-title">
                  {selectedSeat?.length * selectedRoute?.price}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <button
          // type="submit"
          type="button"
          onClick={handleContinue}
          className="w-full bg-primary-0 hover:bg-secondary-0 px-5 py-[10px] border-none rounded-md text-subtitle font-semibold transition-colors duration-400 "
        >
          {t("continue_btn")}
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default SeatSelectionPage;
