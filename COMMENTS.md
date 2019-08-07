## Instruções

### Requerimentos

Requer Node 10.2 ou superior e o Yarn.

Caso necessário, instale o Yarn através de:
```
npm install -g yarn
```

### Execução

Execute o projeto com:
```
yarn run start
```

Feito isso, ele ficará acessível em __localhost:8000/index.html__.


## Pendências

Em função de imprevistos tanto pessoais quanto na complexidade do projeto (veja abaixo), os seguintes itens do escopo ficaram pendentes:
- busca
- paginação das músicas mais escutadas


## Problemas encontrados

### API do Last.fm não retorna imagens

O Last.fm deu uma satisfação no link abaixo a respeito da API deles não retornar mais imagens de artistas e álbuns. Não importa a consulta, todos artistas e álbuns retornam apenas a mesma imagem de uma estrela.

https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq

Decidi lidar com o problema com uma solução alternativa - utilizando uma função que busca imagens no Spotify através do bing. Como isso é uma busca por nome da banda/álbum, nem sempre os resultados serão os desejados.

O bing foi usado pois possui um script que retorna somente uma imagem dentre os resultados da busca.

Poderia utilizar a API de um outro serviço para obter estas imagens, mas isso também teria problemas:
- feita a busca no lastfm, seria necessário fazer uma consulta por artista desejado, aumentando muito a quantidade de solicitações necessárias para exibir as páginas
- APIs de serviços de músicas usam o MBID para identificar artistas. O Lastfm possui este campo, mas ele nem sempre está preenchido, o que impossibilitaria o utilizar confiavelmente em outros serviços

### Ausência do MBID
Como citado acima, o Lastfm nem sempre possui o MBID dos artistas, que seria a forma ideal de os identificar unicamente.

Portanto, as páginas dos artistas tem URLs que preferencialmente funcionam usando MBID mas, na falta dele, usam o nome da banda:

- #!/artist/mbid/oMBIDAqui
- #!/artist/name/oNomeAqui

Algo similar acontece em vários métodos do aplicativo, como por exemplo no api.getTopAlbums: a consulta à API é feita usando o MBID quando possível, mas usa o nome se ele não estiver presente.

### Inconsistência da API
A API do Lastfm não segue um padrão REST claro, por exemplo:
- solicitações que não encontrem resultados retornam status 200 (OK) com uma mensagem informativa, ao invés de retornarem 404(not found)
- alguns dados são representados de forma inconsistente em métodos diferentes da API; por exemplo um artista sem MBID no método chart.getTopArtists possui MBID igual a uma string vazia, mas no método artist.getInfo o mesmo artista possui IMDB indefinido (o campo não existe)

Estes problemas deixam o código mais complexo e frágil, e possivelmente existem mais erros não tratados causados por outras inconsistências.

## Escolhas Técnicas

- Angular Seed: usado como base do projeto por ser o padrão mais popular.
- SASS: não foi encontrada uma forma fácil de integrar o SASS ao processo de build do aplicativo; então o SASS está sendo copilado para HTML utilizando uma ferramenta externa do editor de texto.
- Artistas sugeridos: na página do artista, 5 artistas sugeridos poderiam ser exibidos com os dados do carregamento inicial do artista (artist.getInfo); mas o layout pede por 8 artistas sugeridos, o que requer uma nova chamada à API (artist.getSimilar). Acho que seria melhor alterar o layout para exibir somente 5, ao invés de ter uma nova solicitação à API para obter somente estes 3 adicionais; mas a prioridade era seguir o layout.
- Layout artistas: alterei o tamanho da coluna de álbuns em proporção a de faixas, para garantir que a altura delas ficasse mais equivalente sem distorcer as imagens.
  - na lista de faixas, existem ícones que presume-se serem para funcionalidades de favoritar e reproduzir as faixas. Estas funcionalidades não seriam possíveis neste aplicativo, então não inclui estes botões.
  - da mesma forma, não está claro para onde os links de "mais faixas", "mais álbuns" etc enviariam, então não os inclui.

## Melhorias

- Exibir algo durante o processo de carregamento dos dados
- Exibir algo caso algum dos dados falhe em carregar
- Unificar métodos de chamadas da API
- Criar classes para tipos de dados recorrentes (eg. artistas), com propriedades e funções apropriadas
- Testes