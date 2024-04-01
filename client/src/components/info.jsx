"use client"

import { useRouter } from "next/navigation"


function Dato({ users }) {
    const router = useRouter();

    return (
        <ul>
            <li onClick={() => {
                router.push(`/info/${1}`)
            }} >
                <div>
                    <p>1 </p>
                    <p>Nombre </p>
                    <p>Direccion </p>
                    <p>Nit </p>
                    <p>Telefono </p>
                    <p>Email </p>
                </div>
            </li>
           
        </ul>

    )
}

export default Dato;
