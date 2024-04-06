
import Dato from '@/components/userTable';

function fechUsers() {
  const urls = "http://localhost:5000/api/empresas"
  const user =  fetch(urls).then(res => res.json()); 

  console.log(urls)
  return user

}

export default function Info() {
  const empresa = fechUsers();

  return (
    <>
      <Dato empresa={empresa} />
 
    </>

  );
}

