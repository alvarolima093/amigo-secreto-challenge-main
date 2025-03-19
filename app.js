let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo) {
    listaAmigos.push(amigo); 
    document.getElementById("amigo").value = ""; 
    console.log(listaAmigos); 
    exibirAmigos("#listaAmigos");
  } else {
    console.error("Por favor, digite o nome de um amigo!");
  }
}

function exibirAmigos(tag) {
  let lista = document.querySelector(tag);
  lista.innerHTML = ""; 
  listaAmigos.forEach((amigo) => {
    let item = document.createElement("li"); 
    item.textContent = amigo; 
    lista.appendChild(item);
  });
}
