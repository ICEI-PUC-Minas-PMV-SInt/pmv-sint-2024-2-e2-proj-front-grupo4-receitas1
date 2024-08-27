# Especificação do Projeto



## Personas


<table>
<tr>
   <th>Foto</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  
</tr
        <tr>
    <td><title="João Marcos" <a href="https://ibb.co/yskznd2"><img src="https://i.ibb.co/yskznd2/avatar-genf4e04ee775f79805b2a90968a3d76e9a-H.jpg" alt="avatar-genf4e04ee775f79805b2a90968a3d76e9a-H" border="0"</a></td>
    <td>João Marcos </td>
    <td>
      <ul>
        <li>45 anos</li>
        <li>Motorista de Uber</li>
        <li>Mora em SP junto com seus dois filhos </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Uber</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>ifood</li>
         </ul>
    </td>
    <td>
      <ul>
        <li>Dar estudo aos filhos</li>
        <li>Ter um financeiro estável</li>
        <li>Dar boas experiências aos filhos</li>
      </ul>
    </td>
    <td>
      <li>Perdeu a esposa</li>
      <li>Tem dificuldade em sustentar os filhos</li>
    </td>
    <td>
      <li>Cozinhar para filhos e amigos</li>
      <li>Conhecer lugares novos</li>
       <li>Perdeu a esposa tem 2 anos, então passou a cuidar dos filhos sozinho, lutando para dar a eles o melhor. </li>
          </td>
</tr
        <tr>
    <td><title="Ana Julia" <a href="https://ibb.co/s567CPT"><img src="https://i.ibb.co/s567CPT/avatar-gen69b2e14520c5abb7209c48dfb8a38542.jpg" alt="avatar-gen69b2e14520c5abb7209c48dfb8a38542" border="0"></a></td>
    <td>Ana Julia </td>
    <td>
      <ul>
        <li>28 anos</li>
        <li>Casada</li>
        <li>1 filho de 10 anos
        <li>Trabalha em home office </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Ifood</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Facebook</li>
         </ul>
    </td>
    <td>
      <ul>
        <li>Ter mais tempo para passar com o filho e marido</li>
        <li>Dar o melhor a seu filho</li>
      </ul>
    </td>
    <td>
      <li>Dificuldade em organizar uma rotina em casa</li>
    </td>
    <td>
      <li>Viajar, conhecer novas culturas</li>
      <li>Testar pratos novos na cozinha</li>
       <li>Começou a trabalhar de casa para poder ficar mais perto do filho, porém as demandas estão altas. </li>
          </td>
          </tr
        <tr>
    <td><title="Maria Carla" <a href="https://ibb.co/BB1qRt7"><img src="https://i.ibb.co/BB1qRt7/avatar-genbb474f62012e0c868f9fcaed2abbe140.jpg" alt="avatar-genbb474f62012e0c868f9fcaed2abbe140" border="0"></a></td>
    <td>Maria Carla </td>
    <td>
      <ul>
        <li>35 anos</li>
        <li>Casada</li>
        <li>Mãe de 2 meninas</li>
        <li>Trabalha como Assistente Admnistrativo</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>WhatsApp</li>
        <li>Shopee</li>
        <li>Ifood</li>
         </ul>
    </td>
    <td>
      <ul>
        <li>Passar tempo com as filhas </li>
        <li>Ter uma vida estável</li>
      </ul>
    </td>
    <td>
      <li>Não conseguiu fazer graduação</li>
    </td>
    <td>
      <li>Conhecer pessoas e lugares novos</li>
      <li>Cozinhar para a família</li>
       <li>Teve as filhas muito cedo e hoje trabalha para poder dar um futuro melhor para as filhas. </li>
          </td>
          </tr>
  </table>

## História de Usuário

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO `PERSONA`   | QUERO/PRECISO `O QUE` |PARA ... `POR QUE`             |
|--------------------|---------------------------|----------------------------------|
| Ana Julia | ter minhas receitas de culinária em um único lugar | deixar de me sentir perdida na hora de procurar uma receita |
| Ana Julia | ver receitas de acordo com meu gosto e preferências | economizar tempo procurando receitas que satisfaçam meus gostos e restrições |
| Maria Carla | saber o que outras pessoas estão achando daquela receita | matar curiosidade em saber o que outras pessoas acharam da receita, se tiveram opinião em comum, ver repercussão |
| João Marcos | ver sugestões de receitas de acordo com meu horário atual | sair do excesso de informação, ter mais praticidade e economizar tempo |
| Maria Carla | salvar minhas receitas favoritas | poder encontrar rapidamente minhas receitas favoritas |
| Maria Carla | ver receitas tanto no computador quanto no celular | quando tiver na casa dos meus parentes e quiser mostrar uma receita para eles, ou para prepararmos juntos |





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

O diagrama de casos de uso do site "Sabor do Momento" ilustra as principais funcionalidades disponíveis para os usuários.

![DIAGRAMA UML SABOR DO MOMENTO](https://github.com/user-attachments/assets/49071ecb-7a58-49a4-a4c4-b3badc0fe612)

