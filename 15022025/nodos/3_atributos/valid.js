const dom=document;
const is_valid=(event,formulario)=>{
    event.preventDefault();
    const lista=dom.querySelector(formulario);
    // console.log(lista.children);
    for (const child of lista.children) {
        if (child.tagName=="SELECT") {
            // console.log(child.tagName);
            // console.log(child.attributes);
            for (const name of child.getAttributeName()) {
                const value =child.dataset.requiered;
                if (name ==="data-required"&&value ==="true") {
                    // console.log(name,value,child);
                    if (child.selectedIndex == 0) {
                        child.classList.add("error");
                    }else{
                        child.classList.remove("error");
                    }
                }
                
            }
        }
        
    }
}