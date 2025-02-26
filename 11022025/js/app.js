import { users } from "/js/users.js";

const root = document.getElementById("root");
 const imprimir =async ()=>{
    try {
        const usuario =await users();

        await Promise.all(usuario.map(async (usuario)=>{
            let div = document.createElement("div");
            let htmlName = document.createElement("div");
            let htmlEmail = document.createElement("div");
            let htmlTelefono = document.createElement("div");
            let htmlButtom = document.createElement("button");
            htmlName.innerHTML = usuario.name;
            htmlEmail.innerHTML = usuario.email;
            htmlTelefono.innerHTML = usuario.phone;
            htmlButtom.innerHTML = "Cuantos Post";
            div.append(htmlName, htmlEmail, htmlTelefono,htmlButtom);
            div.classList.add("card");
            root .appendChild(div);

            HTMLButton.addEventListener("click", async ()=>{
                alert('usuario con id ${usuario.id}');
                postMessage(id).then(data=>{
                    alert('usuario con id ${usuario.id} tiene ${data.length} post');
                })
            });
        }));
    } catch (error) {
        
    }
 }
imprimir();
