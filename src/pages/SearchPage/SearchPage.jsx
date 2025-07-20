import AppBar from "../../components/AppBar";
import { FaEdit } from "react-icons/fa";
import { GrCalendar } from "react-icons/gr";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import Ticket from "../../components/Ticket";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const { userType, searchResults } = useSelector((state) => state.home);

  const { selectedDate } = useSelector((state) => state.bookingInformation);

  return (
    <>
      <AppBar pageTitle={t("search_results")} goTo="/" />

      {searchResults && searchResults.length > 0 && (
        <div className="flex gap-2 p-3 mb-3 justify-between items-center border border-gray-500 rounded-md">
          <div>
            <div className="flex pb-3 gap-3 items-center text-subtitle">
              <div className="pb-0">{searchResults[0].starting_point2}</div>
              <HiArrowNarrowRight />
              <div className="pb-0">{searchResults[0].ending_point2}</div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center">
                <GrCalendar className="inline-block mr-2" />
                <span>{selectedDate}</span>
              </div>
              <div className="flex items-center">
                <RiAccountPinCircleLine className="inline-block mr-2" />
                <span>{userType}</span>
              </div>
            </div>
          </div>

          <Link
            to={"/"}
            className="w-fit border border-stone-300 shadow-md hover:shadow-none px-3 py-[7px] rounded-sm transition-colors duration-400 "
          >
            <FaEdit className="inline-block mr-2" />
            <span className="min-w-fit">{t("edit_trip_btn")}</span>
          </Link>
        </div>
      )}

      {!searchResults ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <p className="border border-stone-300 rounded-md text-yellow-600 p-3 text-center">
            You reloaded this page. Please go back to the home page and search
            for your trip.
          </p>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
        <p className="border border-stone-300 rounded-md text-red-600 p-3 text-center">
          {t("no_result_found")}
        </p>
         </div>
      ) : (
        <div className="flex flex-col gap-3">
          {searchResults.map((route) => (
            <Ticket
              key={route.id}
              route={route}
              routeId={route.id}
              startingPoint={route.starting_point2}
              endingPoint={route.ending_point2}
              busType={route.vehicles_type_id}
              layout={route?.vehicles_type?.seat_layout}
              duration={route.duration}
              price={userType === "local" ? route.price : route.fprice}
              departureTime={route.departure}
              arrivalTime={route.arrivals}
              facilities={JSON.parse(route.vehicles_type.facilities)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
