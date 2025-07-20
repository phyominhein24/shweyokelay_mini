import "../../../kbzpay"

import { FaMoneyBill, FaTimes } from "react-icons/fa";
import { GrLocation, GrMapLocation } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { ShowToast, StartPay } from "../../helpers/nativeApi";
import { createOrder, postRequest } from "../../helpers/api";
import { useEffect, useState } from "react";

import AppBar from "../../components/AppBar";
import { BsTicket } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import CountdownTimer from "../../components/CountDownTimer";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaIdCardSolid } from "react-icons/lia";
import { LuClock10 } from "react-icons/lu";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { PiSeatbelt } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { VscNote } from "react-icons/vsc";
import { endpoints } from "../../constants/endpoints";
import { format } from "date-fns";
import { seatTypeColors } from "../../helpers/asset";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const VerifyInfoPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const [tAndCRead, setTAandCRead] = useState(false);
  const [modal, setModal] = useState({ visible: false });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    bookerName,
    phone,
    nrc,
    specialRequest,
    selectedSeat,
    selectedRoute,
    selectedDate,
  } = useSelector((state) => state.bookingInformation);

  const kbzpayToken = useSelector((state) => state.kbzpayInfo.kbzpayToken);

  const {
    // selected_date,
    // starting_point,
    // ending_point,
    userType,
    // gender,
    // searchResults,
  } = useSelector((state) => state.home);

  const handleConfirm = async () => {
    if (!tAndCRead) {
      setModal({ visible: true });
      return;
    }

    const formattedDate = format(selectedDate, "MM/dd/yyyy");
    const formData = new FormData();
    formData.append("route_id", selectedRoute?.id);
    formData.append("phone", phone);
    formData.append("kpay_member_id", kbzpayToken),
    formData.append("name", bookerName),
    formData.append("nrc", nrc);
    formData.append("seat", JSON.stringify(selectedSeat));
    formData.append("total", selectedSeat.length * selectedRoute?.price);
    formData.append("note", specialRequest);
    formData.append("start_time", formattedDate);
    formData.append("total_amount", selectedSeat.length * selectedRoute?.price);

    // {
    //   "Request": {
    //     "timestamp": "1535166225",
    //     "method": "kbz.payment.precreate",
    //     "notify_url": "http://xxxxxx",
    //     "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
    //     "sign_type": "SHA256",
    //     "sign": "768E0C18F7FF0450B6A652000068980335E5DD1067FD276994116E6799EE9FCC",
    //     "version": "1.0",
    //     "biz_content": {
    //       "merch_order_id": "0101234123456789012",
    //       "merch_code": "09991234567",
    //       "appid": "kp1234567890987654321aabbccddeef ",
    //       "trade_type": "APPH5",
    //       "title": "iPhoneX",
    //       "total_amount": "5000000",
    //       "trans_currency": "MMK",
    //       "timeout_express": "100m",
    //       "callback_info": "title%3diphonex"
    //     }
    //   }
    // }
    const timestamp = Date.now();
    console.log("timestamp >> >> ", timestamp);

    try {

      const request = await postRequest(`${endpoints.paymentHistory2}`,formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (request?.status === 200) {
        // console.log(request)
      }else {
        setIsLoading(false);
        return ShowToast({
          title: "Payment fail",
          icon: "error",
        });
      }
  
      if (isLoading) {
        ShowToast({ title: "Loading", icon: "loading" });
      }
  
      // console.log("Prepay ID:", request?.data?.prepay_id);
  
      const payload = {
        prepayId: request?.data?.prepay_id,
        orderInfo: request?.data?.orderInfo,
        sign: request?.data?.sign,
        signType: request?.data?.signType,
        disableNewCheckout: "true",
        tradeType: "MINIAPP",
      };
   
      StartPay(payload, async() => {
        
        const request = await postRequest(`${endpoints.paymentHistory3}`,formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        navigate("/success");
        ShowToast({
          title: "Successfully booked",
          icon: "success",
        });
      });
      

    } catch (error) {
      setIsLoading(false);
      console.error(error);
      return ShowToast({
        title: "Please check your internet connection",
        icon: "error",
      });
    } 

  };


  // const startPay = async (price) => {
  //   // setIsLoading(true);
  //   try {
  //     const { prepay_id, sign, signType, result, orderInfo } = await createOrder(price);
  
  //     if (isLoading) {
  //       ShowToast({ title: "Loading", icon: "loading" });
  //     }
  
  //     console.log("Prepay ID:", prepay_id);
  
  //     const payload = {
  //       prepayId: prepay_id,
  //       orderInfo: orderInfo,
  //       sign: sign,
  //       signType: signType,
  //       disableNewCheckout: "true",
  //       tradeType: "MINIAPP",
  //     };
  
  //     if (result !== "FAIL") {
  //       StartPay(payload, () => {
  //         // navigate(config.routes.result);
  //         ShowToast({
  //           title: "Successfully booked",
  //           icon: "success",
  //         });
  //       });
  //     } else {
  //       setIsLoading(false);
  //       return ShowToast({
  //         title: "Payment fail",
  //         icon: "error",
  //       });
  //     }

  //   } catch (error) {
  //     setIsLoading(false);
  //     console.error(error);
  //     return ShowToast({
  //       title: "Please check your internet connection",
  //       icon: "error",
  //     });
  //   } 
  // };

  return (
    <>
      <AppBar pageTitle={t("ticket_information")} goTo="/info" />

      {/* Time Left */}
      <div className="mt-3 mb-3 p-3 bg-stone-50 rounded-md shadow-md flex justify-between text-red-600 text-subtitle">
        <div>{t("time_left_message")}</div>
        <div>
          <CountdownTimer />
        </div>
      </div>

      <h1 className="font-semibold text-title text-bold-0 text-center py-2">
        {t("ticket_information_warning")}
      </h1>

      {/* Ticket Detail */}
      <div className="flex flex-col border border-black p-3 md:p-5 md:mb-5">
        <p className="mb-5 py-3 border-b border-b-black text-title font-bold text-center">
          {t("ticket_details")}
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
                <span className="block text-title font-bold">
                  {selectedRoute?.busType}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Estimated Duration */}
            <div className="pb-5 flex justify-between">
              <div>
                <LuClock10
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("estimated_duration")}</span>
              </div>
              <p>{selectedRoute?.duration}</p>
            </div>
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
            {/* Number of seat */}
            <div className="pb-5 flex justify-between">
              <div>
                <PiSeatbelt
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("no_of_seat")}</span>
              </div>
              <p>{selectedSeat?.length}</p>
            </div>
            {/* Selected seats */}
            <div className="pb-5 flex justify-between">
              <div>
                <BsTicket
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("selected_seat")}</span>
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
            {/* Unit Ticket Price */}
            <div className="pb-5 flex justify-between">
              <div>
                <FaMoneyBill
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("unit_ticket_price")}</span>
              </div>
              <p>
                {selectedRoute?.price} {t("mmk")}
              </p>
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
              <span>{t("total_ticket_price")}</span>
            </div>
            <div className="font-bold">
              {selectedSeat.length * selectedRoute?.price} {t("mmk")}
            </div>
          </div>

          {/* Facilities */}
          <div className="w-full py-3 text-sm md:text-base border-t border-t-gray-400 border-dashed">
            <span className="pr-3">{t("facilities")}</span>

            <div className="pt-2 flex flex-wrap justify-start gap-2">
              {selectedRoute?.facilities?.map((facility, index) => {
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
          {/* Note */}
          <div className="w-full py-3 text-bold-0 text-center border-t border-t-gray-400 border-dashed">
            <h1 className="font-semibold text-subtitle">{t("note")}</h1>

            <p className="text-red-500">{t("no_refund")}</p>
          </div>
        </div>
      </div>

      {/* traveller information */}
      <div className="mt-3 flex flex-col border border-black p-3 md:p-5 md:mb-5">
        <p className="mb-5 py-3 border-b border-b-black text-title font-bold text-center">
          {t("traveller_information")}
        </p>

        {/* traveller info */}
        <div className="flex flex-col items-center ">
          <div className="w-full">
            {/* Traveller Name */}
            <div className="pb-5 flex justify-between">
              <div className="w-1/2">
                <RiAccountPinCircleLine
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("traveller_name")}</span>
              </div>
              <p className="w-1/2">{bookerName}</p>
            </div>
            {/* Phone Number */}
            <div className="pb-5 flex justify-between">
              <div className="w-1/2">
                <CiMobile3
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("phone_number")}</span>
              </div>
              <p className="w-1/2">{phone}</p>
            </div>
            {/* NRC */}
            {userType === "local" && (
              <div className="pb-5 flex justify-between">
                <div className="w-1/2">
                  <LiaIdCardSolid
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>{t("nrc_number")}</span>
                </div>
                <p className="w-1/2">{nrc}</p>
              </div>
            )}

            {/* Special Request */}
            <div className="pb-5 flex justify-between">
              <div className="w-1/2">
                <VscNote
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{t("special_request")}</span>
              </div>
              <p className="w-1/2">{specialRequest}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-3">
        <input
          type="checkbox"
          value={tAndCRead}
          onChange={() => setTAandCRead(!tAndCRead)}
          id="acceptTerms"
          className="w-5 h-5 accent-primary-0 cursor-pointer"
        />
        {language === "en" ? (
          <label
            htmlFor="acceptTerms"
            className="text-body text-gray-700 cursor-pointer leading-6"
          >
            I have read and accept the{" "}
            <Link
              to="/terms-and-conditions"
              className="text-primary-0 hover:underline"
              rel="noopener noreferrer"
              title="see details"
            >
              Terms and Conditions
            </Link>
            .
          </label>
        ) : (
          <label
            htmlFor="acceptTerms"
            className="text-body text-gray-700 cursor-pointer leading-6"
          >
            <Link
              to="/terms-and-conditions"
              className="text-primary-0 hover:underline"
              rel="noopener noreferrer"
              title="အသေးစိတ်ကြည့်ရှုရန်"
            >
              သတ်မှတ်ချက်များနှင့် အခြေအနေများ
            </Link>{" "}
            ကို သိရှိလက်ခံပါသည်။
          </label>
        )}
      </div>

      {/* Buttons */}
      <div className="pt-5 w-full flex gap-3 items-center justify-center text-center">
        <Link
          to={"/info"}
          className="w-[180px] bg-stone-400 hover:bg-stone-300 px-5 py-2 border-none rounded-sm text-subtitle font-semibold transition-colors duration-400 "
        >
          {t("edit_info")}
        </Link>
        <button
          type="button"
          onClick={() => handleConfirm()}
          className="w-[180px] bg-primary-0 hover:bg-secondary-0 px-5 py-2 border-none rounded-sm text-subtitle font-semibold transition-colors duration-400 "
        >
          {t("i_confirm")}
        </button>
      </div>

      {modal.visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h3 className="font-semibold mb-4">{t("warning")}</h3>
            <div className="flex gap-2 justify-around">{t("must_checked")}</div>
            <div className="absolute top-0 right-0">
              <button
                className="p-1 border-l-2 border-b-2 border-red-500 text-sm text-black hover:text-white hover:bg-red-200 rounded-lg"
                onClick={() => setModal({ visible: false })}
              >
                <FaTimes size={25} color="red" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyInfoPage;
