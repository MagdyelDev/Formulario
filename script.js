let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.querySelector('input[name="nome"]').value;
    let dataNascimento = document.querySelector('input[name="data"]').value;
    let genero = document.querySelector('input[name="genero"]:checked');

    if(nome == "" || dataNascimento == "" || genero == null){
        alert("Preencha todos os campos.");
    } else {

        let anoAtual = new Date().getFullYear();
        let anoUsuario = new Date(dataNascimento).getFullYear();

        let idade = anoAtual - anoUsuario;
        let generoEscolhido = genero.value;

        if(idade >= 18){
            if(generoEscolhido == "Masculino"){
                alert("Bem-vindo, Senhor " + nome);
            } else {
                alert("Bem-vinda, Senhora " + nome);
            }
        } else {

            if(generoEscolhido == "Masculino"){
                alert("Olá, " + nome + "! Seja bem-vindo.");

            } else {
                alert("Olá, " + nome + "! Seja bem-vinda.");

            }
        }
    }
});
