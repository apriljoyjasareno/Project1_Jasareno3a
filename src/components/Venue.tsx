import { useAppDispatch, useAppSelector } from "../hooks";
import { incrementVenue, decrementVenue } from "../slices/venueSlice";
import Card from "./Card";

function Venue() {
  const venue = useAppSelector((state) => state.venue);
  const dispatch = useAppDispatch();

  const total = venue.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  return (
    <section id="venue" className="section">
      <h2 className="section-header">Venue Room Selection</h2>
      <div className="card-grid">
        {venue.map((item, index) => (
          <Card
            key={item.name}
            image={item.image}
            title={item.name}
            subtitle={`(Capacity: ${item.capacity})`}
            cost={item.cost}
            quantity={item.quantity}
            onIncrement={() => dispatch(incrementVenue(index))}
            onDecrement={() => dispatch(decrementVenue(index))}
          />
        ))}
      </div>
      <div className="total-box">Total Cost: ${total}</div>
    </section>
  );
}

export default Venue;