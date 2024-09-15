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
            siteLink.textContent = 'site';
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

