document.addEventListener('DOMContentLoaded', () => {
    // Saludo con Javascript
    alert('¡Hola! Bienvenido a mi sitio web.');

    // Botón con contador
    const button = document.createElement('button');
    button.textContent = 'Haz clic aquí';
    document.body.appendChild(button);

    const counterDisplay = document.createElement('h2');
    counterDisplay.textContent = '0';
    document.body.appendChild(counterDisplay);

    let count = 0;
    button.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });
});

