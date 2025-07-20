import { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  // const navigate = useNavigate()

  // useEffect(()=>{
  //   navigate('/')
  // },[])

  return (
    <>
      {/* Brand Name */}
      <div className="h-screen flex flex-col justify-center">
        <div className="w-full flex justify-center pb-4">
          <img
            src="/images/brand.png"
            alt="Shwe-Yoke-Lay"
            className="w-[40%] h-auto block"
          />
        </div>

        <div className="text-center">404! Page Not Found.</div>
      </div>
    </>
  );
};

export default NotFound;
