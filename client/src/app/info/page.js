
import Dato from '@/components/userTable';


/*
function fechUsers() {
  return user;
}
*/

export const empresa = [
  {
    key: "1",
    nombre: "Tony Reichert",
    direccion: "123 Calle Principal",
    nit: "123456789",
    telefono: "555-123-4567",
    email: "tony@example.com",
  },
  {
    key: "2",
    nombre: "Tony Reichert",
    direccion: "123 Calle Principal",
    nit: "123456789",
    telefono: "555-123-4567",
    email: "tony@example.com",
  },
  {
    id: 3,
    nombre: "Tony Reichert",
    direccion: "123 Calle Principal",
    nit: "123456789",
    telefono: "555-123-4567",
    email: "tony@example.com",
  },
];

const columns = [
  {
    key: "1",
    label: "NAME",
    direccion: "DIRECCION",
  },
  {
    key: "2",
    label: "ROLE",
  },
  {
    key: "3",
    label: "STATUS",
  },
];

export default function Info() {

  //const users = fechUsers();
  return (

    <>    
     <Dato empresa={empresa } columns={columns}/>

    </>

  );
}

