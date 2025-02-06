import { useLocation } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import Carousel from "../../components/carrusel/Carrusel";
import PreFooter from "../../components/prefooter/PreFooter";
import Profile from "../../components/profile/Profile";
import { useEffect } from "react";
import Collaborators from "../../components/collaborators/Collaborators";
import Description from "../../components/description/Description";

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
            <div>
            <Collaborators />
            </div>
            <div id="proyectos">
            <Cards />
            </div>
            <div>
            <Description />
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
