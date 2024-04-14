"use client"

import React from "react";
import styles from "@/components/estilos.module.css"
import { useState } from "react";
import Modal from "./Modal";

function deleteEmp() {
    alert("Empresa Borrada");


}

export default function Dato({ empresa }) {

    const [showModal, setShowModal] = useState(false);
    

    return (
        <div className={styles.table}>
            <div className={styles.datos}>
                <p className={styles.mismaClase}> {empresa.id} </p>
                <p className={styles.mismaClase}> {empresa.nombre_empresa} </p>
                <p className={styles.mismaClase}> {empresa.direccion} </p>
                <p className={styles.mismaClase}> {empresa.nit} </p>
                <p className={styles.mismaClase}> {empresa.correo} </p>
            </div>

            <div className={styles.botonDiv}>
                <button onClick={deleteEmp} style={{ backgroundColor: "green" }} className={styles.boton}> Borrar </button>
                
                
                <button onClick={
                    () => setShowModal(true)
                } style={{ backgroundColor: "blue" }} className={styles.boton}> Editar </button>

                {
                    showModal &&
                    <Modal onClose={() => setShowModal(false)}>
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
                    </Modal>
                }
            </div>

        </div>
    );
}


