# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![image](https://github.com/user-attachments/assets/8f891611-ecb8-4c21-82bb-82805180d70e)


As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
 
Para mais informações, consulte o microfundamento "Modelagem de Dados".

## Tecnologias Utilizadas

### Descrição do Fluxo de Interação

1. **Usuário Interage com a Interface (Frontend):**
   - O usuário acessa o site de receitas hospedado no **GitHub Pages**.
   - A interface foi criada usando **React.js** com **HTML, CSS, e JavaScript** para montar os componentes (como receitas, filtros de pesquisa, comentários, etc.).

2. **Renderização do Protótipo (Frontend):**
   - O design e a experiência do usuário foram planejados no **Figma**.
   - O **React.js** renderiza o conteúdo dinâmico com base nas interações do usuário (por exemplo, busca por receitas, likes, ou comentários).

3. **Manipulação dos Dados (Backend Simulado):**
   - No frontend, os dados são manipulados diretamente, pois o site é estático e a hospedagem é no **GitHub Pages**.
   - Para simular interações de banco de dados (como o estado de curtidas ou salvar receitas), **JavaScript** e **React Hooks** podem ser utilizados para gerenciar estados e armazenar dados temporários no **localStorage**.

4. **Gerenciamento do Projeto:**
   - As tarefas do projeto estão organizadas no **Kanban do GitHub**.
   - A equipe se comunica usando **WhatsApp** e **Microsoft Teams**.

5. **Versionamento e Controle de Código:**
   - O código é versionado no **GitHub**, facilitando o desenvolvimento colaborativo e garantindo controle de versões.
   - O desenvolvimento acontece na **IDE Visual Studio Code**, onde são implementados o design responsivo e as funcionalidades.

6. **Exibição no Navegador (Frontend):**
   - Após a interação do usuário (por exemplo, uma busca por receitas), o sistema retorna uma resposta (lista de receitas ou detalhes de uma receita) diretamente no navegador, renderizado pelo **React.js**.


## Hospedagem

Atualmente, o site estático da plataforma de receitas foi desenvolvido utilizando HTML e CSS, e está hospedado no GitHub Pages. O site já está acessível publicamente. Na próxima etapa do projeto, será realizada a implementação do React.js para tornar a plataforma mais dinâmica e interativa, com novos recursos sendo adicionados.
