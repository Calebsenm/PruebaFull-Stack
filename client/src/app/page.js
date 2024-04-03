import styles from "@/app/formulario.module.css"
import Link from "next/link"

export default function Formulario() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>

        <h1>Formulario De Registro </h1>

        <form id="Formulario" >
          <div >
            <label > Nombre de la empresa </label>
            <input type="text" className={styles.inputs}></input>
          </div>
          <div>
            <label> Dirección </label>
            <input type="text" className={styles.inputs}></input>
          </div>
          <div>
            <label> NIT </label>
            <input type="text" className={styles.inputs}></input>
          </div>
          <div>
            <label>Teléfono </label>
            <input type="text" className={styles.inputs}></input>
          </div>
          <div>
            <label>Email </label>
            <input type="text" className={styles.inputs}></input>
          </div>
          <div>
            <input type="submit" className={styles.inputsSub}></input>
          </div>
          <div>
            <button className={styles.inputsSub2}> <Link style={{ textDecoration: "none", color: "black " }} href="/info">Ver Informacion </Link></button>

          </div>
        </form>
      </div>
      <footer>
      </footer>
    </main>
  )
}

