import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import Carousel from "../../components/carrusel/Carrusel";
import Hero from "../../components/hero/Hero";
import PreFooter from "../../components/prefooter/PreFooter";
import Profile from "../../components/profile/Profile";
import VideoBlog from "../../components/videoblog/VideoBlog";
import { useEffect } from "react";

export default function HomeView() {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    
    return (
        <div>
            <div>
            <Profile />
            </div>
            <div id="proyectos">
            <Cards />
            </div>
            <div id="colaboradores">
            <Carousel />
            </div>
            <div>
            <PreFooter />
            </div>
        </div>
    )   
}
