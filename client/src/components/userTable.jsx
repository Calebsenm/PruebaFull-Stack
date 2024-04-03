"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import style from "@/components/estilos.module.css"

export default function Dato({ empresa , columns }) {
    return (
        <Table className={style.table} >

            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>

            <TableBody items={empresa}>
               
            {(emp) => <TableCell key={emp.key}>{emp.nombre}</TableCell>}
                 
            </TableBody>

        </Table>
    );
}
