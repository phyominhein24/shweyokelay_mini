// Local
// export const baseURL = "http://localhost:8000/api";
// export const imageURL = "http://localhost:8000";
// Server
export const baseURL = "https://api.shweyotelayexpress.com/api";
export const imageURL = "https://api.shweyotelayexpress.com";

export const endpoints = {
  counters: "counters",
  routes: "route",
  dashboard: "dashboard",
  userInfo: "auth/get-user-info",
  paymentOrder: "payment/create-order",
  login: "auth/loginn",
  register: "auth/register",
  tickets: "myticket",
  user: "user",
  vehiclesType: "vehiclesTypes",
  member: "member",
  agent: "member",
  paymentHistory: "paymentHistory",
  paymentHistory2: "paymentHistory3",
  paymentHistory3: "paymentHistory4",
  role: "role",
  permission: "permission",
  changepassword: "change-password",
  profile: "profile",
  image: `${imageURL}`,
};
