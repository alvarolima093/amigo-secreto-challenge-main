let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo) {
    listaAmigos.push(amigo); 
    document.getElementById("amigo").value = ""; 
    console.log(listaAmigos); 
    exibirAmigos("#listaAmigos");
  } else {
    alert("Digite o nome de um amigo!");
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
function sortearAmigo() {
    const lista = document.getElementById("listaAmigos");
    const itens = lista.getElementsByTagName("li");

    if (itens.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const amigoSorteado = itens[indiceSorteado].textContent;
    const resultado = document.getElementById("resultado");
    const item = document.createElement("li");
    item.textContent = `Amigo Sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}

