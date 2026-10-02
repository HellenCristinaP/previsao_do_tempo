# Previsão do Tempo

Você digita a cidade, clica no botão de "Buscar" e aparece algumas informações. Como: Umidade, temperatura e clima.
Dependendo do clima, o favicon muda de imagem e dependendo da temperatura, aparece um fundo diferente(Uma coisa que no projeto original não tem).

Um projeto para aprender a acrescentar dados de uma API, ensinado no vídeo [DevClub - Criando App de Previsão do Tempo](https://youtu.be/qxzqEuAOYZ4?si=psdvGRU2slGO9QXs).

Observação: Se caso não houver cidade escrita ou uma cidade inválida, o `script.js` fará o tratamento de erro! Algo que também não foi feito na aula.

## Como funciona(Mais detalhado)?

Quando digita alguma cidade e clicar "Buscar", verifica essa informação(GET) na API(Open Weather) e pega as informações, de acordo com o que está requerindo(Cidade - inputCity), de acordo com nossos requisitos(Linguagem em Português).

Para acessar essas informações da API, precisa criar um arquivo `.env` com sua chave da API, com o nome da variável assim: `OPENWEATHER_API_KEY`. Para gerar o JavaScript servido pela aplicação, execute `npm run build`; depois, inicie o servidor com `npm start`.

## Tecnologias usadas
### Linguagens:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Frameworks

![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### Web Service

[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://previsao-do-tempo-8jrg.onrender.com)

### Biblioteca

- Dotenv.
