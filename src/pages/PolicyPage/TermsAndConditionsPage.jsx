import AppBar from "../../components/AppBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const PolicyPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const navigate = useNavigate();

  return (
    <>
      <AppBar pageTitle={t("terms_and_conditions")} goTo="/" />

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
        {language === "en" ? (
          <section className="p-5">
            <h2 className="text-title font-semibold mb-3">
              TERMS AND CONDITIONS FOR SHWE YOKE LAY EXPRESS MINI APP USERS
            </h2>
            <p className="text-body leading-6 text-gray-700 mb-5">
              {`These "Terms and Conditions' are set for User
            ("You" "You" "Your"
            "Yours") who are going to use Shwe Yoke Lay Express
            ("Mini App") or Merchant ("Shwe Yoke Lay
            Express") in KBZPay App. Those who use Shwe Yoke Lay Express
            Mini App shall follow the rules in these Terms and Conditions. By
            accessing Shwe Yoke Lay Express App in the KBZPay Blue App and
            obtaining the Shwe Yoke Lay Express Mini App Service, it is
            considered that Users have read, understood and accepted the Terms
            and Conditions, including the policies and additional Terms and
            Conditions available Mini App or available by hyperlink. In the case
            of directly or indirectly harming Users’ interests including Users’
            personal information due to ignorance of Users in registering to get
            this Service, Shwe Yoke Lay Express (Mini App) Payment Agency of KBZ
            (KBZPay) and its members shall not be held to any liability. Terms
            and Conditions to get Shwe Yoke Lay Express (Mini App) Service are
            as follows:`}
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-md font-bold mb-2">1. DEFINITIONS</h3>
                <p className="text-body text-gray-700 py-1">
                  1.1. <b>{`"Business Day"`}</b> means a day other than a
                  Saturday, Sunday, public holiday, or bank holiday in Myanmar.
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.2. <b>{`"KYC"`}</b>{" "}
                  {`means "Know Your Customers", requirements for registering issued by the Central Bank of Myanmar and/or other authorities.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.3. <b>{`"Mini App"`}</b>{" "}
                  {`means the Shwe Yoke Lay Express App
                owned by the Merchant, a Mini App that can be used in the
                KBZPay, and KBZPay acts as an agent on behalf of the Merchant to
                perform the functions of this Mini App and the functions of the
                App to facilitate Users' orders.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.4. <b>{`"Myanmar Kyat"`}</b>{" "}
                  {`means the official currency of
                  the Republic of the Union of Myanmar.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.5. <b>{`"Refund"`}</b> means any full or part pay that the
                  Customer refuses to honor or demands a refund of because the
                  goods/services purchased from the Merchant were not as they
                  were promised or were defective, deficient, incomplete and/or
                  unsatisfactory for any reason whatsoever or if any Customer
                  order was cancelled by the Customer.
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.6. <b>{`"Service Fees"`}</b>{" "}
                  {`means all fees and costs charged
                for using the Service of Shwe Yoke Lay Express (Mini App).`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.7. <b>{`"Services"`}</b>{" "}
                  {`means products and Services offered
                by Merchants in Shwe Yoke Lay Express (Mini App) for Users, for
                which Service fees can be paid through KBZPay.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  1.8. <b>{`"User or Customer"`}</b> means those who use the
                  Mini App.
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  2. OBTAINING AND USING SHWE YOKE LAY EXPRESS (MINI APP)
                </h3>
                <p className="text-body text-gray-700 py-1">
                  2.1. Users are responsible for ensuring that their own
                  software and hardware are suitable and up-to-date.
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.2.{" "}
                  {`KBZPay is not responsible for any services or functions provided by Shwe Yoke Lay, including its performance of failure. If any dispute arising out of User’s canceling or changing process, and the Services received by the Users, the Users can directly contact Shwe Yoke Lay Express Mini App Call Center mentioned in clause 21, and Shwe Yoke Lay will make a decision on these complaints. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.3.{" "}
                  {`Those who wish to use this Service but are under 18 years of age shall agree and accept these Terms and Conditions, and with the approval of parent(s) or legal guardian(s) who are liable for any payment the Users under 18 years of age can obtain this Service. KBZ and the Merchant will assumed that the parent (s) or legal guardian (s), who have allowed the User under 18 years of age, agree these Terms and Conditions, and they are responsible for any issue arising out of using this Service accessed by the Users under 18 years of age. If the User, who is under 18 years of age, does not obtain the consent of their parent (s) or guardian (s), he or she shall immediately terminate using the Service or accessing the App. This is interpreted according to the existing laws of the Republic of the Union of Myanmar.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.4.{" "}
                  {`You are prohibited from using the Services of Shwe Yoke Lay Express (Mini App) for illegal or unauthorized purposes and must adhere to all legal regulations while using the Service. All communications between you and the Shwe Yoke Lay Express Mini App or KBZPay, including emails and text messages, may be recorded to protect rights, ensure Service quality, and for legal purposes. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.5.{" "}
                  {`With regard to providing Service to the User and with regard to the Service, or if it is necessary to provide the information related to this Service, the User accepts and agrees that Shwe Yoke Lay Express Mini App reserves the right to access, keep, share and disclose the User’s information provided by the User in the application submitted for using this Service.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.6.{" "}
                  {`The User shall be solely responsible for any consequences caused by using of any other person the User’s information and KBZPay and Shwe Yoke Lay are not responsible for this.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.7.{" "}
                  {`According to this Terms and Conditions, User agrees that KBZ has the right to provide personal information and Biometric data, and account data of the User to other parties (outside Service providers or agents), or User’s data mentioned by the User in the Application to use this Service to subsidiaries of KBZ, Branches, financial institutions, Credit Bureau, representatives and legal organizations, and authorizes KBZ to do so.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  2.8. By making payment through KBZPay, the Users shall follow
                  the normal rules and regulations related to KBZPay.
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  3. BOOKING POLICY OF SHWE YOKE LAY EXPRESS (MINI APP)
                </h3>
                <p className="text-body text-gray-700 py-1">
                  3.1.{" "}
                  {`You can register on Mini App through KBZPay App and make ticket purchases offered by Shwe Yoke Lay Express services. Prior to buying tickets through the Mini App, it is crucial for customers to thoroughly review and understand these terms and conditions. If there are any queries, customers should reach out to the Shwe Yoke Lay Express Call Center for clarification. The purchase of a ticket mandates full payment. A successful transaction is necessary to finalize your ticket purchase. In the event that payment is successful but a confirmation for ticket purchase is not received, or if an error occurs, it becomes your responsibility to contact Shwe Yoke Lay Call Center mentioned in clause 21.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.2.{" "}
                  {`You can purchase tickets according to the services and prices listed in the Mini App. However, you understand that your ticket order may be canceled at any time for which you have not successfully paid, and that the prices are subject to change. Either from KBZPay or Shwe Yoke Lay Express reserves the right to decline your purchase for any given reason. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.3.{" "}
                  {`While Shwe Yoke Lay Express aims to provide accurate descriptions of products and services, Shwe Yoke Lay Express and KBZPay do not warrant that the descriptions are error-free, complete, or current.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.4.{" "}
                  {`Bookings do not cover any incidental charges, expenses, or services unless explicitly stated in your description. You are responsible for any incidental charges, expenses, or services that you incur or utilize during your trip.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.5.{" "}
                  {`The User understands that it is responsible to check the information filled in the Shwe Yoke Lay Express (Mini App). Regarding the booking, the User understands that it is the User’s sole responsibility for any incorrect information filling in/payment, and KBZPay and Shwe Yoke Lay are not responsible for such issue. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.6.{" "}
                  {`The User are required to make full payment for reservations and are only allowed to use the ticket for the date and time specified on the ticket purchased. If the User wishes to change the date and time, the User can directly contact to the Shwe Yoke Lay and such changes shall not be made via Shwe Yoke Lay Express Mini App in the KBZPay.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.7.{" "}
                  {`The User can purchase round-trip tickets for any trip. Cancellations are not allowed for purchased tickets. Therefore, once the trip is booked, kindly confirm only if you are certain.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.8.{" "}
                  {`Please ensure that the user accurately select and purchase the appropriate quantity and type of tickets based on factors such as timing, destination, nationality (Foreigner/Local), and any other relevant criteria using our online ticketing system. If a foreigner mistakenly chooses the ticket price of a local Customer, he (or) she will need to pay the difference between the local and foreigner ticket price to Shwe Yoke Lay.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.9.{" "}
                  {`You will only be able to access the Service as stated on the ticket you purchased and it is your responsibility to review purchased tickets as they cannot be revised in the Mini App. Whether you want to correct a mistake about a ticket purchased through the Mini App. time, if you want to change the location, you must contact Shwe Yoke Lay Express directly as stated in the Clause (21) and you will be subject to the decision of Shwe Yoke Lay Express. For tickets purchased from the Mini App on KBZPay, you will only receive a ticket delivered electronically, though from KBZPay. Once Shwe Yoke Lay Express issues the E-Ticket and will never issue the physical ticket.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.10.{" "}
                  {`Purchased tickets on Shwe Yoke Lay Express Mini App can be converted into E-tickets by going to the “Home” screen of the Mini App.E-ticket can be checked out by clicking on the ticket status “Purchased Tickets”. The E-ticket needs to be kept by the customer. Customers will be required to show a clear printout of the electronic ticket or by showing the ticket on their Mobile Phone.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.11.{" "}
                  {`If any concern finds anything suspicious about the ticket(s) you have purchased or believe you have violated any terms, either KBZPay or Either Shwe Yoke Lay Express reserves the right to cancel tickets sold at any time without notice to you, and tickets in your possession will no longer be valid. You acknowledge and agree that you are not entitled to any compensation for such cancellation.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.12.{" "}
                  {`Reservations cannot be sold, auctioned, bartered, or transferred to a third party. Bookings are specific to the individual with the Myanmar NRC number or passport mentioned during booking.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.13.{" "}
                  {`Shwe Yoke Lay Express and KBZPay have the right to modify service and prices, add, or remove, change parts of the Terms & Conditions in the Mini App at any time. The Users are responsible for checking for updates periodically.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.14.{" "}
                  {`Shwe Yoke Lay Express will only provide service to the person mentioned in the ticket and Shwe Yoke Lay Express reserves the right to refuse service if there is any discrepancy when checking the ticket.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.15.{" "}
                  {`The User understands that there is no refund for the booking which is canceled by the User. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.16.{" "}
                  {`The User understands that any issue arising after booking shall be informed directly to Shwe Yoke Lay.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  3.17.{" "}
                  {`KBZPay acts as an intermediary between you and Shwe Yoke Lay. KBZPay is not responsible for issues related to service quality, accuracy of the answers, or any problems arising directly between you and Shwe Yoke Lay.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  4. GUIDELINES FOR CUSTOMERS: BEFORE, DURING, AND ON-BOARD
                </h3>
                <p className="text-body text-gray-700 py-1">
                  4.1.{" "}
                  {`Customer is allowed to bring along one backpack and one carry-on luggage free of charge and agree to additionally packages shall be chargeable.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.2.{" "}
                  {`Customer agrees that Shwe Yoke Lay Express will not be responsible for arriving after the departure time. Group travellers must comply with social control measures as per the terms and conditions.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.3.{" "}
                  {`Customer acknowledges and agrees the transportation of animals is prohibited on the passenger seat but can be transported/carried in the cargo compartment.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.4.{" "}
                  {`Customer agrees not to transport any illegal items. Shwe Yoke Lay Express reserves the right to refuse any goods on bus that is deemed to be illegal, dangerous or causes discomfort to other Customers.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.5.{" "}
                  {`Shwe Yoke Lay Express and KBZPay shall not responsible for losses or expenses due to accidents, delays, sickness, weather, political situations, or other uncontrollable factors.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.6.{" "}
                  {`Customer agrees to accurately provide and fill out the required and requested information for the trip within the system and at the gate.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  4.7.{" "}
                  {`Customer understands and accepts all the terms and conditions mentioned above and agrees to abide by the terms and conditions set forth by Shwe Yoke Lay Express for Customers during the trip.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  5. TICKET CHANGE REGULATIONS OF SHWE YOKE LAY EXPRESS (MINI
                  APP)
                </h3>
                <p className="text-body text-gray-700 py-1">
                  5.1.{" "}
                  {`While using the system if you purchase the ticket for a journey the other way round or if you choose “local” for “foreigner” and vice versa or if you would like to change the journey or the date from the original ticket, you will have to contact Shwe Yoke Lay Call Center mentioned in Clause (21) at least two (2) days prior to the original departure date stated on the purchased ticket and pay the specified service fee. Customer agrees and acknowledges that KBZPay Mini App is not responsible for any issues related to journey, ticket, time changes, refunds, etc. regarding tickets purchased via the Mini App on KBZPay, and that for such issues, Cuatomer shall contact the Shwe Yoke Lay Call Center mentioned in Clause (21) and follow the terms and conditions set by Shwe Yoke Lay.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  5.2.{" "}
                  {`Under any circumstances, there will be no refund in the Shwe Yoke Lay Mini App for the purchased ticket.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  6. TERMINATION, SUSPENDING AND CANCELLATION OF SERVICES
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User can terminate the Service following the rules mentioned in the Service termination clause, if the User has no wish to use Shwe Yoke Lay Express (Mini App) Service. Without giving prior notice to the User, KBZPay or Shwe Yoke Lay Express (Mini App) may terminate, suspend or cancel the Service at any time for any reason. The User agrees and accepts that KBZPay and Shwe Yoke Lay Express (Mini App) shall not be responsible to anyone for such acts.  `}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  7. SENDING NOTIFICATIONS
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`By using the Service provided by Shwe Yoke Lay Express (Mini App), the User agrees and accepts sending of notifications to the Shwe Yoke Lay Express (Mini App) account of the User and making contact through the phone or email address which have been used to open Shwe Yoke Lay Express (Mini App). Notifications on new movies, programs, promotion programs, and surveys collected from the Users will be sent to the Users by Shwe Yoke Lay Express (Mini App) through a notification in the App or SMS or other means of communication. Moreover, the User accepts sending of information on payment to be made by the User for watching movies in Shwe Yoke Lay Express (Mini App); sending agreements, disclosure, and other information.  Shwe Yoke Lay Express (Mini App) has the right to send data, content, text, software, voice mail, photos, designs, videos, messages, and related contents and other content through Shwe Yoke Lay Express (Mini App) to the User who has bought this Service. The User is the sole responsible person for the data provided when he is registered and any consequences arising out of such data.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">8. LIMITATIONS</h3>
                <p className="text-body text-gray-700 py-1">
                  {`This Service is for the User's personal and non-commercial use only. The User agrees that in receiving the Service, he will not take the following measures:
`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`(i)     using other means which are not of the media arranged by Shwe Yoke Lay Express (Mini App),`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`(ii)     disrupting the Service or using other automatic means by using Robot, Spider, Scraper, Script, and Web Crawler.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`(iii)     concealing the source of receiving the Service by forging identifier codes or changing data.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`(iv)     conducting acts and using software that can harm Shwe Yoke Lay Express (Mini App) server. `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`(v)     sending texts, writing emails, or using virus software to disrupt the Service.`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`The User shall use the Shwe Yoke Lay Express (Mini App) Service in accordance with the Terms and Conditions set by Shwe Yoke Lay Express (Mini App) Service. The User agrees that he/she will not use the Shwe Yoke Lay Express (Mini App) Service by breaching the Terms and Conditions set by Shwe Yoke Lay Express (Mini App) or exceeding the rules; and without the approval of the concerned official of Shwe Yoke Lay Express (Mini App), he/she shall not use the social media Pages such as Facebook, Instagram, YouTube and Web Page of the Shwe Yoke Lay Express.
                As a rule of using this Service, the User assures and guarantees that he will not use this Service with a purpose which is against the law. The User agrees that he will follow the existing law, regulations, bylaws and provisions relating to the use of Services.  `}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">9. INDEMNITY</h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User agrees to indemnify KBZ or KBZPay or Shwe Yoke Lay Express, its directors or officers or staff or representatives or agents and third parties and save their harmless against any and all claims including but not limited to costs and damages including but not limited to, legal fees) arising from Customer’s    use of the Mini App or Customer’s breach of these Terms.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  10.REPRESENTATION AND WARRANTIES{" "}
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User acknowledges and agrees that the contents in Shwe Yoke Lay Express (Mini App) is provided “as it is” and “as available”.  Accepting or using any contents, goods or products or Services displayed on Shwe Yoke Lay Express (Mini App) is at the User’s sole risk and discretion. All liabilities for loss and damages of the User or any party relating to using any content on Shwe Yoke Lay Express (Mini App) or Services or any website links whether they are stated in the agreement or it is due to ignorance shall be excluded. Although KBZPay and Shwe Yoke Lay Express (Mini App) have exerted reasonable efforts to make sure that Services provided can be achieved at all times, KBZPay and Shwe Yoke Lay Express (Mini App) will not guarantee or represent that Shwe Yoke Lay Express (Mini App) is safe or no technical problems or no interruption or no error or no virus. The User understands and agrees that KBZPay and Shwe Yoke Lay Express (Mini App) will not be responsible for temporary interruption in the platform due to scheduled system maintenance, or the Internet or electronic communication or other forces. 
                KBZ does not assume any liability for the quality, condition or other representations of the Services provided by Shwe Yoke Lay Express or guarantee the accuracy or completeness of the information (including service information, photos and images of the services) displayed on the Shwe Yoke Lay Express’s listing/offering on the Mini App.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  11. INTELLECTUAL PROPERTY RIGHTS
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`KBZ is an owner of all intellectual property rights, whether in contents or wording, pictures, signs, logo, trade service marks, trade name as well as all design works, in all documents, websites of KBZ, and KBZPay Application. Shwe Yoke Lay Express (Mini App) and its partners and other related businesses are owners of all intellectual property rights, whether in contents or wordings, of logo, the name of Shwe Yoke Lay Express (Mini App), pictures, signs, and trade Service mark. name, logo and Service mark. The User must not exploit the intellectual property right of KBZ or make any advertisement of the Shwe Yoke Lay Express Mini App without receiving prior written consent from KBZ. The User shall not perform or allow any third party to perform any action that might cause damage to the image, trademark, trade name, or other intellectual property right of KBZ.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">12. DISCLAIMER</h3>
                <p className="text-body text-gray-700 py-1">
                  {`In any situation, KBZ including its staff, directors, agents, representatives, and subsidiaries; Shwe Yoke Lay Express (Mini App) and its partners, members, staff, representatives, and those who have been granted copyright shall not be responsible for the loss of the User and other parties directly or indirectly for breaching of the said Terms and Conditions by the User or due to information received from the Service, software, products, and Service; lawsuit, litigation, court decision, loss and liabilities according to the agreement or civil case or irrevocable responsibility or cost or damage or claims made against the User. The User understands and agrees that he is the only responsible person to settle such claims.  Regarding the use of Shwe Yoke Lay Express (Mini App), the remedial action to be taken is to terminate the use of Shwe Yoke Lay Express (Mini App) by the User.  Organizations of KBZ, its agents, representatives, and Service providers shall not be responsible directly or indirectly or as a consequence for damages and claims for using Shwe Yoke Lay Express (Mini App) by the User.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">13. FORCE MAJEURE</h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User understands that KBZ and Shwe Yoke Lay Express (Mini App) shall not be liable for any failure of or delay in the performance of this Services for the period that such failure or delay is due to causes beyond its reasonable control, including but not limited to acts of God, war, strikes or labor disputes, embargoes, government orders, fire, flood, torrential rain, storm or other extreme weather conditions, riot, insurrection, civil commotion, sanctions, boycott, failure of electricity, equipment failure, or any other force majeure event. Performance of this Service will, to the extent that it is prevented, hindered or delayed by such circumstances, be suspended by KBZ and/or Shwe Yoke Lay Express (Mini App) until such circumstances cease to exist. KBZ will not be liable to the User or any other party or be considered in breach of this terms and conditions for a failure to perform, or delay in performing, any such obligation set out in this terms and conditions while those circumstances continue.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">14. NOTIFICATION</h3>
                <p className="text-body text-gray-700 py-1">
                  {`The above-mentioned Terms and Conditions are legal. As it is deemed that the User understands and agrees to the Terms and Conditions starting from the time of using Shwe Yoke Lay Express (Mini App), it is the sole responsibility of the User to use this Service without reading the Terms and Conditions.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">15. AMENDMENT</h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User acknowledges that KBZ and Shwe Yoke Lay Express (Mini App) reserve the right to amend, modify or substitute any provisions of this Terms and Conditions or to the Services and/or any charges at any time for any reason at its sole discretion and without any prior notice. The amended Terms and Conditions are in effect as soon as they are posted online. It is considered that with continued use of Shwe Yoke Lay Express (Mini App) is the User agrees to the amended Terms and Conditions. If the User does not agree with the whole or part of the amended version, the User shall terminate the use of Shwe Yoke Lay Express (Mini App). `}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">16. SEVERABILITY</h3>
                <p className="text-body text-gray-700 py-1">
                  {`Each of the provisions of this Terms and Conditions shall be several and distinct from one another. If any of the provisions of these Terms and Conditions becomes invalid, void, illegal or unenforceable in any respect under any law, the validity, legally and enforceability of the remaining provisions shall not in any way be thereby affected or impaired.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">17. ASSIGNMENT</h3>
                <p className="text-body text-gray-700 py-1">
                  {`The User shall not assign its rights or obligations under these Terms and Conditions, in whole or in part, nor enter into any subcontract to perform any portion of these Terms and Conditions, without the written consent of KBZ.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  18. GOVERNING LAW AND DISPUTE RESOLUTION
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`These Terms and Conditions shall be governed by, and construed in accordance with, the laws of the Republic of the Union of Myanmar and the Courts in Myanmar shall have exclusive jurisdiction to solve any dispute arising from or under these Terms and Conditions.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">19. WAIVER</h3>
                <p className="text-body text-gray-700 py-1">
                  {`Failure or delay on part of either party to enforce any provision(s) of these Terms and Conditions at any point of time shall not be construed to be a waiver by such party of such rights thereafter to enforce each and every provision of these Terms and Conditions.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">20. LANGUAGE</h3>
                <p className="text-body text-gray-700 py-1">
                  {`This Terms and Conditions is made in both English and Myanmar and both versions shall be equally authentic and effective. In case of any discrepancy between two versions, the Myanmar version shall prevail.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">21. CUSTOMER CONTACT</h3>
                <p className="text-body text-gray-700 py-1">
                  {`If the User wishes to contact Shwe Yoke Lay Express (Mini App) for further information, please contact the Customer support team of Shwe Yoke Lay Express (Mini App) via phone, email or send texts through the feature for Users in 1875 Bay Din (Mini App).`}
                </p>
                <p className="text-body text-gray-700 py-1">{`Shwe Yoke Lay Express Hotline: 09 408800095,09 4088000098`}</p>
                <p className="text-body text-gray-700 py-1">{`Email: sylexpress.complaint@gmail.com`}</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="p-5">
            <h2 className="text-title font-semibold mb-3">
              ‌ရွှေရုပ်လေး EXPRESS ဝန်ဆောင်မှုကို အသုံးပြုသူများလိုက်နာရမည့်
              စည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များ
            </h2>
            <p className="text-body leading-6 text-gray-700 mb-5">
              {`ဤ “စည်းမျဥ်းစည်းကမ်း သတ်မှတ်ချက်များ” သည် KBZPay App ရှိ ကုန်သည် (ရွှေရုပ်လေး Express) ၏ ရွှေရုပ်လေး Express App (“Mini App”) ကို ဝင်ရောက်အသုံးပြုမည့် အသုံးပြုသူ (“သင်”၊ “သင့်”၊ “သင်၏”၊ “သင်တို့၏”) မှ လိုက်နာရမည့်စည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များဖြစ်ပါသည်။ ရွှေရုပ်လေး Express (Mini App) ကို ရယူအသုံးပြုသူများအနေဖြင့် ဤ စည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များ အတိုင်း လိုက်နာအသုံးပြုရမည်ဖြစ်ပါသည်။ KBZPay Blue App တွင် ရှိသော ရွှေရုပ်လေး Express (Mini App) ကို ဝင်ရောက်အသုံးပြု၍ ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို ရယူ အသုံးပြုသူများသည် Mini App တွင်ရရှိနိုင်သော သို့မဟုတ် ဟိုက်ပါလင့်ခ်ဖြင့် ရရှိနိုင်သော မူဝါဒများနှင့် ထပ်မံဖြည့်စွက်ထားသော စည်းမျဥ်းစည်းကမ်းသတ်မှတ်ချက်များအပါအဝင် စည်းကမ်းသတ်မှတ်ချက်များကို ဖတ်ရှုနားလည်၍ သဘောတူလက်ခံခြင်းဖြစ်သည်။ ဤဝန်ဆောင်မှုကို မှတ်ပုံတင်၍ ရယူရာတွင် အသုံးပြုသူ၏ ပေါ့လျော့မှု တစ်စုံတစ်ရာကြောင့် တိုက်ရိုက်သော်လည်းကောင်း၊ သွယ်ဝိုက်၍သော်လည်းကောင်း၊ အသုံးပြုသူ၏ ကိုယ်ရေးကိုယ်တာ အချက်အလက်များနှင့် ငွေကြေးအပါအဝင် အကျိုးစီးပွားထိခိုက်မှုဖြစ်ပေါ်လာပါက ရွှေရုပ်လေး Express (Mini App) ငွေပေးချေမှုဆိုင်ရာ အေဂျင်စီ ကမ္ဘောဇဘဏ်(KBZ Bank)၊ ရွှေရုပ်လေး Express နှင့် ၎င်းတို့၏အဖွဲ့ဝင်တို့ထံတွင် တစ်စုံတစ်ရာ တာဝန်ရှိမည် မဟုတ်ပါ။ ရွှေရုပ်လေး Express (Mini App)  ဝန်ဆောင်မှုကို အသုံးပြုရန်အတွက် စည်းမျဉ်းစည်းကမ်း အသေးစိတ်မှာ အောက်ပါအတိုင်း ဖြစ်ပါသည်။`}
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁။ အဓိပ္ပါယ်ဖွင့်ဆိုချက်{" "}
                </h3>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၁။ <b>{`"အလုပ်လုပ်ရက်"`}</b> ဆိုသည်မှာ မြန်မာနိုင်ငံရှိ စနေ၊
                  တနင်္ဂနွေနေ့၊ အများပြည်သူအလုပ်ပိတ်ရက် သို့မဟုတ် ဘဏ်ပိတ်ရက်
                  မဟုတ်သည့် နေ့ရက်များကို ဆိုလိုခြင်းဖြစ်သည်။
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၂။ <b>{`"KYC"`}</b>{" "}
                  {`ဆိုသည်မှာ မြန်မာနိုင်ငံတော်ဗဟိုဘဏ်နှင့်/သို့ အခြား အခွင့်အာဏာပိုင်များမှ ထုတ်ပြန်ထားသော “သင်၏ ဖောက်သည်ကို သိပါ” ဟူသော မှတ်ပုံတင်ရန် လိုအပ်ချက်များကို ဆိုလိုသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၃။ <b>{`"Mini App"`}</b>{" "}
                  {`ဆိုသည်မှာ ကုန်သည်မှပိုင်ဆိုင်သော ရွှေရုပ်လေး Express (Mini App) ကိုဆိုလိုခြင်းဖြစ်ပြီး KBZPay တွင်အသုံးပြုနိုင်သော Mini App တစ်ခုဖြစ်ပြီး ဤ Mini App ၏လုပ်ဆောင်ချက်များနှင့် အသုံးပြုသူများ၏မှာယူမှုကို လွယ်ကူချောမွေ့စေရန်အတွက် App ၏ လုပ်‌ဆောင်ချက်များအား ကုန်သည်ကိုယ်စား ဆောင်ရွက်ပေးသည့် အေးဂျင့်အဖြစ် KBZPay မှလုပ်ဆောင်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၄။ <b>{`"မြန်မာကျပ်"`}</b>{" "}
                  {`ဆိုသည်မှာ ပြည်ထောင်စုသမ္မတ မြန်မာနိုင်ငံတော်အတွင်း တရားဝင်သုံးစွဲနေသည့် ငွေကြေးကို ဆိုလိုသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၅။ <b>{`"ပြန်အမ်းငွေ"`}</b> ဆိုသည်မှာ ကုန်သည်ထံမှဝယ်ယူသည့်
                  ကုန်စည်/ဝန်ဆောင်မှုများသည် ကုန်သည်မှ ဖော်ပြထားသည့်
                  အရည်အသွေးနှင့်ကိုက်ညီမှုမရှိခြင်း သို့မဟုတ်
                  ယိုယွင်းပျက်စီးမှုရှိခြင်း၊ ချို့တဲ့မှု၊ ပြည့်စုံမှုမရှိခြင်း
                  နှင့် သို့မဟုတ် မည်သည့်အကြောင်းကြောင့်ဖြစ်စေ
                  ကျေနပ်မှုမရှိခြင်း သို့မဟုတ် ဝယ်ယူသည့် အသုံးပြုသူ၏ မှာယူမှုကို
                  အသုံးပြုသူမှဖျက်သိမ်းခြင်းတို့ကြောင့် အသုံးပြုသူမှပေးချေရန်
                  ငြင်းဆိုခြင်းပြုထားသည် မည်သည့်တစ်စိတ်တစ်ပိုင်း ပေး‌ချေထားမှု
                  အတွက်ဖြစ်စေ သို့မဟုတ် ပမာဏအပြည့်အဝ
                  ပေးချေထားမှုအတွက်ဖြစ်စေပြန်အမ်းငွေတောင်းဆိုခြင်း သို့မဟုတ်
                  ငွေပြန်အမ်းပေးရန် တောင်းဆိုခြင်းတို့ကို ဆိုလိုသည်။
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၆။ <b>{`"ဝန်ဆောင်ခ"`}</b>{" "}
                  {`ဆိုသည်မှာ ရွှေရုပ်လေး Express (Mini App) မှ ထုတ်ပြန်ထားသော ဝန်ဆောင်မှုအသုံးပြုမှုအတွက် ကောက်ခံသည့် အခကြေးငွေ၊ ကောက်ခံမှုအားလုံးကို ဆိုလိုပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၇။ <b>{`"န်ဆောင်မှုများ"`}</b>{" "}
                  {`ဆိုသည်မှာ KBZPay ဖြင့် ငွေပေးချေခြင်းပြုနိုင်သည့် အသုံးပြုသူများမှ ရယူအသုံးပြုနိုင်သော Mini App အတွင်း ကုန်သည်မှ ကမ်းလှမ်းသည့် ကုန်စည်နှင့် ဝန်ဆောင်မှုကို ဆိုလိုခြင်းဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၁၊၈။ <b>{`"အသုံးပြုသူ (သို့မဟုတ်) ဝန်ဆောင်မှုရယူသူ"`}</b>{" "}
                  ဆိုသည်မှာ Mini App အား အသုံးပြုသည့် အသုံးပြုသူများကို
                  ဆိုလိုခြင်းဖြစ်သည်။
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၂။ ရွှေရုပ်လေး Express (Mini App) အား ရယူအသုံးပြုခြင်း
                </h3>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၁။ အသုံးပြုသူများသည် Mini App ဝန်ဆောင်မှုအား
                  ရယူအသုံးပြုရန်အတွက် ၎င်းတို့၏ကိုယ်ပိုင်ဆော့ဖ်ဝဲလ်နှင့်
                  ဟာ့ဒ်ဝဲများ သင့်လျော်ပြီးခေတ်မီကြောင်း သေချာစေရန်အတွက်
                  တာဝန်ရှိပါသည်။
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၂။{" "}
                  {`KBZPay သည် ရွှေရုပ်လေး Express ၏ ဝန်ဆောင်မှုများ အပါအဝင် ရွှေရုပ်လေး Express ၏ လုပ်ဆောင်ချက် သို့မဟုတ် ပျက်ကွက်မှုများအတွက် တာဝန်မရှိပါ။ အသုံးပြုသူမှ ဝန်ဆောင်မှုရယူခြင်းမှ ပယ်ဖျက်ခြင်း၊ ပြောင်းလဲခြင်းလုပ်ငန်းစဉ်များ၊ အသုံးပြုသူမှ ရယူသောဝန်ဆောင်မှုများနှင့် ပတ်သက်၍ အငြင်းပွားမှုများ ပေါ်ပေါက်လာပါက အသုံးပြုသူများသည် ဆက်သွယ်ရန် ဖော်ပြထားသည့် နည်းလမ်းများထဲမှ အပိုဒ် (၂၁) နှင့်အညီ ဖော်ပြထားသည့် ရွှေရုပ်လေး Express Call Center အကူအညီကို တိုက်ရိုက် ဆက်သွယ်နိုင်ပြီး အဆိုပါတိုင်ကြားမှုများအပေါ်တွင် ရွှေရုပ်လေး Express မှ ဆုံးဖြတ်ချက် ပြုလုပ်မည် ဖြစ်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၃။{" "}
                  {`အသက်(၁၈)နှစ်အောက် အသုံးပြုသူများအနေဖြင့် ဤဝန်ဆောင်မှုကိုဝယ်ယူအသုံးပြုလိုပါက ဤစည်းမျဥ်းစည်းကမ်း သတ်မှတ်ချက်များကို   လက်ခံပြီး ကျသင့်သည့် အခကြေးငွေများအားလုံးကို တာဝန်ယူရန် သဘောတူထားသည့် မိဘ(များ) သို့မဟုတ် တရားဝင် အုပ်ထိန်းသူ(များ)၏ သဘောတူညီချက်ကို ရယူ၍ (၁၈) နှစ်အောက် အသုံးပြုသူမှ ဤဝန်ဆောင်မှုကို ဝယ်ယူအသုံးပြုနိုင် မည်ဖြစ်သည်။  ကမ္ဘောဇဘဏ် နှင့် ကုန်သည်သည် မိဘ(များ) သို့မဟုတ် တရားဝင် အုပ်ထိန်းသူ(များ)က ၎င်းတို့၏ အသက် (၁၈) နှစ်အောက် ကလေးများအား ဤဝန်ဆောင်မှုအား အသုံးပြုစေခြင်းသည် မိဘ(များ) သို့မဟုတ် တရားဝင် အုပ်ထိန်းသူ(များ)က ဤစည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များအား လိုက်နာရန်သဘောတူခြင်းဖြစ်သည်ဟု မှတ်ယူမည်ဖြစ်ပြီး အသက် (၁၈) နှစ်အောက် ဝယ်ယူသူအနေဖြင့် ဤဝန်ဆောင်မှုအား အသုံးပြုခြင်းနှင့်စပ်လျဉ်း၍ ဖြစ်ပေါ်လာသည့် တာဝန်ဝတ္တရားအရပ်ရပ်အတွက် ၎င်းတို့၏ မိဘ(များ) သို့မဟုတ် တရားဝင် အုပ်ထိန်းသူ(များ)တွင် တာဝန်ရှိစေမည်ဖြစ်သည်။  အသက် (၁၈) နှစ်အောက် ဝယ်ယူသူအနေဖြင့် မိမိ၏ မိဘ(များ) သို့မဟုတ် တရားဝင် အုပ်ထိန်းသူ(များ)၏ သဘောတူညီချက်မရပါက၊ ဝယ်ယူသူသည် Mini App အသုံးပြု၍ ဝန်ဆောင်မှုအား အသုံးပြုခြင်း၊ Mini App သို့ဝင်ရောက်ခြင်းကို ချက်ချင်းရပ်ရပါမည်။ ဤသည်မှာ ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်၏ တည်ဆဲဥပဒေများနှင့် အဓိပ္ပါယ်ဖွင့်ဆိုခြင်းဖြစ်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၄။{" "}
                  {`သင်သည် ရွှေရုပ်လေး Express App (Mini App)၏ ဝန်ဆောင်မှုများကို တရားမဝင် သို့မဟုတ် ခွင့်ပြုချက်မရှိဘဲ ရည်ရွယ်ချက် တစ်ခုခုအတွက် အသုံးမပြုနိုင်သလို ဝန်ဆောင်မှုအသုံးပြုရာတွင် ဥပဒေများကို ချိုးဖောက်ခြင်းမပြုရ။ ခေါ်ဆိုမှုများ၊ အီးမေးလ်နှင့် စာတိုပေးပို့သူအားလုံးအပါအဝင် မည်သည့် ဆက်သွယ်ရေး နည်းလမ်းဖြင့်မဆို သင်နှင့် ရွှေရုပ်လေး Express App နှင့်/သို့မဟုတ် KBZPay တို့ကြားတွင်အခွင့်အရေးများကို ကာကွယ်ရန်အတွက်သော်လည်းကောင်း ၊အရည်အသွေး အာမခံချက်နှင့် ဥပဒေရေးရာ ရည်ရွယ်ချက်များအတွက် မှတ်တမ်းတင်ထားနိုင်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၅။{" "}
                  {`အသုံးပြုသူအား ဝန်ဆောင်မှုပေးရန်နှင့် ဝန်ဆောင်မှုနှင့်ပတ်သက်၍ အသုံးပြုသူ၏တောင်းဆိုမှုများကို ပြန်လည်တုံ့ပြန်ပေးရန်၊ ဤဝန်ဆောင်မှုနှင့် ပတ်သက်သည့် သတင်းအချက်အလက်များကို ပေးပို့ဆက်သွယ်ရန် လိုအပ်သောကြောင့် အသုံးပြုသူမှ ဝန်ဆောင်မှုရယူစဉ်က ဖြည့်သွင်းခဲ့သော အသုံးပြုသူ၏ အချက်အလက်များကို ရွှေရုပ်လေး Express (Mini App) မှ ကြည့်ရှုခြင်း၊ ထိန်းသိမ်းမှုပြုလုပ်ခြင်း၊ မျှဝေခြင်းနှင့် ထုတ်ဖော်ခြင်းတို့ကို ပြုလုပ်ရန် အသုံးပြုသူအနေဖြင့် သဘောတူလက်ခံမည်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၆။{" "}
                  {`အသုံးပြုသူသည်မိမိ၏ သတင်းအချက်အလက်များအား အခြားသူတစ်ဦးမှ အသုံးပြုခြင်းကြောင့် ဖြစ်ပေါ်လာသော အကျိုးဆက်များသည် အသုံးပြုသူနှင့်သာ သက်ဆိုင်မည်ဖြစ်ပြီး KBZPay နှင့် ရွှေရုပ်လေး Express ထံတွင် တာဝန်မရှိကြောင်း ကို  အသုံးပြုသူဘက်မှ သိရှိနားလည်ပါသည်။
`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၇။{" "}
                  {`ကမ္ဘောဇသည် ဤစည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များအရ ပေးအပ်နေသော ဝန်ဆောင်မှုများနှင့် ပတ်သက်၍ အသုံးပြုသူ၏ ကိုယ်ရေးအချက်အလက်များ၊ Biometric အချက်အလက်များနှင့် ငွေစာရင်းဆိုင်ရာအချက်အလက်များအား အခြားပါတီဝင်များ (ပြင်ပမှဝန်ဆောင်မှုပေးသူများ သို့မဟုတ် အေးဂျင့်များ) ထံသို့ဖြစ် သို့မဟုတ် ဤဝန်ဆောင်မှုအား အသုံးပြုရန်အတွက် အသုံးပြုသူမှ Application ထဲတွင်ဖော်ပြထားသော အသုံးပြုသူ၏ အချက်အလက်များအား ကမ္ဘောဇ၏လုပ်ငန်းခွဲများ၊ ဘဏ်များ၊ ငွေရေးကြေးရေးအဖွဲ့အစည်းများ၊ ခရက်ဒစ်ဗျူရို၊ ကိုယ်စားလှယ်များနှင့် ဥပဒေရေးရာ အဖွဲ့အစည်းများထံသို့ လိုအပ်ပါက မျှဝေခြင်းနှင့် ထုတ်ဖော်ပြောဆိုခြင်းတို့ပြုနိုင်ကြောင်းကို အသုံးပြုသူက သဘောတူပြီး ထိုသို့ဆောင်ရွက်ပိုင်ခွင့်ကို ကမ္ဘောဇဘဏ်သို့ အပ်နှင်းထားပါသည်။
`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၂၊၈။ အသုံးပြုသူများမှ KBZPay ဖြင့် ငွေပေးချေခြင်းဖြင့် KBZPay
                  ဆိုင်ရာပုံမှန်စည်းမျဉ်းနှင့်စည်းကမ်း သတ်မှတ်ချက်များကိုလည်း
                  လိုက်နာရမည်ဖြစ်သည်။
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၃။ ရွှေရုပ်လေး Express (Mini App) ၏ ကြိုတင်စာရင်းသွင်းဝယ်ယူမှု
                  မူဝါဒ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁။
                  {`သင်သည် KBZPay App မှတစ်ဆင့် Mini Appတွင် မှတ်ပုံတင်ပြီး ရွှေရုပ်လေး Express မှ  ရောင်းချသော ကားလက်မှတ်များကိုဝယ်ယူနိုင်မည်ဖြစ်သည်။ အသုံးပြုသူသည် Mini App မှတစ်ဆင့် လက်မှတ်(များ)ဝယ်ယူခြင်းမပြုမှီ ဤစည်းကမ်း သတ်မှတ်ချက်များအား သေချာစွာဖတ်ရှုရမည် ဖြစ်ပြီး မေးမြန်းလိုသည်များရှိပါက ရွှေရုပ်လေး Express Call Center သို့ ဆက်သွယ်မေးမြန်းရမည်ဖြစ်သည်။ လက်မှတ်ဝယ်ယူရာတွင် ကျသင့်ငွေအား အပြည့်အဝ ငွေပေးချေရန်လိုအပ်ပြီး သင့်အနေဖြင့် ငွေပေးချေမှုအား‌ အောင်မြင်စွာ ဆောင်ရွက်ပြီးမှသာလျှင် သင်၏ လက်မှတ်ဝယ်ယူမှုပြီးမြောက်မည်ဖြစ်သည်။ အကယ်၍ သင်သည် ငွေပေးချေမှုကို အောင်မြင်စွာဆောင်ရွက်ပြီးသော်လည်း လက်မှတ်ဝယ်ယူမှုအတည်ပြုချက်ကို မရရှိခဲ့ပါက သို့မဟုတ် အမှားအယွင်းတစ်ခု ရှိပါက အပိုဒ် (၂၁) နှင့်အညီ ဖော်ပြထားသည့် ရွှေရုပ်လေး Express Call Center  သို့ဆက်သွယ်၍ ပြန်လည်အတည်ပြုရန် သင့်တွင် တာဝန်ရှိပါသည်။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၂။
                  {`Mini App တွင် ဖော်ပြပါရှိသော ဝန်ဆောင်မှုများနှင့် နှုန်းထားများအတိုင်း သင်အနေဖြင့် လက်မှတ်များအား ဝယ်ယူနိုင်မည်ဖြစ်သည်။ သို့ရာတွင် သင်မှ အောင်မြင်စွာ ငွေပေးချေခြင်းမပြုသေးသော သင်၏လက်မှတ်မှာယူမှုသည် အချိန်မရွေး ပယ်ဖျက်နိုင် မည်ဖြစ်ပြီး စျေးနှုန်းများသည်လည်း ပြောင်းလဲနိုင်သည်ဆိုသည်ကိုလည်း သင့်အနေဖြင့်သိရှိနားလည်ရပါမည်။ KBZPay မှသော်လည်းကောင်း၊ ရွှေရုပ်လေး Express မှသော်လည်းကောင်း မည်သည့်အကြောင်းကြောင့်ဖြစ်စေ သင်၏ဝယ်ယူမှုကို ငြင်းပယ် ပိုင်ခွင့်ရှိမည်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၃။
                  {`ရွှေရုပ်လေး Express သည်  ဝန်ဆောင်မှုများ၏ တိကျသောဖော်ပြချက်များအား ပေးဆောင်ရန် ရည်ရွယ်သော်လည်း Mini App အတွင်းဖော်ပြပါရှိချက်များသည် အမှားအယွင်းမရှိ၊ ပြီးပြည့်စုံခြင်းရှိသည်ဟူ၍ ရွှေရုပ်လေး Express နှင့် KBZPay မှ အာမခံခြင်းမရှိပါ။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၄။
                  {`သင်၏ ကြိုတင်စာရင်းသွင်းမှုများတွင် ဖော်ပြချက်၌ သီးသန့်ဖော်ပြထားခြင်းမရှိပါက   မည်သည့်အပိုစရိတ်၊ ကုန်ကျစရိတ် သို့မဟုတ် ဝန်ဆောင်မှုများကိုမှ အကျုံးမဝင်ပါ။ သင့်ခရီးစဉ် အတွင်း သင်ရရှိသော သို့မဟုတ် အသုံးပြုသော မည်သည့်အပိုစရိတ်၊ ကုန်ကျစရိတ် သို့မဟုတ် ဝန်ဆောင်မှုများအတွက် သင်ကိုယ်တိုင်သာ တာဝန်ရှိပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၅။
                  {`အသုံးပြုသူသည် ကြိုတင်စာရင်းပေးခြင်းနှင့်ပတ်သက်၍ မှားယွင်းသောအချက်အလက်များဖြည့်သွင်းခြင်း/ ပေးဆောင်မှုတို့ကြောင့် ဖြစ်ပေါ်လာသော အကျိုးဆက်များသည် အသုံးပြုသူနှင့်သာ သက်ဆိုင်မည်ဖြစ်ပြီး KBZPay နှင့် ရွှေရုပ်လေး Express တွင် တာဝန်မရှိကြောင်း အသုံးပြုဘက်မှ သိရှိနားလည်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၆။
                  {`အသုံးပြုသူသည် ကြိုတင်မှာယူမှုများအတွက် အပြည့်အဝငွေပေးချေရန်လိုအပ်ပြီး မိမိဝယ်ယူထားသော လက်မှတ်တွင်ဖော်ပြထားသော နေ့ရက်နှင့်အချိန်အတွက်သာ လက်မှတ်အားအသုံးပြုခွင့်ရှိသည်။ အသုံးပြုသူသည် ခရီးစဉ် နေ့ရက်နှင့်အချိန်များအား ပြောင်းလဲလိုသည့်အခါတွင်‌ရွှေရုပ်လေး Expressသို့တိုက်ရိုက်ဆက်သွယ်ရမည်ဖြစ်ပြီး KBZPay ရှိ ‌ရွှေရုပ်လေး Express  Mini Appမှတစ်ဆင့် ပြုလုပ်ခွင့်မရရှိနိုင်ပါ။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၇။
                  {`သင်သည် မည်သည့် ခရီးစဉ်အတွက်မဆို အသွားအပြန် လက်မှတ်များအားကြိုတင်ဝယ်ယူနိုင်သည်။ ဝယ်ယူပြီး လက်မှတ် အတွက်     ပြန်လည် ပယ်ဖျက်ခွင့်မပြုပါ။ ထို့ကြောင့်ခရီးစဉ် အား ဘိုကင် လုပ်ပြီးနောက်   သေချာသည်ဆိုမှ သာ အတည်ပြုစေလိုပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၈။
                  {`Online Ticketing System ဖြင့် လက်မှတ်ရောင်းရာတွင် ခရီးစဉ် ၊ အချိန် ၊ အရေအတွက် ၊   ဒေသခံနှင့် နိုင်ငံခြားသား စသဖြင့် စနစ်တကျ ရွေးချယ်ဝယ်ယူရမည်။ နိုင်ငံခြားသားတစ်ဦးသည် ပြည်တွင်းခရီးသည်တစ်ဦး၏ လက်မှတ်စျေးနှုန်းကို မှားယွင်းရွေးချယ်မိပါက၊နိုင်ငံသားနှင့် နိုင်ငံခြားသား လက်မှတ်စျေးနှုန်းအကြား ကွာခြားချက်ကို ‌ရွှေရုပ်လေး Express သို့ ပေးဆောင်ရမည်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၉။
                  {`သင့်အနေဖြင့် ဝယ်ယူထားသည့်လက်မှတ်ပေါ်တွင် ဖော်ပြပါရှိသည့်အတိုင်းသာလျှင် ဝန်ဆောင်မှုရရှိနိုင်မည်ဖြစ်ပြီး ဝယ်ယူပြီးလက်မှတ်များကို  Mini Appတွင် ပြန်လည်ပြင်ဆင်လို့မရနိုင်သောကြောင့် ပြန်လည်စစ်ဆေးရန်တာဝန်မှာ သင့်၏တာဝန်သာလျှင်ဖြစ်သည်။ Mini App မှတဆင့်ဝယ်ယူထားသော လက်မှတ်နှင့်ပတ်သက်၍ အမှားပြင်ဆင်လိုသော်လည်းကောင်း၊ အချိန်၊ နေရာတို့အား ပြောင်းလဲလိုလျှင်သော်လည်းကောင်း အပိုဒ် (	၂၁) တွင်ဖော်ပြထား သည့်အတိုင်း ‌ရွှေရုပ်လေး Express သို့တိုက်ရိုက်ဆက်သွယ်၍ ပြောကြားရမည်ဖြစ်ပြီး ‌ရွှေရုပ်လေး Express ၏ ဆုံးဖြတ်ချက်အတိုင်းလိုက်နာရမည်ဖြစ်သည်။ KBZPay ရှိ Mini App မှ ဝယ်ယူထားသော လက်မှတ်များအတွက် သင်အနေဖြင့် အီလက်ထရောနစ်နည်းလမ်းဖြင့် ပေးပို့သည့် လက်မှတ်သာလျှင် ရရှိနိုင်မည်ဖြစ်ပြီး KBZPay မှသော်လည်း၊ ‌ရွှေရုပ်လေး Express မှသော်လည်းကောင်း မည်သည့်အခါတွင်မျှ E-Ticket အား physically လက်မှတ်ထုတ်ပေးမည်မဟုတ်ပါ။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၀။
                  {`‌ရွှေရုပ်လေး Express Mini App တွင်ဝယ်ယူထားသောလက်မှတ်များကို E-ticket များအဖြစ် Mini App ၏ “Home” မျက်နှာပြင်သို့သွားကာလက်မှတ် အခြေအနေ “Purchased Tickets” ကို နှိပ်ခြင်းဖြင့် E-ticket အား ထုတ်ယူစစ်ဆေးနိုင်သည်။ ၎င်း E-ticket အား ဝယ်ယူသူမှ သိမ်းထားရန်လိုအပ်သည်။ အသုံးပြုသူများသည် ၎င်းတို့၏ Mobile Phone တွင် လက်မှတ်ကိုပြသခြင်းဖြင့် သို့မဟုတ် အီလက်ထရွန်နစ်လက်မှတ်၏ ရှင်းလင်းပြတ်သားသော ပရင့်ထုတ်ပုံကို ပြသရန် လိုအပ်မည်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၁။
                  {`သင်ဝယ်ယူထားသောလက်မှတ်(များ)နှင့်ပတ်သက်၍ သံသယဖြစ်ဖွယ်တစ်စုံတစ်ရာတွေ့ရှိပါက သို့မဟုတ် စည်းကမ်းချက် တစ်စုံတစ်ရာဖောက်ဖျက်သည်ဟု ထင်မြင်ယူဆပါက KBZPay မှသော်လည်းကောင်း၊ ‌ရွှေရုပ်လေး Express မှသော်လည်းကောင်း ရောင်းချထားသောလက်မှတ်များအား သင့်အားအကြောင်းကြားခြင်းမရှိဘဲ အချိန်မရွေး ဖျက်သိမ်းခွင့်ရှိမည်ဖြစ်ပြီး ထိုဖျက်သိမ်းထားသော သင့်လက်ဝယ်ရှိ လက်မှတ်များသည်လည်း အသုံးပြုနိုင်တော့မည်မဟုတ်ပါ။ ထိုသို့ပယ်ဖျက်ခြင်းအတွက် သင့်အနေဖြင့်မည်သည့်လျော်ကြေးတစ်စုံတစ်ရာမျှရပိုင်ခွင့်မရှိသည်ကိုလည်း သင်သည် သိရှိလက်ခံ သဘောတူပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၂။
                  {`ကြိုတင်မှာယူမှုများကို ရောင်းချခြင်း၊ လေလံတင်ခြင်း၊ လဲလှယ်ခြင်း သို့မဟုတ် ပြင်ပအဖွဲ့အစည်းသို့ လွှဲပြောင်းခြင်းမပြုနိုင်ပါ။ ကြိုတင်စာရင်းသွင်းခြင်းများသည် ကြိုတင်စာရင်းသွင်းစဉ်တွင်ဖော်ပြထားသော နိုင်ငံသားမှတ်ပုံတင်နံပါတ် သို့မဟုတ် နိုင်ငံကူးလက်မှတ်ပါရှိသည့် တစ်ဦးချင်းစီအတွက် သီးသန့်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၃။
                  {`ရွှေရုပ်လေး Express နှင့် KBZPay တို့သည် Mini App ထဲရှိ ဝန်ဆောင်မှုများ၊ စျေးနှုန်းများ၊ စည်းမျဥ်းစည်းကမ်းများ ၏ အစိတ်အပိုင်းများကို အချိန်မရွေး ပြင်ဆင်ခြင်း၊ ပြောင်းလဲခြင်း၊ ထည့်သွင်းခြင်း သို့မဟုတ် ဖယ်ရှားခြင်းတို့ ပြုလုပ်ပိုင်ခွင့်ရှိသည်။ အသုံးပြုသူများသည် update များကို အခါအားလျော်စွာ စစ်ဆေးရန် တာဝန်ရှိပါသည်။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၄။
                  {`‌ရွှေရုပ်လေး Express သည် လက်မှတ်တွင် ဖော်ပြပါရှိသည့် လူပုဂ္ဂိုလ်ကိုသာလျှင် ဝန်ဆောင်မှုပေးမည်ဖြစ်ပြီး ‌ရွှေရုပ်လေး Express မှ လက်မှတ်အားတိုက်ဆိုင်စစ်ဆေးသည့်အခါ ကွဲလွဲမှုတစ်စုံတစ်ရာရှိပါက ဝန်ဆောင်မှုပေးရန် ငြင်းပယ်ပိုင်ခွင့်ရှိမည်ဖြစ်သည်။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၅။
                  {`အသုံးပြုသူဘက်မှ ပယ်ဖျက်လိုက်သော ကြိုတင်စာရင်းပေးမှုများနှင့် ပတ်သက်၍ ပြန်အမ်းငွေမရရှိကြောင်းကို အသုံးပြုသူဘက်မှ သိရှိနားလည်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၆။
                  {`ရွှေရုပ်လေး Express Mini App မှ ကြိုတင်စာရင်းပေးပြီးနောက် ဖြစ်ပေါ်လာသည့် ကိစ္စရပ်တိုင်းသည် ရွှေရုပ်လေး Express ကိုသာ တိုက်ရိုက်ဆက်သွယ်ရမည်ဖြစ်ကြောင်း အသုံးပြုသူမှ သိရှိနားလည်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၃၊၁၇။
                  {`KBZPay သည် သင်နှင့် ရွှေရုပ်လေး Express တွင် ကြားခံအဖြစ် ဆောင်ရွက်ပါသည်။ ဝန်ဆောင်မှုအရည်အသွေး သို့မဟုတ် ရရှိလာသောအဖြေများ၏ တိကျမှန်ကန်မှုတို့အပါအဝင် ရွှေရုပ်လေး Express နှင့် တိုက်ရိုက်ဖြစ်ပေါ်လာသည့် ပြဿနာများအတွက် KBZPay တွင်တာဝန်မရှိပါ။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၄။ ခရီးစဥ်မတိုင်မီ၊ခရီးစဥ်အတွင်းနှင့် ယာဥ်ပေါ်တွင်
                  လိုက်နာရမည့်စည်းကမ်းချက်များ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၁။
                  {`ခရီးသည် တစ်ဦးလျှင် ‌နောက်ကျောပိုးအိတ်တစ်လုံးနှင့် လက်ဆွဲအိတ်တစ်လုံးကိုသာ ခွင့်ပြုပြီး ထို့ထက်ပို ပါက  တန်ဆာခ ပေးဆောင်ရန် သဘောတူပါသည်။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၂။
                  {`ခရီးသည် သတ်မှတ်ထားသော ကားထွက်ချိန်ကျော် မှ ရောက်လာခြင်း အတွက် ရွှေရုပ်လေး Express မှ  တာဝန်ယူပေးမည် မဟုတ် သည်ကို သဘောတူပါသည်။ အဖွဲ့လိုက်ခရီးသွားများသည် ရွှေရုပ်လေး Express မှသတ်မှတ်ထားသော စည်းကမ်းသတ်မှတ်ချက်များနှင့်အညီ လူမှုရေးဆိုင်ရာထိန်းချုပ်မှုအစီအမံများကို လိုက်နာရမည်ဖြစ်သည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၃။
                  {`ခရီးသည်များနှင့်အတူ အိမ်မွေးတိရစ္ဆာန်များကို မော်တော်ယာဉ်ပေါ်တွင် ခေါ်ဆောင်ခွင့် မပြု ပါ။ သို့သော် ကုန်တင်သောအပိုင်းတွင်သာ တင်ပို့ခွင့်/ ခေါ်ဆောင်ခွင့်ရှိပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၄။
                  {`ဥပဒေ နှင့်မလွတ်ကင်းသည့် ပစ္စည်းများ သယ်ယူခြင်း မရှိရန်လည်း သဘောတူပါသည်။ ရွှေရုပ်လေး Expressသည် တရားမ၀င်၊ အန္တရာယ်ရှိသော သို့မဟုတ် အခြားခရီးသည်များအတွက် စိတ်မသက်မသာဖြစ်စေရသည်ဟု ယူဆရသည့် ယာဉ်ပေါ်ရှိ မည်သည့်ကုန်ပစ္စည်းကိုမဆို တင်ဆောင်ရန်ငြင်းဆန်ပိုင်ခွင့်ရှိသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၅။
                  {`ရွှေရုပ်လေး Express နှင့် KBZPay သည် ခရီးစဥ်မတိုင်မီ နှင့် ခရီးစဥ်အတွင်းမတော်တဆမှုများ၊ ကြန့်ကြာမှု၊ ဖျားနာမှု၊ ရာသီဥတု၊ နိုင်ငံရေးအခြေအနေများ သို့မဟုတ် အခြားထိန်းချုပ်မရနိုင်သောအချက်များကြောင့် နှောင့်နှေးမှု၊ ဆုံးရှုံးမှု သို့မဟုတ် ကုန်ကျစရိတ်များအတွက် တာဝန်ယူမည်မဟုတ်ကြောင်း ခရီးသည်မှသဘောတူနားလည်ပါသည်။ `}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၆။
                  {`ခရီးသည်များသည်	ခရီးစဉ် အတွက် လိုအပ်သည့်အချက်အလက်များ System ပေါ်တွင်ဖြစ်စေ ၊ ဂိတ်တွင် ဖြစ်စေ တောင်းဆိုမှု အတွက် မှန်ကန်စွာ ဖြည့်စွက်ပေးရန် သဘောတူ ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၄၊၇။
                  {`ရွှေရုပ်လေး Expressမှ သတ်မှတ်ထားသည့် အထက်ပါ စည်းကမ်းချက် များအား သိရှိပြီး လက်ခံသဘောတူလုပ်ဆောင်ရမည်ဖြစ်ပြီး ခရီးသည်များအတွက် ခရီးစဉ်အတွင်း ရွှေရုပ်လေး Expressမှ သတ်မှတ်ထားသော အခြားစည်းကမ်းသတ်မှတ်ချက်များကိုပါ လိုက်နာရန် သဘောတူပါသည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၅။ ခရီးစဉ်၊ အချိန်၊ ရက်များပြောင်းလဲလိုပါက လိုက်နာရမည့်
                  စည်းကမ်းချက်များ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  ၅၊၁။
                  {`အသုံးပြုသူသည် System ကို အသုံးပြုနေရင်း ခရီးစဉ် ပြောင်းပြန်ဝယ်မိသည်ဖြစ်စေ၊ ဒေသခံနှင့် နိုင်ငံခြားသား မှားသည်ဖြစ်စေ၊ အသုံးပြုသူ၏ အမှားများအတွက် ပြန်လည်ပြင်ဆင်လိုပါက၊ ဝယ်ယူထားပြီးသော ခရီးစဉ်ဖြစ်စေ၊ ရက်ဖြစ်စေ မူလဝယ်ထားသည့်မှ ပြောင်းလဲလိုလျှင် အပိုဒ် (၂၁) နှင့်အညီ ဖော်ပြထားသည့် ဝယ်ယူထားသောလက်မှတ်တွင်ပါရှိသော မူလထွက်ခွာမည့်ရက်မတိုင်မီ အနည်းဆုံး (၂) ရက် ကြိုတင်၍ ရွှေရုပ်လေး Express Call Center  သို့ဆက်သွယ်ပြီး သတ်မှတ်ထားသော ဝန်ဆောင်ခအား ပေးဆောင်၍ လုပ်ဆောင်ရမည်ဖြစ်သည်။ KBZPay ရှိ Mini Appမှတစ်ဆင့် ဝယ်ယူပြီးဖြစ်သော လက်မှတ်များနှင့်ပတ်သက်၍ ခရီးစဥ်၊လက်မှတ်၊ အချိန် ပြောင်းလဲခြင်းများ၊ငွေပြန်အမ်းသည့် ကိစ္စရပ်များအပါ အခြားသော ကိစ္စရပ် များ အတွက် KBZPay Mini App တွင် လုံးဝတာဝန်မရှိကြောင်းနှင့် ယင်းကိစ္စရပ်များအတွက် အပိုဒ် (၂၁) နှင့်အညီ ဖော်ပြထားသည့် ရွှေရုပ်လေး Express Call Center  သို့သာတိုက်ရိုက်ဆက်သွယ်၍ ရွှေရုပ်လေး Express မှ သတ်မှတ်ထားသော စည်းမျဉ်းစည်းကမ်းများ အတိုင်းသာဆောင်ရွက်ရမည်ကို ဝယ်ယူသူများက သိရှိနားလည်လက်ခံပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  ၅၊၂။
                  {`မည်သည့်အခြေအနေတွင်မဆို ရွှေရုပ်လေး Express Mini App မှ ဝယ်ယူထားသော လက်မှတ်များ အတွက် ငွေပြန်အမ်းခြင်း မရှိပါ။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၆။ ၀န်ဆောင်မှုရပ်ဆိုင်းခြင်း၊ ဆိုင်းငံ့ခြင်း၊ ဖျက်သိမ်းခြင်း
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`အသုံးပြုသူအနေဖြင့် ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို ဆက်လက်အသုံးမပြုလိုပါက ဝန်ဆောင်မှု ရပ်ဆိုင်းခြင်းဆိုင်ရာ နည်းလမ်းများအတိုင်း ဝန်ဆောင်မှုကို ရပ်ဆိုင်းနိုင်သည်။ မည်သည့်အကြောင်း ကြောင်းကြောင့်မဆို အသုံးပြုသူအား ကြိုတင်အကြောင်းကြားခြင်းမရှိဘဲ မည်သည့်အချိန်တွင်မဆို အသုံးပြုသူ၏ ဤဝန်ဆောင်မှု အသုံးပြုနေခြင်းကို ဖျက်သိမ်းခြင်း၊ ဆိုင်းငံ့ခြင်း၊ ရပ်ဆိုင်းခြင်းတို့ကို KBZPay မှဖြစ်စေ သို့မဟုတ် ရွှေရုပ်လေး Express (Mini App) မှဖြစ်စေ ပြုလုပ်ခွင့်ရှိသည်။ ထို့အတွက် မည်သူတစ်ဦးတစ်ယောက်အတွက်မျှ KBZPay နှင့် ရွှေရုပ်လေး Express (Mini App)  တို့တွင် တာဝန်ရှိမည်မဟုတ်ကြောင်းကို အသုံးပြုသူအနေဖြင့် သိရှိသဘောတူ လက်ခံပါသည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၇။ အသိပေးချက်များပေးပို့ခြင်း
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို အသုံးပြုခြင်းဖြင့် အသုံးပြုသူ၏ ရွှေရုပ်လေး Express (Mini App) အကောင့်ထံသို့ အကြောင်းကြား ချက်များပေးပို့ခြင်း၊ ရွှေရုပ်လေး Express (Mini App) စာရင်းပေးသွင်းထားသော ဖုန်းနံပါတ် သို့ ရွှေရုပ်လေး Express (Mini App)  မှ ဆက်သွယ်ခြင်းတို့ကို သဘောတူလက်ခံပါသည်။  ရွှေရုပ်လေး Express (Mini App)  အနေဖြင့် အစီအစဉ်အသစ်များ၊ ပရိုမိုးရှင်းအစီအစဉ်များ၊ အသုံးပြုသူများထံမှစစ်တမ်းကောက်ယူခြင်းများ စသည်တို့ကို App ထဲမှ အသိပေးချက်များမှတစ်ဆင့်ဖြစ်စေ၊ SMS ကတဆင့်ဖြစ်စေ၊ အခြားသော ဆက်သွယ်ရေး နည်းလမ်းများမှတစ်ဆင့်ဖြစ်စေ ဆက်သွယ်ပေးပို့သွားမှာ ဖြစ်ပါသည်။ ထို့အပြင် ရွှေရုပ်လေး Express App ထဲမှာ ဝန်ဆောင်မှုအသုံးပြုခြင်းအတွက် အသုံးပြုသူ၏ငွေပေးချေမှုကိစ္စများ၊ သဘောတူညီမှုများ၊ ထုတ်ဖော်ချက်များနှင့် အခြားအချက် အလက်များပေးပို့ခြင်းကိုလည်း အသုံးပြုသူမှ လက်ခံပါမည်။ ဤဝန်ဆောင်မှုကို ရယူထားသော အသုံးပြုသူထံသို့ ရွှေရုပ်လေး Express (Mini App) မှတစ်ဆင့် အချက်အလက်များ၊ အကြောင်းအရာများ၊ စာသားများ၊ ဆော့ဖ်ဝဲများ၊ အသံများ၊ ဓာတ်ပုံများ၊ ဒီဇိုင်းပုံရိပ်များ၊ ဗီဒီယိုများ၊ မက်ဆေ့ချ်များ၊ တွဲဖက်အကြောင်းအရာများနှင့် အခြားသော အကြောင်းအရာများကို ရွှေရုပ်လေး Express (Mini App) မှ ပေးပို့ခွင့်ရှိသည်။ မှတ်ပုံတင်စဉ်က အသုံးပြုသူမှ ပေးသွင်းသော အချက်အလက်များနှင့် ထိုသို့ပေးသွင်းခြင်းကြောင့် ဖြစ်ပေါ်လာသော အကျိုးဆက်များအတွက် အသုံးပြုသူထံတွင်သာ အလုံးစုံ တာဝန်ရှိသည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၈။ ကန့်သတ်တားမြစ်ချက်များ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`၈၊၁။ ရွှေရုပ်လေး Express ဝန်ဆောင်မှုကို အသုံးပြုသူများအနေဖြင့် စီးပွားဖြစ်အသုံးပြုခွင့်မရှိပါ။ ဤဝန်ဆောင်မှုသည် အသုံးပြုသူ၏ တစ်ကိုယ်ရည်နှင့် အကျိုးအမြတ်အတွက် မဟုတ်သော အသုံးပြုမှုအတွက်သာ ဖြစ်သည်။ အသုံးပြုသူအနေဖြင့် ဝန်ဆောင်မှုအား ရယူရာတွင်`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`၈၊၁၊၁။	ရွှေရုပ်လေး Express (Mini App) မှ စီစဉ်ပေးထားသော ကြားခံစနစ် မဟုတ်သည့် အခြားနည်းလမ်းများကို အသုံးပြုခြင်း၊`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`၈၊၁၊၂။	ဝန်ဆောင်မှုများရယူရာတွင် Robot၊ Spider၊ Scraper၊ Script၊ Web Crawler များအသုံးပြု၍ နှောင့်ယှက်ခြင်းများ ပြုလုပ်ခြင်းနှင့် အခြားအလိုအလျောက် နည်းလမ်းများကို အသုံးပြုခြင်း၊`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`၈၊၁၊၃။	ဝန်ဆောင်မှုကို ရယူခြင်း၏ ဇာတ်မြစ်ကို ဖုံးကွယ်ရန်အတွက် Identifier ကုဒ်နံပါတ်များကို အတုအပပြုလုပ်ခြင်း၊ အချက်အလက်များကို လိုသလိုပြုပြင်ခြင်း၊`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`၈၊၁၊၄။	ရွှေရုပ်လေး Express (Mini App) ဆာဗာ အား ပျက်ဆီးစေမည့်လုပ်ရပ်များ၊ ဆော့ဖ်ဝဲလ်များ အသုံးပြုခြင်း၊`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`၈၊၁၊၅။	နှောင့်ယှက်ဖျက်ဆီးလိုသော ရည်ရွယ်ချက်ဖြင့်စာများ၊ အီးမေးလ်များရေးသားခြင်း၊ ဗိုင်းရပ်စ်ပါသောဆော့ဖ်ဝဲလ်များ အသုံးပြုခြင်းများကို လုံး၀ မပြုလုပ်ပါဟု သဘောတူပါသည်။`}
                </p>

                <p className="text-body text-gray-700 py-1">
                  {`၈၊၂။       အသုံးပြုသူသည် ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုမှ သတ်မှတ်ပေးထားသော စည်းကမ်းများနှင့် သတ်မှတ်ချက်များဘောင်အတွင်းကသာ အသုံးပြုရမည် ဖြစ်သည်။ အသုံးပြုသူအနေဖြင့် ရွှေရုပ်လေး Express (Mini App)  ဝန်ဆောင်မှုက သတ်မှတ်ပေးထားသော စည်းမျဉ်းစည်းကမ်းများကို ဖောက်ဖျက်၍သော်လည်းကောင်း၊သတ်မှတ်ချက်များကို မလိုက်နာဘဲ ကျော်လွန်၍သော်လည်းကောင်း ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို အသုံးပြုခြင်း၊ ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှု၏ Social Media စာမျက်နှာများဖြစ်သည့် Facebook ၊ Instagram ၊ YouTube နှင့် Web Page များကို ရွှေရုပ်လေး Express Mini App) ဝန်ဆောင်မှုမှ သက်ဆိုင်ရာ တစ်ဦးတစ်ယောက်၏ ခွင့်ပြုချက်မရှိဘဲ ရယူသုံးစွဲခြင်းများ မပြုလုပ်ပါဟု သဘောတူပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">
                  {`၈၊၃။      ဤဝန်ဆောင်မှုအသုံးပြုခြင်းဆိုင်ရာ စည်းကမ်းချက်အဖြစ် ဝန်‌ဆောင်မှုများအား ဥပဒေနှင့်မညီသည့် မည်သည့် ရည်ရွယ်ချက် အတွက်မှ အသုံးပြုမည်မဟုတ်ကြောင်းကို အသုံးပြုသူမှ အာမခံသည်ဖြစ်သည်။ ဝန်ဆောင်မှုများကို အသုံးပြုမှုနှင့် စပ်လျဉ်းသည့် တည်ဆဲဥပဒေ၊ စည်းမျဉ်းစည်းကမ်း၊ နည်းဥပဒေနှင့် ပြဋ္ဌာန်းဥပဒေအရပ်ရပ်ကို လိုက်နာရန် အသုံးပြုသူမှ သဘောတူသည်ဖြစ်သည်။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၉။ လျော်ကြေး</h3>
                <p className="text-body text-gray-700 py-1">
                  {`အသုံးပြုသူမှ Mini Appအား အသုံးပြုခြင်း သို့မဟုတ် ဤစည်းမျဉ်းစည်းကမ်းသတ်မှတ်ချက်များအား ချိုးဖောက်ခြင်း ကြောင့်  ဖြစ်ပေါ်လာသော ရွှေရုပ်လေး Express သို့မဟုတ် ကမ္ဘောဇဘဏ် သို့မဟုတ် KBZPay၊ ၎င်း၏ဒါရိုက်တာများ၊ အရာရှိများ၊ ဝန်ထမ်းများ၊ ကိုယ်စားလှယ်များ၊ အေးဂျင့်များနှင့် တတိယအဖွဲ့အစည်း၏ ထိခိုက်နစ်နစ်မှုတောင်းဆိုချက်အားလုံး၊ တာဝန်ယူမှု၊ (ပါဝင်သော်လည်း အကန့်အသတ်မရှိ၊ တရားဝင်အခကြေးငွေများ)ကုန်ကျစရိတ်၊ ပျက်စီးမှုများအားလုံးအတွက် လျော်ကြေးပေးရန် အသုံးပြုသူမှသဘောတူသည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၀။ ကိုယ်စားပြုချက်များ၊ အာမခံချက်များ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`Mini App ပေါ်ရှိ အကြောင်းအရာများ ”အရှိအတိုင်း” နှင့် ”ရရှိနိုင်သည့်အတိုင်းသာပေးထားခြင်းဖြစ်ကြောင်းကို အသုံးပြုသူမှ သိရှိသဘောတူပြီး  Mini App ပေါ်တွင် ဖော်ပြထားသော ဖော်ပြချက်များပေါ်တွင် မှီတည်၍ မည်သည့်အကြောင်းအရာကိုမဆို၊ ကုန်ပစ္စည်းများ၊ ထုတ်ကုန်များ သို့မဟုတ် ဝန်ဆောင်မှုများ၏ အသုံးပြုသူမှလက်ခံခြင်း သို့မဟုတ် ရယူအသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသည့် မည်သည့် အကျိုးဆက်အတွက်မဆို သည် အသုံးပြုသူတစ်ဦးတည်းတွင်သာ တာဝန်ရှိမည်ဖြစ်သည် ။ Mini Appဖြစ်စေ၊ ဝန်ဆောင်မှုများအားဖြစ်စေ၊ Mini App ရှိ မည်သည့် Website လင့်ခ်ကိုဖြစ်စေ နှင့် Mini App ပေါ်တွင် တင်ထားသောမည်သည့်အကြောင်းအရာကိုဖြစ်စေ အသုံးပြုခြင်းနှင့်ပတ်သတ်၍ ဖြစ်ပေါ်လာနိုင်သည့် အသုံးပြုသူ၏ သို့မဟုတ် အခြားမည်သည့် ပါတီ၏ ဆုံးရှုံးခြင်း သို့မဟုတ် ပျက်စီးခြင်းအတွက် တာဝန်ရှိမှုအားလုံး (စာချုပ်တွင် ဖြစ်ပေါ်လာသည်ဖြစ်စေ၊ ပေါ့ဆမှုဖြစ်စေ သို့မဟုတ် အခြားနည်းဖြင့်ဖြစ်စေ) ကို ဖယ်ထုတ်ထားမည်ဖြစ်သည်။ KBZPay နှင့် ရွှေရုပ်လေး Express (Mini App) သည် Mini App တွင် ကမ်းလှမ်းထားသော ဝန်ဆောင်မှုများကို အချိန်တိုင်းရရှိနိုင်စေရန် ကျိုးကြောင်းဆီလျော်စွာ ကြိုးပမ်း ဆောင်ရွက်နေသော်လည်း Mini App အား လုံခြုံမှုရှိသည်ဟူ၍ဖြစ်စေ၊ အချိန်မီ၊ အနှောက်အယှက်မရှိဟူ၍ဖြစ်စေ၊ အမှားအယွင်းမရှိပါဟူ၍ဖြစ်စေ၊  နည်းပညာအခက်အခဲမရှိဟူ၍ဖြစ်စေ၊ ချွတ်ယွင်းချက်မရှိဟူ၍ဖြစ်စေ (သို့မဟုတ်) ဗိုင်းရပ်စ်များ မရှိပါဟု  KBZPay က သော်လည်းကောင်း၊ ရွှေရုပ်လေး Express (Mini App) ကသော်လည်းကောင်း အာမခံခြင်း (သို့မဟုတ်) ကိုယ်စားပြုခြင်းများကို မပြုလုပ်ပါ။ စီစဉ်ထားသော သို့မဟုတ် ပုံမှန်စနစ်ထိန်းသိမ်းခြင်းလုပ်ငန်း၊ အင်တာနက် (သို့မဟုတ်) အီလက်ထရွန်နစ်ဆက်သွယ်ရေးကြောင့်ဖြစ်စေ (သို့မဟုတ်) အင်အားကြီးသည့်ဖြစ်ရပ်များကြောင့် ပလပ်ဖောင်း၏ ယာယီ ပြတ်တောက်မှုများဖြစ်ပေါ်နိုင်ပြီး ထို့အတွက် KBZPay နှင့် ရွှေရုပ်လေး Express တာဝန်မရှိသည်ကို အသုံးပြုသူမှ သိရှိ သဘောတူပါသည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၁။ အသိဉာဏ်ပစ္စည်းများဆိုင်ရာ မူပိုင်ခွင့်
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`စာရွက်စာတမ်း၊ ကမ္ဘောဇဘဏ်၏ဝဘ်ဆိုက်နှင့် KBZPay Application ဝန်ဆောင်မှု အမည်နှင့် ကုန်အမှတ်တံဆိပ်များ အပါအဝင်  အားလုံးတွင် အကြောင်းအရာအဖြစ်ဖြင့်ဖြစ်စေ၊ စကားအသုံးအနှုန်း ပုံစံအဖြစ် ဖြင့်ဖြစ်စေ ပါရှိသော ကုန်အမှတ်တံဆိပ်၊ သင်္ကေတ၊ စာလုံးအမှတ်အသား၊ လုပ်ငန်းဝန်ဆောင်မှု အမှတ်အသား၊ ကုန်အမှတ်တံဆိပ်အမည်နှင့်  ဒီဇိုင်းလက်ရာအားလုံး၏ ဉာဏပစ္စည်းဆိုင်ရာ မူပိုင်ခွင့်အရပ်ရပ်သည် ကမ္ဘောဇ၏မူပိုင် ဖြစ်သည်။ ရွှေရုပ်လေး Express ဝန်ဆောင်မှုတွင် အသုံးပြုထားသော ကုန်အမှတ်တံဆိပ်များ (ရွှေရုပ်လေး Express Mini App  ဝန်ဆောင်မှု အမည်နှင့် ကုန်အမှတ်တံဆိပ်များအပါအဝင်)၊ လုပ်ငန်းအမည်များ၊ လိုဂိုများ၊ ဝန်ဆောင်မှု အမှတ်အသားများ အားလုံးသည် ရွှေရုပ်လေး Express ဝန်ဆောင်မှုနှင့် ယင်း၏လုပ်ငန်းဖော်ကုမ္ပဏီများ၊ အခြားသက်ဆိုင်ရာ လုပ်ငန်းများမှ ပိုင်ဆိုင်ပါသည်။အသုံးပြုသူသည် ကမ္ဘောဇ နှင့် ရွှေရုပ်လေး Express ၏ ဉာဏပစ္စည်းဆိုင်ရာ မူပိုင်ခွင့်ကို ကိုယ်ကျိုးအတွက် သုံးစွဲခြင်းမပြုရ သို့မဟုတ် ကမ္ဘောဇ နှင့် ရွှေရုပ်လေး Express မှ စာဖြင့်ရေးသားထားသော ကြိုတင်ခွင့်ပြုချက် ရရှိထားခြင်းမရှိဘဲ မည်သည့်ကိစ္စကိုမဆို ကြော်ငြာခြင်းမပြုရ။ အသုံးပြုသူသည် ကမ္ဘောဇဘဏ်၏ပုံရိပ်၊ ကုန်အမှတ်တံဆိပ်၊ လုပ်ငန်းအမည် သို့မဟုတ် အခြားဉာဏပစ္စည်းဆိုင်ရာ မူပိုင်ခွင့်ကို ထိခိုက်ပျက်ပြားစေနိုင်သည့် မည်သည့်ပြုလုပ်မှုမျိုးကိုမဆို ပြုလုပ်ခွင့်ရှိမည်မဟုတ်ပါ ထိုနာမည်များကို အသုံးပြုပြီး ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို ရည်ညွှန်းခြင်း၊ အခြားတစ်ခုခုကို ရည်ညွန်းခြင်းများ ဆောင်ရွက်ခွင့်မရှိပါ။ သို့မဟုတ် အခြားသူက ပြုလုပ်ခြင်းကိုလည်း ခွင့်ပြုပေးပိုင်ခွင့်ရှိမည်မဟုတ်ပါ။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၂။ တာဝန်မရှိကြောင်းရှင်းလင်းဖော်ပြချက်
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`မည်သည့်အခြေအနေတွင်ဖြစ်စေ အထက်ဖော်ပြပါ စည်းမျဉ်းစည်းကမ်းများကို အသုံးပြုသူမှ ဖောက်ဖျက်ခြင်း၊ ချိုးဖောက်ခြင်းကြောင့် (သို့မဟုတ်) စာချုပ်အရဖြစ်စေ၊ တရားမနစ်နာမှုအရဖြစ်စေ၊ ယတိပြတ်တာဝန်ရှိမှုကြောင့် ဖြစ်စေ (သို့မဟုတ်) ဤ ဝန်ဆောင်မှုကို ရယူအသုံးပြုခြင်းကြောင့် ကုန်ကျစရိတ်၊ နစ်နာကြေး၊ တောင်းဆိုချက်၊ အရေးယူဆောင်ရွက်မှု၊ တရားစွဲ ဆိုခြင်း၊ ဥပဒေအဆုံးအဖြတ်၊ ဆုံးရှုံးမှုနှင့်တာဝန်ရှိမှုများ (သို့မဟုတ်) ဝန်ဆောင်မှုမှတစ်ဆင့် ရရှိသော အချက်အလက်များ၊ အကြောင်းအရာများ၊ ဆော့ဖ်ဝဲလ်များ၊ ထုတ်ကုန်များ၊ ဝန်ဆောင်မှုများကြောင့် အသုံးပြုသူနှင့်အခြား အဖွဲ့အစည်းများအတွက် တိုက်ရိုက်သော်လည်းကောင်း၊ သွယ်ဝိုက်၍သော်လည်းကောင်း၊ ကြီးမားပြင်းထန်သော၊ အသေးအဖွဲဖြစ်သော၊ (သို့မဟုတ်) အကျိုးဆက်အရ ဖြစ်ပေါ်လာသော အကြောင်းကိစ္စများ၊ ထိခိုက်နစ်နာမှုများ၊ နစ်နာကြေးတောင်းခံမှုများ၊ အရေးယူမှုများ၊ တောင်းဆိုချက်များ၊ တရား ရင်ဆိုင်မှုများကြောင့် ဖြစ်ပေါ်လာသည့်စွဲဆိုချက်များ၊ စီရင်ချက်များ၊ ကုန်ကျစရိတ်များ အမျိုးမျိုးသည် ကမ္ဘောဇ(၎င်း၏ဝန်ထမ်းများ၊ ဒါရိုက်တာများ၊ အေးဂျင့်များ၊ ကိုယ်စားလှယ်များ၊ လုပ်ငန်းခွဲများအပါအဝင်)၊ ရွှေရုပ်လေး Express (Mini App) နှင့် မိတ်ဖက်၊ ၎င်းတို့၏အဖွဲ့ဝင်များ၊ ဝန်ထမ်းများ၊ ကိုယ်စားလှယ်များ၊ တွဲဖက်လုပ်ကိုင်သူများ၊ မူပိုင်ခွင့်ပေးအပ်သူများတွင် ဥပဒေအရ တာဝန်မရှိစေရပါ။ အသုံးပြုသူအနေဖြင့်သာ ကိစ္စအ၀၀တို့အတွက် တာဝန်ယူဖြေရှင်း သွားမည်ဖြစ်ကြောင်း သိရှိသဘောတူပါသည်။ အသုံးပြုသူမှ Mini Appအား အသုံးပြုမှုနှင့်စပ်လျဉ်း၍ သီးသန့်ကုစားခွင့်မှာ အသုံးပြုသူမှ Mini App အသုံးပြုခြင်းကို ရပ်ဆိုင်းရန်ဖြစ်သည်။ ကမ္ဘောဇ၏ အဖွဲ့အစည်းများ၊ ၎င်း၏ အေးဂျင့်များ၊ ကိုယ်စားလှယ်များနှင့် ဝန်ဆောင်မှုပေးသူများသည် အသုံးပြုသူမှ Mini App ကို အသုံးပြုခြင်းကြောင့် ဖြစ်ပေါ်လာသည့် သွယ်ဝိုက်၍ဖြစ်စေ၊ အထူး၊ မတော်တဆ၊ နောက်ဆက်တွဲအနေဖြင့် ဖြစ်စေ သို့မဟုတ် ပျက်စီးဆုံးရှုံးမှုများအတွက်ဖြစ်စေ သို့မဟုတ် Mini App ကို အသုံးပြုခြင်းနှင့်စပ်လျဉ်း၍ မည်သည့်တောင်းဆိုမှုတို့အတွက်ကိုမျှ တာ၀န်မရှိစေရပါ။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၃။ မလွန်ဆန်နိုင်သော ဖြစ်ရပ်များ
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`ဤဝန်ဆောင်မှုကို ကမ္ဘောဇနှင့် ရွှေရုပ်လေး Express (Mini App) က ဆောင်ရွက်ပေးနေစဉ်ကာလအတွင်း သဘာဝဘေးအန္တရာယ်၊ စစ်ဖြစ်ပွားမှု၊ ဆန္ဒပြမှု သို့မဟုတ် အလုပ်သမားအငြင်းပွားမှု၊ ကုန်သွယ်ရေးပိတ်ပင်မှု၊ အစိုးရအမိန့်၊ မီးလောင်ခြင်း၊ ရေကြီးခြင်း၊ မိုးသည်းထန်စွာ ရွာသွန်းခြင်း၊ မုန်တိုင်း သို့မဟုတ် အလွန်ဆိုးရွားသည့်ရာသီဥတုအခြေအနေများ၊ ဆူပူအုံကြွမှု၊ ပုန်ကန်မှု၊ လူထုမငြိမ်မသက်ဖြစ်မှု၊ စီးပွားရေးပိတ်ဆို့အရေးယူမှု၊ သပိတ်မှောက်မှု၊ လျှပ်စစ်ဓာတ်အား ပြတ်တောက်မှု၊ စက်ချွတ်ယွင်းမှု သို့မဟုတ်    အခြားသောမလွန်ဆန်နိုင်သော ဖြစ်ရပ်များသာဖြစ်သည်ဟု ကန့်သတ်ထားမှု မရှိသော်လည်း ယင်းတို့အပါအဝင်ဖြစ်ပြီး ကမ္ဘောဇ သို့မဟုတ် ရွှေရုပ်လေး Express (Mini App) မှ ကျိုးကြောင်းဆီလျော်စွာ ထိန်းချုပ်နိုင်မှုထက် ကျော်လွန်နေသည့် ဖြစ်ရပ်များကြောင့် အချိန်ကာလတစ်ရပ်အထိ ဖြစ်ပေါ်လာရသည့် မည်သည့်လုပ်ငန်း ဆောင်ရွက်ရန် ပျက်ကွက်မှု သို့မဟုတ် နှောင့်နှေးမှုဖြစ်ခြင်း များအတွက်မဆို ကမ္ဘောဇဘဏ်တွင်သော်လည်းကောင်း၊ ရွှေရုပ်လေး Express (Mini App) တွင်လည်းကောင်း တာဝန်မရှိကြောင်းကို အသုံးပြုသူသည် နားလည်သဘောတူပါသည်။ ကမ္ဘောဇနှင့်/သို့မဟုတ် ရွှေရုပ်လေး Express (Mini App) သည် ယင်းသို့သော အခြေအနေ များကြောင့် အဟန့်အတားဖြစ်ခြင်း၊ အတားအဆီးဖြစ်ခြင်း သို့မဟုတ် နှောင့်နှေးနေခြင်းများ ကြုံတွေ့နေရသည့် အတိုင်းအတာအပေါ်မူတည်၍ အဆိုပါအခြေအနေများ ပြီးဆုံးသွားသည့် အချိန်အထိ ပေးနေသည့် ဤဝန်ဆောင်မှုအား ဆိုင်းငံ့ထားမည်ဖြစ်သည်။ ထိုသို့သော အခြေအနေများ ဆက်လက်ဖြစ်ပျက်နေစဉ် ကာလအတွင်း ဤစည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များတွင် ဖော်ပြထားသော တာဝန်ဝတ္တရားများကို ဖြည့်ဆည်းရန်၊ ထမ်းဆောင်ရန် ပျက်ကွက်ခြင်း သို့မဟုတ် နှောင့်နှေးခြင်းများအတွက် ကမ္ဘောဇနှင့်/သို့မဟုတ် ရွှေရုပ်လေး Express (Mini App) အနေဖြင့် အသုံးပြုသူအပေါ်တွင်ဖြစ်စေ သို့မဟုတ် အခြားမည်သည့် လူပုဂ္ဂိုလ်တစ်ဦးဦးအပေါ်တွင် ဖြစ်စေ တာဝန်ရှိစေခြင်း သို့မဟုတ် ဤစည်းမျဉ်းစည်းကမ်း သတ်မှတ်ချက်များအား ချိုးဖောက်ခြင်းဖြစ်သည်ဟု မှတ်ယူခြင်းမရှိစေရပါ။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၁၄။ အသိပေးချက်</h3>
                <p className="text-body text-gray-700 py-1">
                  {`အထက်ဖော်ပြပါ စည်းမျဉ်းစည်းကမ်းများသည် တရားဝင်ဖြစ်သည်။ အသုံးပြုသူအနေဖြင့် ရွှေရုပ်လေး Express (Mini App) ဝန်ဆောင်မှုကို စတင်အသုံးပြုသည့် အချိန်မှစ၍ အသုံးပြုသူများစည်းမျဉ်းစည်းကမ်းများကို သိရှိသဘောတူ လက်ခံပြီးဖြစ်သည် ဟုမှတ်ယူသည့်အတွက် ထိုစည်းမျည်းစည်းကမ်းများကို မဖတ်ရှုဘဲ ဤဝန်ဆောင်မှုကို ရယူအသုံးပြုခြင်းသည် အသုံးပြုသူ တစ်ဦးတည်း၏ တာဝန်သာ ဖြစ်သည်။`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၅။ ပြင်ဆင်ပြောင်းလဲခြင်း
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`ကမ္ဘောဇနှင့် ရွှေရုပ်လေး Express (Mini App) သည် မည်သည့်အချိန်တွင်မဆို တစ်စုံတစ်ရာသော အကြောင်းကြောင့် အသိပေးအကြောင်းကြားနိုင်ခြင်းမရှိဘဲ သတ်မှတ်ထားသော စည်းမျဉ်း စည်းကမ်းသတ်မှတ်ချက်များကို ပြင်ဆင်ပြောင်းလဲခြင်း၊ ရပ်စဲခြင်းနှင့်/ သို့မဟုတ် ပယ်ဖျက်ခွင့် နှင့် Mini App ၏ သွင်ပြင်လက္ခဏာများအား ပြောင်းလဲခွင့် နှင့်/သို့မဟုတ် ပြင်ဆင်၊ ဖြည့်စွက်၊ ပယ်ဖျက်ပိုင်ခွင့်တို့အား အခြေအနေအရ ပြုလုပ် ဆောင်ရွက်နိုင်ပါသည်။ ပြင်ဆင်ထားသော စည်းမျဥ်းစည်းကမ်းများအား တင်ပြီးသည်နှင့် ချက်ချင်း သက်ရောက်မည်ဖြစ်ပြီး ပြင်ဆင်ပြီးနောက် အသုံးပြုသူက Mini Appကို ဆက်လက်အသုံးပြုခြင်းသည် ထိုပြင်ဆင်ထားသောစည်းမျဥ်းအသစ်များကို သဘောတူခြင်းဖြစ်ပါသည်။ ပြင်ဆင်ထားသော စည်းမျဉ်းစည်းကမ်း တစ်ခုလုံးကိုဖြစ်စေ သို့မဟုတ် တစ်စိတ်တစ်ပိုင်းကိုဖြစ်စေ အသုံးပြုသူက သဘောမတူပါက အသုံးပြုသူမှ Mini App အား အသုံးပြုခြင်းကိုချက်ချင်းရပ်တန့်ရပါမည်။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၆။ ဆက်လက်အသက်ဝင်ခြင်း
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`ဤစည်းကမ်းချက်များပါ ပြဋ္ဌာန်းချက်တစ်ရပ်ရပ်သည် တရားဝင်မှုမရှိတော့ခြင်း၊ ပျက်ပြယ်ခြင်း သို့မဟုတ် ဥပဒေတစ်ရပ်ရပ်အရ အာဏာသက်ရောက်မှုမရှိတော့ခြင်းများဖြစ်လာပါက ယင်းအပိုင်းသည်သာ ပျက်ပြယ်မည်ဖြစ်ပြီး ကျန်ပြဋ္ဌာန်းချက်များအား ထိခိုက်စေခြင်း သို့မဟုတ် ပျက်ပြယ်စေခြင်းများရှိမည်မဟုတ်ဘဲ ကျန်ပြဋ္ဌာန်းချက်များသည် ဆက်လက်အသက်ဝင်နေမည် ဖြစ်သည်။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၁၇။ လွှဲပြောင်းခြင်း</h3>
                <p className="text-body text-gray-700 py-1">
                  {`ဤစည်းမျဉ်းစည်းကမ်းသတ်မှတ်ချက်များအရ အသုံးပြုသူသည် မိမိ၏ အခွင့်အရေးများ သို့မဟုတ် တာဝန်ဝတ္တရားများ အားလုံးကိုဖြစ်စေ သို့မဟုတ် တစ်စိတ်တစ်ပိုင်းကိုဖြစ်စေ ပေးအပ်ခြင်း သို့မဟုတ် လွှဲပြောင်းခြင်းတို့အား ကမ္ဘောဇဘဏ်၏ စာဖြင့် ရေးသားဖော်ပြထားသော သဘောတူညီချက်မရှိဘဲ ဆောင်ရွက်ခြင်း မပြုရပါ။ `}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁၈။ ဥပဒေသက်ရောက်မှုနှင့် တရားစီရင်ပိုင်ခွင့်
                </h3>
                <p className="text-body text-gray-700 py-1">
                  {`အထက်ဖော်ပြပါ စည်းမျဉ်းစည်းကမ်းများနှင့် သတ်မှတ်ချက်များအားလုံးသည် ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံ ၏တည်ဆဲ ဥပဒေများနှင့်အညီ အဓိပ္ပါယ်ဖော်ဆောင်ရမည် ဖြစ်သည်။ ဤဝန်ဆောင်မှုကို အသုံးပြုမှုကြောင့် ပေါ်ပေါက်လာသော အငြင်းပွားမှုတစ်စုံတစ်ရာ၊ ပြဿနာတစ်ခုခု ပေါ်ပေါက်လာပါက မြန်မာနိုင်ငံတော် တရားရုံးများတွင် တည်ဆဲဥပဒေများအရ ဖြေရှင်းဆောင်ရွက်မည်ဖြစ်ကြောင်း အသုံးပြုသူအနေဖြင့် သဘောတူလက်ခံပါသည်။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၁၉။ စွန့်လွှတ်ခြင်း</h3>
                <p className="text-body text-gray-700 py-1">
                  {`ဤစည်းကမ်းချက်များပါ မည်သည့်ပြဋ္ဌာန်းချက်(များ) ကိုမဆို မည်သည့်အချိန်တွင်မဆို အကျိုးသက်ရောက်မှုရှိအောင် ဆောင်ရွက်ရန် မည်သည့်ဖက်ကမဆို ပျက်ကွက်ခြင်း သို့မဟုတ် နှောင့်နှေးခြင်းကို ဤစည်းကမ်းချက်များပါ ပြဋ္ဌာန်းချက် တစ်ခုစီတိုင်းနှင့် ပြဋ္ဌာန်းချက်အရပ်ရပ်ကို အာဏာသက်ရောက်အောင် လုပ်ဆောင်ပိုင်ခွင့်အား စွန့်လွှတ်ခြင်းဖြစ်သည်ဟု အဓိပ္ပာယ်ကောက်ယူခြင်းမရှိစေရ။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၂၀။ ဘာသာစကား</h3>
                <p className="text-body text-gray-700 py-1">
                  {`ဤစည်းမျဉ်းနှင့်စည်းကမ်းသတ်မှတ်ချက်များအား အင်္ဂလိပ်၊ မြန်မာ နှစ်ဘာသာဖြင့် ပြုလုပ်ထားပြီး နှစ်မျိုးစလုံးသည် တူညီသော အဓိပ္ပာယ် သက်ရောက်မှုရှိမည်ဖြစ်သည်။ အင်္ဂလိပ်ဘာသာနှင့် မြန်မာဘာသာနှစ်မျိုးဖြင့် ပြုလုပ်ထားခြင်းဖြစ်သောကြောင့် ကွဲလွဲမှုတစ်စုံတစ်ရာရှိလျှင် မြန်မာဘာသာဖြင့် ရေးသားထားသည့် စည်းကမ်း သတ်မှတ်ချက်များကိုသာလျှင် အမှန်ယူရမည် ဖြစ်သည်။
`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold mb-2">၂၁။ ဆက်သွယ်ရန်</h3>
                <p className="text-body text-gray-700 py-1">
                  {`အကယ်၍ အသုံးပြုသူသည် မေးခွန်းများ သို့မဟုတ် မှတ်ချက်များရှိ၍ ရွှေရုပ်လေး Express (Mini App) ထံ ဆက်သွယ်လိုပါက၊ ကျေးဇူးပြု၍ ရွှေရုပ်လေး Express (Mini App) ၏ customer support team သို့ အီးမေးလ်ပေးပို့ခြင်းဖြင့်ဖြစ်စေ သို့မဟုတ် ရွှေရုပ်လေး Express (Mini App) အတွင်းရှိ အသုံးပြုသူများမေးမြန်းနိုင်သည့် feature မှတစ်ဆင့်ပေးပို့နိုင်ပါသည်။`}
                </p>
                <p className="text-body text-gray-700 py-1">{`ရွှေရုပ်လေး Express Hotline:  09 408800095,09 4088000098`}</p>
                <p className="text-body text-gray-700 py-1">{`ရွှေရုပ်လေး Express Email:  sylexpress.complaint@gmail.com`}</p>
              </div>
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="p-5 text-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-primary-0 hover:bg-secondary-0 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-none"
          >
            {t("go_home")}
          </button>
        </div>
      </div>
    </>
  );
};

export default PolicyPage;
