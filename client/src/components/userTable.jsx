"use client"

import React from "react";
import style from "@/components/estilos.module.css"

export default function Dato({ empresa }) {
    return (
        <div className={style.table}>
            <div className={style.datos}>
                <p className={style.mismaClase}> {empresa.id} </p>
                <p className={style.mismaClase}> {empresa.nombre} </p>
                <p className={style.mismaClase}> {empresa.direccion} </p>
                <p className={style.mismaClase}> {empresa.nit} </p>
                <p className={style.mismaClase}> {empresa.correo} </p>


            </div>

            <div className={style.botonDiv}>
                <button style={{ backgroundColor: "green" }} className={style.boton}> Borrar </button>
                <button style={{ backgroundColor: "blue" }} className={style.boton}> Editar </button>
            </div>

        </div>
    );
}


