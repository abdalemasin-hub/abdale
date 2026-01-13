// 💖 القلوب والنجوم
const heartsContainer = document.getElementById('hearts');
const starsContainer = document.getElementById('stars');

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.position = 'absolute';
    heart.style.color = 'pink';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-50px';
    heart.textContent = '💖';
    heartsContainer.appendChild(heart);

    let fall = 0;
    const interval = setInterval(() => {
        fall += 2;
        heart.style.top = fall + 'px';
        if (fall > window.innerHeight) {
            heart.remove();
            clearInterval(interval);
        }
    }, 20);
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.position = 'absolute';
    star.style.color = 'white';
    star.style.fontSize = Math.random() * 15 + 5 + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '-20px';
    star.textContent = '✨';
    starsContainer.appendChild(star);

    let fall = 0;
    const interval = setInterval(() => {
        fall += 1;
        star.style.top = fall + 'px';
        if (fall > window.innerHeight) {
            star.remove();
            clearInterval(interval);
        }
    }, 30);
}

setInterval(createHeart, 500);
setInterval(createStar, 300);

// 🎶 الموسيقى
const music = document.getElementById('romanticMusic');
const musicBtn = document.getElementById('musicToggle');

musicBtn.addEventListener('click', () => {
    if (music.paused) music.play();
    else music.pause();
});

// 💍 زر الزواج والمفاجأة
const proposalBtn = document.getElementById('proposalBtn');
proposalBtn.addEventListener('click', () => {
    alert("💖 مبروك! الألعاب النارية بدأت! 🎆");
    startFireworks();
});

// 🎆 ألعاب نارية بسيطة
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    let particles = [];

    function createParticles() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                alpha: 1,
                color: `hsl(${Math.random()*360}, 100%, 70%)`
            });
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(202, 41, 41, 0.08)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        particles.forEach((p, i) => {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI*2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.02;
            if (p.alpha <= 0) particles.splice(i,1);
        });
        requestAnimationFrame(draw);
    }

    createParticles();
    draw();
}
