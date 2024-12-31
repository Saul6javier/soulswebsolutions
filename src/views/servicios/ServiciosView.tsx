import { useLocation } from "react-router-dom";
import PreFooter from "../../components/prefooter/PreFooter";
import Servicios from "../../components/servicios/Servicios";
import { useEffect } from "react";

export default function ServiciosView() {

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
            <Servicios />
        </div>
        <div>
            <PreFooter />
        </div>
    </div>
    )   
}
