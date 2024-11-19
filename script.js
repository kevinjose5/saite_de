
    const scrollContainer = document.querySelector('.menu_de_rolagem');
    const leftButton = document.querySelector('.botaoesquerdo');
    const rightButton = document.querySelector('.botaodireito');

    leftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -500, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 500, behavior: 'smooth' });
    });
