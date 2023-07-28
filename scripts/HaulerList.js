import { getHaulers, getShippingShips } from "./database.js";

export const HaulerList = () => {
  const haulers = getHaulers();

  let haulersHTML = `<ul class="list--style">`;

  for (const hauler of haulers) {
    haulersHTML += `<li class="list--background"
                        data-id="${hauler.id}"
                        data-name="${hauler.name}"
                        data-type="hauler"
                        >${hauler.name}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a hauler list item clicked?
  if (itemClicked.dataset.type === "hauler") {
    // Get the id of the hauler clicked
    const haulerId = itemClicked.dataset.id;
    const haulerName = itemClicked.dataset.name;
    // Start a counter variable at 0
    let shipCounter = 0;

    // Iterate all of the shipping ships
    const shippingShips = getShippingShips();
    for (const ship of shippingShips) {
      // Does the haulerId foreign key match the id?
      if (parseInt(haulerId) === ship.haulerId) {
        // Increase the counter by 1
        shipCounter++;
      }
    }
    window.alert(`${haulerName} is carrying ${shipCounter} shipping ships`);
  }
});
