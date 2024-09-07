function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";
  let nome = "";
  let posicao = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {

    nome = dado.nome.toLowerCase()
    posicao = dado.posicao.toLowerCase()

    if (nome.includes(campoPesquisa) || posicao.includes(campoPesquisa)) {
      // Cria um novo elemento div para cada resultado
      resultado += `
      <div class="item-resultado">
        <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.wiki} target="_blank" class="mais-informacoes">Mais informações</a>
      </div>
      `;
    }
  }
  if (!resultado) {
    resultado = '<div class= "item-resultado"><h2>Nada foi encontrado</h2></div>'
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}