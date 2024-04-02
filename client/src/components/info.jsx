"use client"

import { useRouter } from "next/navigation"
import style from "@/components/estilos.module.css"


function Dato({ users }) {
    const router = useRouter();

    return (

        <div onClick={() => {
            router.push(`/info/${1}`)
        }}>
            <table className={style.table}>
                <tr>
                    <th>1</th>
                    <th>Nombre</th>
                    <th>Dirreccion</th>
                    <th>Nit</th>
                    <th>Telefono</th>
                    <th>Email </th>
                </tr>
            </table>
            
        </div>

    )
}

export default Dato;
