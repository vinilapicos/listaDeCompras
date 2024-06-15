const compras = document.getElementsByClassName("Compras")[0];
const lapis = document.getElementById("lapis");
const itens = document.getElementById("itens");
const inputUsuario = document.getElementById("inputUsuario");

lapis.addEventListener("click", function(){
    Array.from(itens.children).forEach(function(item){
        if (item.style.textDecoration === 'line-through') {
            itens.removeChild(item);
        }
    });
});

inputUsuario.addEventListener("keydown", function(event){
    if(event.key == "Enter")
        adicionarItem();
})

function adicionarItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + inputUsuario.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    itens.insertAdjacentElement("beforeend", h2);

    inputUsuario.value = "";
}