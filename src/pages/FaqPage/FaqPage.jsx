import AppBar from "../../components/AppBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const FaqPage = () => {
  const { language } = useSelector((state) => state.share);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const navigate = useNavigate();
  return (
    <>
      <AppBar pageTitle={t("faqs")} goTo="/" />

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
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-body leading-6 text-gray-700 mb-5">
              {`Below you’ll find answers to some common questions about our
              platform and services. If your question isn’t listed, please feel
              free to contact us for further assistance.`}
            </p>

            <div className="space-y-5">
              {/* Question 1 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  1. Where are the Shwe Yoke Lay gates located?
                </h3>
                <p className="text-body text-gray-700">
                  The Head office of Shwe Yoke Lay’s Gate was located in Yangon.
                </p>
              </div>

              {/* Question 2 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  2. How many trips do you have?
                </h3>
                <p className="text-body text-gray-700">
                  Shwe Yoke Lay Express has routes from Yangon to Taunggyi and
                  Yangon to Mandalay, but the Yangon to Mandalay route is
                  temporarily suspended.
                </p>
              </div>

              {/* Question 3 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  3. How to purchase bus ticket?
                </h3>
                <p className="text-body text-gray-700">
                  You can select seat yourself and after making the payment by
                  KBZPay within the application, you can screenshot the E-ticket
                  or check the E-ticket in the ‘My Tickets’.
                </p>
              </div>

              {/* Question 4 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  4. Can I bring my lovely pets on the Express?
                </h3>
                <p className="text-body text-gray-700">
                  Yes, you can bring pets but they should be carried from the
                  undercarriage of the vehicle.
                </p>
              </div>

              {/* Question 5 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  5. Can I cancel or refund for purchasing tickets?
                </h3>
                <p className="text-body text-gray-700">
                  Purchased tickets cannot be canceled and non-refundable.
                </p>
              </div>

              {/* Question 6 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  6. Can I change Trip’s plan?
                </h3>
                <p className="text-body text-gray-700">
                  Sorry, we cannot change trip’s plan.
                </p>
              </div>

              {/* Question 7 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  7. Can I change date and time of purchased ticket?
                </h3>
                <p className="text-body text-gray-700">
                  Yes, you can modify your travel date and time with “Shwe Yoke
                  Lay” Highway Express. Changes must be requested at least two
                  days before your original departure date, and 15% service fees
                  will be applied. Please contact our customer support team (to
                  contact 09 408800095) to assist you with the adjustment. We
                  appreciate your understanding and are here to help ensure your
                  journey is as smooth as possible.
                </p>
              </div>

              {/* Question 8 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  8. What do I need to bring to Bus station?
                </h3>
                <p className="text-body text-gray-700">
                  If you are a Myanmar citizen, you have to bring your NRC and
                  if you are a foreigner, a passport is needed to bring along
                  with the purchased E-ticket. When you arrived at the
                  bus-station, you have to show the purchased seat number to
                  verify you are a right customer.
                </p>
              </div>
              {/* Question 9 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  9. What should I do if I encounter a problem while booking a
                  ticket?
                </h3>
                <p className="text-body text-gray-700">
                  If you encounter any issues during the booking process, please
                  contact our customer support team (to contact 09 408800095)
                  immediately. They will assist you in resolving the problem and
                  ensure a smooth booking experience.
                </p>
              </div>
              {/* Question 10 */}
              <div>
                <h3 className="text-md font-bold mb-2">
                  10. How do I know that I have purchased a ticket? When I
                  arrive at the bus stop, what will I show as proof?
                </h3>
                <p className="text-body text-gray-700">
                  Once you have completed your purchase, your E-ticket will be
                  available. Alternatively, you can find it in the ‘My Ticket’.
                  Your E-ticket will include a unique reference number for
                  verification.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-md font-bold mt-2">Contact Us</h3>
              <p className="text-body text-gray-700">
                Have questions or need support? Reach out to us at:
              </p>
              <p className="text-body text-gray-700">
                <strong>Email:</strong> sylexpress.complaint@gmail.com
              </p>
              <p className="text-body text-gray-700">
                <strong>Hotline:</strong> 09 408800095, 09 4088000098
              </p>
            </div>
          </section>
        ) : (
          <section className="p-5">
            <h2 className="text-title font-semibold mb-3">
              အမေးများသောမေးခွန်းများ (FAQs)
            </h2>
            <p className="text-body leading-6 text-gray-700 mb-5">
              အောက်တွင် ကျွန်ုပ်တို့၏ ပလက်ဖောင်းနှင့် ဝန်ဆောင်မှုများအကြောင်း
              မေးလေ့ရှိသော မေးခွန်းများ၏ အဖြေများကို တွေ့နိုင်ပါသည်။
              မေးခွန်းများ မပါရှိပါက ပိုမိုကောင်းမွန်သော အကူအညီပေးနိုင်ရန်
              ကျွန်ုပ်တို့ထံ ဆက်သွယ်ပါ။
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-md font-bold mb-2">
                  ၁။ ရွှေရုပ်လေး ဂိတ်တွေက ဘယ်နေရာတွေမှာ ရှိတာလဲ?
                </h3>
                <p className="text-body text-gray-700">
                  ရွှေရုပ်လေးဂိတ်(ရုံးချုပ်)က ရန်ကုန်မြို့မှာ ရှိပါတယ်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၂။ ရွှေရုပ်လေး Express မှာ ခရီးစဉ် ဘယ်နှစ်မျိုးရှိသလဲ?
                </h3>
                <p className="text-body text-gray-700">
                  ရွှေရုပ်လေး Express မှာ ရန်ကုန်-တောင်ကြီး နှင့်
                  ရန်ကုန်-မန္တလေး ခရီးစဉ်ရှိပေမယ့် ရန်ကုန်-မန္တလေး ခရီးစဉ်ကို
                  ယာယီ ပိတ်ထားပါတယ်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၃။ ရွှေရုပ်လေး Express လက်မှတ် ဘယ်လိုဝယ်ယူရပါသလဲ?
                </h3>
                <p className="text-body text-gray-700">
                  လူကြီးမင်း သွားလိုသော ခရီးစဉ် ၊ အချိန် ကိုရွေးချယ်ပြီး
                  မိမိစိတ်ကြိုက် ခုံ ကို ရွေးချယ် ဝယ်ယူရမှာ ဖြစ်ပါသည်။
                  ခရီးစဉ်သေချာပြီဆိုပါက လက်မှတ်တန်ဘိုးငွေကို KBZPay ဖြင့်
                  ပေးချေပြီးလျှင် လူကြီးမင်း၏ E-ticket ကို screenshot
                  ရိုက်ယူနိုင်သည် သို့မဟုတ် My-Tickets တွင်
                  ဝင်ရောက်ကြည့်ရှုနိုင်သည်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၄။ အိမ်မွေးတိရစ္ဆာန်လေးတွေကို ယဉ်ပေါ်မှာ တင်ခေါ်လို့ရမလား?
                </h3>
                <p className="text-body text-gray-700">
                  အိမ်မွေးတိရိစ္ဆာန်လေးတွေကို ခေါ်ဆောင်နိုင်သော်လည်း
                  ယာဉ်၏အောက်ပိုင်းမှသာ တင်ပြီး ခေါ်ဆောင်နိုင်ပါတယ်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၅။ ဝယ်ယူပြီးလက်မှတ်များကိုcancelလုပ်နိုင်လားဒါမှမဟုတ်Refund
                  ရောလုပ်လို့ရနိုင်ပါလား?
                </h3>
                <p className="text-body text-gray-700">
                  ဝယ်ယူပြီးလက်မှတ်များအတွက် cancel လုပ်ခြင်း၊ Refund လုပ်ခြင်း
                  မရရှိနိုင်ပါ။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၆။ ဝယ်ယူပြီးလက်မှတ်များကို ခရီးစဉ်အစီအစဉ်ကို
                  ပြောင်းလဲနိုင်ပါသလား?
                </h3>
                <p className="text-body text-gray-700">
                  ဝယ်ယူပြီးလက်မှတ်များအတွက် ခရီးစဉ်ပြောင်းလဲလို့ မရနိုင်ပါ။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၇။ ဝယ်ယူပြီးလက်မှတ်၏ ရက်စွဲနှင့် အချိန်ကို ပြောင်းလဲနိုင်လား?
                </h3>
                <p className="text-body text-gray-700">
                  ဝယ်ယူပြီးလက်မှတ်၏ ရက်စွဲနှင့် အချိန်ကို
                  ရွှေရုပ်လေးဂိတ်(ရုံးချုပ်)သို့ ဖုန်းဆက်ပြီး
                  ပြောင်းလဲနိုင်ပါတယ်...ပြောင်းလဲမှုများအတွက်
                  မူလထွက်ခွာမည့်ရက်မတိုင်မီ အနည်းဆုံး ၂ ရက်
                  ကြိုတင်လျှောက်ထားရမည်ဖြစ်ပြီး ၀န်ဆောင်ခမှာ လက်မှတ်တန်ဖိုး၏ ၁၅%
                  ဝန်ဆောင်ခ ကုန်ကျမည်ဖြစ်ပါသည်။ ပြောင်းလဲလိုပါက ရွှေရုပ်လေး
                  customer service center ဖုန်းနံပါတ် - ၀၉ ၄၀၈၈၀၀၀၉၅ သို့
                  ဆက်သွယ်နိုင်ပါသည်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၈။ ကားလာစီးရင် ဘာတွေ ယူခဲ့ဖို့လိုပါသလဲ?
                </h3>
                <p className="text-body text-gray-700">
                  ဝယ်ယူထားသော E-ticket နှင့် မြန်မာနိုင်ငံသားဆိုလျှင် မှတ်ပုံတင်
                  ၊ နိုင်ငံခြားသာဆိုလျှင် ပတ်စပို့ ပါဖို့ လိုအပ်ပါသည်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၉။ လက်မှတ်ကြိုတင်မှာယူနေစဉ်မှာပြဿနာတစ်ခုခုကြုံလာပါက
                  ဘယ်ကိုဆက်သွယ်ရမည်နည်း?
                </h3>
                <p className="text-body text-gray-700">
                  လက်မှတ်ကြိုတင်မှာယူနေစဉ်အတွင်း ပြဿနာတစ်စုံတစ်ရာ ကြုံတွေ့ရပါက
                  ကျွန်ုပ်တို့၏ Customer service center ဖုန်း နံပါတ် - ၀၉
                  ၄၀၈၈၀၀၀၉၅ သို့ ချက်ချင်း ဆက်သွယ် နိုင်ပါသည်။
                </p>
              </div>

              <div>
                <h3 className="text-md font-bold mb-2">
                  ၉။ လက်မှတ်ဝယ်ပြီးကြောင်း ဘယ်လိုသိနိုင်မလဲ။ ဂိတ်ရောက်ရင် ဘာနဲ့
                  အထောက်အထားပြမလဲ?
                </h3>
                <p className="text-body text-gray-700">
                  လက်မှတ်ဝယ်ပြီးပါက E-ticket အား ရရှိပါမည် သို့မဟုတ် My Ticket
                  တွင် ၀င်ရောက်စစ်ဆေးနိုင်သည်။ ဂိတ်သို့ရောက်ရှိပါက
                  မိမိရရှိထားသော ခုံနံပါတ် နှင့် E-ticket ရမည် ဖြစ်ပါသည်။
                  E-ticket တွင် ဘောက်ချာနံပါတ် ပါဝင်ပါသည်။
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-md font-bold mt-2">ဆက်သွယ်ရန်</h3>
              <p className="text-body text-gray-700">
                <b>Email:</b> sylexpress.complaint@gmail.com
              </p>
              <p className="text-body text-gray-700">
                <b>Hotline:</b> 09 408800095, 09 4088000098
              </p>
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

export default FaqPage;
