import { useDispatch, useSelector } from "react-redux";

import { decrementTime } from "../redux/slices/countdownSlice";
import { useEffect } from "react";

const CountdownTimer = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.countdown.timeLeft);
  const isRunning = useSelector((state) => state.countdown.isRunning);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, dispatch]);

  useEffect(() => {
    if (isRunning && timeLeft === 0) {
      window.location.href = "/";
    }
  }, [timeLeft, isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
};

export default CountdownTimer;

// import { useDispatch, useSelector } from "react-redux";

// import { decrementTime } from "../redux/slices/countdownSlice";
// import { useEffect } from "react";

// const CountdownTimer = () => {
//   const dispatch = useDispatch();
//   const timeLeft = useSelector((state) => state.countdown.timeLeft);
//   const isRunning = useSelector((state) => state.countdown.isRunning);

//   useEffect(() => {
//     if (!isRunning || timeLeft <= 0) return;

//     const timer = setInterval(() => {
//       dispatch(decrementTime());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isRunning, timeLeft, dispatch]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return <span>{formatTime(timeLeft)}</span>;
// };

// export default CountdownTimer;
