const form = document.querySelector("formulario");
const senha = document.getElementById("senha");
const confirmar = document.getElementById("confirm_senha");

// Verifica se os elementos foram encontrados
if (!senha || !confirmar) {
    console.error("Campos de senha não encontrados!");
}

form.addEventListener("submit", function(evento){
    evento.preventDefault();

    const valor = senha.value;
    const confirmar_valor = confirmar.value;
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%_-]).{8,}$/;

    // Validação da força da senha
    if(!senhaForte.test(valor)){
        alert("A senha não atende aos requisitos:\n- Mínimo 8 caracteres\n- Letra maiúscula\n- Letra minúscula\n- Número\n- Caractere especial (@!#$%)");
        return;
    }

        // Validação se as senhas coincidem
    if(valor !== confirmar_valor){
        alert("As senhas não coincidem!");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    // Se todas as validações passarem, envia o formulário
    form.submit();
});