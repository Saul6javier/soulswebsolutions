import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import AboutView from "./views/about/AboutView";
import ProfileView from "./views/profile/ProfileView";
import NotFoundView from "./views/notfound/NotFoundView";

import ServiciosView from "./views/servicios/ServiciosView";
import ContactView from "./views/contact/ContactView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas dentro del layout general */}
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="servicios" element={<ServiciosView />} />
                    <Route path="contacto" element={<ContactView />} />
                    <Route path="about" element={<AboutView />} />
                    <Route path="profile" element={<ProfileView />} />
                    {/* Ruta para manejar 404 */}
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
            <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
        </BrowserRouter>
    );
}
