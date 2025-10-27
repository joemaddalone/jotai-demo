import { useAddItem } from './atoms';

const ids = [
  "apple",
  "orange",
  "pear",
  "tomato",
  "watermelon",
  "guava",
  "mango",
  "avacado",
  "lime",
  "lemon",
  "kiwi",
];

const products = ids.map((id, index) => ({ id, cost: index + 1 }));

const Catalog = () => {
  const add = useAddItem();
  return (
    <div className="catalog">
      <div className="products">
        {products.map((p) => (
          <div key={p.id} className="product">
            <h4>
              {p.id} / ${p.cost}
            </h4>
            <button
              className="ui button positive mini"
              onClick={() => add(p)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;