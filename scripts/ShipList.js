import { getShippingShips, getHaulers } from "./database.js";

const ships = getShippingShips();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  const shipName = itemClicked.dataset.shipname;
  const haulerId = itemClicked.dataset.haulerforeignkey;
  const haulers = getHaulers();
  let haulingShip = { name: "Incorrect" };

  for (const hauler of haulers) {
    if (hauler.id === parseInt(haulerId)) {
      haulingShip = hauler.name;
      window.alert(`${shipName} is being hauled by ${haulingShip}`);
    }
  }
});

export const ShipList = () => {
  let shipsHTML = `<ul class="list--style">`;

  for (const ship of ships) {
    shipsHTML += `<li class="list--background"
                      data-shipName="${ship.name}"
                      data-haulerForeignKey="${ship.haulerId}"
                      >${ship.name}</li>`;
  }

  shipsHTML += "</ul>";

  return shipsHTML;
};
