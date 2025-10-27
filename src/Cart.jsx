import CartRow from "./CartRow";
import { useCartItems,items, cartTotals } from './atoms';
import { useAtomValue } from 'jotai';


const Cart = () => {
  const [cartItems] = useCartItems(items)
  const totals = useAtomValue(cartTotals);
  return (
    <table className="cart">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return <CartRow key={`${item}`} item={item} />;
        })}
        <tr>
          <td colSpan="4" style={{ textAlign: "right" }}>
            Total:
          </td>
          <td>${totals.cost}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;