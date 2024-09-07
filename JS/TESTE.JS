const ArrayDeItems = [
    { imgSrc: '../IMG/2.png', h3: 'fjnd' },
    { imgSrc: '../IMG/3.png', h3: 'jsng' },
    { imgSrc: '../IMG/1.png', h3: 'jsng' },
    { imgSrc: '../IMG/COPIAdacopiaRA.jpg', h3 : 'sdnjf' },
    
];

const competencias = document.querySelector('.competencias');

ArrayDeItems.forEach(projeto => {
    // Cria a div.filho
    const ItemsCompetencias = document.createElement('div');
    ItemsCompetencias.classList.add('ItemsCompetencias');
    
    // Cria a imagem
    const img = document.createElement('img');
    img.src = projeto.imgSrc;
    img.alt = '';
    
    // Cria os links
    const TITULOS = document.createElement('h3');
    TITULOS.textContent = projeto.h3;
    
    
    
    // Adiciona a imagem e os links dentro da div.filho
    ItemsCompetencias.appendChild(img);
    ItemsCompetencias.appendChild(TITULOS);
        
    
    // Adiciona a div.filho dentro da div.pai
    competencias.appendChild(ItemsCompetencias);
});