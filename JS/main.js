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

    document.addEventListener('DOMContentLoaded', function () {
        // Seleciona o container existente no HTML onde o conteúdo será inserido
        const container = document.getElementById('content-container');
    
        // Certifica-se que o container foi encontrado
        if (container) {
            // Criando a seção "Sobre mim"
            const sobreDiv = document.createElement('div');
            
            // Definindo a classe do container principal "links"
            container.className = 'links';
    
            const title = document.createElement('h2');
            title.id = 'Cumputador'; // ID "Cumputador" aplicado ao título
            title.innerHTML = '&#60; Sobre mim &#62;';
            
            const paragraph = document.createElement('p');
            paragraph.className = 'Cumputador'; // Classe "Cumputador" aplicada ao parágrafo
            paragraph.innerHTML = `Olá, meu nome é Guilherme Castro, sou formado em Desenvolvimento <br id="BR"> 
                                   Web pelo IOS, atualmente aprimoro meus conhecimentos em front-end <br id="BR"> 
                                   e planejo expandir minha expertise para o back-end.`;
    
            // Adicionando o título e o parágrafo à seção
            sobreDiv.appendChild(title);
            sobreDiv.appendChild(paragraph);
            container.appendChild(sobreDiv);
    
            // Criando a lista de links
            const linkList = document.createElement('ul');
    
            // Lista de objetos com os links e ícones
            const links = [
                { href: 'https://github.com/GuiCastro1', icon: 'fab fa-github', text: 'GitHub' },
                { href: 'https://www.linkedin.com/in/guilherme-castro-gc', icon: 'fab fa-linkedin', text: 'LinkedIn' },
                { href: 'https://wa.me/5511951207636', icon: 'fab fa-whatsapp', text: 'WhatsApp' },
                { href: 'HTML/CURRICULO.html', icon: 'fas fa-file-alt', text: 'Currículo' },
                { href: 'mailto:gui.castro.0001.1426@gmail.com', icon: 'fas fa-envelope', text: 'Gmail' }
            ];
    
            // Criando os itens da lista dinamicamente
            links.forEach(linkData => {
                const linkItemDiv = document.createElement('div');
                linkItemDiv.setAttribute('data-aos', 'zoom-in'); // Aplicando o atributo de animação
    
                const linkItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = linkData.href;
                link.target = '_blank';
    
                const icon = document.createElement('i');
                icon.className = linkData.icon; // Definindo a classe correta do ícone
    
                link.appendChild(icon);
                link.innerHTML += ` ${linkData.text}`;
                linkItem.appendChild(link);
                linkItemDiv.appendChild(linkItem);
    
                linkList.appendChild(linkItemDiv);
            });
    
            // Adicionando a lista ao container principal
            container.appendChild(linkList);
        } else {
            console.error('Container "content-container" não encontrado no HTML.');
        }
    });
    