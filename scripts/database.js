const database = {
  docks: [
    { id: 1, location: "Shanghai, China", volume: "43.5" },
    { id: 2, location: "Busan, South Korea", volume: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
    { id: 4, location: "Antwerp, Belgium", volume: "12.04" },
  ],
  haulers: [
    { id: 1, name: "Pioneering Spirit" },
    { id: 2, name: "Boaty McBoatFace" },
    { id: 3, name: "Seawise Giant" },
  ],
  shippingShips: [
    { id: 1, name: "Esso Atlantic" },
    { id: 2, name: "Prairial" },
    { id: 3, name: "Palais Royal" },
    { id: 4, name: "Rivoli" },
    { id: 5, name: "Champs Elysee" },
    { id: 6, name: "Ever Ace" },
    { id: 7, name: "Nissei Maru" },
    { id: 8, name: "MSC Gulsun" },
    { id: 9, name: "HMM Rotterdam" },
    { id: 10, name: "CMA CGM Trocadero" },
  ],
};

export const getDocks = () => {
  return database.docks.map((dock) => ({ ...dock }));
};

export const getHaulers = () => {
  return database.haulers.map((hauler) => ({ ...hauler }));
};

export const getShippingShips = () => {
  return database.shippingShips.map((ship) => ({ ...ship }));
};
