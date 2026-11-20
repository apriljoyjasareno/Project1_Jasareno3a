import { useState } from "react";
import Venue from "./Venue";
import AddOns from "./AddOns";
import Meals from "./Meals";
import DetailsModal from "./DetailsModal";

function ProductSelection() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="selection-page">
      <header className="navbar">
        <div className="brand">Conference Expense Planner</div>
        <nav className="nav-links">
          <button onClick={() => scrollTo("venue")}>Venue</button>
          <button onClick={() => scrollTo("addons")}>Add-ons</button>
          <button onClick={() => scrollTo("meals")}>Meals</button>
        </nav>
        <button className="gold-btn small" onClick={() => setShowDetails(true)}>
          Show Details
        </button>
      </header>

      <main>
        <Venue />
        <AddOns />
        <Meals />
      </main>

      {showDetails && <DetailsModal onClose={() => setShowDetails(false)} />}
    </div>
  );
}

export default ProductSelection;