"use client" 
import { useParams } from "next/navigation";

/*
async function getUsers(id){
  const res = await fect("api/${id}")
  const data = awit rest.joson()
  return data.data
}

*/

export default function User() {

  const params = useParams()

  return (
    <>
      <h1> {params.id} </h1>
    </>
  );
}

