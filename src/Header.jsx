
import { NavLink } from "react-router";
import { useAtomValue } from 'jotai';
import { cartTotals } from './atoms';

const Header = () => {
  const totals = useAtomValue(cartTotals);
  return (
    <div className="header">
      <div>
        <NavLink to="/">
          <h1>My Store</h1>
        </NavLink>
      </div>
      <div>
        <NavLink className="ui button primary" to="cart">
          Cart: {totals.qty} / ${totals.cost}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;