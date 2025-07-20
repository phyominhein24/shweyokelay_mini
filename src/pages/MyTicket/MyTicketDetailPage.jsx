import { CiClock2, CiMobile3 } from "react-icons/ci";
import { GrLocation, GrMapLocation } from "react-icons/gr";

import AppBar from "../../components/AppBar";
import { BsTicket } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaIdCardSolid } from "react-icons/lia";
import { MdOutlineDepartureBoard } from "react-icons/md";
import { PiSeatbelt } from "react-icons/pi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { VscNote } from "react-icons/vsc";
import { seatTypeColors } from "../../helpers/asset";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MyTicketDetailPage = () => {

  const location = useLocation();
  const data = location.state?.data;

  // const navigate = useNavigate();
  // const selectedSeats = useSelector(
  //   (state) => state.bookingInformation.bookingInformation?.selectedSeat || []
  // );
  // const bookerName = useSelector(
  //   (state) =>
  //     state.bookingInformation.bookingInformation.bookerName || "Mg Kyaw Kyaw"
  // );
  // const phone = useSelector(
  //   (state) =>
  //     state.bookingInformation.bookingInformation.phone || "+959 123456789"
  // );
  // const nrcNumber = useSelector(
  //   (state) => state.bookingInformation.bookingInformation.nrcNumber || ""
  // );
  // const specialRequest = useSelector(
  //   (state) =>
  //     state.bookingInformation.bookingInformation.specialRequest ||
  //     "Pick me up in front of terminal M."
  // );

  const facilities = ["Cake", "Drinking Water", "Snow Towel", "Blanket"];

  return (
    <>
      <AppBar pageTitle="Ticket Detail" goTo="/my-tickets" />

      {/* Ticket Detail */}
      <div className="mt-3 flex flex-col border border-black p-3 md:p-5 md:mb-5">
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
                <span>{data?.starting_point}</span>
              </div>
              <div className="border-l-2 border-black ml-3 h-6 mb-5 ">
                <span className="pl-3 text-stone-500">to</span>
              </div>
              <div>
                <GrMapLocation
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>{data?.ending_point}</span>
              </div>
            </div>

            {/* time + bus type */}
            <div className="w-[40%] flex justify-center items-center">
              <div className="w-full text-center">
                {/* <span className="block text-gray-700 text-title font-bold">
                  Yangon - Taung Gyi
                </span> */}
                <span className="block text-title font-bold">{data?.route?.vehicles_type?.name}</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Estimated Duration */}
            <div className="pb-5 flex justify-between">
              <div>
                <CiClock2
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Estimated Duration:</span>
              </div>
              <p>{data?.route?.duration}</p>
            </div>
            {/* Departure Date */}
            <div className="pb-5 flex justify-between">
              <div>
                <IoCalendarClearOutline
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Departure Date:</span>
              </div>
              <p className="font-bold">{data?.start_time}</p>
            </div>
            {/* Boarding Time */}
            <div className="pb-5 flex justify-between">
              <div>
                <MdOutlineDepartureBoard
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Boarding Time:</span>
              </div>
              <p className="font-bold">
                ({data?.route?.departure 
                ? ((h, m) => `${h % 12 || 12}:${m.toString().padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`)
                  (...data.route.departure.split(":").map(Number)) 
                : "No time available"})
              </p>
            </div>
            {/* Number of seat */}
            <div className="pb-5 flex justify-between">
              <div>
                <PiSeatbelt
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Number of seat:</span>
              </div>
              <p>{JSON.parse(data?.seat).length}</p>
            </div>
            {/* Selected seats */}
            <div className="pb-5 flex justify-between">
              <div>
                <BsTicket
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Selected seats:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {typeof data?.seat === "string" &&
                  JSON.parse(data.seat)?.map((seat) => (
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
                <span>Unit Ticket Price:</span>
              </div>
              <p>{data?.total / JSON.parse(data?.seat).length}</p>
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
              <span>{data?.total}</span>
            </div>
            {/* <div className="font-bold">{selectedSeats?.length * 45000}</div> */}
          </div>

          {/* Facilities */}
          <div className="w-full py-3 text-sm md:text-base border-t border-t-gray-400 border-dashed">
            <span className="pr-3">Facilities</span>

            <div className="flex flex-wrap justify-start gap-2">
              {JSON.parse(data?.route?.vehicles_type?.facilities)?.map((facility, index) => {
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
            <h1 className="font-semibold text-subtitle">Note</h1>

            <p className="text-red-500">** Tickets are not refundable!</p>
          </div>
        </div>
      </div>

      {/* traveller information */}
      <div className="mt-3 flex flex-col border border-black p-3 md:p-5 md:mb-5">
        <p className="mb-5 py-3 border-b border-b-black text-title font-bold text-center">
          Traveller Information
        </p>

        {/* traveller info */}
        <div className="flex flex-col items-center ">
          <div className="w-full">
            {/* Traveller Name */}
            <div className="pb-5 flex justify-between">
              <div>
                <RiAccountPinCircleLine
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Traveller Name:</span>
              </div>
              <p>{data?.name}</p>
            </div>
            {/* Phone */}
            <div className="pb-5 flex justify-between">
              <div>
                <CiMobile3
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Phone Number:</span>
              </div>
              <p> {data?.phone} </p>
            </div>
            {/* NRC */}
            {data?.nrc !== '/' && (
              <div className="pb-5 flex justify-between">
                <div>
                  <LiaIdCardSolid
                    color="#000"
                    size={30}
                    className="customIconWeight inline-block w-6 h-6 mr-3"
                  />
                  <span>NRC Number:</span>
                </div>
                <p>{data?.nrc}</p>
              </div>
            )}
            {/* Special Request */}
            <div className="pb-5 flex justify-between">
              <div>
                <VscNote
                  color="#000"
                  size={30}
                  className="customIconWeight inline-block w-6 h-6 mr-3"
                />
                <span>Special Request:</span>
              </div>
              <p>{data?.note}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTicketDetailPage;
