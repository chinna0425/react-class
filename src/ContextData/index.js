import React from "react";

const ContextData = React.createContext({
  cartData: [],
  addData: () => {},
  deleteItem: () => {},
  isActive: false,
});

export default ContextData;
