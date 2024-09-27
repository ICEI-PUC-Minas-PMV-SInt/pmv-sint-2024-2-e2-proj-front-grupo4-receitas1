# Arquitetura da Solução

O projeto 'Sabor do Momento' é uma aplicação web estática desenvolvida com HTML e CSS, projetada para oferecer uma experiência de busca de receitas simplificada e eficiente. Os dados são armazenados e gerenciados diretamente em uma página do GitHub, aproveitando o GitHub Pages para hospedar a plataforma. Isso permite uma infraestrutura leve, de fácil manutenção, com controle de versão integrado e atualizações automáticas. A plataforma visa ser expansível, com melhorias contínuas para atender às necessidades dos usuários.

## Diagrama de Classes

O diagrama de classes ilustra graficamente a estrutura do software, mostrando como as classes estarão interligadas e servindo de modelo para os objetos que serão instanciados e executados na memória. Neste projeto, a arquitetura prevê o uso de uma API para facilitar a comunicação entre diferentes componentes, e o código será inicialmente hospedado no GitHub, com a possibilidade de ajustes futuros conforme necessário.

![image](https://github.com/user-attachments/assets/8f891611-ecb8-4c21-82bb-82805180d70e)



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
