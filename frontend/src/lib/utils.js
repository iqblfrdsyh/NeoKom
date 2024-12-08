import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getToken() {
  const token = localStorage.getItem("token");

  return token;
}

export function getDataUser() {
  const dataUser = localStorage.getItem("user");
  return dataUser;
}

export function formatDatetime(datetime) {
  const date = new Date(datetime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}

export function formatDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.toLocaleString("id-ID", { month: "long" });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}

export function calculateTimeLeft(dueDate) {
  const now = new Date();
  const due = new Date(dueDate);

  const difference = due - now;
  console.log({ due });

  let timeLeft = "";

  if (difference > 0) {
    const hours = Math.floor(difference / (1000 * 60 * 60));

    if (hours > 0) {
      timeLeft += `${hours} jam `;
    }
    console.log(timeLeft);
    

    timeLeft += "lagi!";
  } else {
    timeLeft = "Waktu sudah habis!";
  }

  return timeLeft;
}
