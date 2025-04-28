function gerarSenha(tamanho) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789!@";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    console.log(`Senha gerada: ${senha}`);
    return senha;
}
gerarSenha(10)
gerarSenha(16)
