import { useAppDispatch, useAppSelector } from "../hooks";
import { incrementAddOn, decrementAddOn } from "../slices/addOnsSlice";
import Card from "./Card";

function AddOns() {
  const addOns = useAppSelector((state) => state.addOns);
  const dispatch = useAppDispatch();

  const total = addOns.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <section id="addons" className="section">
      <h2 className="section-header">Add-ons Selection</h2>
      <div className="card-grid">
        {addOns.map((item, index) => (
          <Card
            key={item.name}
            image={item.image}
            title={item.name}
            cost={item.cost}
            quantity={item.quantity}
            onIncrement={() => dispatch(incrementAddOn(index))}
            onDecrement={() => dispatch(decrementAddOn(index))}
          />
        ))}
      </div>
      <div className="total-box">Total Cost: ${total}</div>
    </section>
  );
}

export default AddOns;