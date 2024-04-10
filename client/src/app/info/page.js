
import Dato from '@/components/userTable';

async function loadData() {
  const res = await fetch("http://localhost:5000/api/empresas")
  const data = await res.json()

  return data

}

async function Info() {
  const empresa = await loadData();
  return (

    <div>
      {
        empresa.map(empresa => (
          <div>
            <Dato  empresa={empresa} key={empresa.id } />
          </div>
        ))
      }
    </div>

  );
}


export default Info;
