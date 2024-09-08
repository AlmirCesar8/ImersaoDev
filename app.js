function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase()
  // Inicializa uma string vazia para armazenar os resultados
  let resultado = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    let tag = dado.tags.toLowerCase()
    if (dado.nome.toLowerCase().includes(campoPesquisa) || dado.posicao.toLowerCase().includes(campoPesquisa) || dado.nacionalidade.toLowerCase().includes(campoPesquisa) || tag.includes(campoPesquisa)){
      // Cria um novo elemento div para cada resultado
      if (dado.posicao != "goleiro"){
        if (dado.gols != 0 && dado.assistencias != 0){
          resultado += `
          <div class="item-resultado">
            <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
            <p>${dado.nacionalidade} de ${dado.idade} anos, o camisa ${dado.camisa} do Corinthians é um(a) ${dado.posicao} que já disputou ${dado.jogos} jogos, marcando ${dado.gols} gols e distribuindo ${dado.assistencias} assistências nessas partidas. ${dado.descricao}</p>
            <a href="${dado.wiki}" target="_blank">Mais informações</a>
          </div>
          `;
        }
        else{
          resultado += `
          <div class="item-resultado">
            <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
            <p>${dado.nacionalidade} de ${dado.idade} anos, o camisa ${dado.camisa} do Corinthians é um(a) ${dado.posicao} que já disputou ${dado.jogos} jogos, sem nenhum gol marcado e sem nenhuma assistência nessas partidas. ${dado.descricao}</p>
            <a href="${dado.wiki}" target="_blank">Mais informações</a>
          </div>
          `;
        }
      }
      else{
        resultado += `
        <div class="item-resultado">
          <h2><a href=${dado.insta} target="_blank">${dado.nome}</a></h2>
          <p>${dado.nacionalidade} de ${dado.idade} anos, o camisa ${dado.camisa} do Corinthians é um(a) ${dado.posicao} que já disputou ${dado.jogos} jogos, defendendo ${dado.penal_def} pênaltis e sofrendo ${dado.gols_sofri} gols. ${dado.descricao}</p>
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