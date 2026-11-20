import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleMeal, setNumberOfPeople } from "../slices/mealsSlice";

function Meals() {
  const { items, numberOfPeople } = useAppSelector((state) => state.meals);
  const dispatch = useAppDispatch();

  const total = items.reduce(
    (sum, item) => (item.selected ? sum + item.cost * numberOfPeople : sum),
    0
  );

  return (
    <section id="meals" className="section">
      <h2 className="section-header">Meals Selection</h2>

      <div className="people-row">
        <label htmlFor="people">Number of People:</label>
        <input
          id="people"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={(e) =>
            dispatch(setNumberOfPeople(Math.max(0, Number(e.target.value))))
          }
        />
      </div>

      <div className="meals-grid">
        {items.map((item, index) => (
          <div className="meal-item" key={item.name}>
            <label>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => dispatch(toggleMeal(index))}
              />
              <span>{item.name}</span>
            </label>
            <p>${item.cost}</p>
          </div>
        ))}
      </div>

      <div className="total-box">Total Cost: ${total}</div>
    </section>
  );
}

export default Meals;