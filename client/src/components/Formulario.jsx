
"use client"

import styles from "@/components/estilos.module.css"
import React, { useState, useEffect } from 'react'; 

function Formulario() {

    const [name, setName] = useState(''); 

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
                        <button className={styles.inputsSub}> Guardar </button>
                    </div>
                </form>
            </div>
            <footer>
            </footer>
        </main>
    )
}

export default Formulario;

