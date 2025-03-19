let listaAmigos = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;
  listaAmigos.push(amigo);
  document.getElementById("amigo").value = "";
  console.log(listaAmigos);
  console.log("Amigo adicionado!");
}
