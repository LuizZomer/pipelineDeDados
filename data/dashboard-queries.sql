-- =====================================================
-- DASHBOARD DE ANÁLISES DE JOGOS - ONE BIG TABLE
-- Pipeline de Dados - ED SATC
-- Tabela: pipeline_gold.obt_games_master
-- =====================================================

-- =====================================================
-- GRÁFICO 1: DISTRIBUIÇÃO DE JOGOS POR CATEGORIA DE VENDAS
-- Tipo: Gráfico de Barras/Pizza
-- =====================================================
SELECT 
    sales_category,
    COUNT(*) as total_jogos,
    ROUND(COUNT() * 100.0 / SUM(COUNT()) OVER (), 2) as percentual
FROM pipeline_gold.obt_games_master
WHERE sales_category IS NOT NULL
GROUP BY sales_category
ORDER BY total_jogos DESC;

-- =====================================================
-- GRÁFICO 2: TOP 10 JOGOS POR VENDAS
-- Tipo: Gráfico de Barras Horizontais
-- =====================================================
SELECT 
    game_title,
    total_purchases,
    avg_rating,
    developer_name,
    ROUND(revenue_estimate, 2) as receita_estimada
FROM pipeline_gold.obt_games_master
WHERE total_purchases > 0
ORDER BY total_purchases DESC
LIMIT 10;

-- =====================================================
-- GRÁFICO 3: CORRELAÇÃO ENTRE PREÇO E AVALIAÇÃO
-- Tipo: Gráfico de Dispersão (Scatter Plot)
-- =====================================================
SELECT 
    price_category,
    ROUND(AVG(avg_rating), 2) as avaliacao_media,
    COUNT(*) as total_jogos,
    ROUND(AVG(game_price), 2) as preco_medio,
    ROUND(AVG(total_purchases), 0) as vendas_medias
FROM pipeline_gold.obt_games_master
WHERE avg_rating > 0 AND game_price > 0
GROUP BY price_category
ORDER BY preco_medio;

-- =====================================================
-- GRÁFICO 4: PERFORMANCE DOS DESENVOLVEDORES
-- Tipo: Gráfico de Barras Agrupadas
-- =====================================================
SELECT 
    developer_name,
    COUNT(*) as total_jogos,
    ROUND(AVG(avg_rating), 2) as avaliacao_media,
    SUM(total_purchases) as total_vendas,
    ROUND(SUM(revenue_estimate), 2) as receita_total,
    ROUND(AVG(popularity_score), 2) as score_popularidade
FROM pipeline_gold.obt_games_master
WHERE developer_name != 'Unknown' 
  AND developer_name IS NOT NULL
GROUP BY developer_name
HAVING COUNT(*) >= 2  -- Apenas desenvolvedores com 2+ jogos
ORDER BY receita_total DESC
LIMIT 15;

-- =====================================================
-- GRÁFICO 5: MÉTRICAS DE ENGAGAMENTO E CONVERSÃO
-- Tipo: Gráfico de Indicadores (KPIs) + Gráfico de Linhas
-- =====================================================
SELECT 
    rating_category,
    COUNT(*) as total_jogos,
    ROUND(AVG(conversion_rate) * 100, 2) as taxa_conversao_media,
    ROUND(AVG(review_participation_rate) * 100, 2) as taxa_participacao_reviews,
    ROUND(AVG(achievement_completion_rate) * 100, 2) as taxa_conclusao_conquistas,
    ROUND(AVG(popularity_score), 2) as score_popularidade_medio
FROM pipeline_gold.obt_games_master
WHERE rating_category != 'Not Rated'
GROUP BY rating_category
ORDER BY score_popularidade_medio DESC;

-- =====================================================
-- CONSULTAS ADICIONAIS PARA INSIGHTS
-- =====================================================

-- KPI 1: Total de Receita Estimada
SELECT 
    ROUND(SUM(revenue_estimate), 2) as receita_total_estimada,
    COUNT(*) as total_jogos,
    ROUND(AVG(game_price), 2) as preco_medio,
    ROUND(AVG(avg_rating), 2) as avaliacao_media_geral
FROM pipeline_gold.obt_games_master
WHERE game_price > 0;

-- KPI 2: Jogos Mais Populares (Top 5)
SELECT 
    game_title,
    popularity_score,
    sales_rank,
    rating_rank,
    total_purchases,
    avg_rating
FROM pipeline_gold.obt_games_master
ORDER BY popularity_score DESC
LIMIT 5;

-- KPI 3: Análise de Qualidade dos Dados
SELECT 
    ROUND(AVG(data_quality_score), 2) as qualidade_dados_media,
    COUNT(CASE WHEN data_quality_score = 5 THEN 1 END) as jogos_completos,
    COUNT(CASE WHEN data_quality_score < 3 THEN 1 END) as jogos_incompletos
FROM pipeline_gold.obt_games_master;

-- =====================================================
-- CONSULTAS PARA FILTROS DINÂMICOS
-- =====================================================

-- Lista de Desenvolvedores para Filtro
SELECT DISTINCT 
    developer_name,
    COUNT(*) as total_jogos
FROM pipeline_gold.obt_games_master
WHERE developer_name != 'Unknown' 
  AND developer_name IS NOT NULL
GROUP BY developer_name
ORDER BY total_jogos DESC;

-- Lista de Categorias de Preço para Filtro
SELECT DISTINCT 
    price_category,
    COUNT(*) as total_jogos
FROM pipeline_gold.obt_games_master
WHERE price_category IS NOT NULL
GROUP BY price_category
ORDER BY total_jogos DESC;

-- Lista de Categorias de Avaliação para Filtro
SELECT DISTINCT 
    rating_category,
    COUNT(*) as total_jogos
FROM pipeline_gold.obt_games_master
WHERE rating_category IS NOT NULL
GROUP BY rating_category
ORDER BY total_jogos DESC;