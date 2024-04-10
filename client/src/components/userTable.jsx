"use client"

import React from "react";
import style from "@/components/estilos.module.css"

export default function Dato({ empresa }) {
    return (
        <div className={style.table} style={{ display: 'flex', flexDirection: 'row', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <div className={style.datos} style={{ marginRight: '20px' }}>
                <p style={{ margin: '5px 0' }}> {empresa.id}  </p>
                <p style={{ margin: '5px 0' }}> {empresa.nombre} </p>
                <p style={{ margin: '5px 0' }}> {empresa.direccion} </p>
                <p style={{ margin: '5px 0' }}> {empresa.nit} </p>
                <p style={{ margin: '5px 0' }}> {empresa.correo} </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <button style={{ marginBottom: '10px', padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}> Borrar </button>
                <button style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}> Editar </button>
            </div>
        </div>



    );
}


