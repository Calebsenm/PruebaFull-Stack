
"use client"
import Dato from '@/components/userTable';
import { useState, useEffect } from "react";



function Info() {

  const [empresas, setEmpresas] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/empresas");
      const emp = await res.json();
      setEmpresas(emp);
    };

    fetchData();
    
  }, []);

  return (
    <div>
      {empresas.map(emp => (
        <div key={emp.id}>
          <Dato empresa={emp} />
        </div>
      ))}
    </div>
  );
}

export default Info;