// const projetos = [
//     { imgSrc: 'IMG/2.png', github: 'https://github.com/GuiCastro1/Fluxus', site: 'https://guicastro1.github.io/Fluxus/', alt: 'Projeto 2' },
//     { imgSrc: 'IMG/3.png', github: 'https://github.com/GuiCastro1/Zendesk', site: 'https://guicastro1.github.io/Zendesk/', alt: 'Projeto 3' },
//     { imgSrc: 'IMG/1.png', github: 'https://github.com/davilimav/TCC-IOS', site: 'https://davilimav.github.io/TCC-IOS/', alt: 'Projeto 1' },
//     { imgSrc: 'IMG/COPIAdacopiaRA.jpg', github: '#', site: '#', alt: 'Projeto RA' },
// ];

// const Trabalhos = document.querySelector('.Trabalhos');

// projetos.forEach(projeto => {
//     // Cria a div.filho
//     const Items = document.createElement('div');
//     Items.classList.add('Items', 'border', 'TamanhoImg');

//     // Cria a imagem
//     const img = document.createElement('img');
//     img.src = projeto.imgSrc;
//     img.alt = projeto.alt;  // Atribui o texto alternativo

//     // Cria os links
//     const gitHubLink = document.createElement('a');
//     gitHubLink.href = projeto.github;
//     gitHubLink.textContent = 'git-hub';
//     gitHubLink.target = '_blank';

//     const siteLink = document.createElement('a');
//     siteLink.href = projeto.site;
//     siteLink.textContent = 'visitar site';
//     siteLink.target = '_blank'

//     // Adiciona a imagem e os links dentro da div.filho
//     Items.appendChild(img);
//     Items.appendChild(gitHubLink);
//     Items.appendChild(siteLink);

//     // Adiciona a div.filho dentro da div.pai
//     Trabalhos.appendChild(Items);
// });
const Trabalhos = document.querySelector('.Trabalhos');

// Carrega o JSON
fetch('JS/projetos.json')
    .then(response => response.json())
    .then(projetos => {
        projetos.forEach(projeto => {
            // Cria a div.filho
            const Items = document.createElement('span');
            Items.classList.add('Items', 'border', 'TamanhoImg');

            const titulo = document.createElement('h2');
            titulo.id="Titulo"
            titulo.textContent = projeto.h2;
            // Cria a imagem
            const img = document.createElement('img');
            img.src = projeto.imgSrc;
            img.alt = projeto.alt;  // Atribui o texto alternativo

            // Cria os links
            const gitHubLink = document.createElement('a');
            gitHubLink.href = projeto.github;
            gitHubLink.textContent = 'git-hub';
            gitHubLink.target = '_blank';

            const siteLink = document.createElement('a');
            siteLink.href = projeto.site;
            siteLink.textContent = 'visitar site';
            siteLink.target = '_blank';

            // Adiciona a imagem e os links dentro da div.filho
            Items.appendChild(titulo);
            Items.appendChild(img);
            Items.appendChild(gitHubLink);
            Items.appendChild(siteLink);

            // Adiciona a div.filho dentro da div.pai
            Trabalhos.appendChild(Items);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));


const competencias = document.querySelector('.competencias');

// Carrega o JSON
fetch('JS/items.json')
    .then(response => response.json())
    .then(ArrayDeItems => {
        ArrayDeItems.forEach(TESTE => {
            // Cria a div.filho
            const ItemsCompetencias = document.createElement('div');
            ItemsCompetencias.classList.add('ItemsCompetencias');

            // Cria a imagem
            const img = document.createElement('img');
            img.src = TESTE.imgSrc;
            img.alt = TESTE.alt;

            // Cria os links
            const TITULOS = document.createElement('h3');
            TITULOS.textContent = TESTE.h3;

            // Adiciona a imagem e os links dentro da div.filho
            ItemsCompetencias.appendChild(img);
            ItemsCompetencias.appendChild(TITULOS);

            // Adiciona a div.filho dentro da div.pai
            competencias.appendChild(ItemsCompetencias);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

// const ArrayDeItems = [
//     { imgSrc: 'IMG/HTML.png', h3: 'HTML', alt: 'Icone do Html' },
//     { imgSrc: 'IMG/CSS.png', h3: 'CSS', alt: 'Icone do CSS' },
//     { imgSrc: 'IMG/JS.png', h3: 'JAVASCRIPT', alt: 'Icone do JavaScript' },
//     { imgSrc: 'IMG/GIT.png', h3: 'GIT GIT-HUB', alt: 'Icone do git' },
//     { imgSrc: 'IMG/SKILLS.png', h3: 'COMUNICAÇÃO E TRABALHOS EM EQUIPE', alt: 'Icone de COMUNICAÇÃO E TRABALHOS EM EQUIPE' },
//     { imgSrc: 'IMG/FORMADO.png', h3: 'FORMADO EM DESENVOLVIMENTO WEB', alt: 'Icone de ORMADO EM DESENVOLVIMENTO WEB' },
//     { imgSrc: 'IMG/ESPANHOL.png', h3: 'ESPANHOL INTERMEDIARIO', alt: 'Icone de Espanhol intermediario' },
//     { imgSrc: 'IMG/WORD.png', h3: 'WORD', alt: 'Icone do WORD' },
//     { imgSrc: 'IMG/EXCEL.png', h3: 'EXCEL', alt: 'Icone do EXCEL' },
//     { imgSrc: 'IMG/PPTX.png', h3: 'POWERPOINT', alt: 'Icone do POWERPOINT' },
//     { imgSrc: 'IMG/MONTAGEM.png', h3: 'MONTAGEM E MANUTENÇÃO PREVENTIVA DE COMPUTADORES', alt: 'Icone de MONTAGEM E MANUTENÇÃO PREVENTIVA DE COMPUTADORES' },
//     { imgSrc: 'IMG/REDES.png', h3: 'GERENCIAMENTO DO WINDOWS E REDES', alt: 'Icone de GERENCIAMENTO DO WINDOWS E REDES ' },
//     { imgSrc: 'IMG/FORMADO02.png', h3: 'FORMADO EM SUPORTE TI', alt: 'Icone de FORMADO EM SUPORTE TI ' },
//     { imgSrc: 'IMG/ESPANHOL.png', h3: 'INGLÊS BÁSICO', alt: 'Icone de Inglês Básico ' }
// ];

// const competencias = document.querySelector('.competencias');

// ArrayDeItems.forEach(TESTE => {
//     // Cria a div.filho
//     const ItemsCompetencias = document.createElement('div');
//     ItemsCompetencias.classList.add('ItemsCompetencias');

//     // Cria a imagem
//     const img = document.createElement('img');
//     img.src = TESTE.imgSrc;
//     img.alt = TESTE.alt;

//     // Cria os links
//     const TITULOS = document.createElement('h3');
//     TITULOS.textContent = TESTE.h3;



//     // Adiciona a imagem e os links dentro da div.filho
//     ItemsCompetencias.appendChild(img);
//     ItemsCompetencias.appendChild(TITULOS);


//     // Adiciona a div.filho dentro da div.pai
//     competencias.appendChild(ItemsCompetencias);
// });