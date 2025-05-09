# Projeto Spotify

Este é um projeto de exemplo inspirado no Spotify, desenvolvido com uma arquitetura full-stack utilizando React no frontend e Node.js com Express no backend. O projeto também utiliza MongoDB como banco de dados.

## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no frontend.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **Axios**: Biblioteca para requisições HTTP.

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs.
- **MongoDB**: Banco de dados NoSQL.

### Ferramentas de Desenvolvimento
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **FontAwesome**: Ícones para a interface.

## Configuração do Ambiente

### Pré-requisitos
- Node.js instalado.
- MongoDB configurado.

### Instale as dependências do backend:
```cd backend```
```npm install``` 

### Instale as dependências do frontend:
```cd frontend```
```npm install```

### Executando o Projeto
Backend
Configure a conexão com o MongoDB no arquivo backend/api/connect.js.
Inicie o servidor:
cd backend
node api/server.js

##### Endpoints: 
- http://localhost:3000/artists 
- http://localhost:3000/songs

Frontend
Inicie o servidor de desenvolvimento:
```cd frontend``` 
```npm run dev ```
Acesse o projeto no navegador em http://localhost:5173.

### Funcionalidades
Listagem de artistas e músicas.
Visualização de detalhes de um artista ou música.
Player de música com controles básicos.
Integração com uma API para buscar dados do MongoDB.

### Estrutura de Dados
Artistas
Cada artista possui os seguintes campos:

_id: Identificador único. 
name: Nome do artista. 
image: URL da imagem do artista. 
banner: URL do banner do artista. 

```
{
   "_id": {
      "$oid": "681e2bd6108460765bc25960"
   },
   "image": "https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4",
   "name": "Henrique & Juliano",
   "banner": "https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9"
}
``` 

Músicas
Cada música possui os seguintes campos:

_id: Identificador único. 
name: Nome da música. 
artist: Nome do artista. 
duration: Duração da música. 
audio: URL do arquivo de áudio. 
image: URL da imagem da música.

```
{
   "_id": {
      "$oid": "681e2bd6108460765bc25898"
   },
   "image": "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
   "name": "Última Saudade - Ao Vivo",
   "duration": "2:30",
   "artist": "Henrique & Juliano",
   "audio": "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3"
}
```
