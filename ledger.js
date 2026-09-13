// ═══════════════════════════════════════════════════════════════
//  THE LEDGER — APPLICATION & MOTION ENGINE
//  Reads LEDGER from data.js. Drives Lenis smooth scroll,
//  GSAP ScrollTrigger choreography, SVGs, and interactivity.
// ═══════════════════════════════════════════════════════════════

(function () {
  'use strict';

  // Ensure data.js loaded
  if (typeof LEDGER === 'undefined' || !LEDGER.entries) {
    console.error('LEDGER data not found.');
    return;
  }

  // Register GSAP Plugins
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const entries = LEDGER.entries;
  const meta = LEDGER.meta || {};
  const chronologicalEntries = [...entries].sort((a, b) => {
    const dateOrder = a.date.localeCompare(b.date);
    return dateOrder || a.id.localeCompare(b.id);
  });

  // ─── AGGREGATE COUNTS DYNAMICALLY ──────────────────────────
  const counts = entries.reduce((acc, e) => {
    acc[e.status] = (acc[e.status] || 0) + 1;
    return acc;
  }, {});

  const totalCount = entries.length;
  const winOnlyCount = counts.win || 0;
  const winsTotal = winOnlyCount;
  const pendingCount = counts.pending || 0;
  const lossOnlyCount = counts.loss || 0;
  const ghostCount = counts.ghost || 0;
  const lossesTotal = lossOnlyCount + ghostCount;

  // Update header badges
  const pendingBadge = document.getElementById('pendingCountBadge');
  if (pendingBadge) pendingBadge.textContent = pendingCount;

  const lossesBadge = document.getElementById('lossesCountBadge');
  if (lossesBadge) lossesBadge.textContent = lossesTotal;

  // Update Coda Metadata
  const codaMeta = document.getElementById('codaMeta');
  if (codaMeta) {
    codaMeta.textContent = `${meta.name || 'Anwita D Pillai'} · ${meta.origin || 'Kochi, Kerala'} · Updated ${meta.lastUpdated || ''}`;
  }

  // ─── 00. LENIS SMOOTH SCROLL & SCROLL PROGRESS ──────────────
  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.5
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Scroll Progress Bar update
  const progressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && docHeight > 0) {
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progressBar.style.height = `${progress}%`;
    }
  }, { passive: true });

  // ─── CUSTOM MAGNETIC CURSOR & GLOW ──────────────────────────
  const cursor = document.getElementById('customCursor');
  const cursorDot = cursor ? cursor.querySelector('.cursor-dot') : null;
  const cursorRing = cursor ? cursor.querySelector('.cursor-ring') : null;
  const cursorGlow = document.getElementById('cursorGlow');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX, ringY = mouseY;
  let glowX = mouseX, glowY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  }, { passive: true });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }

    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    if (cursorGlow) {
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function attachCursorHoverEvents() {
    const hoverTargets = document.querySelectorAll('a, button, input, .ridge-point, .constellation-card, .filter-pill, .strata-layer, .table-row');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
    });
  }
  attachCursorHoverEvents();

  // ─── 01. SECTION 01: THE COVER ENTRANCE & PIN EXIT ──────────
  function initCoverSection() {
    const coverCenter = document.querySelector('.cover-center');
    const metaCorners = document.querySelectorAll('.cover-meta');
    const malayalamAccent = document.querySelector('.cover-accent-malayalam');
    const title1 = document.querySelector('.cover-title.line-1');
    const title2 = document.querySelector('.cover-title.line-2');
    const coverRule = document.querySelector('.cover-rule');
    const coverSub = document.querySelector('.cover-subtitle');
    const scrollCue = document.querySelector('.scroll-cue');

    // Entry timeline
    const enterTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    enterTl
      .to(metaCorners, { opacity: 1, duration: 0.9, stagger: 0.1, delay: 0.2 })
      .to(malayalamAccent, { opacity: 0.9, y: 0, duration: 0.7 }, '-=0.6')
      .to(title1, { y: '0%', duration: 0.85, ease: 'power4.out' }, '-=0.5')
      .to(title2, { y: '0%', duration: 0.85, ease: 'power4.out' }, '-=0.7')
      .to(coverRule, { width: '100%', duration: 0.85, ease: 'power2.inOut' }, '-=0.4')
      .to(coverSub, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');

    // Click scroll cue to descend
    if (scrollCue) {
      scrollCue.addEventListener('click', () => {
        if (lenis) {
          lenis.scrollTo('#numbers', { duration: 1.2 });
        } else {
          document.getElementById('numbers').scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Pinned exit with mask wipe / scale
    if (typeof ScrollTrigger !== 'undefined') {
      const exitTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#cover',
          start: 'top top',
          end: '+=80%',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1
        }
      });

      exitTl
        .to(coverCenter, { scale: 1.15, opacity: 0, ease: 'power2.inOut' })
        .to(metaCorners, { opacity: 0, ease: 'power2.inOut' }, 0);
    }
  }

  // ─── 02. SECTION 02: THE NUMBERS TICKER ─────────────────────
  function initNumbersSection() {
    const stage = document.getElementById('statTickerStage');
    const indicators = document.getElementById('tickerIndicators');
    const progressFill = document.getElementById('numbersProgressFill');
    const prevBtn = document.getElementById('prevStatBtn');
    const nextBtn = document.getElementById('nextStatBtn');
    if (!stage) return;

    const statsData = [
      { num: totalCount, label: 'ENTRIES', sub: 'total pursuits' },
      { num: winsTotal, label: 'WINS', sub: 'awarded & published' },
      { num: pendingCount, label: 'PENDING', sub: 'awaiting verdict' },
      { num: lossesTotal, label: 'LOSSES', sub: 'the bedrock of effort' }
    ];

    stage.innerHTML = statsData.map((s, idx) => `
      <div class="stat-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="stat-number-wrap">
          <span class="stat-number" data-target="${s.num}">0</span>
        </div>
        <div class="stat-underline"></div>
        <div class="stat-label-wrap">
          <span class="stat-label">${s.label}</span>
          <span class="stat-sub">(${s.sub})</span>
        </div>
      </div>
    `).join('');

    let currentStatIdx = 0;
    const slides = stage.querySelectorAll('.stat-slide');

    function animateCount(slide, target) {
      const numEl = slide.querySelector('.stat-number');
      if (!numEl) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          numEl.textContent = Math.round(obj.val);
        }
      });
    }

    function setStatIndex(newIdx) {
      if (newIdx < 0) newIdx = statsData.length - 1;
      if (newIdx >= statsData.length) newIdx = 0;

      slides.forEach((slide, i) => {
        if (i === newIdx) {
          slide.classList.add('active');
          const target = parseInt(slide.querySelector('.stat-number').dataset.target, 10);
          animateCount(slide, target);
        } else {
          slide.classList.remove('active');
        }
      });

      currentStatIdx = newIdx;
      if (indicators) {
        indicators.innerHTML = `<span class="current-step">0${newIdx + 1}</span> / 0${statsData.length}`;
      }
      if (progressFill) {
        progressFill.style.width = `${((newIdx + 1) / statsData.length) * 100}%`;
      }
    }

    // Initial counter animation
    setStatIndex(0);

    if (prevBtn) prevBtn.addEventListener('click', () => setStatIndex(currentStatIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => setStatIndex(currentStatIdx + 1));

    // ScrollTrigger Pinned Sequence
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#numbers',
        start: 'top top',
        end: '+=320%',
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Dedicated hold time for each stat and a long rest on the final stat
          // so Section 03 does not enter prematurely
          let step = 0;
          if (self.progress < 0.22) {
            step = 0;
          } else if (self.progress < 0.46) {
            step = 1;
          } else if (self.progress < 0.70) {
            step = 2;
          } else {
            step = 3; // Holds from 0.70 to 1.00 so user can comfortably read losses
          }
          if (step !== currentStatIdx) {
            setStatIndex(step);
          }
        }
      });
    }
  }

  // ─── 03. SECTION 03: THE RIDGE (Pinned 300vh Mountain Range) ─
  function initRidgeSection() {
    const svg = document.getElementById('ridgeSvg');
    const marginalia = document.getElementById('marginaliaCard');
    const container = document.getElementById('ridgeCanvasContainer');
    const sky = document.getElementById('ridgeSky');
    const starsLayer = document.getElementById('ridgeStarsLayer');
    if (!svg || !container) return;

    const W = 3200, H = 800;
    const PAD_X = 140;
    const SPAN_X = W - PAD_X * 2;
    const BASELINE = 520;

    // Pending work has its own constellation below; keep the ridge focused on resolved work.
    const sorted = entries
      .filter((entry) => entry.status !== 'pending')
      .sort((a, b) => a.date.localeCompare(b.date));

    // Y mapping
    function getY(e) {
      if (e.status === 'win') {
        return { 1: 150, 2: 260, 3: 360 }[e.tier] || 320;
      }
      if (e.status === 'pending') return 440;
      if (e.status === 'loss') {
        return { 1: 560, 2: 610, 3: 660 }[e.tier] || 620;
      }
      if (e.status === 'ghost') return 710;
      return BASELINE;
    }

    const points = sorted.map((e, i) => {
      const x = PAD_X + (SPAN_X * i) / Math.max(1, sorted.length - 1);
      const y = getY(e);
      return { ...e, x, y };
    });

    // Smooth path generation with cubic beziers
    function generatePath(pts, closed = false) {
      if (!pts.length) return '';
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const mx = (p0.x + p1.x) / 2;
        d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
      }
      if (closed) {
        d += ` L ${pts[pts.length - 1].x} ${BASELINE} L ${pts[0].x} ${BASELINE} Z`;
      }
      return d;
    }

    // Ghost ridge: smoothed silhouette behind
    const ghostPts = points.map(p => ({
      x: p.x,
      y: p.y * 0.75 + 120
    }));

    // Generate HTML for SVG
    let svgHtml = `
      <!-- Baseline reference rule -->
      <line class="svg-baseline-rule" x1="${PAD_X - 60}" y1="${BASELINE}" x2="${W - PAD_X + 60}" y2="${BASELINE}" />

      <!-- Ghost Ridge Layer -->
      <path class="svg-ghost-ridge" d="${generatePath(ghostPts, true)}" />

      <!-- Main Ridge Fill & Stroke -->
      <path id="ridgeMainFill" class="svg-main-ridge-fill" d="${generatePath(points, true)}" opacity="0.8" />
      <path id="ridgeMainStroke" class="svg-main-ridge-stroke" d="${generatePath(points, false)}" />
    `;

    // Points & Elements
    points.forEach((p, pointIndex) => {
      const statusClass = p.status;
      const r = p.status === 'win' ? 6 : p.status === 'pending' ? 5 : 4.5;

      // Pending: connector stem & star
      if (p.status === 'pending') {
        const starY = p.y - 70;
        svgHtml += `
          <line class="ridge-star-stem" x1="${p.x}" y1="${p.y}" x2="${p.x}" y2="${starY}" />
          <circle class="ridge-point pending-star" cx="${p.x}" cy="${starY}" r="4.5"
                  fill="#5A7A63" data-id="${p.id}" data-x="${p.x}" data-y="${starY}" />
        `;
      }

      // Milestone Ring
      if (p.milestone) {
        const pulseDelay = ((pointIndex * 0.85) % 5.5).toFixed(2);
        svgHtml += `<circle class="ridge-milestone-ring" cx="${p.x}" cy="${p.y}" r="15" style="animation-delay:-${pulseDelay}s" />`;
      }

      // Main Point Circle
      svgHtml += `
        <circle class="ridge-point ${statusClass}" cx="${p.x}" cy="${p.y}" r="${r}"
                data-id="${p.id}" data-x="${p.x}" data-y="${p.y}" />
      `;

    });

    svg.innerHTML = svgHtml;

    // Distant twinkle stars layer
    if (starsLayer) {
      let starsHtml = '';
      for (let i = 0; i < 40; i++) {
        const top = Math.random() * 80;
        const left = Math.random() * 100;
        const delay = (Math.random() * 5.5).toFixed(1);
        starsHtml += `<div class="twinkle-star" style="top:${top}%; left:${left}%; animation-delay:${delay}s;"></div>`;
      }
      starsLayer.innerHTML = starsHtml;
    }

    // Marginalia Hover / Click Interactions
    function showMarginalia(entry, cx, cy) {
      if (!marginalia) return;
      const statusLabel = {
        win: 'Win', pending: 'Pending',
        loss: 'Loss', ghost: 'No response'
      }[entry.status] || entry.status;

      marginalia.innerHTML = `
        <div class="marginalia-header">
          <span class="marg-org">${entry.org}</span>
          <span class="marg-status ${entry.status}">${statusLabel}</span>
        </div>
        <h3 class="marg-title">${entry.title}</h3>
        ${entry.remark ? `<div class="marg-remark">${entry.remark}</div>` : ''}
        ${entry.lesson ? `<div class="marg-lesson">“${entry.lesson}”</div>` : ''}
        <div class="marg-footer">
          <span>${entry.date}</span>
          ${entry.reward ? `<span>${entry.reward}</span>` : ''}
        </div>
      `;

      // Calculate position relative to container
      const contRect = container.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();
      const scaleX = svgRect.width / W;
      const scaleY = svgRect.height / H;

      let left = (cx * scaleX) + 20;
      let top = (cy * scaleY) - 50;

      // Bound checking
      const cardWidth = 320;
      const cardHeight = 200;
      if (left + cardWidth > contRect.width - 20) {
        left = (cx * scaleX) - cardWidth - 20;
      }
      if (top < 10) top = 10;
      if (top + cardHeight > contRect.height) {
        top = contRect.height - cardHeight - 10;
      }

      marginalia.style.left = `${Math.max(10, left)}px`;
      marginalia.style.top = `${Math.max(10, top)}px`;
      marginalia.classList.add('visible');
    }

    function hideMarginalia() {
      if (marginalia) marginalia.classList.remove('visible');
    }

    svg.addEventListener('mouseover', (e) => {
      const target = e.target.closest('.ridge-point');
      if (!target || !target.dataset.id) return;
      const entry = points.find(p => p.id === target.dataset.id);
      if (entry) {
        target.classList.add('active');
        showMarginalia(entry, parseFloat(target.dataset.x), parseFloat(target.dataset.y));
      }
    });

    svg.addEventListener('mouseout', (e) => {
      const target = e.target.closest('.ridge-point');
      if (target) {
        target.classList.remove('active');
        hideMarginalia();
      }
    });

    svg.addEventListener('click', (e) => {
      const target = e.target.closest('.ridge-point');
      if (!target || !target.dataset.id) return;
      const entry = points.find(p => p.id === target.dataset.id);
      if (entry) {
        showMarginalia(entry, parseFloat(target.dataset.x), parseFloat(target.dataset.y));
      }
    });

    // ScrollTrigger Animation for the Mountain
    if (typeof ScrollTrigger !== 'undefined') {
      const strokePath = document.getElementById('ridgeMainStroke');
      const fillPath = document.getElementById('ridgeMainFill');
      const pathLength = strokePath.getTotalLength();

      gsap.set(strokePath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });

      const ridgeTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#ridgeWrapper',
          start: 'top top',
          end: '+=240%',
          pin: '#ridgeSticky',
          scrub: 0.6,
          anticipatePin: 1
        }
      });

      ridgeTl
        .to(strokePath, {
          strokeDashoffset: 0,
          ease: 'none',
          duration: 1
        })
        .fromTo(fillPath, { opacity: 0 }, { opacity: 0.85, ease: 'none', duration: 0.8 }, 0.2)
        .to(sky, { y: -30, ease: 'none' }, 0)
        .to(starsLayer, { y: -60, ease: 'none' }, 0);
    }
  }

  // ─── 04. SECTION 04: THE CONSTELLATION (Horizontal Track) ──
  function initConstellationSection() {
    const track = document.getElementById('constellationTrack');
    const bgSvg = document.getElementById('constellationBgSvg');
    if (!track) return;

    // Keep pending entries in chronological order.
    const pendingList = chronologicalEntries.filter(e => e.status === 'pending');

    track.innerHTML = pendingList.map(e => `
      <article class="constellation-card" tabindex="0">
        <div class="card-top">
          <span class="card-org">${e.org}</span>
          <h3 class="card-title">${e.title}</h3>
          ${e.remark ? `<p class="card-remark">${e.remark}</p>` : ''}
        </div>
        <div class="card-bottom">
          <span class="card-badge-awaiting">Awaiting Result</span>
          ${e.reward ? `<span class="card-reward">${e.reward}</span>` : `<span class="card-date">${e.date}</span>`}
        </div>
      </article>
    `).join('');

    // Generate constellation starry background in SVG
    if (bgSvg) {
      let bgHtml = '';
      const w = window.innerWidth;
      const h = window.innerHeight;
      const starNodes = [];

      for (let i = 0; i < 22; i++) {
        starNodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 1.5
        });
      }

      // Draw faint lines between close stars
      for (let i = 0; i < starNodes.length; i++) {
        for (let j = i + 1; j < starNodes.length; j++) {
          const dist = Math.hypot(starNodes[i].x - starNodes[j].x, starNodes[i].y - starNodes[j].y);
          if (dist < 220) {
            bgHtml += `<line x1="${starNodes[i].x}" y1="${starNodes[i].y}" x2="${starNodes[j].x}" y2="${starNodes[j].y}" stroke="#5A7A63" stroke-opacity="0.15" stroke-dasharray="3 3" />`;
          }
        }
      }

      starNodes.forEach(s => {
        bgHtml += `<circle cx="${s.x}" cy="${s.y}" r="${s.r}" fill="#C9971A" opacity="0.6" />`;
      });

      bgSvg.innerHTML = bgHtml;
    }

    // ScrollTrigger Horizontal Scrub
    if (typeof ScrollTrigger !== 'undefined') {
      function getScrollDistance() {
        return track.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 40 : 160);
      }

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: '#constellationWrapper',
          start: 'top top',
          end: 'bottom bottom',
          pin: '#constellationSticky',
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }
  }

  // ─── 05. SECTION 05: THE STRATA (Geological Losses) ─────────
  function initStrataSection() {
    const col = document.getElementById('strataGeologyColumn');
    if (!col) return;

    // Filter losses & ghosts
    const losses = entries.filter(e => e.status === 'loss' || e.status === 'ghost');
    // Sort oldest first (so bottom-up flex column puts oldest at bedrock bottom)
    losses.sort((a, b) => a.date.localeCompare(b.date));

    col.innerHTML = losses.map(e => {
      const isMilestone = !!e.milestone || !!e.lesson;
      return `
        <div class="strata-layer ${isMilestone ? 'milestone' : ''}">
          <div class="strata-date">${e.date}</div>
          <div class="strata-entry">
            <div class="strata-title">${e.title}</div>
            <div class="strata-org">${e.org}</div>
          </div>
          <div class="strata-lesson-col">
            ${e.lesson ? `“${e.lesson}”` : `<span class="strata-remark-dim">${e.remark || '—'}</span>`}
          </div>
        </div>
      `;
    }).join('');

    // Scroll reveal
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.from('.strata-layer', {
        scrollTrigger: {
          trigger: '#strata',
          start: 'top 75%'
        },
        y: 20,
        opacity: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  }

  // ─── 06. SECTION 06: THE DOCUMENT (Table & Filtering) ───────
  function initDocumentSection() {
    const tableBody = document.getElementById('documentTableBody');
    const filterContainer = document.getElementById('documentFilterPills');
    const searchInput = document.getElementById('documentSearchInput');
    const emptyState = document.getElementById('tableEmptyState');
    if (!tableBody || !filterContainer) return;

    // Filter definitions
    const filterDefs = [
      { key: 'all', label: `All (${totalCount})` },
      { key: 'win', label: `Wins (${winOnlyCount})` },
      { key: 'pending', label: `Pending (${pendingCount})` },
      { key: 'loss', label: `Losses (${lossOnlyCount})` },
      { key: 'ghost', label: `Ghosts (${ghostCount})` }
    ];

    let currentFilter = 'all';
    let searchQuery = '';

    filterContainer.innerHTML = filterDefs.map(f => `
      <button class="filter-pill ${f.key === 'all' ? 'active' : ''}" data-filter="${f.key}">
        ${f.label}
      </button>
    `).join('');

    function renderTable() {
      const q = searchQuery.toLowerCase().trim();
      const filtered = entries.filter(e => {
        const matchesFilter = (currentFilter === 'all') || (e.status === currentFilter);
        const matchesSearch = !q || (
          (e.title && e.title.toLowerCase().includes(q)) ||
          (e.org && e.org.toLowerCase().includes(q)) ||
          (e.remark && e.remark.toLowerCase().includes(q)) ||
          (e.lesson && e.lesson.toLowerCase().includes(q)) ||
          (e.tags && e.tags.some(t => t.toLowerCase().includes(q))) ||
          (e.date && e.date.toLowerCase().includes(q))
        );
        return matchesFilter && matchesSearch;
      });

      if (!filtered.length) {
        tableBody.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      // Keep the complete record chronological, oldest first.
      filtered.sort((a, b) => {
        const dateOrder = a.date.localeCompare(b.date);
        return dateOrder || a.id.localeCompare(b.id);
      });

      tableBody.innerHTML = filtered.map(e => `
        <tr class="table-row">
          <td class="col-date row-date">${e.date}</td>
          <td class="col-entry">
            <div class="row-entry-wrap">
              <div class="row-title">${e.title}</div>
              <div class="row-org">${e.org}</div>
              ${e.remark ? `<div class="row-remark">${e.remark}</div>` : ''}
              ${e.lesson ? `<div class="row-lesson">“${e.lesson}”</div>` : ''}
            </div>
          </td>
          <td class="col-status">
            <span class="status-pill status-${e.status}">${e.status}</span>
          </td>
          <td class="col-reward row-reward">${e.reward || '—'}</td>
        </tr>
      `).join('');

      attachCursorHoverEvents();
    }

    renderTable();

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      filterContainer.querySelectorAll('.filter-pill').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      renderTable();
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTable();
      });
    }

    // Scroll cascade on entry
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#document',
        start: 'top 80%',
        onEnter: () => {
          gsap.from('#documentTable tbody tr', {
            y: 16,
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: 'power2.out'
          });
        },
        once: true
      });
    }
  }

  // ─── 07. SECTION 07: THE CODA ───────────────────────────────
  function initCodaSection() {
    if (typeof ScrollTrigger === 'undefined') return;

    const codaWords = document.querySelectorAll('.coda-line');
    const codaLines = document.querySelectorAll('[data-coda-line]');

    const codaTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#coda',
        start: 'top 70%',
        once: true
      }
    });

    codaTl
      .to('.coda-accent-malayalam', { opacity: 0.8, y: 0, duration: 0.8, ease: 'power3.out' })
      .to(codaWords, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.9,
        ease: 'power3.out'
      }, '-=0.4')
      .to('.coda-signature', { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
      .to('.coda-meta', { opacity: 0.7, y: 0, duration: 0.8 }, '-=0.4');
  }

  // ─── INITIALIZE ALL MODULES ON DOM READY ────────────────────
  function init() {
    initCoverSection();
    initNumbersSection();
    initRidgeSection();
    initConstellationSection();
    initStrataSection();
    initDocumentSection();
    initCodaSection();

    // Refresh ScrollTrigger after elements settle
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();