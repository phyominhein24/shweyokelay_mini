import { useCallback, useEffect, useState } from "react";
import AppBar from "../../components/AppBar";
import MyTicket from "../../components/MyTicket";
import { endpoints } from "../../constants/endpoints";
import { getRequest } from "../../helpers/api";
import { ShowToast } from "../../helpers/nativeApi";
import { useSelector } from "react-redux";

const MyTicketPage = () => {

  const kbzpayToken = useSelector((state) => state.kbzpayInfo.kbzpayToken);

  const [tickets, setTicktes] = useState([])
  const [loading, setLoading] = useState(false)

  const myTicket = useCallback(async () => {
    setLoading(true);
    if(loading){
      ShowToast({ title: "Loading", icon: "loading" });
    }
    const result = await getRequest(`${endpoints.tickets}/${kbzpayToken ? kbzpayToken : 1}`);
    if (result.status === 200) {
      setTicktes(result.data);
    }else{
      return ShowToast({
        title: "Please check your internet connection",
        icon: "error",
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    myTicket();
  }, []);

  return (
    <>
      <AppBar pageTitle="My Tickets" goTo="/" />
      <div className="flex flex-col gap-3">
        {tickets?.map((d, i) => (
          <MyTicket
            data={d}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default MyTicketPage;
