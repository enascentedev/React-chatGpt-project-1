# Projeto Full Stack em React e Java

## Visão Geral

Este é um projeto full stack que utiliza React para o front-end e Java para o back-end (disponível em outro repositório). O projeto faz uso da API da OpenAI para responder às perguntas dos usuários com base nos dados do ChatGPT versão 4. Além disso, implementamos um seletor de temas que transforma completamente o design com apenas um clique, utilizando Tailwind CSS e DaisyUI.

## Vídeo Demonstrativo

<div align="center">
  <video width="600" controls>
    <source src="./public/chatGpt-1.mp4" type="video/mp4">
    Seu navegador não suporta a tag de vídeo.
  </video>
</div>

## Funcionalidades

- **Integração com OpenAI**: Responde às perguntas dos usuários utilizando a API da OpenAI, baseada na versão 4 do ChatGPT.
- **Seletor de Temas**: Permite a troca completa do design da aplicação com um único clique, graças ao Tailwind CSS e DaisyUI.
- **Componentes Reutilizáveis**: Implementação de componentes reutilizáveis para facilitar a manutenção e a escalabilidade do projeto.

## Tecnologias Utilizadas

### Front-end

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **DaisyUI**: Biblioteca de componentes para Tailwind CSS que facilita a criação de interfaces modernas e responsivas.

### Back-end

- **Java**: Linguagem de programação utilizada para o desenvolvimento do servidor back-end (repositório disponível separadamente).
- **Spring Boot**: Framework para construção de aplicações Java robustas e de alta performance.

## Instalação e Configuração

### Pré-requisitos

- Node.js e npm instalados
- Conta na OpenAI e chave de API válida
- Back-end configurado e rodando (ver repositório do back-end)

### Passos para Instalação

1. Clone o repositório do front-end:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:
    ```
    REACT_APP_OPENAI_API_KEY=your-api-key
    ```

5. Inicie a aplicação:
    ```bash
    npm start
    ```

## Uso

Após iniciar a aplicação, você poderá acessar a interface do usuário no seu navegador. Utilize o seletor de temas para mudar o design da aplicação e faça perguntas que serão respondidas utilizando a API da OpenAI.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. 

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato através do email [seu-email@example.com](mailto:seu-email@example.com).

---

**Nota**: Certifique-se de incluir o link correto para o repositório do back-end na seção de instalação e configuração.
