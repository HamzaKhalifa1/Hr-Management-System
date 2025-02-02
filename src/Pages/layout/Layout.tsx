import { Outlet } from "react-router-dom"
import Sidebar from "../../component/layout/Sidebar"
import Header from "../../component/layout/Header"
import styles from "./Layout.module.css"
import { useSelector } from "react-redux"

export default function Layout() {
    const { theme } = useSelector((state: any) => state.theme)
  return (
    <main className={styles.layout} style={{backgroundColor:theme.background, color:theme.color}}>
        <Sidebar />
        <section>
            <Header />
            <Outlet />
        </section>
    </main>
  )
}
