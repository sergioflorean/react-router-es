import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";
import { useState, useEffect } from "react"; // Importamos useState y useEffect
import {Routes, Route} from "react-router-dom";
import Contact from "./AboutMe/Contact";
import MyStory from "./AboutMe/MyStory";
import Hobbies from "./AboutMe/Hobbies";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";
import Review from "./Review/Review";
import type { ReviewData } from "./ReviewInterface"; // Importamos la interfaz de reseñas


function App() {

  const [reviews, setReviews] = useState<ReviewData[]>([]); // Nueva variable useState

  useEffect(() => {
    // Definimos la función asíncrona interna
    const fetchReviews = async () => {
      try {
        // Esperamos la respuesta del fetch
        const res = await fetch('https://emoji-critic.es.tripleten-services.com/v1/reviews');
        
        if (!res.ok) {
          throw new Error('Error en la petición de red');
        }

        // Esperamos el parseo del JSON y le asignamos el tipo ReviewData[]
        const data: ReviewData[] = await res.json();
        console.log(data); // Mostramos los datos en la consola para depuración
        
        // Actualizamos el estado
        setReviews(data);
      } catch (error) {
        // Manejamos los errores
        console.error(error);
      }
    };

    // Ejecutamos la función
    fetchReviews();
    
  // Un array de dependencia vacío significa que el hook sólo se ejecuta cuando
  // se carga el componente.
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:reviewId" element={<Review reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="history" element={<SiteHistory />} />
          <Route path="mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
