const tabla =async()=>{
    const pedir =await fetch("http://localhost:3001/usuarios")
    const data = pedir.json();
    return data;
}
export default tabla;