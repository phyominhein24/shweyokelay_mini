export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const seatTypeColors = {
  available: { name: "Available", color: "bg-green-400", sold: true },
  man: { name: "Man", color: "bg-blue-500", sold: true },
  woman: { name: "Woman", color: "bg-pink-600", sold: true },
  monk: { name: "Monk", color: "bg-red-800", sold: true },
  nun: { name: "Nun", color: "bg-pink-300", sold: true },
  onHold: { name: "On Hold", color: "bg-gray-400", sold: true },
};
