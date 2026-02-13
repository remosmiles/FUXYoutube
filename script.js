document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('fuchs-container');
    const bubble = document.getElementById('bubble');
    const subButton = document.getElementById('button-wrapper');

    // Ablauf der Animation:
    
    // 1. Fuchs kommt nach 1 Sekunde reingesprungen
    setTimeout(() => {
        container.style.bottom = '40px';
        
        // 2. Er spricht nach 2 Sekunden
        setTimeout(() => {
            bubble.style.display = 'block';
            
            // 3. Text ändert sich nach 4 Sekunden
            setTimeout(() => {
                bubble.innerText = "Folge mir schnell zum Kanal! 🦊";
                
                // 4. Fuchs verschwindet nach 6 Sekunden
                setTimeout(() => {
                    container.style.bottom = '-600px';
                    
                    // 5. Großer Button erscheint in der Mitte
                    setTimeout(() => {
                        subButton.style.display = 'block';
                    }, 1000);
                }, 2000);
            }, 2500);
        }, 1200);
    }, 1000);
});
