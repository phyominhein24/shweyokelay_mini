import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import AboutUsPage from "./pages/AboutPage/AboutUsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import HomePage from "./pages/HomePage/HomePage";
import MainLayout from "./components/layouts/MainLayout";
import MyTicketDetailPage from "./pages/MyTicket/MyTicketDetailPage";
import MyTicketPage from "./pages/MyTicket/MyTicketPage";
import NotFound from "./pages/NotFound/NotFound";
import PolicyPage from "./pages/PolicyPage/TermsAndConditionsPage";
import { Provider } from "react-redux";
import SearchPage from "./pages/SearchPage/SearchPage";
import SeatSelectionPage from "./pages/SatSelectionPage/SeatSelectionPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import TermsAndConditions from "./pages/PolicyPage/TermsAndConditions";
import TravellerInfoPage from "./pages/TravellerInfoPage/TravellerInfoPage";
import VerifyInfoPage from "./pages/VerifyInfoPage/VerifyInfoPage";
import { store } from "./redux/Store";

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/select" element={<SeatSelectionPage />} />
            <Route path="/info" element={<TravellerInfoPage />} />
            <Route path="/verify" element={<VerifyInfoPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/my-tickets" element={<MyTicketPage />} />
            <Route path="/detail" element={<MyTicketDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<MainLayout />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="/about" element={<AboutUsPage />} />
  //       <Route path="/booking" element={<BookingPage />} />
  //       <Route path="/contact" element={<ContactPage />} />
  //       <Route path="/policy" element={<PolicyPage />} />
  //       <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
  //       <Route path="/faqs" element={<FaqPage />} />
  //       <Route path="/search" element={<SearchPage />} />
  //       <Route path="/select" element={<SeatSelectionPage />} />
  //       <Route path="/info" element={<TravellerInfoPage />} />
  //       <Route path="/verify" element={<VerifyInfoPage />} />
  //       <Route path="/success" element={<SuccessPage />} />
  //       <Route path="/my-tickets" element={<MyTicketPage />} />
  //       <Route path="/detail" element={<MyTicketDetailPage />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   )
  // );

  // return (
  //   <Provider store={store}>
  //     <RouterProvider router={router} />
  //   </Provider>
  // );
}

export default App;
