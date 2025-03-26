const listar=async()=>{
    const pedir= await fetch("http://localhost:3001/ciudades");
    const data=await pedir.json();
    return data;    
}

export default listar;