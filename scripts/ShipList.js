import { getShippingShips, getHaulers } from "./database.js";

export const ShipList = () => {
  const ships = getShippingShips();

  let shipsHTML = `<ul class="list--style">`;

  for (const ship of ships) {
    shipsHTML += `<li class="list--background"
                      data-shipName="${ship.name}"
                      data-haulerId="${ship.haulerId}"
                      data-type="ship"
                      >${ship.name}</li>`;
  }

  shipsHTML += "</ul>";

  return shipsHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "ship") {
    // Get the haulerId value of the shipping ship clicked
    const haulerId = itemClicked.dataset.haulerid;
    const shipName = itemClicked.dataset.shipname;
    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };

    // Iterate the array of hauler objects
    const haulers = getHaulers();
    for (const hauler of haulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (hauler.id === parseInt(haulerId)) {
        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = hauler.name;
      }
    }
    // Show an alert to the user with this format...
    window.alert(`${shipName} is being hauled by ${haulingShip}`);
    // Palais Royal is being hauled by Seawise Giant
  }
});
