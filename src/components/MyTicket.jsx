import { GrMapLocation } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiSeatbelt } from "react-icons/pi";
import PropTypes from "prop-types";
import { RiBus2Line } from "react-icons/ri";
import { seatTypeColors } from "../helpers/asset";

const MyTicket = ({ data }) => {


  const navigate = useNavigate();

  const navToDetail = () => {
    navigate('/detail', { state: { data: data } });
  };
  
  return (
    <>
      <div onClick={navToDetail} className="text-body flex flex-col p-3 border border-gray-500 rounded-2xl bg-stone-50 shadow-lg text-title">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full flex-col space-y-2">
            {/* bus type */}
            <div className="flex gap-3">
              <RiBus2Line
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6"
              />
              <div className="flex grow justify-between">
                <div>{data?.route?.vehicles_type?.name}</div>
                <div className="text-primary-0">{data?.total} MMK</div>
              </div>
            </div>
            {/* Trip name */}
            <div className="flex gap-3">
              <GrMapLocation
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6"
              />
              <div className=""> {data?.starting_point} - {data?.ending_point} </div>
            </div>
            {/* Date */}
            <div className="flex gap-3">
              <MdOutlineCalendarToday
                color="#000"
                size={30}
                className="block customIconWeight w-6 h-6"
              />
              <div className="">{data?.start_time}</div>
            </div>
            {/* No. of seats */}
            <div className="flex gap-3">
              <div>
                <PiSeatbelt
                  color="#000"
                  size={30}
                  className="block customIconWeight w-6 h-6"
                />
              </div>

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
        </div>
      </div>
    </>
  );
};

MyTicket.propTypes = {
  busType: PropTypes.string,
  price: PropTypes.number,
  travelledDate: PropTypes.string,
  numOfSeat: PropTypes.number,
};

export default MyTicket;
