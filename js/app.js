/* ==========================================================================
   CV-PNO-PRO | PRESET B : APP LOGIC & COMPREHENSIVE BILINGUAL ENGINE
   Philippe NOUGOUE — Senior Planning Engineer & Project Controls Manager
   French & English Complete Dual-Market Implementation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. THEME SWITCHER (Dark <-> Light)
  // ------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('pno_theme') || 'dark';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pno_theme', theme);
    if (themeToggle) {
      themeToggle.innerHTML =
        theme === 'light'
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    }
  }

  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  // ------------------------------------------------------------------------
  // 2. BILINGUAL DICTIONARY & COMPLETE TRANSLATION SYSTEM (FR / EN)
  // ------------------------------------------------------------------------
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('pno_lang') || 'fr';

  const translations = {
    fr: {
      page_title: "Philippe NOUGOUE | Senior Planning Engineer & Project Controls Manager",
      nav_about: "À Propos",
      nav_experience: "Expérience",
      nav_evm: "Simulateur EVM",
      nav_skills: "Compétences",
      nav_portfolio: "Grands Projets",
      nav_education: "Formations & Certifications",
      nav_contact: "Contact",
      nav_download_cv: "Télécharger CV",

      // Hero
      status_badge: "DISPONIBLE IMMÉDIATEMENT • CAPEX > $8 Md (CUMUL 20 ANS)",
      hero_title_role: "Senior Planning Engineer & Project Controls Manager",
      hero_summary: "20+ années d’expertise éprouvée dans la gouvernance planning, coûts, risques et reporting sur mégaprojets <strong>EPC / EPCC / EPCM</strong> internationaux (Énergie, Oil & Gas, Hydroélectrique, Raffinerie, Pipeline & Offshore). Conseiller de confiance des Directeurs de Projet sur programmes jusqu'à <strong>12 000 activités P6</strong> et budgets jusqu'à <strong>2,5 milliards USD</strong>.",
      hero_btn_download_fr: "Télécharger CV (Français)",
      hero_btn_download_en: "Download CV (English)",
      hero_btn_whatsapp: "WhatsApp Direct",
      hero_btn_contact: "Me Contacter",
      hero_btn_sim: "Simulateur EVM",
      stat_exp: "Années d’Expérience",
      stat_portfolio: "Portefeuille Piloté (Cumul 20 ans)*",
      stat_max_proj: "Plus Gros Mégaprojet",
      stat_ims: "Activités IMS / P6",
      hero_stat_note: "* CAPEX des projets globaux ; périmètre de responsabilité détaillé sur demande.",

      // About
      about_tag: "MANIFESTE PROFESSIONNEL",
      about_title: "Maîtrise & Gouvernance des Mégaprojets",
      about_subtitle: "Conseiller stratégique des comités de direction et garant de l'intégrité contractuelle des délais et des coûts.",
      about_p1: "Senior Planning & Project Controls Manager disposant de <strong class='about-manifesto-highlight'>20+ ans d'expérience</strong> dans le pilotage de la gouvernance planning, coûts, risques et reporting sur des mégaprojets <strong>EPC / EPCC / EPCM</strong> dans les secteurs Énergie, Oil & Gas, Hydroélectrique, Raffinerie, Pipeline et Offshore — avec un portefeuille cumulé sur vingt ans supérieur à <strong class='about-manifesto-highlight'>8 milliards USD</strong> (CAPEX des projets globaux ; périmètre de responsabilité détaillé sur demande).",
      about_p2: "Certifié <strong>PMP® (n° 4125591)</strong> et <strong>Oracle Primavera P6 (Expert, 15+ ans)</strong>. Expérience confirmée de pilotage du Planning Directeur Intégré (IMS) sur des programmes allant jusqu'à <strong>~12 000 activités</strong> et <strong>3,4 M heures-homme</strong>, d'encadrement d'équipes Project Controls pluridisciplinaires, de mise en œuvre de la gouvernance <strong>Earned Value Management (EVM)</strong>, de pilotage des prévisions de délais et de coûts, et de production d'analyses exécutives via tableaux de bord <strong>Power BI</strong>.",
      about_p3: "Expertise reconnue en analyse du chemin critique (CPM), gouvernance qualité planning <strong>DCMA-14</strong>, analyse de risque probabiliste (QSRA), <strong>Time Impact Analysis (TIA)</strong>, dossiers de prolongation de délai (EOT) et substantiation des réclamations sous cadre <strong>FIDIC</strong> et <strong>SCL Delay & Disruption Protocol</strong>. Conseiller de confiance des Directeurs de Projet sur mégaprojets greenfield et brownfield, onshore et offshore. Français langue maternelle, anglais professionnel courant.",

      // Experience Timeline
      exp_tag: "PARCOURS SUR MÉGAPROJETS",
      exp_title: "Expérience Professionnelle Confirmée",
      exp_desc: "20 années de leadership sur les chantiers et directions de projets les plus exigeants de l'industrie mondiale.",
      tab_all: "Tous les Projets",
      tab_energy: "Énergie & Hydroélectrique",
      tab_oilgas: "Oil & Gas / Offshore",
      tab_infra: "Pipeline & Infrastructure",
      exp_highlights_label: "Responsabilités & Réalisations Clés :",

      // EVM Simulator
      evm_tag: "MOTEUR DE DIAGNOSTIC LIVE",
      evm_title: "Simulateur Interactif de Contrôle de Projet (EVM & S-Curve)",
      evm_desc: "Testez en temps réel la gouvernance Earned Value Management (SPI, CPI, Variances, prévisions EAC) selon les standards AACE, PMI et SCL Protocol.",
      evm_presets_label: "SCÉNARIOS TYPES :",
      evm_preset_optimal: "Projet Exemplaire (SPI > 1, CPI > 1)",
      evm_preset_delay: "Retard avec Marge Coûts",
      evm_preset_crisis: "Crise EPC / Claim Majeur",
      evm_preset_baseline: "Jalon Baseline Cible (1.00)",
      evm_bac_label: "Budget Global (BAC)",
      evm_bac_sub: "Budget at Completion (ex: Mégaprojet Nachtigal $1.2 Md)",
      evm_pv_label: "Avancement Planifié (PV %)",
      evm_pv_sub: "Valeur planifiée selon le Baseline Schedule P6",
      evm_ev_label: "Avancement Physique Réel (EV %)",
      evm_ev_sub: "Earned Value réelle mesurée sur site",
      evm_ac_label: "Coût Réel Engagé (AC)",
      evm_ac_sub: "Actual Cost of Work Performed à date",

      // Skills
      skills_tag: "MATRICE D'EXPERTISE",
      skills_title: "Compétences Clés & Outils Métier",
      skills_desc: "Une maîtrise méthodologique certifiée et forgée sur les plus grands programmes d'ingénierie et de construction.",
      skill_cat1_title: "Planification & Ordonnancement",
      skill_cat1_sub: "Oracle Primavera P6 (Expert 15+ ans)",
      skill_cat2_title: "Project Controls & EVM",
      skill_cat2_sub: "Valeur Acquise, Coûts & Délais",
      skill_cat3_title: "Reporting & Analytics",
      skill_cat3_sub: "Business Intelligence Exécutive",
      skill_cat4_title: "Gouvernance & Standards",
      skill_cat4_sub: "FIDIC, SCL Protocol & PMP®",

      // Skill levels (Named levels & seniority)
      skill_lvl_p6: "Certifié Expert • 15+ ans",
      skill_lvl_cpm: "Expertise Maître • 20 ans",
      skill_lvl_ims: "Pilotage Mégaprojets • 15+ ans",
      skill_lvl_dcma: "Audit Qualité & Conformité",
      skill_lvl_qsra: "Opérationnel Avancé • 10+ ans",
      skill_lvl_evm: "Référent Méthodologique • 15+ ans",
      skill_lvl_cost: "Contrôle de Gestion Projets • 15+ ans",
      skill_lvl_tia: "Spécialiste Forensic • 10+ ans",
      skill_lvl_eot: "Substantiation Contractuelle • 10+ ans",
      skill_lvl_change: "Gouvernance Éprouvée • 20 ans",
      skill_lvl_powerbi: "Opérationnel",
      skill_lvl_excel: "Opérationnel Avancé • 15+ ans",
      skill_lvl_mpr: "Standard Exécutif C-Level",
      skill_lvl_reporting: "Gouvernance Stratégique • 15+ ans",
      skill_lvl_fidic: "Pratique Contractuelle Approfondie",
      skill_lvl_scl: "Application Référentielle",
      skill_lvl_pmbok: "Certifié PMP® (PMI n° 4125591)",
      skill_lvl_lead: "Direction & Mentoring • 15+ ans",

      // Portfolio
      portfolio_tag: "PORTEFEUILLE INTERNATIONAL",
      portfolio_title: "Mégaprojets Phares (CAPEX > $8 Md cumul 20 ans)",
      portfolio_desc: "Sélection de réalisations emblématiques où la rigueur du contrôle de projet a sécurisé les jalons contractuels et la trajectoire budgétaire.",
      portfolio_disclaimer: "CAPEX des projets (cumul sur vingt ans) ; périmètre de responsabilité détaillé sur demande.",
      btn_project_details: "Détails & Stratégie",

      // Education & Certifications
      edu_tag: "FORMATIONS & CERTIFICATIONS",
      edu_title: "Qualifications Académiques & Accréditations",
      edu_desc: "Un socle académique d'excellence en ingénierie et management stratégique, appuyé par les certifications mondiales les plus rigoureuses.",
      edu_subtitle_academic: "Formations Universitaires & Postgraduates",
      edu_subtitle_cert: "Certifications Professionnelles Officielles",
      edu_subtitle_lead: "Leadership & Maîtrise Linguistique",

      // Leadership & Languages
      lead_title: "Leadership & Management d’Équipes",
      lead_item1: "Direction et coordination d’équipes Project Controls pluridisciplinaires (Lead Planners, Cost Engineers, Package Planners) sur des sites complexes.",
      lead_item2: "Gouvernance planning globale et synchronisation d'interfaces critiques sur packages simultanés (jusqu'à 4 sites offshore en parallèle).",
      lead_item3: "Interlocuteur de confiance et reporting auprès des Clients, Comités de Direction, Prêteurs internationaux et partenaires de Consortiums.",
      lead_item4: "Expertise en négociation contractuelle, gestion des litiges, instruction de claims et demandes d'Extension of Time (EOT) sous cadre FIDIC.",
      lead_item5: "Encadrement, mentoring et transfert de compétences méthodologiques pour l'élévation des équipes locales aux standards internationaux.",

      lang_title: "Compétences Linguistiques",
      lang_fr_name: "Français",
      lang_fr_desc: "Langue maternelle • Rédaction contractuelle et négociation fluide",
      lang_fr_level: "Langue Maternelle",
      lang_en_name: "Anglais",
      lang_en_desc: "Professionnel courant / Bilingue • Pratique quotidienne en environnements multinationaux depuis 2006 (GE Vernova, MODEC Japon, Foster Wheeler UK/USA)",
      lang_en_level: "Courant / Bilingue",

      // Contact
      contact_tag: "MANDATS & COLLABORATION",
      contact_title: "Engager une Collaboration",
      contact_desc: "Disponible immédiatement pour des mandats de Direction de Contrôle de Projets (Project Controls Manager / Director), Lead Planner Senior ou expertise forensic / EOT.",
      contact_box_title: "Coordonnées Directes",
      contact_box_desc: "Échange direct et confidentiel sous 24 heures pour toute opportunité de mégaprojet ou audit contractuel.",
      contact_label_email: "Email Professionnel",
      contact_label_phone: "Téléphone / WhatsApp",
      contact_label_mobility: "Langues & Mobilité",
      contact_val_mobility: "Français (maternelle) • Anglais courant • Mobile International",
      contact_tz_label: "Fuseau Horaire :",
      contact_cv_label: "Télécharger le CV Complet :",
      contact_form_title: "Envoyer un Message Direct",
      contact_form_intro: "Votre message sera transmis directement à <strong>philippe.nougoue@gmail.com</strong>.",
      form_label_name: "Nom & Prénom *",
      form_label_email: "Email Professionnel *",
      form_label_subject: "Intitulé du Projet / Mandat",
      form_label_message: "Périmètre & Besoins de la Mission *",
      btn_send: "Envoyer à Philippe NOUGOUE (Gmail Web)",
      btn_opt_outlook: "Outlook Web",
      btn_opt_app: "Logiciel Mail",
      btn_opt_copy: "Copier le message",
      success_title: "Message Prêt pour Philippe NOUGOUE",
      success_desc: "Votre interface de messagerie s'est ouverte avec l'adresse <strong>philippe.nougoue@gmail.com</strong> en destinataire et vos éléments pré-remplis.",
      btn_reopen_gmail: "Réouvrir Gmail Web",
      btn_new_message: "Rédiger un autre message",

      // Footer & Toasts
      footer_copy: "© 2026 <strong>Philippe NOUGOUE</strong> • Senior Planning Engineer & Project Controls Manager.",
      footer_creds: "PMP® n° 4125591 • Oracle Primavera P6 Certified Expert.",
      footer_status: "Disponible pour mission • En ligne",
      footer_capex_note: "* Les montants CAPEX indiqués représentent les budgets des projets globaux (cumul 20 ans) ; périmètre de responsabilité détaillé sur demande.",
      toast_copied: "Copié dans le presse-papier !",
      toast_download_fr: "Téléchargement du CV de Philippe NOUGOUE (Français - PDF)...",
      toast_download_en: "Téléchargement du CV de Philippe NOUGOUE (Anglais - PDF)..."
    },

    en: {
      page_title: "Philippe NOUGOUE | Senior Planning Engineer & Project Controls Manager",
      nav_about: "About",
      nav_experience: "Experience",
      nav_evm: "EVM Engine",
      nav_skills: "Core Competencies",
      nav_portfolio: "Mega-Projects",
      nav_education: "Education & Certifications",
      nav_contact: "Contact",
      nav_download_cv: "Download Resume",

      // Hero
      status_badge: "AVAILABLE IMMEDIATELY • CAPEX > $8B (20-YR CUMULATIVE)",
      hero_title_role: "Senior Planning Engineer & Project Controls Manager",
      hero_summary: "20+ years of distinguished expertise delivering schedule governance, cost control, risk mitigation, and executive reporting across international <strong>EPC / EPCC / EPCM</strong> mega-projects (Energy, Oil & Gas, Hydropower, Refining, Pipeline & Offshore). Trusted advisor to Project Directors on programs up to <strong>12,000 P6 activities</strong> and single capital expenditures up to <strong>2.5 billion USD</strong>.",
      hero_btn_download_fr: "Télécharger CV (Français)",
      hero_btn_download_en: "Download Resume (English)",
      hero_btn_whatsapp: "WhatsApp Direct",
      hero_btn_contact: "Contact Me",
      hero_btn_sim: "Live EVM Engine",
      stat_exp: "Years Experience",
      stat_portfolio: "Portfolio Managed (20-yr Cumul.)*",
      stat_max_proj: "Largest Single Mega-Project",
      stat_ims: "Activities IMS / P6",
      hero_stat_note: "* Overall project CAPEX; detailed scope of responsibility available upon request.",

      // About
      about_tag: "PROFESSIONAL MANIFESTO",
      about_title: "Mega-Projects Governance & Leadership",
      about_subtitle: "Strategic advisor to Steering Committees, safeguarding contractual schedule integrity and cost certainty.",
      about_p1: "Senior Planning & Project Controls Manager with <strong class='about-manifesto-highlight'>20+ years of proven leadership</strong> steering project schedule governance, cost engineering, quantitative risk, and reporting across multi-billion <strong>EPC / EPCC / EPCM</strong> mega-projects in Energy, Oil & Gas, Hydropower, Refining, Pipeline, and Offshore sectors — with a 20-year cumulative CAPEX portfolio exceeding <strong class='about-manifesto-highlight'>8 billion USD</strong> (overall project CAPEX; detailed scope of responsibility available upon request).",
      about_p2: "Certified <strong>PMP® (License #4125591)</strong> and <strong>Oracle Primavera P6 (Expert, 15+ years)</strong>. Demonstrated track record developing and controlling Integrated Master Schedules (IMS) containing up to <strong>~12,000 activities</strong> and <strong>3.4M man-hours</strong>, managing multi-disciplinary Project Controls teams, implementing <strong>Earned Value Management (EVM)</strong> systems, forecasting costs/delays, and delivering executive insights via automated <strong>Power BI</strong> dashboards.",
      about_p3: "Recognized authority in Critical Path Method (CPM), <strong>DCMA-14</strong> schedule health metrics, Quantitative Schedule Risk Analysis (QSRA Monte Carlo), <strong>Time Impact Analysis (TIA)</strong>, Extension of Time (EOT) claim substantiation under <strong>FIDIC</strong> contracts and the <strong>SCL Delay & Disruption Protocol</strong>. Native French, fluent professional English. Immediately available for international assignments.",

      // Experience Timeline
      exp_tag: "MEGA-PROJECTS TRACK RECORD",
      exp_title: "Confirmed Professional Experience",
      exp_desc: "Two decades of high-impact leadership across the most demanding industrial and energy ventures worldwide.",
      tab_all: "All Projects",
      tab_energy: "Energy & Hydropower",
      tab_oilgas: "Oil & Gas / Offshore",
      tab_infra: "Pipeline & Infrastructure",
      exp_highlights_label: "Key Responsibilities & Measurable Impact:",

      // EVM Simulator
      evm_tag: "LIVE DIAGNOSTIC ENGINE",
      evm_title: "Interactive Project Controls Simulator (EVM & S-Curve)",
      evm_desc: "Simulate real-time Earned Value Management governance (SPI, CPI, Variances, EAC forecasts) adhering to global AACE, PMI, and SCL Protocol standards.",
      evm_presets_label: "STANDARD SCENARIOS:",
      evm_preset_optimal: "Exemplary Run (SPI > 1, CPI > 1)",
      evm_preset_delay: "Schedule Delay with Cost Buffer",
      evm_preset_crisis: "EPC Crisis / Major Claim Alert",
      evm_preset_baseline: "Target Baseline Milestone (1.00)",
      evm_bac_label: "Budget at Completion (BAC)",
      evm_bac_sub: "Total contractual budget (e.g., Nachtigal $1.2B)",
      evm_pv_label: "Planned Progress (PV %)",
      evm_pv_sub: "Scheduled baseline value according to P6",
      evm_ev_label: "Actual Physical Progress (EV %)",
      evm_ev_sub: "Real earned physical progress achieved on-site",
      evm_ac_label: "Actual Cost (AC)",
      evm_ac_sub: "Actual Cost of Work Performed to date",

      // Skills
      skills_tag: "COMPETENCY MATRIX",
      skills_title: "Core Expertise & Software Suite",
      skills_desc: "Certified methodological excellence forged across world-class engineering, procurement, and construction programs.",
      skill_cat1_title: "Scheduling & Critical Path",
      skill_cat1_sub: "Oracle Primavera P6 (Expert 15+ years)",
      skill_cat2_title: "Project Controls & EVM",
      skill_cat2_sub: "Earned Value, Cost & Schedule Forecasting",
      skill_cat3_title: "Reporting & Analytics",
      skill_cat3_sub: "Executive Business Intelligence",
      skill_cat4_title: "Governance & Contractual Frameworks",
      skill_cat4_sub: "FIDIC, SCL Protocol & PMP®",

      // Skill levels (Named levels & seniority)
      skill_lvl_p6: "Certified Expert • 15+ yrs",
      skill_lvl_cpm: "Master Level • 20 yrs",
      skill_lvl_ims: "Mega-Projects Lead • 15+ yrs",
      skill_lvl_dcma: "Quality Audit & Compliance",
      skill_lvl_qsra: "Advanced Operational • 10+ yrs",
      skill_lvl_evm: "Methodological Authority • 15+ yrs",
      skill_lvl_cost: "Cost Control & Forecasting • 15+ yrs",
      skill_lvl_tia: "Forensic Specialist • 10+ yrs",
      skill_lvl_eot: "Contractual Claims Defense • 10+ yrs",
      skill_lvl_change: "Proven Governance • 20 yrs",
      skill_lvl_powerbi: "Operational",
      skill_lvl_excel: "Advanced Operational • 15+ yrs",
      skill_lvl_mpr: "C-Level Executive Reporting",
      skill_lvl_reporting: "Strategic Governance • 15+ yrs",
      skill_lvl_fidic: "Contractual Practice Mastery",
      skill_lvl_scl: "Benchmark Implementation",
      skill_lvl_pmbok: "PMP® Credential (PMI #4125591)",
      skill_lvl_lead: "Team Direction & Mentoring • 15+ yrs",

      // Portfolio
      portfolio_tag: "INTERNATIONAL PORTFOLIO",
      portfolio_title: "Signature Mega-Projects (CAPEX > $8B 20-yr Cumul.)",
      portfolio_desc: "Curated selection of iconic programs where project controls rigor safeguarded contractual milestones and commercial recovery.",
      portfolio_disclaimer: "Project CAPEX (20-year cumulative); detailed scope of responsibility available upon request.",
      btn_project_details: "Strategy & Details",

      // Education & Certifications
      edu_tag: "EDUCATION & CREDENTIALS",
      edu_title: "Academic Background & Professional Certifications",
      edu_desc: "A rigorous foundation in engineering and executive management, complemented by the industry's highest international credentials.",
      edu_subtitle_academic: "University Degrees & Postgraduate Diplomas",
      edu_subtitle_cert: "Official Professional Certifications",
      edu_subtitle_lead: "Leadership Capabilities & Languages",

      // Leadership & Languages
      lead_title: "Leadership & Team Management",
      lead_item1: "Direction and empowerment of multi-disciplinary Project Controls teams (Lead Planners, Cost Engineers, Package Planners) on complex operational sites.",
      lead_item2: "Global schedule governance and critical interface management across concurrent packages (up to 4 offshore sites in parallel).",
      lead_item3: "Trusted executive liaison and reporting to Project Directors, Steering Committees, International Lenders, and Consortium Partners.",
      lead_item4: "Advanced competence in contractual negotiations, dispute mitigation, claim substantiation, and Extension of Time (EOT) defense under FIDIC.",
      lead_item5: "Active mentoring, knowledge transfer, and upskilling of national teams to international benchmark standards.",

      lang_title: "Language Proficiency",
      lang_fr_name: "French",
      lang_fr_desc: "Native speaker • Flawless contractual drafting, high-stakes negotiation, and executive presentation",
      lang_fr_level: "Native Language",
      lang_en_name: "English",
      lang_en_desc: "Fluent professional / Bilingual • Daily working language in international consortiums since 2006 (GE Vernova, MODEC Japan, Foster Wheeler UK/USA)",
      lang_en_level: "Fluent / Bilingual",

      // Contact
      contact_tag: "ENGAGEMENT & ADVISORY",
      contact_title: "Initiate a Senior Mandate",
      contact_desc: "Immediately available for Project Controls Manager / Director mandates, Senior Lead Planning roles, and Forensic Delay / EOT claim substantiation worldwide.",
      contact_box_title: "Direct Contact Information",
      contact_box_desc: "Confidential direct response within 24 hours for any mega-project role or contract advisory audit.",
      contact_label_email: "Professional Email",
      contact_label_phone: "Phone / WhatsApp",
      contact_label_mobility: "Languages & Mobility",
      contact_val_mobility: "French (Native) • English (Fluent) • Worldwide Mobility",
      contact_tz_label: "Current Time Zone:",
      contact_cv_label: "Download Full Resume:",
      contact_form_title: "Send a Direct Message",
      contact_form_intro: "Your inquiry will be addressed directly to <strong>philippe.nougoue@gmail.com</strong>.",
      form_label_name: "Full Name *",
      form_label_email: "Work Email *",
      form_label_subject: "Project / Mandate Subject",
      form_label_message: "Mandate Scope & Requirements *",
      btn_send: "Send to Philippe NOUGOUE (Gmail Web)",
      btn_opt_outlook: "Outlook Web",
      btn_opt_app: "Mail Client",
      btn_opt_copy: "Copy Message",
      success_title: "Inquiry Prepared for Philippe NOUGOUE",
      success_desc: "Your email composer has opened with <strong>philippe.nougoue@gmail.com</strong> as recipient and your details pre-filled.",
      btn_reopen_gmail: "Reopen Gmail Web",
      btn_new_message: "Write Another Message",

      // Footer & Toasts
      footer_copy: "© 2026 <strong>Philippe NOUGOUE</strong> • Senior Planning Engineer & Project Controls Manager.",
      footer_creds: "PMP® Lic. #4125591 • Oracle Primavera P6 Certified Expert.",
      footer_status: "Available for Immediate Mandates • Online",
      footer_capex_note: "* The stated CAPEX figures represent overall project budgets (20-year cumulative); detailed scope of responsibility available upon request.",
      toast_copied: "Copied to clipboard!",
      toast_download_fr: "Downloading Philippe NOUGOUE's French Resume (PDF)...",
      toast_download_en: "Downloading Philippe NOUGOUE's English Resume (PDF)..."
    }
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pno_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    if (langToggle) {
      langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    if (translations[lang] && translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }

    // Apply all data-i18n translations
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (lang === 'fr') {
      nameInput?.setAttribute('placeholder', 'Ex: Jean Dupont');
      emailInput?.setAttribute('placeholder', 'Ex: direction@consortium-epc.com');
      subjectInput?.setAttribute('placeholder', 'Ex: Direction Project Controls — Mégaprojet Gaz / Énergie');
      messageInput?.setAttribute('placeholder', 'Précisez la taille du projet, la localisation, les outils exigés et les dates souhaitées...');
    } else {
      nameInput?.setAttribute('placeholder', 'E.g., John Smith');
      emailInput?.setAttribute('placeholder', 'E.g., director@epc-consortium.com');
      subjectInput?.setAttribute('placeholder', 'E.g., Project Controls Director — Hydropower / O&G Program');
      messageInput?.setAttribute('placeholder', 'Specify project scale, location, required tools, and timeline...');
    }

    // Synchronize Download CV buttons with language
    const navCvBtn = document.getElementById('nav-download-cv');
    if (navCvBtn) {
      if (lang === 'fr') {
        navCvBtn.setAttribute('href', 'assets/cv/CV_Philippe_NOUGOUE_FR.pdf');
        navCvBtn.setAttribute('download', 'CV_Philippe_NOUGOUE_FR.pdf');
        navCvBtn.setAttribute('title', 'Télécharger le CV de Philippe NOUGOUE (Français - PDF)');
      } else {
        navCvBtn.setAttribute('href', 'assets/cv/CV_Philippe_NOUGOUE_EN.pdf');
        navCvBtn.setAttribute('download', 'CV_Philippe_NOUGOUE_EN.pdf');
        navCvBtn.setAttribute('title', 'Download Philippe NOUGOUE Resume (English - PDF)');
      }
    }

    const heroCvFr = document.getElementById('hero-download-fr');
    const heroCvEn = document.getElementById('hero-download-en');
    if (heroCvFr && heroCvEn) {
      if (lang === 'fr') {
        heroCvFr.className = 'btn btn-primary hero-btn-cv hero-btn-cv-fr';
        heroCvEn.className = 'btn btn-secondary hero-btn-cv hero-btn-cv-en';
      } else {
        heroCvEn.className = 'btn btn-primary hero-btn-cv hero-btn-cv-en';
        heroCvFr.className = 'btn btn-secondary hero-btn-cv hero-btn-cv-fr';
      }
    }

    // Refresh EVM simulator texts
    if (window.refreshEVM) {
      window.refreshEVM();
    }
  }

  setLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  // ------------------------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & MOBILE MENU
  // ------------------------------------------------------------------------
  const navbarPill = document.querySelector('.navbar-pill');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbarPill?.classList.add('scrolled');
    } else {
      navbarPill?.classList.remove('scrolled');
    }
  });

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 4. TIMELINE FILTER TABS
  // ------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      timelineItems.forEach((item) => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 5. LIVE LOCAL TIMEZONE CLOCK
  // ------------------------------------------------------------------------
  const tzClock = document.getElementById('tz-clock');
  function updateClock() {
    if (!tzClock) return;
    const now = new Date();
    const options = { timeZone: 'Africa/Douala', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    tzClock.textContent = now.toLocaleTimeString('fr-FR', options) + ' WAT (UTC+1)';
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ------------------------------------------------------------------------
  // 6. TOAST NOTIFICATIONS
  // ------------------------------------------------------------------------
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
    const toastSpan = document.createElement('span');
    toastSpan.textContent = message;
    toast.appendChild(toastSpan);

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // 7. ONE-CLICK CLIPBOARD COPY
  // ------------------------------------------------------------------------
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy');
      if (navigator.clipboard && targetText) {
        navigator.clipboard.writeText(targetText).then(() => {
          showToast(translations[currentLang].toast_copied);
        });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. DOWNLOAD CV NOTIFICATIONS & PRINT TRIGGER
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[download]').forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      const isFr = href.includes('_FR.');
      const toastMsg = isFr
        ? (translations[currentLang]?.toast_download_fr || "Téléchargement du CV (Français - PDF)...")
        : (translations[currentLang]?.toast_download_en || "Downloading Resume (English - PDF)...");
      showToast(toastMsg);
    });
  });

  document.querySelectorAll('.trigger-print-cv').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(translations[currentLang]?.toast_print || "Impression...");
      setTimeout(() => {
        window.print();
      }, 500);
    });
  });

  // ------------------------------------------------------------------------
  // 9. MODAL DETAILED CASE STUDIES (BILINGUAL)
  // ------------------------------------------------------------------------
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-body-content');

  const projectDetails = {
    nachtigal: {
      fr: {
        title: 'Centrale Hydroélectrique Nachtigal EPCC (420 MW)',
        client: 'NHPC | Consortium GE Vernova (Leader) & Elecnor',
        capex: '$1.2 Md USD (Projet global)',
        role: 'Lead Planning & Project Controls Manager',
        scope: 'Mégaprojet greenfield EPCC, Lot EM1 Électromécanique, Planning Directeur Intégré (IMS) de ~12 000 activités P6, baseline de 3 427 016 heures-homme.',
        challenges: 'Interfaces critiques entre génie civil lourd (barrage, usine) et montage hydro-mécanique sous fortes contraintes de crues fluviales.',
        solution: 'Pilotage rigoureux du chemin critique CPM, gouvernance hebdomadaire EVM (SPI cumulé 0,93, CPI 0,98) et instruction méthodique d’une demande d’Extension of Time (EOT) de 49 jours calendaires entièrement substantiée sous clauses FIDIC 8.4/8.5/20.1 et SCL Delay Protocol.',
        result: 'Baseline de 3 427 016 heures-homme et ~12 000 activités P6 maîtrisée. Sécurisation de la mise en service et des jalons d’injection réseau. Reporting exécutif Power BI adopté par le comité de pilotage NHPC et les prêteurs internationaux.'
      },
      en: {
        title: 'Nachtigal Hydropower Plant EPCC (420 MW)',
        client: 'NHPC | GE Vernova (Consortium Leader) & Elecnor',
        capex: '$1.2B USD (Overall Project)',
        role: 'Lead Planning & Project Controls Manager',
        scope: 'Greenfield EPCC mega-project, Electro-Mechanical Package EM1, Integrated Master Schedule (IMS) comprising ~12,000 P6 activities, contractual baseline of 3,427,016 man-hours.',
        challenges: 'Critical interfaces between civil engineering (dam, powerhouse) and hydro-mechanical installation with river flood seasonal constraints.',
        solution: 'Rigorous Critical Path Method (CPM) governance, weekly EVM cadence (cumulative SPI 0.93, CPI 0.98), and robust substantiation of a 49-day Extension of Time (EOT) claim under FIDIC 8.4/8.5/20.1 and SCL Protocol.',
        result: 'Baseline of 3,427,016 man-hours and ~12,000 P6 activities controlled. Commercial operation milestones secured and Power BI executive analytics adopted by Project Steering Committee and International Lenders.'
      }
    },
    congo_portfolio: {
      fr: {
        title: 'Portefeuille Offshore TotalEnergies Congo (4 Packages Simultanés)',
        client: 'TotalEnergies EP Congo',
        capex: '$1.5 Md+ USD (Portefeuille global)',
        role: 'Senior Planning Lead — Contrôle de portefeuille multi-packages',
        scope: '4 packages majeurs simultanés : ALIMA, NKOSSA, SENDJI, DJENO en environnement brownfield offshore.',
        challenges: 'Simultanéité d’opérations sur plateformes en production, logistique maritime complexe et arrêts techniques programmés.',
        solution: 'Modélisation intégrée des ressources, nivellement des équipes spécialisées offshore, gouvernance Project Controls standardisée et surveillance continue des tendances de coûts.',
        result: 'Moins de 3 % de dérive planning consolidée sur l’ensemble des quatre lots offshore TotalEnergies Congo sur un portefeuille de 1,5 Md USD+, optimisation des campagnes maritimes et gouvernance saluée par la direction filiale.'
      },
      en: {
        title: 'TotalEnergies Congo Offshore Portfolio (4 Concurrent Packages)',
        client: 'TotalEnergies EP Congo',
        capex: '$1.5B+ USD (Portfolio Scope)',
        role: 'Senior Planning Lead — Multi-Package Portfolio Controls',
        scope: '4 concurrent offshore packages: ALIMA, NKOSSA, SENDJI, DJENO in brownfield offshore operational environments.',
        challenges: 'Simultaneous operations on live producing platforms, complex marine logistics, and strict turnaround windows.',
        solution: 'Integrated multi-site resource modeling, leveling of offshore specialized crews, standardized controls across contractors, and proactive cost variance monitoring.',
        result: 'Less than 3% schedule variance across all four TotalEnergies Congo offshore packages on a $1.5B+ portfolio, with predictive schedule governance praised by TotalEnergies executive management.'
      }
    },
    perenco_pipeline: {
      fr: {
        title: 'Pipeline Onshore/Offshore 100 km EPC',
        client: 'Perenco Cameroun',
        capex: '$600 M USD (Projet global)',
        role: 'Planning Manager',
        scope: 'Greenfield EPC sur 33 mois, pose de pipeline gazier/pétrolier haute pression reliant installations de traitement et terminal.',
        challenges: 'Passages environnementaux délicats, raccordements sous-marins et fenêtres météo côtières strictes.',
        solution: 'Planning Primavera P6 phasé Niveau 4 avec contrôle rigoureux des cadences de pose, soudage et ensouillage, et gestion proactive des Change Orders.',
        result: 'Pipeline de 100 km livré dans les délais contractuels sur 33 mois, avec une conformité HSE maintenue au-dessus de 98 % et zéro réclamation de tiers non résolue.'
      },
      en: {
        title: '100 km Onshore/Offshore Pipeline EPC',
        client: 'Perenco Cameroon',
        capex: '$600M USD (Overall Project)',
        role: 'Planning Manager',
        scope: '33-month greenfield EPC project, high-pressure oil and gas export pipeline connecting processing facilities to marine terminal.',
        challenges: 'Sensitive environmental crossings, subsea tie-ins, and strict coastal marine weather windows.',
        solution: 'Level 4 phased Primavera P6 schedule controls with proactive daily tracking of pipe-laying, welding, and dredging rates, plus proactive Change Management.',
        result: '100 km pipeline delivered on schedule over 33 months, with HSE compliance maintained above 98% and zero unsettled third-party claims.'
      }
    },
    anguille: {
      fr: {
        title: 'Redéveloppement Centrale Électrique Anguille',
        client: 'TotalEnergies Gabon (Port-Gentil)',
        capex: '$2.5 Md USD',
        role: 'Ingénieur Projet & Planning',
        scope: 'Mégaprojet brownfield offshore/onshore visant l’augmentation pérenne de production et l’alimentation électrique sécurisée.',
        challenges: 'Travaux à chaud en milieu pétrolier en exploitation continue.',
        solution: 'Ordonnancement précis des phases de raccordement électrique (tie-ins) et alignement des sous-traitants.',
        result: 'Jalons de raccordement atteints sans impact sur la production de base.'
      },
      en: {
        title: 'Anguille Power Plant Redevelopment Mega-Project',
        client: 'TotalEnergies Gabon (Port-Gentil)',
        capex: '$2.5B USD',
        role: 'Project & Planning Engineer',
        scope: 'Brownfield offshore/onshore mega-program securing long-term power generation for mature oil fields.',
        challenges: 'Live hot work in continuous oil-producing facility with strict permit-to-work protocols.',
        solution: 'Detailed scheduling of electrical tie-ins and shutdown sequences with rigorous contractor alignment.',
        result: 'All major tie-in milestones achieved with zero unplanned disruption to baseline hydrocarbon output.'
      }
    },
    sonara: {
      fr: {
        title: 'Arrêt Technique Raffinerie SONARA (TAR)',
        client: 'Foster Wheeler / Friedlander / SONARA',
        capex: '$600 M USD',
        role: 'Ingénieur Projet & Planning',
        scope: 'Grand arrêt technique de maintenance lourde et modernisation des unités de distillation.',
        challenges: 'Exécution 24/7 sur un calendrier ultra-tendu avec plusieurs milliers d’intervenants.',
        solution: 'Suivi horaire sous Primavera P6, courbes en S de productivité et réunions de crise de chemin critique journalières.',
        result: 'Redémarrage réussi des unités dans la fenêtre planifiée.'
      },
      en: {
        title: 'SONARA Refinery Turnaround & Revamp (TAR)',
        client: 'Foster Wheeler / Friedlander / SONARA',
        capex: '$600M USD',
        role: 'Project & Planning Engineer',
        scope: 'Major refinery turnaround, heavy maintenance overhaul, and distillation units modernization.',
        challenges: 'High-intensity 24/7 execution window mobilizing thousands of multi-craft technicians.',
        solution: 'Hourly Primavera P6 scheduling, daily S-curve craft productivity tracking, and critical path crisis meetings.',
        result: 'Flawless safe restart of refinery processing units within allocated shutdown window.'
      }
    },
    fpso_modec: {
      fr: {
        title: 'Commissioning FPSO MV21 Kwame Nkrumah',
        client: 'MODEC (Japon) / ORSAM Oil & Gas (Offshore Ghana)',
        capex: '$250 M USD',
        role: 'Ingénieur Projet & Planning',
        scope: 'Unité flottante de production, stockage et déchargement (FPSO) de pétrole et gaz.',
        challenges: 'Phase finale de pré-commissioning et commissioning offshore avec interfaces multi-systèmes.',
        solution: 'Coordination intégrée des sous-systèmes critiques et suivi strict des punch-lists.',
        result: 'First Oil atteint dans les conditions de sécurité maximales.'
      },
      en: {
        title: 'FPSO MV21 Kwame Nkrumah Commissioning',
        client: 'MODEC (Japan) / ORSAM Oil & Gas (Offshore Ghana)',
        capex: '$250M USD',
        role: 'Project & Planning Engineer',
        scope: 'Deepwater Floating Production Storage and Offloading (FPSO) oil and gas vessel.',
        challenges: 'Multi-system offshore pre-commissioning, systems energization, and punch-list closeout.',
        solution: 'Integrated critical subsystem milestone coordination and daily punch-list clearance dashboards.',
        result: 'Successful First Oil milestone achieved with uncompromised marine safety standards.'
      }
    }
  };

  document.querySelectorAll('.open-project-modal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project');
      const dataGroup = projectDetails[pid];
      if (!dataGroup || !modalContent) return;

      const data = dataGroup[currentLang] || dataGroup.fr;
      const auditedBadge = currentLang === 'fr' ? 'GOUVERNANCE AUDITÉE' : 'AUDITED GOVERNANCE';
      const scopeLabel = currentLang === 'fr' ? 'Périmètre & WBS / IMS :' : 'Scope & WBS / IMS:';
      const chalLabel = currentLang === 'fr' ? 'Défis Techniques & Risques Planning :' : 'Technical Challenges & Schedule Risks:';
      const solLabel = currentLang === 'fr' ? 'Stratégie Project Controls & Gouvernance :' : 'Project Controls Strategy & Governance:';
      const resLabel = currentLang === 'fr' ? 'Résultats & Impact Mesurable :' : 'Measurable Impact & Results:';

      modalContent.innerHTML = `
        <div style="margin-bottom: 22px;">
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <span class="mono-badge">${data.capex}</span>
            <span class="mono-badge" style="color: var(--status-success);">${auditedBadge}</span>
          </div>
          <h2 style="font-size: 1.6rem; margin-top: 6px; color: var(--text-primary);">${data.title}</h2>
          <p style="color: var(--accent-gold); font-weight: 600; font-size: 0.95rem; margin-top: 4px;">${data.client} — <em>${data.role}</em></p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px; font-size: 0.94rem; line-height: 1.7;">
          <div style="background: var(--bg-primary); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">${scopeLabel}</strong>
            <span>${data.scope}</span>
          </div>
          <div>
            <strong style="color: var(--status-danger);">${chalLabel}</strong>
            <p>${data.challenges}</p>
          </div>
          <div>
            <strong style="color: var(--accent-gold);">${solLabel}</strong>
            <p>${data.solution}</p>
          </div>
          <div style="border-left: 3px solid var(--accent-gold); padding-left: 14px; margin-top: 6px;">
            <strong style="color: var(--accent-gold);">${resLabel}</strong>
            <p style="color: var(--text-primary); font-weight: 500;">${data.result}</p>
          </div>
        </div>
      `;

      modalOverlay?.classList.add('active');
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // ------------------------------------------------------------------------
  // 10. CONTACT FORM — FAILSAFE MULTI-CHANNEL DISPATCH
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success-box');
  const linkReopenGmail = document.getElementById('link-reopen-gmail');
  const btnResetForm = document.getElementById('btn-reset-form');
  const btnSendOutlook = document.getElementById('btn-send-outlook');
  const btnSendApp = document.getElementById('btn-send-app');
  const btnCopyForm = document.getElementById('btn-copy-form');

  function getFormPayload() {
    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const subject = document.getElementById('form-subject')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      showToast(
        currentLang === 'fr'
          ? 'Veuillez remplir les champs obligatoires (Nom, Email, Message).'
          : 'Please fill out required fields (Name, Email, Message).'
      );
      return null;
    }

    const recipient = 'philippe.nougoue@gmail.com';
    const fullSubject = `[Mandat Mégaprojet] ${subject || 'Contact Professionnel Philippe NOUGOUE'}`;
    const fullBody = `Bonjour Philippe,\n\n${message}\n\n---\nCoordonnées du contact :\nNom : ${name}\nEmail : ${email}${subject ? `\nProjet / Mandat : ${subject}` : ''}\n\n(Envoyé depuis votre site CV Exécutif)`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(fullBody)}`;

    return { name, email, subject, message, recipient, fullSubject, fullBody, gmailUrl, outlookUrl, mailtoUrl };
  }

  function triggerSafeMailto(mailtoUrl) {
    // Hidden detached anchor prevents browser from navigating away or opening about:blank
    const safeLink = document.createElement('a');
    safeLink.href = mailtoUrl;
    safeLink.style.display = 'none';
    document.body.appendChild(safeLink);
    safeLink.click();
    setTimeout(() => {
      if (document.body.contains(safeLink)) safeLink.remove();
    }, 300);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const payload = getFormPayload();
      if (!payload) return;

      // 1. Open Gmail Web in new tab with noopener & noreferrer
      window.open(payload.gmailUrl, '_blank', 'noopener,noreferrer');

      // 2. Also trigger safe mailto in background in case desktop client is preferred
      triggerSafeMailto(payload.mailtoUrl);

      // 3. Show in-page success confirmation
      if (successBox) {
        successBox.style.display = 'block';
        if (linkReopenGmail) linkReopenGmail.href = payload.gmailUrl;
        contactForm.style.display = 'none';
      }

      showToast(
        currentLang === 'fr'
          ? 'Messagerie ouverte à destination de philippe.nougoue@gmail.com !'
          : 'Email composer opened for philippe.nougoue@gmail.com!'
      );
    });
  }

  if (btnSendOutlook) {
    btnSendOutlook.addEventListener('click', () => {
      const payload = getFormPayload();
      if (!payload) return;
      window.open(payload.outlookUrl, '_blank', 'noopener,noreferrer');
      showToast(
        currentLang === 'fr'
          ? 'Ouverture d\'Outlook Web...'
          : 'Opening Outlook Web...'
      );
    });
  }

  if (btnSendApp) {
    btnSendApp.addEventListener('click', () => {
      const payload = getFormPayload();
      if (!payload) return;
      triggerSafeMailto(payload.mailtoUrl);
      showToast(
        currentLang === 'fr'
          ? 'Ouverture de votre messagerie...'
          : 'Opening your default mail app...'
      );
    });
  }

  if (btnCopyForm) {
    btnCopyForm.addEventListener('click', () => {
      const payload = getFormPayload();
      if (!payload) return;
      const textToCopy = `À : ${payload.recipient}\nObjet : ${payload.fullSubject}\n\n${payload.fullBody}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(
          currentLang === 'fr'
            ? 'Message et email copiés dans le presse-papiers !'
            : 'Message and email copied to clipboard!'
        );
      });
    });
  }

  if (btnResetForm) {
    btnResetForm.addEventListener('click', () => {
      if (successBox) successBox.style.display = 'none';
      if (contactForm) {
        contactForm.style.display = 'block';
        contactForm.reset();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 11. PDF RESUME DOWNLOAD TOAST NOTIFICATIONS
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href$=".pdf"]').forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      const isEnglish = href.includes('_EN.pdf');
      const message = isEnglish
        ? (translations[currentLang]?.toast_download_en || "Downloading English Resume (PDF)...")
        : (translations[currentLang]?.toast_download_fr || "Téléchargement du CV en Français (PDF)...");
      showToast(message);
    });
  });
});

