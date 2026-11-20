import { useAppSelector } from "../hooks";

interface DetailsModalProps {
  onClose: () => void;
}

interface Row {
  name: string;
  unitCost: number;
  quantity: string;
  total: number;
}

function DetailsModal({ onClose }: DetailsModalProps) {
  const venue = useAppSelector((state) => state.venue);
  const addOns = useAppSelector((state) => state.addOns);
  const { items: meals, numberOfPeople } = useAppSelector((state) => state.meals);

  const rows: Row[] = [];

  venue.forEach((item) => {
    if (item.quantity > 0) {
      rows.push({
        name: `${item.name} (Capacity: ${item.capacity})`,
        unitCost: item.cost,
        quantity: String(item.quantity),
        total: item.cost * item.quantity,
      });
    }
  });

  addOns.forEach((item) => {
    if (item.quantity > 0) {
      rows.push({
        name: item.name,
        unitCost: item.cost,
        quantity: String(item.quantity),
        total: item.cost * item.quantity,
      });
    }
  });

  meals.forEach((item) => {
    if (item.selected && numberOfPeople > 0) {
      rows.push({
        name: item.name,
        unitCost: item.cost,
        quantity: `For ${numberOfPeople} people`,
        total: item.cost * numberOfPeople,
      });
    }
  });

  const grandTotal = rows.reduce((sum, row) => sum + row.total, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <p className="modal-label">TOTAL COST FOR THE EVENT</p>
        <h2 className="modal-total">${grandTotal}</h2>

        {rows.length === 0 ? (
          <p className="empty-msg">You haven't selected anything yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Unit Cost</th>
                <th>Quantity</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>${row.unitCost}</td>
                  <td>{row.quantity}</td>
                  <td>${row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DetailsModal;