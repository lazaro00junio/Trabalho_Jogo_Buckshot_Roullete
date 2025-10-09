# Roleta Russa --- Projeto Mobile

**Alunos:** Carlos Eduardo, Filipe Valadão, Lázaro Júnior, Matheus
Carvalho

------------------------------------------------------------------------

## Visão Geral

Roleta Russa é um jogo mobile de duelo tático entre um jogador humano e
um bot controlado por IA pré-programada. Cada jogador começa com **3
vidas**; a cada tiro recebido perde-se uma vida. O objetivo é sobreviver
e derrotar o adversário. A arma simulada é uma espingarda com **10
cartuchos**; antes de cada rodada, um número aleatório de projéteis
letais e festim é distribuído. O jogador é informado apenas da
**quantidade** de projéteis letais, não das suas posições.

O jogo inspira-se em uma versão simplificada do game *Buckshot
Roulette*, priorizando partidas rápidas, tensas e estratégicas.

------------------------------------------------------------------------

## Mecânicas de Jogo

-   **Vidas:** 3 por jogador (jogador humano e bot). O jogo termina
    quando um dos lados perde todas as vidas.
-   **Arma:** espingarda com capacidade para 10 cartuchos.
-   **Cartuchos:** cada rodada tem uma combinação aleatória de cartuchos
    letais e festim. O jogador só vê a quantidade total de letais.
-   **Turnos:** jogador e bot alternam turnos. Em cada turno, pode-se
    escolher atirar em si mesmo ou no adversário.
-   **Consequências:** se o cartucho for letal, quem for alvejado perde
    uma vida; se for festim, não há dano.
-   **IA do Bot:** toma decisões estratégicas com base em probabilidade
    e no estado do jogo, buscando equilíbrio entre desafio e justiça.

------------------------------------------------------------------------

## Requisitos Funcionais

1.  Tela de menu inicial com botões: **Jogar**, **Tutorial**,
    **Configurações**, **Estatísticas**.
2.  Início de partida que determina aleatoriamente a quantidade e
    posição de cartuchos letais (algoritmo justo e auditável).
3.  Exibição clara de vidas restantes de cada jogador.
4.  Sistema de turnos com opções de ação (atirar em si / atirar no
    adversário).
5.  Feedback visual e sonoro para cada ação (tiro, recarga, acerto,
    falha).
6.  Tela de resultado com estatísticas (vencedor, número de rodadas,
    acertos, erros).
7.  Tutorial explicativo e informativo sobre mecânicas.
8.  Opção de reiniciar partida e persistência local de estatísticas
    (opcionalmente sincronizável com backend).

------------------------------------------------------------------------

## Requisitos Não-Funcionais

-   **Plataforma alvo:** Android (preferencial) / iOS (opcional). Uso de
    motor leve (ex: Unity, Godot ou híbrido com React Native + Canvas)
    dependendo da equipe.
-   **Desempenho:** 60 FPS (alvo) em dispositivos médios; transições e
    animações suaves.
-   **Acessibilidade:** legendas, controles simples e cores de alto
    contraste.
-   **Segurança:** sem conteúdo que incite autolesão na interface --- o
    tema é abstrato e fictício; considerar mensagens e aviso de conteúdo
    sensível.

------------------------------------------------------------------------

## Arquitetura sugerida

-   **Frontend (mobile):** Unity (C#) ou React Native (JS/TS) com canvas
    para animações; componente de UI separado da lógica de jogo.
-   **IA:** módulo local com regras probabilísticas + pequeno
    Estado/Histórico de ações do jogador.
-   **Persistência:** arquivo local (SQLite/JSON) para estatísticas e
    configurações.
-   **Assets:** pastas organizadas para imagens (sprites), sons
    (efeitos), JSON de configuração e protótipos de tela.

------------------------------------------------------------------------

## Estrutura de Pastas (sugestão)

    /project-root
      /assets
        /images
        /sounds
        /ui
      /src
        /game
          GameController.*
          ShotManager.*
          BotAI.*
        /ui
          Menu.*
          HUD.*
          Results.*
      /docs
        tutorial.md
        design.md
      /build

------------------------------------------------------------------------

## Algoritmo Aleatório de Cartuchos (exemplo)

1.  Definir N = 10 (capacidade do tambor).
2.  Escolher `k` = número de cartuchos letais (valor aleatório dentro de
    um intervalo definido pela jogabilidade).
3.  Distribuir `k` posições aleatórias entre 0 e 9 (sem repetição).
4.  Informar ao jogador apenas o valor `k` no início da rodada.

Observação: para testes e balanceamento, permitir modo determinístico
com seed definida.

------------------------------------------------------------------------

## IA do Bot (diretrizes)

-   Modelo baseado em regras simples: avaliar risco atual (vidas
    próprias vs. adversário), histórico de disparos e probabilidade de
    encontrar cartucho letal na posição atual.
-   Estratégias possíveis: conservadora (prefere atirar no adversário
    quando vantagem), suicida (arrisca atirar em si mesmo para forçar
    probabilidades) e aleatória controlada.
-   Ajustar dificuldade variando a propensão a assumir risco e o peso do
    histórico do jogador.

------------------------------------------------------------------------

## Interface e UX

-   Indicadores de vida com ícones claros.
-   Animações curtas ao disparo (curto recoil, flash e som) e animação
    específica para cartucho letal.
-   Feedback tátil (vibração) em dispositivos que suportam.

------------------------------------------------------------------------

## Protótipo de Telas (itens a implementar)

-   Menu Inicial
-   Tela de Preparação da Rodada (exibe `k` cartuchos letais)
-   HUD de Partida (vidas, botão de ação, confirmação de escolha)
-   Tela de Resultado/Estatísticas
-   Tela de Tutorial

------------------------------------------------------------------------

## Testes e Validação

-   Testes unitários para a lógica de sorteio e contagem de vidas.
-   Testes de integração para troca de turnos e persistência de
    estatísticas.
-   Playtests com usuários para ajustar `k` médio e comportamento do
    bot.

------------------------------------------------------------------------

## Recursos e Assets necessários

-   Sprites para personagens e arma.
-   Sons: tiro (duas versões: festim e letal), recarga, vitória,
    derrota.
-   Ícones e fontes para UI.
-   JSONs de configuração para balanceamento (ex.: frequência média de
    cartuchos letais por nível de dificuldade).

------------------------------------------------------------------------

## Tarefas / Roadmap (exemplo)

1.  Protótipo mínimo jogável (MVP): lógica de rodada, UI básica, IA
    simples. (Sprint 1)
2.  Implementar sons e animações. (Sprint 2)
3.  Melhorar IA e adicionar níveis de dificuldade. (Sprint 3)
4.  Testes e polish: acessibilidade, otimização, correções de bugs.
    (Sprint 4)

------------------------------------------------------------------------

## Equipe / Contato

-   **Carlos Eduardo** --- 
-   **Filipe Valadão** --- 
-   **Lázaro Júnior** --- 
-   **Matheus Carvalho** ---

------------------------------------------------------------------------

## Observações sobre conteúdo sensível

O tema do jogo remete a um conceito violento (roleta russa).
Recomenda-se tornar o conteúdo claramente fictício e estilizado,
evitando representações realistas ou que glamurizem violência. Adicionar
aviso de conteúdo e, se for disponibilizar publicamente, cumprir
políticas de lojas de aplicativos.

------------------------------------------------------------------------


