import { Outlet } from "react-router-dom"
import styles from "./AuthLayout.module.scss";

export default function AuthLayout() {
    return (
        <>
            <main className={styles.container}>
                <div >
                    <Outlet />
                </div>
            </main>
        </>
    )
}
