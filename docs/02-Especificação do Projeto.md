# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Identifique, em torno de, 5 personas. Para cada persona, lembre-se de descrever suas angústicas, frustrações e expectativas de vida relacionadas ao problema. Além disso, defina uma "aparência" para a persona. Para isso, você poderá utilizar sites como [https://this-person-does-not-exist.com/pt#google_vignette](https://this-person-does-not-exist.com/pt) ou https://thispersondoesnotexist.com/ 

Utilize também como referência o exemplo abaixo:

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/IntApplicationProject-Template/blob/main/docs/img/AnaClara1.png" alt="Persona1"/>

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> 
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana Clara  | Uma forma de identificar se uma agência é realmente confiável           | Me sentir mais segura ao contratar seus serviços               |
|Ana Clara       | Ter um mecanismo eficiente e rápido de comunicação                 | Que eu possa sanar todas as minhas dúvidas rapidamente |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve ter uma função do usuário cadastrado adicionar uma nova receita à plataforma| ALTA | 
|RF-002| O sistema deve ter uma função de adicionar foto e descrição na publicação de receitas    | ALTA |
|RF-003| O sistema deve ter um sistema de aprovação de publicações de receita pelos usuários, usando um algoritmo para identificar se a publicação tem um formato de receita ou se o usuário criou uma publicação fora de contexto | ALTA |
|RF-004|O sistema deve permitir que usuários tenham um filtro de pesquisa, para pesquisar cada receita por nomes ou categorias| ALTA |
|RF-005|O sistema deve possibilitar um sistema de interação entre usuários, com compartilhamento, comentários e feedbacks para as receitas | MÉDIA |
|RF-006| O sistema deve possibilitar o compartilhamento externo das receitas através de um link | MÉDIA |
|RF-007| O sistema deve conter um atalho de compartilhamento direto no Facebook ou WhatsApp | ALTA |
|RF-008| O sistema deve ter uma função de salvar as receitas  | ALTA |
|RF-009| O sistema deve ter um algoritimo de recomendação com base no que cada cliente pesquisa com frequência | MÉDIA |
|RF-010| O sistema deve conter um mecanismo de tags, para facilitar as buscas | BAIXA|
|RF-011| O sistema deve ter uma pré apresentação da receita passando pelo feed | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|  O sistema deve ser capaz de carregar páginas de receitas em menos de 3 segundos, para garantir uma experiência de usuário rápida.  |ALTA| 
|RNF-02|  O sistema deve suportar simultaneamente pelo menos 1000 usuários ativos sem distribuição significativa no desempenho.  |MÍDIA| 
|RNF-03|  O sistema deve ser facilmente escalável para acomodar um aumento de 50% no número de usuários sem a necessidade de alterações específicas na infraestrutura.  |MÍDIA|
|RNF-04|  O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).  |ALTA|
|RNF-05|  O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.  |ALTA|




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RF-01|O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 08/12/2024.|
|RF-02|O aplicativo deve se restringir às tecnologias da Web no Front-end|
|RF-03|A equipe não pode subcontratar o desenvolvimento do trabalho.|
|RF-04|A plataforma permitirá cadastro apenas de pessoas do Brasil.|
|RF-05|O idioma da plataforma será apenas PT-BR.|
|RF-06|O projeto deverá ser realizado somente com ferramentas gratuitas.|



## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
