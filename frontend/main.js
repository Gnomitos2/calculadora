document.addEventListener('DOMContentLoaded', () => {
    // Simple calculator logic
    const display = document.createElement('input');
    display.type = 'text';
    display.id = 'display';
    display.readOnly = true;
    display.value = '';

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    const container = document.createElement('div');
    container.id = 'calculator';

    container.appendChild(display);

    buttons.forEach(text => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.onclick = () => {
            if (text === 'C') {
                display.value = '';
            } else if (text === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += text;
            }
        };
        container.appendChild(btn);
    });

    document.body.appendChild(container);
});