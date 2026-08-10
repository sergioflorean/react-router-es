import { Link, Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      
      <ul>
        <li>
          <Link to="mission">Misión del sitio</Link>
        </li>
        <li>
          <Link to="history">Historia del sitio</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
