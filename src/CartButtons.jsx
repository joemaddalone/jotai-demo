import { useRemoveItem } from './atoms';

const CartButtons = ({ cartItem, setCartItem }) => {
  const removeItem = useRemoveItem();
  const increaseItem = () => {
    setCartItem(cartItem => {
      return {...cartItem, qty: cartItem.qty + 1}
    });
  }
  const decreaseItem = () => {
    if(cartItem.qty === 1){
      return removeItem(cartItem)
    }
    setCartItem(cartItem => ({...cartItem, qty: cartItem.qty - 1 }))
  }
  return (
    <div className="ui buttons mini">
      <button onClick={decreaseItem} className="ui button">
        -
      </button>
      <button onClick={increaseItem} className="ui button positive">
        +
      </button>
      <button onClick={() => removeItem(cartItem)} className="ui button negative">
        x
      </button>
    </div>
  );
};

export default CartButtons;