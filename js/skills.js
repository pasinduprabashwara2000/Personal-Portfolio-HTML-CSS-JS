(function(){
    const CIRCUMFERENCE = 2 * Math.PI * 34; // 213.6

    /* ---- animate rings in a panel ---- */
    function animatePanel(panel) {
        panel.querySelectorAll('.sk-card').forEach((card, i) => {
            card.style.animationDelay = (i * 80) + 'ms';
            card.classList.add('revealed');

            const pct   = parseInt(card.dataset.pct, 10);
            const fill  = card.querySelector('.sk-ring-fill');
            const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
            setTimeout(() => { fill.style.strokeDashoffset = offset; }, i * 80 + 100);
        });
    }

    /* ---- reset rings (when switching away) ---- */
    function resetPanel(panel) {
        panel.querySelectorAll('.sk-card').forEach(card => {
            card.classList.remove('revealed');
            card.querySelector('.sk-ring-fill').style.strokeDashoffset = CIRCUMFERENCE;
        });
    }

    /* ---- category switching ---- */
    const catItems = document.querySelectorAll('.sk-cat-item');
    const panels   = document.querySelectorAll('.sk-panel');

    catItems.forEach(item => {
        item.addEventListener('click', () => {
            catItems.forEach(c => c.classList.remove('active'));
            item.classList.add('active');

            const target = item.dataset.target;
            panels.forEach(p => {
                if (p.id === target) {
                    resetPanel(p);
                    p.classList.add('active');
                    setTimeout(() => animatePanel(p), 30);
                } else {
                    p.classList.remove('active');
                }
            });
        });
    });

    /* ---- initial animation on scroll into view ---- */
    const section = document.getElementById('skills');
    let initialDone = false;

    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !initialDone) {
            initialDone = true;
            const activePanel = document.querySelector('.sk-panel.active');
            if (activePanel) animatePanel(activePanel);
            obs.disconnect();
        }
    }, { threshold: 0.15 });

    obs.observe(section);
})();