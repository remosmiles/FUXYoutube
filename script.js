document.addEventListener('DOMContentLoaded', () => {
    // --- MATRIX EFFEKT ---
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00FF00";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 35);

    // --- FUCHS ANIMATION ---
    const container = document.getElementById('fuchs-container');
    const bubble = document.getElementById('bubble');
    const subButton = document.getElementById('button-wrapper');

    // 1. Fuchs landet im Zentrum nach 1 Sekunde
    setTimeout(() => {
        container.style.top = '50%';
        
        // 2. Er spricht nach 1.5 Sekunden
        setTimeout(() => {
            bubble.style.display = 'block';
            
            // 3. Text ändert sich
            setTimeout(() => {
                bubble.innerText = "Folge mir schnell zum Kanal! 🦊";
                
                // 4. Fuchs verschwindet nach oben
                setTimeout(() => {
                    container.style.top = '-600px';
                    
                    // 5. Button erscheint in der Mitte
                    setTimeout(() => {
                        subButton.style.display = 'block';
                    }, 1000);
                }, 3000);
            }, 2500);
        }, 1500);
    }, 1000);
});
