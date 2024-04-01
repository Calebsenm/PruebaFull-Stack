import Link from "next/link"
import styles from "@/components/estilos.module.css"


function Navigation() {
    return (
        <header className={styles.header} >
            <div className={styles.icon}>
                <h1>
                    
                </h1>
            </div>
            <nav className={styles.nav}>
                <Link  className={styles.link} href="/" > Inicio </Link>
                <Link  className={styles.link}  href="/form" > Formulario </Link>
                <Link  className={styles.link}  href="/info" > Informacion </Link>

            </nav>
        </header>

    )
}

export default Navigation;
