# Guia prático sobre: API, REST e RESTFUL

## API

 - API(Application Programming Interface ou Interface de Aplicações) 
  é basicamente um conjunto de rotinas e padrões estabelecidos por 
  uma aplicação, para que outras aplicações possam utilizar as 
  funcionalidades desta aplicação.
   
### API é:
   - Responsavel por estabelecer comunicação entre diferentes serviços.
   - Meio de campo entre as tecnologias.
   - Intermediador para troca de informações.
  
   - Ou seja API serve para que um aplicativo(mobile app, web app, desktop app, etc.) converse com outra aplicativo. 

### Exemplo basico:
   - Cliente chega em um restaurante (Client)
   - Garçon ouve meus pedidos, informa meus pedidos para a cozinha (API)
   - Cozinha onde são processados meus pedidos e retorna com a comida pronta (Server).


## REST

- Representational State Transfer ou Transferencia de Estado Representativo
- Determina algumas obrigações na transferencia de dados na API
- A transferencia de dados, geralmente , usando o protocolo HTTP

## O que é RESTFUL 
   - é aplicar os padões
## Para ser RESTFUL necessita de 6 contraints

  - _Client-Server_: Separação do cliente e do armazenamento de dados(servidor), dessa forma, 
  poderemos ter uma portabilidade do nosso sistema, usando o React para Web e React Native para o smartphone.
 
  - _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE)
  a requisição (REQUEST).
 
 - _Chacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

 - _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para responder a requisição.

- _Code on demand (opcional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente; 

## Boas  Praticas

- Ultilizar verbos HTTP para nossas requisições.
- Não deixar barra no final do endpoint.
- Nunca deixe o cliente sem respostas.

## VERBOS HTTP

 - GET      = Recever dados de um Resouce.
 - POS      = Enviar dados ou informações para serem processadas por um Resouce.
 - PUT      = Atualizar dados de um Resouce.
 - DELETE   = Deletar dados de um Resouce.

 ## STATUS DAS RESPOSTAS

 - 1xx: Informação.
 - 2xx: Sucesso
    - 200: OK
    - 201: CREATED
    - 204: Não tem conteúdo PUT, POST, DELETE
 - 3xx: Redirection
 - 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found
 - 5xx: Server Error
    - 500: Internal Server Error
    
 ### Resources 
  - é uma entidade ou um objeto.


### Links

- [Vídeo do youtube](https://www.youtube.com/watch?v=ghTrp1x_1As)
- [Guia pratico Git](http://rogerdudler.github.io/git-guide/index.pt_BR.html)
- [Rocketseat :rocket:](https://rocketseat.com.br)
- [Visual Studio Code](https://code.visualstudio.com)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/)
- [BCL-ST](https://www.bcl-st.com.br)