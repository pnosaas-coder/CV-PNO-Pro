/* ==========================================================================
   CV-PNO-PRO | EARNED VALUE MANAGEMENT (EVM) & S-CURVE SIMULATOR
   Interactive real-time Project Controls diagnostic engine
   ========================================================================== */

(function () {
  // DOM Elements
  const bacSlider = document.getElementById('evm-bac');
  const plannedSlider = document.getElementById('evm-planned');
  const actualSlider = document.getElementById('evm-actual');
  const costSlider = document.getElementById('evm-cost');

  const bacVal = document.getElementById('val-bac');
  const plannedVal = document.getElementById('val-planned');
  const actualVal = document.getElementById('val-actual');
  const costVal = document.getElementById('val-cost');

  const spiNum = document.getElementById('kpi-spi');
  const cpiNum = document.getElementById('kpi-cpi');
  const svNum = document.getElementById('kpi-sv');
  const cvNum = document.getElementById('kpi-cv');
  const eacNum = document.getElementById('kpi-eac');
  const tcpiNum = document.getElementById('kpi-tcpi');

  const spiCard = document.getElementById('card-spi');
  const cpiCard = document.getElementById('card-cpi');
  const statusTitle = document.getElementById('evm-diag-title');
  const statusText = document.getElementById('evm-diag-desc');
  const sCurveSvg = document.getElementById('s-curve-svg');

  const presetBtns = document.querySelectorAll('.preset-chip');

  if (!bacSlider) return;

  // Format currency in Millions
  function formatM(val) {
    return '$' + val.toFixed(1) + 'M';
  }

  // Sigmoid S-Curve Math generator
  function sigmoid(x) {
    return 1 / (1 + Math.exp(-6 * (x - 0.5)));
  }

  function updateEVM() {
    const bac = parseFloat(bacSlider.value); // In Millions
    const plannedPct = parseFloat(plannedSlider.value) / 100;
    const actualPct = parseFloat(actualSlider.value) / 100;
    const ac = parseFloat(costSlider.value); // In Millions

    // Values in Millions
    const pv = bac * plannedPct;
    const ev = bac * actualPct;
    const sv = ev - pv;
    const cv = ev - ac;

    const spi = pv > 0 ? ev / pv : 1.0;
    const cpi = ac > 0 ? ev / ac : 1.0;

    const eac = cpi > 0 ? bac / cpi : bac;
    const workRemaining = bac - ev;
    const fundsRemaining = bac - ac;
    const tcpi = fundsRemaining > 0 ? workRemaining / fundsRemaining : 0;

    // Update Slider Value Displays
    bacVal.textContent = formatM(bac);
    plannedVal.textContent = (plannedPct * 100).toFixed(0) + '%';
    actualVal.textContent = (actualPct * 100).toFixed(0) + '%';
    costVal.textContent = formatM(ac);

    // Update KPIs
    spiNum.textContent = spi.toFixed(2);
    cpiNum.textContent = cpi.toFixed(2);
    svNum.textContent = (sv >= 0 ? '+' : '') + formatM(sv);
    cvNum.textContent = (cv >= 0 ? '+' : '') + formatM(cv);
    if (eacNum) eacNum.textContent = formatM(eac);
    if (tcpiNum) tcpiNum.textContent = tcpi > 0 ? tcpi.toFixed(2) : 'N/A';

    // Status formatting & Card Colors
    updateCardStatus(spiCard, spi);
    updateCardStatus(cpiCard, cpi);
    updateDiagnosis(spi, cpi, sv, cv);

    // Draw S-Curve
    renderSCurve(bac, plannedPct, actualPct, ac / bac);
  }

  function updateCardStatus(card, indexVal) {
    if (!card) return;
    card.classList.remove('healthy', 'warning', 'danger');
    if (indexVal >= 1.0) {
      card.classList.add('healthy');
    } else if (indexVal >= 0.9) {
      card.classList.add('warning');
    } else {
      card.classList.add('danger');
    }
  }

  function updateDiagnosis(spi, cpi, sv, cv) {
    const lang = document.documentElement.getAttribute('lang') || 'fr';

    if (spi >= 1.0 && cpi >= 1.0) {
      if (lang === 'fr') {
        statusTitle.textContent = 'Performance Optimale (Ahead of Schedule & Under Budget)';
        statusText.textContent = `Projet exemplaire. Avance de planning (+${Math.abs(sv).toFixed(1)}M$) et économie budgétaire (+${Math.abs(cv).toFixed(1)}M$). Chemin critique sécurisé.`;
      } else {
        statusTitle.textContent = 'Optimal Performance (Ahead of Schedule & Under Budget)';
        statusText.textContent = `Exemplary delivery. Schedule lead (+${formatM(Math.abs(sv))}) and cost savings (+${formatM(Math.abs(cv))}). Critical path protected.`;
      }
    } else if (spi < 1.0 && cpi >= 1.0) {
      if (lang === 'fr') {
        statusTitle.textContent = 'Retard Planning sous Contrôle Budgétaire (Recovery Feasible)';
        statusText.textContent = `Retard sur le chemin critique (-${Math.abs(sv).toFixed(1)}M$). Recommandation : Affecter les marges de coûts à une accélération (fast-tracking / heures sup).`;
      } else {
        statusTitle.textContent = 'Schedule Delay with Cost Cushion (Recovery Feasible)';
        statusText.textContent = `Behind schedule on critical path (-${formatM(Math.abs(sv))}). Controls action: Reinvest cost buffer into fast-tracking and targeted acceleration.`;
      }
    } else if (spi >= 1.0 && cpi < 1.0) {
      if (lang === 'fr') {
        statusTitle.textContent = 'Avance Planning avec Dérive Budgétaire (Crashing Impact)';
        statusText.textContent = `Avance physique au détriment des coûts (-${Math.abs(cv).toFixed(1)}M$). Optimiser l'allocation d'équipes et auditer les surcoûts sous-traitants.`;
      } else {
        statusTitle.textContent = 'Ahead of Schedule with Cost Overrun (Crashing Impact)';
        statusText.textContent = `Physical acceleration causing budget bleed (-${formatM(Math.abs(cv))}). Audit subcontractor productivity and recalibrate shifts.`;
      }
    } else {
      if (lang === 'fr') {
        statusTitle.textContent = 'Alerte Risque Majeur : Dérive Délais & Coûts (Forensic Audit Requis)';
        statusText.textContent = `Retard critique (-${Math.abs(sv).toFixed(1)}M$) et dépassement budgétaire (-${Math.abs(cv).toFixed(1)}M$). Analyse Time Impact (TIA) et plan de sauvetage impératifs.`;
      } else {
        statusTitle.textContent = 'Critical Risk: Dual Delay & Cost Overrun (Forensic TIA Mandate)';
        statusText.textContent = `Severe critical path slippage (-${formatM(Math.abs(sv))}) and cost overrun (-${formatM(Math.abs(cv))}). Forensic Time Impact Analysis & recovery schedule required.`;
      }
    }
  }

  function renderSCurve(bac, plannedPct, actualPct, acPct) {
    if (!sCurveSvg) return;

    const w = 450;
    const h = 160;
    const pad = 25;
    const chartW = w - pad * 2;
    const chartH = h - pad * 2;

    const cutOffX = pad + chartW * 0.65; // Current data date at 65% of time

    // Generate Points for Baseline Planned S-Curve (0% to 100%)
    let pvPoints = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const x = pad + chartW * t;
      const progress = sigmoid(t);
      const y = h - pad - chartH * progress;
      pvPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    // Generate Actual Earned Value curve up to cutOffX
    let evPoints = [];
    const evSteps = 20;
    for (let i = 0; i <= evSteps; i++) {
      const t = (i / evSteps) * 0.65;
      const x = pad + chartW * t;
      const rawProgress = sigmoid(t);
      // scale towards actualPct at cutOff
      const scale = actualPct / sigmoid(0.65);
      const curP = rawProgress * scale;
      const y = h - pad - chartH * Math.min(1, curP);
      evPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    // Generate Actual Cost curve up to cutOffX
    let acPoints = [];
    for (let i = 0; i <= evSteps; i++) {
      const t = (i / evSteps) * 0.65;
      const x = pad + chartW * t;
      const rawProgress = sigmoid(t);
      const scale = acPct / sigmoid(0.65);
      const curP = rawProgress * scale;
      const y = h - pad - chartH * Math.min(1, curP);
      acPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    sCurveSvg.innerHTML = `
      <defs>
        <linearGradient id="gridGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.05)"/>
          <stop offset="100%" stop-color="transparent"/>
        </linearGradient>
      </defs>
      <!-- Background grid lines -->
      <line x1="${pad}" y1="${pad}" x2="${w - pad}" y2="${pad}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3 3"/>
      <line x1="${pad}" y1="${h/2}" x2="${w - pad}" y2="${h/2}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3 3"/>
      <line x1="${pad}" y1="${h - pad}" x2="${w - pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.15)"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h - pad}" stroke="rgba(255,255,255,0.15)"/>

      <!-- Data Date Cut-Off Line -->
      <line x1="${cutOffX}" y1="${pad}" x2="${cutOffX}" y2="${h - pad}" stroke="var(--text-accent)" stroke-width="1.5" stroke-dasharray="4 2"/>
      <text x="${cutOffX + 4}" y="${pad + 12}" fill="var(--text-accent)" font-size="9" font-family="monospace">DATA DATE</text>

      <!-- Baseline PV Curve (Blue) -->
      <polyline points="${pvPoints.join(' ')}" fill="none" stroke="#3b82f6" stroke-width="2.5" opacity="0.85"/>

      <!-- Actual EV Curve (Green) -->
      <polyline points="${evPoints.join(' ')}" fill="none" stroke="#10b981" stroke-width="3"/>

      <!-- Actual Cost AC Curve (Amber) -->
      <polyline points="${acPoints.join(' ')}" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="2 1"/>

      <!-- Cutoff End Dots -->
      <circle cx="${cutOffX}" cy="${evPoints[evPoints.length - 1].split(',')[1]}" r="4.5" fill="#10b981"/>
      <circle cx="${cutOffX}" cy="${acPoints[acPoints.length - 1].split(',')[1]}" r="4" fill="#f59e0b"/>
    `;
  }

  // Presets handling
  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      presetBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const preset = btn.getAttribute('data-preset');
      if (preset === 'optimal') {
        bacSlider.value = 1200;
        plannedSlider.value = 65;
        actualSlider.value = 68;
        costSlider.value = 760;
      } else if (preset === 'delay') {
        bacSlider.value = 1500;
        plannedSlider.value = 70;
        actualSlider.value = 56;
        costSlider.value = 880;
      } else if (preset === 'crisis') {
        bacSlider.value = 800;
        plannedSlider.value = 80;
        actualSlider.value = 52;
        costSlider.value = 580;
      } else if (preset === 'baseline') {
        bacSlider.value = 1200;
        plannedSlider.value = 50;
        actualSlider.value = 50;
        costSlider.value = 600;
      }
      updateEVM();
    });
  });

  // Slider events
  [bacSlider, plannedSlider, actualSlider, costSlider].forEach((slider) => {
    slider.addEventListener('input', () => {
      presetBtns.forEach((b) => b.classList.remove('active'));
      updateEVM();
    });
  });

  // Initial Calculation
  updateEVM();

  // Expose to window for language updates
  window.refreshEVM = updateEVM;
})();
