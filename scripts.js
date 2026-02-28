// Criando arrays (lista vazia) para as tarefas adicionada pelos usuários
let tarefas = []

// Pegando click do usuário no botão
function adicionarTarefa() {
    // Variável para o input
    const inputTarefa = document.getElementById("inputTarefa")
    // Variável para o valor do input
    let tarefa = inputTarefa.value.trim()
    // Variável da mensagem
    const mensagem = document.getElementById("mensagem")

    // Condição para erro e sucesso
    if (tarefa == "") { // mensagem de erro
        const mensagemErro = "Digite uma tarefa válida!"
        mensagem.textContent = mensagemErro

    } else { // menagem sucesso
        const mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        
        // adicionando arrays
        tarefas.push(tarefa)
        renderizarTarefas()

    }
    // Limpar caixa do input depois que adicionado o valor
    inputTarefa.value = ""
}

// Criando listas
function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    //limpar lista
    listaTarefas.innerHTML = ""

    // Criando loop para adição de tarefas
    for (let i = 0 ; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        //Botão de edição
        let botaoEditar = document.createElement("button")
        botaoEditar.className ="botao"
        botaoEditar.textContent = "✏️"
        botaoEditar.onclick = () => editarTarefa(i)

        // Botão de remoção
        let botaoRemover = document.createElement("button")
        botaoRemover.className ="botao"
        botaoRemover.textContent = "🗑️"
        botaoRemover.onclick = () => removerTarefa(i)

        // Criação de elementos
        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)
    }

   
}

// Caixa para editação da tarefa
function editarTarefa(i) {
    let tarefaEditada = prompt("edite sua tarefa:")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

// Remover tarefa
function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()

}

// Limpar a lista inteira
function limparTarefas() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    document.querySelector(".mensagem").style.color = "#0f0f0f"
}