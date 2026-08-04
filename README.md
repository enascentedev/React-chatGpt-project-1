# Chat GPT — front-end em React

> **Projeto legado (2024).** Mantido como registro de portfólio, sem manutenção ativa. Foi construído com Create React App, hoje descontinuado — a arquitetura deste repositório **não deve ser usada como referência atual**.

Interface de chat em React que envia perguntas a um back-end próprio e exibe as respostas em formato de conversa, com troca de temas via DaisyUI.

## Vídeo demonstrativo

<div align="center">
  <img src="./public/chatGpt-1.gif" alt="Demonstração do projeto" width="600">
</div>

## Arquitetura — e onde fica a chave da OpenAI

Este repositório contém **apenas o front-end**. Ele não conversa com a OpenAI: envia a pergunta para um back-end em `http://localhost:8080/pergunta`, e é esse back-end que fala com o provedor de IA.

```text
Navegador (este repositório)  →  Back-end (Java/Spring)  →  API da OpenAI
```

Essa separação existe por um motivo de segurança: **chaves de provedores de IA nunca devem ficar no front-end.** Tudo que entra no bundle do navegador é público — em Create React App, qualquer variável `REACT_APP_*` é embutida no JavaScript servido ao usuário e pode ser lida por qualquer visitante. A chave precisa ficar no servidor, em variável de ambiente, e as chamadas autenticadas passam por ele.

Por isso **este projeto não usa nenhum arquivo `.env` e não requer chave de API para rodar.**

## Estado atual

| Funcionalidade | Estado | Evidência |
|---|---|---|
| Envio de pergunta ao back-end e exibição da resposta | Implementado | `src/App.js` — `handleSubmit` |
| Histórico da conversa na tela | Implementado | `src/App.js` — estado `history` |
| Indicador de carregamento | Implementado | `src/App.js` — estado `loading` |
| Seletor de temas (DaisyUI) | Implementado | `src/App.js` — inputs `theme-controller` |
| Respostas geradas por IA | Parcial | depende do back-end, que **não está neste repositório** |
| Back-end Java/Spring | Planejado neste repo | não incluído; sem link público disponível |
| Componentização | Planejado | toda a interface está em `src/App.js`; não há pasta `components/` |
| Persistência da conversa | Planejado | o histórico vive em memória e some ao recarregar a página |
| Testes | Planejado | há dependências de teste, mas nenhum arquivo de teste foi escrito |

**Legenda** — *Implementado*: funciona ponta a ponta. *Parcial*: funciona com limitações declaradas. *Planejado*: não implementado.

## Tecnologias

- **React 18** com Create React App
- **Tailwind CSS 3** e **DaisyUI** — estilos e temas
- **Axios** — requisições HTTP ao back-end

## Como rodar

Pré-requisitos: Node.js e npm. Não é necessária chave de API.

```bash
git clone https://github.com/enascentedev/React-chatGpt-project-1.git
cd React-chatGpt-project-1
npm install
npm start
```

A aplicação abre em `http://localhost:3000`.

**Importante:** sem um back-end respondendo em `http://localhost:8080/pergunta`, a interface carrega normalmente, mas o envio de perguntas falha — o erro aparece no console do navegador. O back-end Java correspondente não está publicado; para testar ponta a ponta é preciso apontar a chamada em `src/App.js` para um serviço próprio.

## Limitações conhecidas

- Sem back-end público, a demonstração funcional depende de um serviço local.
- A URL do back-end está fixa no código, sem configuração por ambiente.
- Sem testes automatizados e sem componentização.
- O histórico da conversa não é persistido.

## Licença

MIT — veja o arquivo [LICENSE](LICENSE).

## Contato

Emanuel Nascente — [emanuelnascente@gmail.com](mailto:emanuelnascente@gmail.com)
