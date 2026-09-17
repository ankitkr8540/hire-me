(function () {
  'use strict';

  // Skip everything if the user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── Overlay ────────────────────────────────────────── */
  const overlay = document.createElement('div');
  overlay.id = 'welcome-overlay';
  overlay.innerHTML =
    '<div class="wc-inner">' +
      '<span class="wc-emoji" aria-hidden="true">🎉</span>' +
      '<p class="wc-text">You caught the QR!</p>' +
    '</div>';
  document.body.appendChild(overlay);

  // Fade out overlay after 0.8 s, remove after transition
  setTimeout(function () {
    overlay.classList.add('wc-fade');
    setTimeout(function () { overlay.remove(); }, 350);
  }, 800);

  /* ── Confetti canvas ─────────────────────────────────── */
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');

  Object.assign(canvas.style, {
    position:      'fixed',
    top:           '0',
    left:          '0',
    width:         '100%',
    height:        '100%',
    pointerEvents: 'none',
    zIndex:        '9997',
  });
  document.body.appendChild(canvas);

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  var COLORS   = ['#FF6B35', '#FFB347', '#0F1B33', '#FFD166', '#FF85C1', '#5DADE2'];
  var COUNT    = 100;
  var DURATION = 3000; // ms until confetti fully fades

  var pieces = [];
  for (var i = 0; i < COUNT; i++) {
    pieces.push({
      x:     Math.random() * canvas.width,
      y:     -20 - Math.random() * (canvas.height * 0.5),
      w:     Math.random() * 11 + 5,
      h:     Math.random() * 6  + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.18,
      vx:    (Math.random() - 0.5) * 1.8,
      vy:    Math.random() * 2.8 + 1.5,
    });
  }

  var start = performance.now();

  function draw(now) {
    var elapsed  = now - start;
    var progress = Math.min(elapsed / DURATION, 1);
    // Quad ease-in so it lingers then disappears cleanly
    var alpha = 1 - progress * progress;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (alpha <= 0) {
      canvas.remove();
      return;
    }

    for (var j = 0; j < pieces.length; j++) {
      var p = pieces[j];
      p.y     += p.vy;
      p.x     += p.vx;
      p.angle += p.spin;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}());
