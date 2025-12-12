## Desafios MicroFrontend

* Conflitos de mesclagem: Com várias equipes trabalhando na mesma base de código, os conflitos de mesclagem se tornam mais frequentes, retardando o desenvolvimento e aumentando o risco de erros.
* Diferentes escopos e regras de negócios: Diferentes partes de um aplicativo podem ter requisitos distintos, tornando difícil manter a consistência em toda a base de código.
* Ciclos de desenvolvimento e implantação mais lentos: À medida que o aplicativo cresce, a construção, o teste e a implantação de todo o aplicativo se tornam mais demorados e arriscados.

### Pros

* Pacotes Separados: Cada zona (aplicativo) tem seu próprio pacote JavaScript, CSS e outros ativos. Eles não são automaticamente compartilhados ou otimizados entre zonas.
* Carregamento Independente: Quando um usuário navega de uma zona para outra, os recursos para a nova zona são carregados de forma independente. Isso significa que bibliotecas comuns (como React) podem ser baixadas novamente se forem usadas em ambas as zonas.
* Sem Desduplicação Automática: Ao contrário de um único aplicativo Next.js, Multi Zones não desduplica automaticamente dependências compartilhadas entre zonas. Cada zona carrega seus recursos de forma independente.
* Otimização Específica da Zona: A otimização de desempenho acontece dentro de cada zona de forma independente. Isso inclui recursos como divisão de código e carregamento lento, mas essas otimizações não se estendem pelos limites da zona.
* Integracao facil
* Deploy separado
* Build separado
* Não existe compartilhamento de componentes automaticamente
* Projeto isolados, consumidor por um `consumidor container`, que recebe os enderecos dos MFEs, e orquestra eles em uma unica aplicacao via `rewrites()` dentro do `next.config`

### Contras

* Não existe compartilhamento de componentes automaticamente
* Hard navigation ao trocar de zona
* Gerenciamento de estado compartilhado somente com alternativas externas como:
  * APIs dedicadas;
    * Problemas de latencia e outros;
  * Event Bus externo
    * Varios problemas
  * Pub/Sub Client Side

## Motivacoes

* Suporte a Module Federation descontinuado (https://module-federation.io/practice/frameworks/next/index.html)

### Outras abordagens

* **Edge Side Composition**
  * A página final **é montada por pedaços** vindos de diferentes microfrontends.
  * A página final **é montada por pedaços** vindos de diferentes microfrontends.
  * A composição ocorre **no edge**, não no client.
* **Compiler Bundlers**
  * Ex.: Webpack 5
* **Adept Remote Resources**
  * O container não pega trechos da página, ele **entrega o controle da rota inteira** para outro projeto Next
  * A composição acontece **no servidor** via roteamento
* **Composable App**
