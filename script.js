document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('fuchs-container');
    const bubble = document.getElementById('bubble');
    const subButton = document.getElementById('button-wrapper');

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // 1. Fuchs kommt rein
    await wait(1000);
    container.style.bottom = '40px';

    // 2. Er spricht
    await wait(1200);
    bubble.style.display = 'block';

    // 3. Text ändert sich
    await wait(2500);
    bubble.innerText = "Level Up! Folge mir zum Kanal! 🎮"; // Anpassung des Textes

    // 4. Fuchs geht, Button kommt
    await wait(2000);
    container.style.bottom = '-600px';
    
    await wait(1000);
    subButton.style.display = 'block';
});
