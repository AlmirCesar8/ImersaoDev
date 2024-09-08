function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {

    if (dado.nome.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.posicao.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.nacionalidade.toLowerCase().includes(campoPesquisa.toLowerCase())) {
      // Cria um novo elemento div para cada resultado
      if (dado.posicao != "goleiro"){
        resultado += `
        <div class="item-resultado">
          <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
          <p>Naturalizado(a) ${dado.nacionalidade} e com ${dado.idade} anos, o camisa ${dado.camisa} do Corinthians é um(a) ${dado.posicao} que já disputou ${dado.jogos} jogos, marcando ${dado.gols} gols e distribuindo ${dado.assistencias} assistências. ${dado.descricao}</p>
          <a href="${dado.wiki}" target="_blank">Mais informações</a>
        </div>
        `;
      }
      else{
        resultado += `
        <div class="item-resultado">
          <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
          <p>Naturalizado(a) ${dado.nacionalidade} e com ${dado.idade} anos, o camisa ${dado.camisa} do Corinthians é um(a) ${dado.posicao} que já disputou ${dado.jogos} jogos, defendendo ${dado.penal_def} pênaltis e sofrendo ${dado.gols_sofri} gols. ${dado.descricao}</p>
          <a href="${dado.wiki}" target="_blank">Mais informações</a>
        </div>
        `;
      }
    }
  }
  if (!resultado) {
    resultado = '<div class= "item-erro"><h2>Nada foi encontrado</h2></div>';
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultado;
}