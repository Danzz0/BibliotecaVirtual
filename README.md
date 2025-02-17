# BibliotecaVirtual

## Descrição

BibliotecaVirtual é uma aplicação web desenvolvida com Node.js e Express que permite gerenciar autores e suas nacionalidades. A aplicação permite adicionar, editar, listar e excluir autores, bem como listar nacionalidades.

## Instalação

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
2. Crie um banco de dados chamado `dbbiblioteca`.
3. Configure as credenciais do banco de dados no arquivo [db.js].

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


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


