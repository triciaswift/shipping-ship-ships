import { getHaulers } from "./database.js";

export const HaulerList = () => {
  const haulers = getHaulers();

  let haulersHTML = `<ul class="list--style">`;

  for (const hauler of haulers) {
    haulersHTML += `<li class="list--background">${hauler.name}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
