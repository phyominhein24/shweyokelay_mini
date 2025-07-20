import { GrLocation, GrMapLocation } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

import AppBar from "../../components/AppBar";
import { BsTicket } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { PiSeatbelt } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { VscNote } from "react-icons/vsc";
import html2canvas from "html2canvas";
import { seatTypeColors } from "../../helpers/asset";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SuccessPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const {
    bookerName,
    phone,
    specialRequest,
    selectedSeat,
    selectedRoute,
    selectedDate,
  } = useSelector((state) => state.bookingInformation);
  const { userType } = useSelector((state) => state.home);

  // Download Ticket
 const divRef = useRef(null);
 const [screenshot, setScreenshot] = useState(null);

 const handleSaveTicket = async () => {
   if (!divRef.current) return;

   try {
     const canvas = await html2canvas(divRef.current, {
       useCORS: true,
       scale: 2,
     });
     const imgData = canvas.toDataURL("image/jpeg", 1.0); 
     setScreenshot(imgData);
     
     if (!screenshot) return;
     const link = document.createElement("a");
     link.href = screenshot;
     link.download = "Shwe-Yote-Lay-Ticket.jpg";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   } catch (error) {
     console.error("Failed to capture div:", error);
   }
 };

 useEffect(()=>{
  handleSaveTicket()
 },[])

  return (
    <>
      <AppBar pageTitle={t("successful_title")} goTo="/verify" />

      {/* to save ticket */}
      <div ref={divRef} className={`${screenshot ? "m-1" : "m-0"}`}>
        <div className="flex justify-center pb-5">
          <img
            src="/images/brand.png"
            alt="Shwe-Yoke-Lay"
            className="w-[40%] h-auto "
          />
        </div>

        <h1 className="font-semibold text-title text-bold-0 text-center py-2">
          {t("successful_thanks_message")}
        </h1>

        {/* Ticket Detail */}
        <div className="flex flex-col border border-black p-3 md:p-5 md:mb-5">
          <p className="mb-5 py-3 border-b border-b-black text-title font-bold text-center">
            T{t("ticket_details")}
          </p>

          {/* ticket */}
          <div className="flex flex-col items-center ">
            {/* from + to */}
            <div className="mb-10 w-full flex justify-between">
              <div className="w-[60%]">
                <div className="pb-5">
                  <GrLocation
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{selectedRoute?.startingPoint}</span>
                </div>
                <div className="border-l-2 border-black ml-3 h-6 mb-5 ">
                  <span className="pl-3 text-stone-500">{t("to")}</span>
                </div>
                <div>
                  <GrMapLocation
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{selectedRoute?.endingPoint}</span>
                </div>
              </div>

              {/* time + bus type */}
              <div className="w-[40%] flex justify-center items-center">
                <div className="w-full text-center">
                  {/* <span className="block text-gray-700 text-title font-bold">
                    Yangon - Taung Gyi
                  </span> */}
                  <span className="block text-title font-bold">
                    {selectedRoute?.busType}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full">
              {/* Departure Date */}
              <div className="pb-5 flex justify-between">
                <div>
                  <IoCalendarClearOutline
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("departure_date")}</span>
                </div>
                <p className="font-bold">{selectedDate}</p>
              </div>
              {/* Boarding Time */}
              <div className="pb-5 flex justify-between">
                <div>
                  <MdOutlineDepartureBoard
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("boarding_time")}</span>
                </div>
                <p className="font-bold">{selectedRoute?.departureTime}</p>
              </div>
              {/* Number of seat*/}
              <div className="pb-5 flex justify-between">
                <div>
                  <PiSeatbelt
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("no_of_seat")}</span>
                </div>
                <p>
                  {selectedSeat?.length} ({userType})
                </p>
              </div>
              {/* Purchased seats */}
              <div className="pb-5 flex justify-between">
                <div>
                  <BsTicket
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("purchased_seat")}</span>
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
              {/* Customer Name */}
              <div className="pb-5 flex justify-between">
                <div>
                  <RiAccountPinCircleLine
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("traveller_name")}</span>
                </div>
                <p>{bookerName}</p>
              </div>
              {/* Phone */}
              <div className="pb-5 flex justify-between">
                <div>
                  <CiMobile3
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("phone_number")}</span>
                </div>
                <p className="font-bold">{phone}</p>
              </div>
              {/* Special Request */}
              <div className="pb-5 flex justify-between">
                <div>
                  <VscNote
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("special_request")}</span>
                </div>
                <p>{specialRequest}</p>
              </div>
            </div>

            {/* total */}
            <div className="w-full flex justify-between items-center text-subtitle border-t border-t-black py-5">
              <div className="">
                <FaMoneyBill
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("total_amount")}</span>
              </div>
              <div className="font-bold">{selectedSeat?.length * 45000}</div>
            </div>

            {/* Note */}
            <div className="w-full py-3 text-bold-0 text-center border-t border-t-gray-400 border-dashed">
              <h1 className="font-semibold text-subtitle">{t("note")}</h1>

              <p className="text-red-500">{t("no_refund")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-5">
        <Link
          to="/"
          className="w-full bg-primary-0 hover:bg-secondary-0 shadow-md hover:shadow-none px-5 py-[10px] border-none rounded-md text-[14px] font-semibold text-center transition-colors duration-400 "
        >
          {t("go_home")}
        </Link>
      </div>

      {/* Buttons */}
      {/* <div className="pt-5 w-full flex gap-3 items-center justify-center text-center">
        <Link
          to="/"
          className="w-[180px] bg-stone-400 hover:bg-stone-300 px-5 py-2 border-none rounded-sm text-subtitle font-semibold transition-colors duration-400 "
        >
          {t("go_home")}
        </Link>
        <button
          type="button"
          onClick={() => handleSaveTicket()}
          className="w-[180px] bg-primary-0 hover:bg-secondary-0 px-5 py-2 border-none rounded-sm text-subtitle font-semibold transition-colors duration-400 "
        >
          {t("save_ticket")}
        </button>
      </div> */}
    </>
  );
};

export default SuccessPage;
