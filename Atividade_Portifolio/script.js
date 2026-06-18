function exibirMensagem(nome) {
    const elementoMensagem = document.getElementById('mensagemConfirmacao');
    elementoMensagem.textContent = `Olá, ${nome}! Cadastro realizado com sucesso.`;
}

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
   
    evento.preventDefault();

    const nomeDigitado = document.getElementById('nomeUsuario').value;

    exibirMensagem(nomeDigitado);
   
    formulario.reset();
});
