interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  cost: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function Card({ image, title, subtitle, cost, quantity, onIncrement, onDecrement }: CardProps) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <h3>{title}</h3>
      {subtitle && <p className="card-sub">{subtitle}</p>}
      <p className="card-cost">${cost}</p>
      <div className="qty-controls">
        <button className="qty-btn minus" onClick={onDecrement}>
          −
        </button>
        <span className="qty-value">{quantity}</span>
        <button className="qty-btn plus" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default Card;