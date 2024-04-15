
import Dato from '@/components/userTable';

async function loadData() {

  const res = await fetch("http://localhost:5000/api/empresas")
  const emp = await res.json()

  return emp

}

async function Info() {
  const empresa = await loadData();
  return (

    <div>
      {
        empresa.map(emp => (
          <div>
            <Dato  empresa={emp} key={emp.id}  />
          </div>
        ))
      }
    </div>

  );
}

export default Info;