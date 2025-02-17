# BibliotecaVirtual

## Descrição

BibliotecaVirtual é uma aplicação web desenvolvida com Node.js e Express que permite gerenciar autores e suas nacionalidades. A aplicação permite adicionar, editar, listar e excluir autores, bem como listar nacionalidades. Este projeto foi desenvolvido em contexto acadêmico e foi inspirado no projeto do canal do professor [Fábio Augusto Procópio](https://www.youtube.com/c/Proc%C3%B3pionaRede), onde este ensina criar esse mesmo projeto do zero.

## Instruções de instalação

1. Clone o repositório para sua máquina local:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd BibliotecaVirtual
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração do Banco de Dados

1. Certifique-se de ter o MySQL instalado e em execução.
2. Importe o banco de dados chamado `dbbiblioteca`.
3. Caso necessário, configure as credenciais do banco de dados no arquivo [db.js].

## Executando a Aplicação

1. Inicie o servidor:
    ```sh
    npm start
    ```

2. Acesse a aplicação no navegador:
    ```
    http://localhost:3000
    ```

## Funcionalidades

### Autores

- **Listar Autores**: Acesse `http://localhost:3000/autores/listar` para ver a lista de autores.
- **Adicionar Autor**: Acesse `http://localhost:3000/autores/add` para adicionar um novo autor.
- **Editar Autor**: Acesse `http://localhost:3000/autores/edit/:id` para editar um autor existente.
- **Excluir Autor**: Utilize o botão "Excluir" na lista de autores para remover um autor.

### Nacionalidades

- **Listar Nacionalidades**: Acesse `http://localhost:3000/nacionalidades/listar` para ver a lista de nacionalidades.

## Estrutura de Diretórios

- **app.js**: Arquivo principal da aplicação.
- **bin/www**: Script para iniciar o servidor.
- **public/**: Diretório para arquivos estáticos (CSS, JavaScript, imagens).
- **routes/**: Diretório para arquivos de rotas.
- **utils/**: Diretório para utilitários, como a configuração do banco de dados.
- **views/**: Diretório para arquivos de visualização (EJS).

## Tecnologias Utilizadas

- Node.js
- Express
- EJS
- MySQL
- Bootstrap
- jQuery
- SweetAlert2


## Referências

- [Site do professor procópio](https://sites.google.com/view/procopio-na-rede)
- [BD criado pelo professor para importar](https://drive.google.com/file/d/1U5hTs0O3JY8hIUNGkPnDHN84tDejEJbZ/view)
- [Como criar o projeto](https://www.youtube.com/watch?v=OWmDXKUzeTU&list=PLqsF5rntN2nbanvxinF3twZM568NvNzKj)
- [SweetAlert](https://sweetalert2.github.io/)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
