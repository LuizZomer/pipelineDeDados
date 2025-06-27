# Sobre o Projeto

Este projeto foi desenvolvido como atividade prática da disciplina de **Engenharia de Dados** da **Faculdade SATC**.

---

## 👨‍🏫 Professor Responsável

- **Jorge Silva**

---

## 👥 Alunos Envolvidos

- Luiz Felipe Zomer  
- Luiz Filipe Linhares  
- Gabriel Tassi Frello  
- Gabriel Boelter  
- Thiago Almeida  
- Willian Minatto  

---

## 🛠 Tecnologias Utilizadas

- PySpark  
- Delta Lake  
- Databricks  
- Azure Data Lake Storage (ADLS Gen2)  
- Git / GitHub  
- MkDocs  

---

## 📖 Descrição Geral do Projeto

Este projeto consiste em um sistema de gestão e análise para uma plataforma de jogos digitais, construído sobre um banco de dados relacional SQL Server, modelado utilizando o ORM **Prisma**.

O banco de dados contempla as principais entidades e relacionamentos que estruturam o ecossistema de jogos digitais, possibilitando uma gestão completa e análises detalhadas dos dados.

---

## 🗂️ Modelo de Dados e Entidades Principais

### Usuários

- **User**: representa os usuários da plataforma, armazenando informações pessoais e mantendo relações com avaliações, compras e conquistas desbloqueadas.

### Jogos e Conteúdos

- **Game**: tabela central contendo dados dos jogos, como nome, descrição, preço e data de lançamento. Relaciona-se com desenvolvedores, avaliações, compras, conquistas, DLCs, gêneros, plataformas e tags.  
- **Dlc**: conteúdos adicionais para jogos (Downloadable Content), com preço e datas de lançamento.

### Desenvolvimento e Categorias

- **Developer**: desenvolvedores responsáveis pelos jogos, com detalhes como país e data de fundação.  
- **Platform**: plataformas onde os jogos estão disponíveis (ex: PC, consoles).  
- **Gender**: gêneros dos jogos (ex: ação, aventura).  
- **Tag**: etiquetas para categorizar e facilitar a busca e filtragem de jogos.

---

## ⭐ Funcionalidades Relacionadas a Usuários e Jogos

- **Review**: avaliações feitas pelos usuários, contendo notas, comentários e data da avaliação.  
- **Purchase**: registro das compras realizadas pelos usuários, incluindo preço pago e data da compra.  
- **Achievement**: conquistas disponíveis nos jogos, com nome, descrição e pontos.  
- **UnlockedAchievement**: registro das conquistas desbloqueadas por usuários, com a data em que foram liberadas.

---

## 🔄 Relacionamentos Muitos-para-Muitos

- **GameGender**: relaciona jogos aos seus gêneros.  
- **GamePlatform**: associa jogos às plataformas disponíveis.  
- **GameTag**: conecta jogos às tags definidas para categorização.

---

## 🚀 Benefícios da Estrutura

Esta modelagem robusta e detalhada permite:

- Cadastro e gerenciamento completo dos usuários da plataforma.  
- Consulta e filtragem avançada de jogos por gênero, plataforma e tags.  
- Registro e análise precisa de avaliações e histórico de compras.  
- Gestão eficiente do progresso dos usuários via conquistas e conteúdos extras.  
- Extensão e manutenção facilitadas com o uso de relacionamentos claros e normalizados. 
