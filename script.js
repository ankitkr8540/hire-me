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
      '<p class="wc-text">You caught the QR code!</p>' +
      '<p class="wc-sub">Thanks for visiting — Ankit appreciates you.</p>' +
    '</div>';
  document.body.appendChild(overlay);

  // Show for 5 s, then fade over 1.5 s
  setTimeout(function () {
    overlay.classList.add('wc-fade');
    setTimeout(function () { overlay.remove(); }, 1500);
  }, 2500);

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

  var COLORS   = ['#FF6B35', '#FFB347', '#FFD166', '#FF85C1', '#5DADE2', '#A78BFA', '#34D399', '#FB923C'];
  var COUNT    = 130;
  var DURATION = 8000; // ms — outlasts overlay so confetti plays over the revealed page

  var pieces = [];
  for (var i = 0; i < COUNT; i++) {
    pieces.push({
      x:      Math.random() * canvas.width,
      y:      -20 - Math.random() * (canvas.height * 0.6),
      w:      Math.random() * 12 + 5,
      h:      Math.random() * 7  + 3,
      r:      Math.random() * 5  + 3,          // radius if circle
      circle: Math.random() < 0.3,             // 30% circles, 70% rects
      color:  COLORS[Math.floor(Math.random() * COLORS.length)],
      angle:  Math.random() * Math.PI * 2,
      spin:   (Math.random() - 0.5) * 0.22,
      vx:     (Math.random() - 0.5) * 2.2,
      vy:     Math.random() * 3.2 + 1.5,
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
      if (p.circle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}());
