import { getShippingShips } from "./database.js";

export const ShipList = () => {
  const ships = getShippingShips();

  let shipsHTML = `<ul class="list--style">`;

  for (const ship of ships) {
    shipsHTML += `<li class="list--background">${ship.name}</li>`;
  }

  shipsHTML += "</ul>";

  return shipsHTML;
};
