const insertar =(datos)=>{
console.log(datos);
fetch('http://localhost:3001/usuarios', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
export default insertar;