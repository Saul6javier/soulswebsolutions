import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import styles from './AppLayout.module.scss';

export default function AppLayout() {
    const [isClosedSideBar, setIsClosedSideBar] = useState(true);
    const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth > 700);
    const [isHamburMenuVisible, setIsHamburMenuVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarVisible(window.innerWidth > 1150);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={styles.applayout}>
            {isSidebarVisible && (
                <>
                    <Header />
                </>
            )}
            <main className={styles.applayout__main}>
                <Outlet />
            </main>
            <footer className={styles.applayout__footer}>
                <Footer />     
            </footer>
        </div>
    );
}