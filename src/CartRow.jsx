import CartButtons from "./CartButtons";
import { useAtom } from 'jotai';

const CartRow = ({ item }) => {
  const [cartItem, setCartItem] = useAtom(item)
  // const setCartItem = item => console.log('update', item)
  return (
    <tr key={cartItem.id}>
      <td className="actions">
        <CartButtons cartItem={cartItem} setCartItem={setCartItem} />
      </td>
      <td>{cartItem.id}</td>
      <td>{cartItem.cost}</td>
      <td>{cartItem.qty}</td>
      <td>${cartItem.qty * cartItem.cost}</td>
    </tr>
  );
};

export default CartRow;
