// const imgs = document.getElementById("img")
// const img = document.querySelectorAll("#img img")

// let idx = 0;

// function Carrossel() {
//     idx++;
//     if (idx > img.length - 1) {
//         idx = 0;
//     }

//     imgs.style.transform = `translateX(${-idx * 200}px)`
// }
// setInterval(Carrossel, 2000)


// const imgs2 = document.getElementById("img2");
// const img2 = document.querySelectorAll("#img2 img");

// let idx2 = 0;

// function Carrossel2() {
//     idx2++;
//     if (idx2 > img2.length - 1) {
//         idx2 = 0;
//     }

//     imgs2.style.transform = `translateX(${-idx2 * 200}px)`;
// }
// setInterval(Carrossel2, 2000);

const projetos = [
    { imgSrc: '../IMG/2.png', github: '#', site: '#' },
    { imgSrc: '../IMG/3.png', github: '#', site: '#' },
    { imgSrc: '../IMG/1.png', github: '#', site: '#' },
    { imgSrc: '../IMG/COPIAdacopiaRA.jpg', github: '#', site: '#' },
    
];

const Trabalhos = document.querySelector('.Trabalhos');

projetos.forEach(projeto => {
    // Cria a div.filho
    const Items = document.createElement('div');
    Items.classList.add('Items', 'border', 'TamanhoImg');
    
    // Cria a imagem
    const img = document.createElement('img');
    img.src = projeto.imgSrc;
    img.alt = '';
    
    // Cria os links
    const gitHubLink = document.createElement('a');
    gitHubLink.href = projeto.github;
    gitHubLink.textContent = 'git-hub';
    
    const siteLink = document.createElement('a');
    siteLink.href = projeto.site;
    siteLink.textContent = 'visitar site';
    
    // Adiciona a imagem e os links dentro da div.filho
        Items.appendChild(img);
        Items.appendChild(gitHubLink);
        Items.appendChild(siteLink);
    
    // Adiciona a div.filho dentro da div.pai
    Trabalhos.appendChild(Items);
});

const ArrayDeItems = [
    { imgSrc: '../IMG/HTML.png', h3: 'HTML' },
    { imgSrc: '../IMG/CSS.png', h3: 'CSS' },
    { imgSrc: '../IMG/JS.png', h3: 'JAVASCRIPT' },
    { imgSrc: '../IMG/GIT.png', h3: 'GIT GIT-HUB' },
    { imgSrc: '../IMG/SKILLS.png', h3: 'COMUNICAÇÃO E TRABALHOS EM EQUIPE' },
    { imgSrc: '../IMG/FORMADO.png', h3: 'FORMADO EM DESENVOLVIMENTO WEB' },
    { imgSrc: '../IMG/ESPANHOL.png', h3: 'ESPANHOL INTERMEDIARIO' },
    { imgSrc: '../IMG/WORD.png', h3: 'WORD' },
    { imgSrc: '../IMG/EXCEL.png', h3: 'EXCEL' },
    { imgSrc: '../IMG/PPTX.png', h3: 'POWERPOINT' },
    { imgSrc: '../IMG/MONTAGEM.png', h3: 'MONTAGEM E MANUTENÇÃO PREVENTIVA DE COMPUTADORES' },
    { imgSrc: '../IMG/REDES.png', h3: 'INSTALAÇÃO, CONFIGURAÇÃO E GERENCIAMENTO DO WINDOWS E REDES' },
    { imgSrc: '../IMG/FORMADO02.png', h3: 'FORMADO EM SUPORTE TI' },
    { imgSrc: '../IMG/ESPANHOL.png', h3: 'INGLÊS BÁSICO' }
];

const competencias = document.querySelector('.competencias');

ArrayDeItems.forEach(TESTE => {
    // Cria a div.filho
    const ItemsCompetencias = document.createElement('div');
    ItemsCompetencias.classList.add('ItemsCompetencias');
    
    // Cria a imagem
    const img = document.createElement('img');
    img.src = TESTE.imgSrc;
    img.alt = '';
    
    // Cria os links
    const TITULOS = document.createElement('h3');
    TITULOS.textContent = TESTE.h3;
    
    
    
    // Adiciona a imagem e os links dentro da div.filho
    ItemsCompetencias.appendChild(img);
    ItemsCompetencias.appendChild(TITULOS);
        
    
    // Adiciona a div.filho dentro da div.pai
    competencias.appendChild(ItemsCompetencias);
});