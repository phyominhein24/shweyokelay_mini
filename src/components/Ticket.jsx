import { GrLocation, GrMapLocation } from "react-icons/gr";
import {
  setSelectedRoute,
  updateBookingInformation,
} from "../redux/slices/BookingInfromationSlice";
import { useDispatch, useSelector } from "react-redux";

import { FaRegClock } from "react-icons/fa6";
import { HiArrowNarrowDown } from "react-icons/hi";
import { IoBusOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Ticket = ({
  routeId,
  startingPoint,
  endingPoint,
  busType,
  duration,
  price,
  facilities,
  departureTime,
  arrivalTime,
  route,
  layout,
}) => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Set booking information in Redux store
    dispatch(
      setSelectedRoute({
        id: routeId,
        startingPoint,
        endingPoint,
        busType,
        duration,
        price,
        facilities,
        departureTime,
        arrivalTime,
        layout,
      })
    );

    const orders = route?.orders?.map((order) => {
      try {
        const seats = JSON.parse(order.seat); // Parse seat JSON safely
        if (!Array.isArray(seats)) return []; // Ensure it's an array

        return seats.map((seat) => ({
          number: seat?.number ?? null, // Use null if undefined
          type: seat?.type ?? "Unknown", // Use "Unknown" if undefined
          sold: true,
        }));
      } catch (error) {
        console.error("Invalid JSON in order.seat:", order.seat, error);
        return []; // Return empty array if parsing fails
      }
    });

    dispatch(updateBookingInformation({ bookedSeats: orders }));

    navigate("/select");
  };

  return (
    // Tickets
    <div className="w-full flex flex-col pt-2 border border-gray-500 rounded-2xl bg-stone-50 shadow-lg text-title">
      <div className="pb-3 md:pb-0 flex flex-col md:flex-row items-center border-b border-b-gray-400 border-dashed">
        {/* from + to, Duration */}
        <div className="w-full flex-col pb-3 px-3 md:px-0 text-subtitle">
          {/* New */}
          <div className="w-full md:w-[50%]">
            <div className="flex pb-3 items-center">
              <GrLocation
                color="#000"
                size={25}
                className="block customIconWeight w-5 h-5 mr-3"
              />
              <div className="w-[50%]">{startingPoint}</div>
              <div className="text-light-0 grow">{departureTime}</div>
            </div>
            <div className="mb-3">
              <HiArrowNarrowDown className="block customIconWeight w-5 h-4 ml-0" />
            </div>
            <div className="flex pb-3 items-center">
              <GrMapLocation
                color="#000"
                size={25}
                className="block customIconWeight w-5 h-5 mr-3"
              />
              <div className="w-[50%]">{endingPoint}</div>
              <div className="text-light-0 grow">{arrivalTime}</div>
            </div>
          </div>

          <div className="flex pb-3">
            <IoBusOutline
              color="#000"
              size={25}
              className="customIconWeight inline-block w-5 h-5 mr-3"
            />
            <div className="pb-0 w-[50%]">{t("bus_type")}</div>
            {/* {value?.duration} */}
            <span>{busType}</span>
          </div>

          <div className="flex">
            <FaRegClock
              color="#000"
              size={25}
              className="customIconWeight inline-block w-5 h-5 mr-3"
            />
            <div className="pb-0 w-[50%]">{t("estimated_duration")}</div>
            {/* {value?.duration} */}
            <span>{duration}</span>
          </div>
        </div>

        {/* price + button */}
        <div className="px-3 pt-3 w-full md:w-[25%] flex items-center justify-between text-center">
          <p className="text-title font-bold">
            {/* {value?.price} */}
            {price} {t("mmk")}
          </p>
          <button
            type="button"
            onClick={handleBuyClick}
            className="w-fit bg-primary-0 hover:bg-secondary-0 px-10 py-[7px] border-none rounded-sm text-subtitle font-semibold transition-colors duration-400 "
          >
            {t("buy_btn")}
          </button>
        </div>
      </div>

      {/* Facilities */}
      <div className="px-5 md:px-20 py-3 text-sm md:text-title">
        <p className="text-center pb-2">{t("facilities")}</p>

        <div className="flex flex-wrap justify-start gap-2">
          {facilities?.map((facility, index) => {
            return (
              <div
                key={index}
                className="w-fit block px-3 py-1 border border-gray-500 rounded-lg"
              >
                {facility}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  routeId: PropTypes.number.isRequired,
  startingPoint: PropTypes.string.isRequired,
  endingPoint: PropTypes.string.isRequired,
  busType: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  departureTime: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  route: PropTypes.object,
  layout: PropTypes.array,
};

export default Ticket;
