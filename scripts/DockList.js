import { getDocks } from "./database.js";

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = `<ul class="list--style">`;

  for (const dock of docks) {
    docksHTML += `<li class="list--background">
    ${dock.location} can hold ${dock.volume} million tons of cargo
    </li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
