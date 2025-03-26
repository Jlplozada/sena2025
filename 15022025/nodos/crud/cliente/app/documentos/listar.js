const tipo=async()=>{
    const pedir= await fetch("http://localhost:3001/documento");
    const data=await pedir.json();
    return data;    
}

export default tipo;