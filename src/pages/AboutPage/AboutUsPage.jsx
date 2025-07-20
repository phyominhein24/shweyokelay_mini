import AppBar from "../../components/AppBar";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar pageTitle="About Us" goTo="/" />

      <div className="min-h-screen text-black">
        {/* Header */}
        <div className="flex justify-center pb-4">
          <img
            src="/images/brand.png"
            alt="Shwe-Yoke-Lay"
            className="w-[40%] h-auto "
          />
        </div>

        {/* Content */}
        <section className="p-5">
          <h2 className="text-title font-semibold mb-3">About Shwe Yoke Lay</h2>
          <p className="text-body leading-6 text-gray-700 mb-5">
            Shwe-Yoke-Lay is your trusted partner for convenient, safe, and
            reliable bus ticket booking. Our mission is to make travel
            accessible and hassle-free for everyone, providing a seamless
            platform that connects travelers with top bus operators across the
            country.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-md font-bold mb-2">Our Vision</h3>
              <p className="text-body text-gray-700">
                To revolutionize the way people travel by offering a
                user-friendly platform that ensures comfort, safety, and
                convenience. We aim to be the leading choice for travel
                solutions in Myanmar and beyond.
              </p>
            </div>

            <div>
              <h3 className="text-md font-bold mb-2">Our Mission</h3>
              <p className="text-body text-gray-700">
                We strive to bridge the gap between travelers and bus operators
                by providing a transparent, efficient, and secure booking
                experience. We are committed to enhancing the journey for our
                customers through innovative features and excellent customer
                service.
              </p>
            </div>

            <div>
              <h3 className="text-md font-bold mb-2">Why Choose Us?</h3>
              <ul className="list-disc pl-5 text-body text-gray-700">
                <li>Easy-to-use platform with seamless booking experience.</li>
                <li>Access to trusted and verified bus operators.</li>
                <li>Flexible booking options and secure payment gateways.</li>
                <li>24/7 customer support for all your travel needs.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-bold mb-2">Contact Us</h3>
              <p className="text-body text-gray-700">
                Have questions or need support? Reach out to us at:
              </p>
              <p className="text-body text-gray-700 mt-2">
                <strong>Email:</strong> support@shweyokelayexpress.com
              </p>
              <p className="text-body text-gray-700">
                <strong>Phone:</strong> +95 123 456 789
              </p>
              <p className="text-body text-gray-700">
                <strong>Address:</strong> 123 Main Road, Yangon, Myanmar
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="p-5 text-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-primary-0 hover:bg-secondary-0 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-none"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
