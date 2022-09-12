const filmes = [
    {
      id: 1,
      nome: "O Massacre da Serra Elétrica: O Retorno de Leatherface",
      categoria: "Terror",
      sinopse:
        "Nesta sequência, um grupo de jovens decide dar vida nova a uma cidade fantasma no Texas, mas acaba se deparando com Leatherface, o famoso m...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(23).png",
    },
    {
      id: 2,
      nome: "Pânico (2022)",
      categoria: "Terror",
      sinopse:
        "Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(22).png",
    },
    {
      id: 3,
      nome: "A Filha do Rei",
      categoria: "Romance",
      sinopse:
        "Em busca de imortalidade, o rei Luís XIV rouba a força vital de uma sereia, mas tudo se complica quando sua filha ilegítima cria laços c...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(1).png",
    },
    {
      id: 4,
      nome: "Hypnotic",
      categoria: "Terror",
      sinopse:
        "Sentindo-se bloqueada na vida pessoal e profissional, Jenn busca ajuda na hipnoterapia, mas descobre que se envolveu em um jogo mental mortífero.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(19).png",
    },
    {
      id: 5,
      nome: "4 metà",
      categoria: "Romance",
      sinopse:
        "Nesta comédia romântica que desafia o conceito de almas gêmeas, histórias paralelas mostram quatro amigos (dois homens e duas mulheres) ...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(2).png",
    },
    {
      id: 6,
      nome: "Ghostbusters - Mais Além",
      categoria: "Comédia",
      sinopse:
        "Uma mãe solteira resolve se mudar para uma pequena cidade do interior com seus filhos, e acaba descobrindo uma conexão com os Caça-Fantas...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(3).png",
    },
    {
      id: 7,
      nome: "Duna",
      categoria: "Drama",
      sinopse:
        "Em um futuro distante, planetas são comandados por casas nobres que fazem parte de um império feudal intergalático. Paul Atreides é um jovem homem cuja família toma controle do planeta deserto...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(20).png",
    },
    {
      id: 8,
      nome: "Matrix Resurrections",
      categoria: "Ação",
      sinopse:
        "quarta parcela da franquia Matrix. Trama ainda desconhecida....",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(6).png",
    },
    {
      id: 9,
      nome: "Halloween Kills: O Terror Continua",
      categoria: "Terror",
      sinopse:
        "Minutos depois de Laurie Strode, sua filha Karen e sua neta Allyson deixarem o assassino mascarado Michael Myers enjaulado e queimando no porão de Laurie",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(21).png",
    },
    {
      id: 10,
      nome: "Imperdoável",
      categoria: "Drama",
      sinopse:
        "Após cumprir pena por um crime violento, Ruth volta ao convívio na sociedade, que se recusa a perdoar seu passado. Discriminada no lugar q...",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(8).png",
    },
    {
      id: 11,
      nome: "007: Sem Tempo para Morrer",
      categoria: "Ação",
      sinopse:
        "Bond deixou o serviço ativo e está desfrutando de uma vida tranquila na Jamaica. Sua paz é interrompida quando o seu velho amigo Felix Le..",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(10).png",
    },
    {
      id: 12,
      nome: "Não Olhe para Cima",
      categoria: "Comédia",
      sinopse:
        "Dois astrônomos descobrem um cometa mortal vindo em direção à Terra e partem em um tour midiático para alertar a humanidade. Só que ninguém parece dar muita bola.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(5).png",
    },
    {
      id: 13,
      nome: "Resident Evil: Bem-Vindo a Raccoon City ",
      categoria: "Ação",
      sinopse:
        "O que já foi um dia a casa da gigante farmacêutica em expansão Umbrella Corporation, Raccoon City, é agora uma cidade agonizante do meio-oeste.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(7).png",
    },
    {
      id: 14,
      nome: "O Último Duelo",
      categoria: "Ação",
      sinopse:
        "História sobre o duelo entre o cavaleiro Jean de Carrouges e o escudeiro Jaques Le Gris, acusado de ter violado a esposa do cavaleiro.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(9).png",
    },
    {
      id: 15,
      nome: "Ferida",
      categoria: "Drama",
      sinopse:
        "Uma ex-lutadora de MMA volta ao ringue para manter a custódia do filho e recomeçar sua carreira. Dirigido e estrelado por Halle Berry",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(12).png",
    },
    {
      id: 16,
      nome: "tick, tick...BOOM! ",
      categoria: "Drama",
      sinopse:
        "Prestes a fazer 30 anos, o compositor Jonathan Larson reluta para levar adiante seu sonho de escrever um grande musical.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(14).png",
    },
    {
      id: 17,
      nome: "Alerta Vermelho",
      categoria: "Comédia",
      sinopse:
        "No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(15).png",
    },
    {
      id: 18,
      nome: "Atividade Paranormal - Ente Próximo",
      categoria: "Terror",
      sinopse:
        "Margot, uma cineasta de documentários, dirige-se a uma comunidade Amish isolada na esperança de aprender sobre sua mãe perdida e seus parentes.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(17).png",
    },
    {
      id: 19,
      nome: "Army of Thieves",
      categoria: "Comédia",
      sinopse:
        "Nesta história que antecede Army of the Dead, uma mulher misteriosa convida o caixa de banco Dieter para roubar cofres superprotegidos na Europa.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(18).png",
    },
    {
      id: 20,
      nome: "Venom - Tempo de Carnificina",
      categoria: "Ação",
      sinopse:
        "O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.",
      url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(13).png",
    },
    {
        id: 21,
        nome: "Harry Potter: De Volta a Hogwarts",
        categoria: "",
        sinopse:
          "Harry Potter: De Volta a Hogwarts é um evento especial de 20 anos em comemoração ao lançamento de Harry Potter e a Pedra Filosofal (2001) e todos os outros filmes da franquia do bruxo. Daniel Radcliff, Emma Watson, Rupert Grint e muitos outros se reunem para discutir sobre o que se passou por trás das câmeras de gravação no estúdio. O elenco todo dos filmes foram chamados para falar sobre suas experiências, momentos marcantes, amizades com colegas atores, curiosidades e histórias que serão contadas ao público pela primeira vez e como a franquia do 'Menino que sobreviveu' marcou cada um deles desde crianças. Cenários do primeiro filme foram montados mais uma vez para que todos possam revisitar a escola de magia Howgwarts, a vila local Hogsmeade, a cabana de Hagrid e outros locais marcantes do primeiro filme, assim como os vilões mais amados dos filmes. ",
        url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(4).png",
      },
      {
        id: 22,
        nome: "Um Menino Chamado Natal",
        categoria: "",
        sinopse:
          "Para trazer esperança ao mundo, um garoto chamado Nikolas parte em uma aventura em busca da vila dos duendes. Ele e seu camundongo falante enfrentam perigos, inimigos e descobrem a magia do Natal.",
        url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(11).png",
      },
      {
        id: 23,
        nome: "Shang-Chi - A Lenda dos Dez Anéis",
        categoria: "Ação",
        sinopse:
          "Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado.",
        url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image%20(16).png",
      },
      {
        id: 24,
        nome: "King's Man - A Origem",
        categoria: "Ação",
        sinopse:
          "Um homem precisa correr contra o tempo para impedir que os piores tiranos e criminosos da história exterminem milhões de pessoas e destruam a humanidade.",
        url: "https://raw.githubusercontent.com/Kenzie-Academy-Brasil/lista-filmes-kenzie/main/assets/img/image.png",
      },
    
  ];
  