import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>El analista de Emojis: todo sobre los Emojis</h1>
      <p>
        ¡El destino #1 de opiniones de emojis en la Web desde 2020!
      </p>
      <Link to="/reviews" className="dashboard-link">
        ¡Haz clic aquí para ver mis reseñas últimas de emojis!
      </Link>
    </div>
  );
}

export default Dashboard;
