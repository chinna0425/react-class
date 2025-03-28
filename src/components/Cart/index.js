import ContextData from "../../ContextData";
const Cart = () => {
  return (
    <ContextData.Consumer>
      {(value) => {
        const { addData, deleteItem, cart } = value;
        const addItem = () => {
          addData({ name: "Akhila", city: "Rjy", age: 20 });
        };
        const deleteSet = () => {
          deleteItem("Kiran");
        };
        return (
          <div>
            <button type="button" onClick={addItem}>
              Add
            </button>
            <button type="button" onClick={deleteSet}>
              Delete
            </button>
          </div>
        );
      }}
    </ContextData.Consumer>
  );
};

export default Cart;
