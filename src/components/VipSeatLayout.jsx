import { useDispatch, useSelector } from "react-redux";

import Steering from "../../src/assets/images/icons/steering.png";
import { seatTypeColors } from "../helpers/asset";
import { updateBookingInformation } from "../redux/slices/BookingInfromationSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const VipSeatLayout = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const dispatch = useDispatch();
  const { gender } = useSelector((state) => state.home);
  const { selectedSeat, bookedSeats } = useSelector(
    (state) => state.bookingInformation
  );

  const rows = 10;
  const seatsPerRow = 3;
  const totalSeats = rows * seatsPerRow;

  // Toggle seat selection
  const toggleSeat = (seatNumber) => {
    let updatedSeats = [...(selectedSeat || [])];
    const seatIndex = updatedSeats.findIndex(
      (seat) => seat.number === seatNumber
    );

    if (seatIndex >= 0) {
      updatedSeats.splice(seatIndex, 1);
    } else {
      updatedSeats.push({ number: seatNumber, type: gender });
    }

    dispatch(updateBookingInformation({ selectedSeat: updatedSeats }));
  };

  return (
    <div className="flex flex-col items-center p-3">
      <h2 className="text-title font-semibold mb-4 bg-pink">
        {t("vip_bus")}
      </h2>

      <div className="bg-gray-100 border border-black p-4 md:p-4 rounded-t-[3rem] rounded-b-3xl shadow-xl grid grid-cols-4 gap-4 pt-10 pb-8 relative w-fit">
        <div className="absolute top-1/2 left-2/3 -translate-x-2/3 -translate-y-1/2 col-span-1 flex items-center justify-center text-gray-500">
          {t("walkway")}
        </div>

        {/* Door */}
        <div className="absolute right-0 top-10 w-1 h-12 bg-gray-400 rounded-lg col-span-2"></div>

        <div className="flex justify-between col-span-4 row-span-1 relative">
          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-lg">
            <img src={Steering} alt="Driver" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center text-gray-500">
            {t("door")}
          </div>
        </div>

        {/* Passenger seats layout */}
        {Array.from({ length: totalSeats }, (_, index) => {
          const seatNumber = index + 1;

          // Check if seat is in selectedSeat
          const selectedSeatData = selectedSeat.find(
            (seat) => seat.number === seatNumber
          );

          // Check if seat is in bookedSeats
          const bookedSeatData = bookedSeats
            .flat()
            .find((seat) => seat.number === seatNumber);

          // Determine final seat state
          const seat = selectedSeatData || bookedSeatData;
          const seatType = seat ? seat.type?.toLowerCase() : "available";
          const isSold = bookedSeatData ? bookedSeatData.sold : false;

          return (
            <div
              key={seatNumber}
              className={`min-w-12 min-h-12 md:w-14 md:h-14 max-w-16 max-h-16 flex items-center justify-center rounded-lg select-none ${
                seatTypeColors[seatType]?.color || "bg-green-400"
              } ${isSold ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              style={{
                gridRow: Math.floor(index / 3) + 2,
                gridColumn: [1, 2, 4, 1][index % 3],
              }}
              onClick={() => !isSold && toggleSeat(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <div className="w-full mt-5">
        <h3 className="text-title text-center mb-2">{t("color_definitions")}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {Object.keys(seatTypeColors).map((type) => (
            <div
              key={type}
              className={`min-w-[40px] text-center px-3 py-2 ${seatTypeColors[type].color} text-white rounded-lg`}
            >
              {t(`${seatTypeColors[type].name.toLowerCase()}`)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipSeatLayout;
