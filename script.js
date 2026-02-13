document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NEON HERZ REGEN ---
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 24;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawHearts() {
        // Leichter Schweif-Effekt
        ctx.fillStyle = "rgba(5, 5, 16, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#00d2ff"; // Neon Blau
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00d2ff";

        for (let i = 0; i < drops.length; i++) {
            // Wir zeichnen das Herz-Symbol
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            ctx.font = (Math.random() * 15 + 10) + "px serif"; // Unterschiedliche Herzgrößen
            ctx.fillText("💙", x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawHearts, 50);

    // --- 2. FUCHS ANIMATION ---
    const container = document.getElementById('fuchs-container');
    const bubble = document.getElementById('bubble');
    const subButton = document.getElementById('button-wrapper');

    setTimeout(() => {
        container.style.top = '50%';
        setTimeout(() => {
            bubble.style.display = 'block';
            setTimeout(() => {
                bubble.innerText = "Folge mir schnell zum Kanal! 🦊";
                setTimeout(() => {
                    container.style.top = '-600px';
                    setTimeout(() => {
                        subButton.style.display = 'block';
                    }, 1000);
                }, 3000);
            }, 2500);
        }, 1200);
    }, 1000);
});

window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrix');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
