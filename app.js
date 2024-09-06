function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultado = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria um novo elemento div para cada resultado
        resultado += `
        <div class="item-resultado">
          <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.wiki} target="_blank" class="mais-informacoes">Mais informações</a>
        </div>
      `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}