import { atom, useSetAtom, useAtom } from "jotai";
import { splitAtom, atomWithStorage } from "jotai/utils";

const items = atomWithStorage("items", []);

const cartTotals = atom((get) => {
  return get(items).reduce(
    (a, c) => {
      return {
        qty: a.qty + c.qty,
        cost: a.cost + c.cost * c.qty,
      };
    },
    {
      qty: 0,
      cost: 0,
    }
  );
});

const addItem = atom(null, (get, set, newItem) => {
  const current = get(items);
  const exists = current.some((i) => i.id === newItem.id);
  if (exists) {
    set(
      items,
      current.map((item) =>
        item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  } else {
    set(items, [...current, { ...newItem, qty: 1 }]);
  }
});

const removeItem = atom(null, (get, set, item) => {
  set(
    items,
    get(items).filter((i) => i.id !== item.id)
  );
});

const useAddItem = () => useSetAtom(addItem);
const useRemoveItem = () => useSetAtom(removeItem);
const useCartItems = (atoms) => useAtom(splitAtom(atoms));

export { items, cartTotals, addItem, useAddItem, useRemoveItem, useCartItems };
