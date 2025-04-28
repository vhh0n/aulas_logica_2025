let listaDeNomes = [];
function adicionarNome(nome) {
    listaDeNomes.push(nome);
    console.log(`Nome "${nome}" adicionado à lista.`);
}
function removerNome(nome) {
    let index = listaDeNomes.indexOf(nome);
    if (index !== -1) {
        listaDeNomes.splice(index, 1);
        console.log(`Nome "${nome}" removido da lista.`);
    } else {
        console.log(`Nome "${nome}" não encontrado na lista.`);
    }}
adicionarNome("Vh")
adicionarNome("Jp")
console.log(listaDeNomes)
removerNome("Flores")
console.log(listaDeNomes)