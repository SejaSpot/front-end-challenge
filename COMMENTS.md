

##Problemas encontrados

## API do Last.fm não retorna imagens

O Last.fm deu uma satisfação no link abaixo a respeito da API deles não retornar mais imagens de artistas e álbuns. Não importa a consulta, todos artistas e álbuns retornam apenas a mesma imagem de uma estrela.

https://getsatisfaction.com/lastfm/topics/api-announcement-dac8oefw5vrxq

Decidi lidar com o problema com uma solução alternativa - utilizando uma função que busca imagens no Spotify através do bing. Como isso é uma busca por nome da banda/álbum, nem sempre os resultados serão os desejados.

O bing foi usado pois possui um script que retorna somente uma imagem dentre os resultados da busca.

Poderia utilizar a API de um outro serviço para obter estas imagens, mas isso também teria problemas:
- feita a busca no lastfm, seria necessário fazer uma consulta por artista desejado, aumentando muito a quantidade de solicitações necessárias para exibir as páginas
- APIs de serviços de músicas usam o MBID para identificar artistas. O Lastfm possui este campo, mas ele nem sempre está preenchido, o que impossibilitaria o utilizar confiavelmente em outros serviços

## Escolhas Técnicas

- Angular Seed
- SASS
- Yarn

## Urls da API Last.fm
http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0e88f43c5248ff6fd1e662925b8cad52&format=json
http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json
http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json
http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json
