import { getDocks, getHaulers } from "./database.js";

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = `<ul class="list--style">`;

  for (const dock of docks) {
    docksHTML += `<li class="list--background"
                      data-type="dock"
                      data-id="${dock.id}"
                      data-location="${dock.location}"
    >
    ${dock.location} can hold ${dock.volume} million tons of cargo
    </li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    const dockId = itemClicked.dataset.id;
    const dockLocation = itemClicked.dataset.location;

    let haulerName = "nothing";

    const haulers = getHaulers();
    for (const hauler of haulers) {
      if (parseInt(dockId) === hauler.dockId) {
        haulerName = hauler.name;
      }
    }
    window.alert(`The ${dockLocation} is currently unloading ${haulerName}`);
  }
});
