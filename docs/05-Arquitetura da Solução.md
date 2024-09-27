# Arquitetura da Solução

O projeto 'Sabor do Momento' é um site estático feito com HTML e CSS para facilitar a busca por receitas. Os dados são armazenados no GitHub, que também hospeda o site, permitindo fácil manutenção e atualizações automáticas. A estrutura é leve, com possibilidade de expansão. No futuro, uma API será usada para conectar diferentes partes do sistema de forma mais eficiente.

## Diagrama de Classes

O diagrama de classes mostra, de forma visual, como as partes do software estão conectadas. Ele serve como um modelo para os objetos que serão criados na memória, ajudando a organizar o sistema e a facilitar futuras modificações.

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
