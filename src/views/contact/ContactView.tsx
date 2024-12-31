import { useEffect } from "react";
import Contact from "../../components/contact/Contact";
import PreFooter from "../../components/prefooter/PreFooter";
import { useLocation } from "react-router-dom";

export default function ContactView() {

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
            <Contact />
        </div>
        <div>
            <PreFooter />
        </div>
    </div>
    )   
}
