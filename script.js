/* ---------- content you can edit ---------- */
// Fill these in and the icons/buttons appear automatically. Empty = hidden.
const LINKS = {
  github: "",
  linkedin: "",  // e.g. "https://www.linkedin.com/in/your-name"
  fiverr: "https://www.fiverr.com/realswimo",
  email: "co.easier54@gmail.com"
};

// Contact form. Messages go straight to the inbox through Web3Forms (the address is kept on their side, not in this page).
const FORM = { web3formsKey: "590d124e-53cb-40bd-adbe-77ecc089fff2" };

// shots: [["folder/file-name-without-ext", "Caption"], ...] -> files live in assets/<folder>/<file>.jpg
// Leave empty until the screens are chosen. Buttons and the gallery appear automatically once there are some.
const PROJECTS = [
  {
    group: "pro",
    name: "Smart Lock",
    kind: "IoT access control",
    status: "Internship project · Yoorika",
    short: "Smart door lock with fingerprint, PIN and RFID, managed from a web app.",
    summary: "A smart door lock system combining physical authentication (fingerprint, PIN, RFID) with a web app to supervise every entry and exit.",
    card: "assets/smartlock/01-sign-in.jpg",
    bg: "assets/blur/smartlock-sign-in.jpg",
    need: "Physical access has to be controlled and traceable: who entered, when, and with which method.",
    role: "Full stack developer during my internship: admin dashboard, user management, access history and the extensible architecture.",
    points: [
      "Remote lock / unlock with automatic re-lock",
      "User management with active / inactive status",
      "Personal QR access codes",
      "Full access history with CSV export"
    ],
    challenge: "Supporting several authentication methods while staying open to other smart-lock devices.",
    solution: "An extensible architecture designed so other devices can be connected later, with every entry and exit recorded in the access history.",
    result: "Admins can lock or unlock the door, manage users and review the full access history with CSV export.",
    tags: ["Laravel", "React", "MySQL"],
    links: [],
    shots: []
  },
  {
    group: "pro",
    name: "Access Rights Management",
    kind: "Oracle APEX business application",
    status: "Internship project · SRM-MS",
    short: "Oracle APEX app that centralises how access rights are requested, validated and reviewed.",
    summary: "A business application that centralises and secures how access rights to information systems are requested, validated and granted.",
    card: "assets/apex/00-login.jpg",
    bg: "assets/blur/apex-login.jpg",
    need: "Access rights needed one central, traceable process, from the request to the validation and the final grant.",
    role: "Intern developer: relational data model, PL/SQL business logic and triggers, role-based access control and the APEX interface.",
    points: [
      "Multi-level validation workflow (hierarchical, functional, DSITD)",
      "Role-based access control with full audit trail",
      "Periodic access reviews: confirm, flag an anomaly or revoke",
      "Reports and exports in CSV, Excel and PDF"
    ],
    challenge: "Keeping request statuses and effective access rights consistent across a multi-level validation workflow.",
    solution: "PL/SQL procedures and compound triggers that update statuses and synchronise access rights automatically, with every operation logged in an audit trail.",
    result: "A single traceable process for requesting, validating, granting and reviewing access rights, with exports in CSV, Excel and PDF.",
    tags: ["Oracle APEX 24.2", "Oracle DB 21c", "PL/SQL", "RBAC"],
    links: [],
    shots: []
  },
  {
    group: "free",
    name: "GlowSkin",
    kind: "Shopify store · Skincare",
    status: "Freelance project",
    short: "Shopify skincare store with bundles, a subscription option and a smooth checkout.",
    summary: "A Shopify store for a skincare brand: a polished storefront, detailed product pages, bundles, a subscription option and a smooth checkout flow.",
    card: "assets/glowskin/01-home.jpg",
    bg: "assets/blur/glowskin-home.jpg",
    need: "Beauty brands need a store that feels premium, explains each product clearly and makes it easy to buy a whole routine, not just a single item.",
    role: "Store design and development: storefront, product pages, bundles, subscription and cart experience.",
    points: [
      "Storefront with category filters, product cards and live search",
      "Product page with ingredients, usage and customer reviews",
      "Duo and routine bundles with -15%, plus a monthly subscription option",
      "Cart with promo code, free-shipping progress and clear totals",
      "About, reviews, contact and newsletter sections with smooth scroll animations"
    ],
    result: "A complete Shopify store experience, from the first visit to checkout, ready for the brand's own catalogue.",
    tags: ["Shopify", "E-commerce", "Storefront design"],
    links: [{ label: "Live store", url: "https://mohamedlghazi.github.io/glowskin/" }],
    shots: [
      ["glowskin/01-home", "Home page with the brand promise and key numbers"],
      ["glowskin/02-products", "Product catalogue with category filters"],
      ["glowskin/03-routines", "Duos and routines with subscription toggle"],
      ["glowskin/05-product", "Product page: ingredients, usage, reviews, one-time or subscription"],
      ["glowskin/07-cart", "Cart with promo code and free-shipping progress"]
    ]
  },
  {
    group: "free",
    name: "UrbanWear",
    kind: "Shopify store · Streetwear",
    status: "Freelance project",
    short: "Dark, bold streetwear store with quick-add, promo codes and a one-screen cash-on-delivery checkout.",
    summary: "A Shopify store for a streetwear brand: a dark, high-contrast storefront, a 22-piece catalogue, quick-add by size and a fast checkout with cash on delivery.",
    card: "assets/urbanwear/01-home.jpg",
    bg: "assets/blur/urbanwear-home.jpg",
    need: "A streetwear brand needs a store that looks like the brand, stays fast on a phone and makes buying quick, with cash on delivery for the local market.",
    role: "Store design and development: storefront, product pages, cart, checkout and a lightweight mobile mode.",
    points: [
      "Collection of 22 pieces with gender, category and size filters, sorting and favourites",
      "Quick-add by size on hover and instant search",
      "Product page with details, care, exchange policy and reviews for each product",
      "Cart with promo codes and free-shipping progress, then a one-screen checkout with cash on delivery",
      "Size guide with a height and weight calculator",
      "Tested end to end on desktop and mobile"
    ],
    result: "A complete store experience with its own look, from the first visit to a confirmed order, ready for the brand's own catalogue.",
    tags: ["Shopify", "E-commerce", "Storefront design"],
    links: [],
    shots: [
      ["urbanwear/01-home", "Home page with the brand gradient and a direct way into the collection"],
      ["urbanwear/02-collection", "Collection with filters, sorting and quick-add by size"],
      ["urbanwear/03-product", "Product page: details, care, exchange policy and reviews"],
      ["urbanwear/04-product-cap", "Product page for an accessory, with the same clear details"],
      ["urbanwear/05-cart", "Cart with promo code and free-shipping progress"],
      ["urbanwear/06-checkout", "One-screen checkout with cash on delivery"],
      ["urbanwear/07-selection", "Featured pieces with one-click add to cart"],
      ["urbanwear/08-about", "About section with the brand's key numbers"],
      ["urbanwear/09-reviews-contact", "Customer reviews and contact form"],
      ["urbanwear/10-newsletter", "Newsletter sign-up with a welcome promo code"],
      ["urbanwear/11-size-guide", "Size guide with a height and weight calculator"],
      ["urbanwear/12-search", "Instant search by product name"]
    ]
  }
];

// the gallery is the screenshots only; the card picture stays on the card
PROJECTS.forEach((p) => { p.gallery = p.shots; });

const STACK = [
  ["Languages", [["PH", "PHP", "Server-side language"], ["JS", "JavaScript", "ES6+"], ["SQL", "SQL", "Queries & modelling"], ["PL", "PL/SQL", "Oracle business logic"], ["PY", "Python", "Scripting"]]],
  ["Frontend", [["Re", "React.js", "UI library"], ["H5", "HTML5", "Markup"], ["C3", "CSS3", "Flexbox & Grid"], ["Bs", "Bootstrap", "CSS framework"]]],
  ["Backend", [["Lv", "Laravel", "PHP framework"], ["Eq", "Eloquent ORM", "Data layer"], ["API", "REST APIs", "Design & integration"], ["Ap", "Oracle APEX", "Low-code business apps"], ["Or", "ORDS", "REST for Oracle"]]],
  ["Databases", [["My", "MySQL", "Relational database"], ["Or", "Oracle Database", "21c"], ["Mg", "MongoDB", "Document database"]]],
  ["Tools & practices", [["Git", "Git & GitHub", "Branches, pull requests"], ["VS", "VS Code", "Editor"], ["Pm", "Postman", "API testing"], ["AC", "Access control", "Role-based (RBAC)"], ["Sc", "Scrum", "Agile cycle & teamwork"]]]
];

// opens Gmail's compose window (in the browser) with the recipient, subject and message filled in
const gmail = (to, subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const row = (label, text) => (text ? `<p class="row"><b>${label}</b>${esc(text)}</p>` : "");
const icon = (id) => `<svg class="ic" aria-hidden="true"><use href="#${id}"/></svg>`;

/* ---------- profile links ---------- */
const plinks = [
  [LINKS.github, "github", "GitHub", true],
  [LINKS.linkedin, "linkedin", "LinkedIn", true],
  [LINKS.fiverr, "ext", "Fiverr", true],
  [LINKS.email && gmail(LINKS.email), "mail", "Email (Gmail)", true]
];
$("#profileLinks").innerHTML = plinks.filter((l) => l[0]).map(([href, ic, label, ext]) =>
  `<a href="${esc(href)}" aria-label="${label}" title="${label}"${ext ? ' target="_blank" rel="noopener"' : ""}>${icon("i-" + ic)}</a>`).join("");

/* ---------- projects: cards + detail panel ---------- */
const pd = $("#pdetail"), pdInner = $("#pdInner");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const lists = { pro: $("#projectList"), free: $("#freeList") };
const sizes = { pro: PROJECTS.filter((p) => p.group === "pro").length, free: PROJECTS.filter((p) => p.group === "free").length };
const seen = { pro: 0, free: 0 };

PROJECTS.forEach((p, i) => {
  const g = p.group === "free" ? "free" : "pro";
  const n = ++seen[g];
  const card = document.createElement("article");
  card.className = "pcard reveal" + (n === sizes[g] && sizes[g] % 2 ? " wide" : "");
  card.style.setProperty("--d", n - 1);
  card.innerHTML = `
    <img class="pc-bg" src="${p.bg || p.card}" alt="" aria-hidden="true" decoding="async">
    <div class="pc-top"><span class="pc-badge">${esc(p.status || p.kind)}</span><span class="pc-num" aria-hidden="true">0${n}</span></div>
    <div class="pc-media"><img class="pc-fg" src="${p.card}" alt="${esc(p.name)}: ${esc(p.kind)}" loading="lazy" decoding="async"></div>
    <div class="pc-body">
      <span class="pc-kind">${esc(p.kind)}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.short)}</p>
      <div class="pc-tags">${p.tags.slice(0, 3).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="pc-actions">
        <button class="btn white" type="button" data-details="${i}" aria-expanded="false" aria-controls="pdetail">View details</button>
        ${p.shots.length ? `<button class="btn outw" type="button" data-open="${i}">Screenshots</button>` : ""}
      </div>
    </div>`;
  // scrollIntoView on a button would otherwise scroll the card's own hidden overflow and leave an empty band
  card.addEventListener("scroll", () => { card.scrollTop = 0; card.scrollLeft = 0; });
  lists[g].appendChild(card);
});

let openIdx = null;
function renderDetail(i) {
  const p = PROJECTS[i];
  const links = (p.links || []).map((l) => `<a class="btn line small" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
  const shotBtn = p.shots.length ? `<button class="btn solid small" type="button" data-open="${i}">View ${p.shots.length} screenshots</button>` : "";
  const media = "";
  pdInner.innerHTML = `
    <div class="pd-card">
      ${media}
      <div class="pd-head">
        <div>
          <span class="kind">${esc(p.kind)}</span>
          <h3 id="pdTitle" tabindex="-1">${esc(p.name)}</h3>
          ${p.status ? `<span class="badge">${esc(p.status)}</span>` : ""}
        </div>
        <button class="pd-close" type="button" id="pdClose" aria-label="Close project details">×</button>
      </div>
      <div class="pd-grid">
        <div>
          <p class="pd-sum">${esc(p.summary)}</p>
          ${row("The need", p.need)}
          ${row("My role", p.role)}
          <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>
        <div>
          ${row("Challenge", p.challenge)}
          ${row("Solution", p.solution)}
          ${row("Result", p.result)}
          <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          ${shotBtn || links ? `<div class="actions">${shotBtn}${links}</div>` : ""}
        </div>
      </div>
    </div>`;
}
function syncButtons() {
  document.querySelectorAll("[data-details]").forEach((b) => {
    const on = +b.dataset.details === openIdx;
    b.setAttribute("aria-expanded", on);
    b.textContent = on ? "Hide details" : "View details";
  });
}
function openDetails(i) {
  if (openIdx === i) { closeDetails(); return; }
  const wasOpen = openIdx !== null;
  openIdx = i;
  const host = document.querySelector(`[data-details="${i}"]`).closest(".pcards");
  if (host && host.nextElementSibling !== pd) host.after(pd);
  renderDetail(i);
  pd.inert = false;
  pd.classList.add("open");
  syncButtons();
  setTimeout(() => {
    pd.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    $("#pdTitle").focus({ preventScroll: true });
  }, wasOpen ? 0 : 90);
}
function closeDetails() {
  const i = openIdx;
  openIdx = null;
  pd.classList.remove("open");
  pd.inert = true;
  syncButtons();
  const btn = document.querySelector(`[data-details="${i}"]`);
  if (btn) { btn.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); btn.focus({ preventScroll: true }); }
}
document.addEventListener("click", (e) => {
  const d = e.target.closest("[data-details]");
  if (d) { openDetails(+d.dataset.details); return; }
  if (e.target.closest("#pdClose")) closeDetails();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lb.hidden && openIdx !== null) closeDetails();
});

/* ---------- tech stack ---------- */
$("#stackList").innerHTML = STACK.map(([g, items]) => `
  <div class="reveal">
    <h3 class="gname">${g.toUpperCase()}</h3>
    <div class="sgrid">${items.map(([m, n, s], k) => `<div class="stile" style="--k:${k}"><span class="mono" aria-hidden="true">${esc(m)}</span><span><b>${esc(n)}</b><small>${esc(s)}</small></span></div>`).join("")}</div>
  </div>`).join("");

/* ---------- lightbox (screenshots) ---------- */
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbTitle = $("#lbTitle"), lbCount = $("#lbCount");
let cur = null, idx = 0, lastFocus = null;
function show() {
  const p = PROJECTS[cur], [file, label] = p.gallery[idx];
  lbImg.src = `assets/${file}.jpg`;
  lbImg.alt = `${p.name}: ${label}`;
  lbTitle.textContent = `${p.name} · ${label}`;
  lbCount.textContent = `${idx + 1} / ${p.gallery.length}`;
}
function openLb(i, at = 0) { cur = i; idx = at; lastFocus = document.activeElement; lb.hidden = false; document.body.style.overflow = "hidden"; show(); $("#lbClose").focus(); }
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
function step(d) { const n = PROJECTS[cur].gallery.length; idx = (idx + d + n) % n; show(); }
document.addEventListener("click", (e) => {
  const o = e.target.closest("[data-open]");
  if (o) openLb(+o.dataset.open, +o.dataset.at || 0);
});
$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => step(-1));
$("#lbNext").addEventListener("click", () => step(1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
  if (e.key === "Tab") {
    const f = [...lb.querySelectorAll("button")], first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ---------- contact form ---------- */
const form = $("#contactForm"), statusBox = $("#formStatus"), btn = $("#formBtn");
const fields = {
  name: { el: $("#cName"), err: $("#cNameErr"), check: (v) => (v.trim().length < 2 ? "Please enter your name." : "") },
  email: { el: $("#cEmail"), err: $("#cEmailErr"), check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address.") },
  message: { el: $("#cMsg"), err: $("#cMsgErr"), check: (v) => (v.trim().length < 10 ? "Please write a message of at least 10 characters." : "") }
};
function setStatus(kind, text) { statusBox.className = "form-status" + (kind ? " " + kind : ""); statusBox.textContent = text; }
function validate() {
  let first = null;
  Object.values(fields).forEach((f) => {
    const msg = f.check(f.el.value);
    f.err.textContent = msg;
    f.el.setAttribute("aria-invalid", msg ? "true" : "false");
    if (msg && !first) first = f.el;
  });
  if (first) first.focus();
  return !first;
}
Object.values(fields).forEach((f) => f.el.addEventListener("input", () => {
  if (f.err.textContent) { const m = f.check(f.el.value); f.err.textContent = m; f.el.setAttribute("aria-invalid", m ? "true" : "false"); }
}));
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  setStatus("", "");
  if (!validate()) { setStatus("bad", "Please fix the highlighted fields and try again."); return; }
  if (form.elements.company.value) return; // honeypot: bots only
  const data = { name: fields.name.el.value.trim(), email: fields.email.el.value.trim(), type: form.elements.type.value, message: fields.message.el.value.trim() };
  const NL = String.fromCharCode(10);
  const subject = `Portfolio contact from ${data.name}${data.type ? " · " + data.type : ""}`;
  const body = data.message + NL + NL + "— " + data.name + " (" + data.email + ")" + (data.type ? NL + "Project type: " + data.type : "");
  btn.disabled = true; btn.textContent = "Sending…";
  try {
    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: FORM.web3formsKey, subject, from_name: data.name, botcheck: "", name: data.name, email: data.email, "project type": data.type || "Not specified", message: data.message })
    });
    const res = await r.json().catch(() => ({}));
    if (!r.ok || String(res.success) === "false") throw new Error(res.message || "send failed");
    form.reset();
    setStatus("ok", "Thank you, your message was sent. I'll reply to your email soon.");
  } catch (_) {
    setStatus("bad", "Sorry, the message could not be sent. ");
    const a = document.createElement("a");
    a.href = gmail(LINKS.email, subject, body); a.target = "_blank"; a.rel = "noopener";
    a.textContent = "Open Gmail with my message instead";
    a.style.textDecoration = "underline";
    statusBox.appendChild(a);
  } finally { btn.disabled = false; btn.textContent = "Submit"; }
});

/* ---------- reveal on scroll ---------- */
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.1 });
  items.forEach((el) => io.observe(el));
} else { items.forEach((el) => el.classList.add("in")); }
// safety net for throttled / background tabs: reveal what is already on screen, never everything below the fold
setTimeout(() => {
  const vis = (el) => { const r = el.getBoundingClientRect(); return r.top < innerHeight * 1.05 && r.bottom > 0; };
  document.querySelectorAll(".reveal").forEach((el) => { if (vis(el)) el.classList.add("in"); });
  document.querySelectorAll(".tx").forEach((el) => { if (vis(el)) el.classList.add("tx-in"); });
  root.classList.add("settled");
}, 3500);

$("#year").textContent = new Date().getFullYear();

/* ---------- scroll progress + active icon in the pill nav ---------- */
const prog = $("#progress");
let ticking = false;
addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const max = root.scrollHeight - innerHeight;
    prog.style.setProperty("--prog", (max > 0 ? (scrollY / max) * 100 : 0) + "%");
    ticking = false;
  });
}, { passive: true });

const navLinks = [...document.querySelectorAll(".pill-nav a")];
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id === "freelance" ? "projects" : en.target.id; // both project sections light the Projects icon
      navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
}

/* ---------- stat counters ---------- */
document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count;
  if (reduce || !("IntersectionObserver" in window)) return;
  el.textContent = "0";
  new IntersectionObserver(([en], o) => {
    if (!en.isIntersecting) return;
    o.disconnect();
    const t0 = performance.now();
    (function step(now) {
      const k = Math.min(1, (now - t0) / 1100);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step); else el.textContent = target;
    })(t0);
  }).observe(el);
});

/* ================= lively text, scroll reveals and profile-card motion ================= */
function splitText(el, mode) {
  const label = el.textContent.trim().replace(/\s+/g, " ");
  const nodes = [];
  const walk = (n) => n.childNodes.forEach((c) => {
    if (c.nodeType === 3) { if (c.textContent.trim()) nodes.push(c); }
    else if (c.nodeType === 1) walk(c);
  });
  walk(el);
  let i = 0;
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((tok) => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(" ")); return; }
      const w = document.createElement("span");
      w.className = "wd";
      w.setAttribute("aria-hidden", "true");
      if (mode === "char") {
        for (const ch of tok) {
          const s = document.createElement("span");
          s.className = "ch"; s.textContent = ch; s.style.setProperty("--i", i++);
          w.appendChild(s);
        }
      } else {
        w.classList.add("wx"); w.textContent = tok; w.style.setProperty("--i", i++);
      }
      frag.appendChild(w);
    });
    node.replaceWith(frag);
  });
  const sr = document.createElement("span"); // the full text stays available to screen readers
  sr.className = "sr-only"; sr.textContent = label;
  el.prepend(sr);
  el.classList.add("tx", mode === "char" ? "tx-char" : "tx-word");
}

document.querySelectorAll(".big").forEach((el) => { el.classList.remove("reveal", "rise"); splitText(el, "char"); });
const heroLede = document.querySelector(".lede");
if (heroLede) { heroLede.classList.remove("rise"); splitText(heroLede, "word"); }
document.querySelectorAll("p.body").forEach((el) => { el.classList.remove("reveal"); splitText(el, "word"); });

const txEls = [...document.querySelectorAll(".tx")];
if ("IntersectionObserver" in window && !reduce) {
  const tio = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("tx-in"); tio.unobserve(e.target); }
  }), { threshold: 0.2 });
  txEls.forEach((el) => tio.observe(el));
} else { txEls.forEach((el) => el.classList.add("tx-in")); }

/* profile card: 3D tilt, moving light and a little photo parallax that follow the mouse */
const prof = document.querySelector(".profile");
if (prof && !reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  prof.addEventListener("pointermove", (e) => {
    const r = prof.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    prof.style.setProperty("--rx", ((0.5 - y) * 12).toFixed(2) + "deg");
    prof.style.setProperty("--ry", ((x - 0.5) * 14).toFixed(2) + "deg");
    prof.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
    prof.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
    prof.style.setProperty("--px", ((x - 0.5) * -16).toFixed(1) + "px");
    prof.style.setProperty("--py", ((y - 0.5) * -16).toFixed(1) + "px");
    prof.classList.add("hot");
  });
  prof.addEventListener("pointerleave", () => {
    prof.classList.remove("hot");
    ["--rx", "--ry", "--px", "--py"].forEach((p) => prof.style.removeProperty(p));
  });
}

/* pause the endless animations (tile patterns, ribbon) while they are off screen */
if ("IntersectionObserver" in window) {
  const loopIO = new IntersectionObserver((es) => es.forEach((e) => { e.target.style.animationPlayState = e.isIntersecting ? "running" : "paused"; }));
  document.querySelectorAll(".pat, .ribbon-track").forEach((el) => loopIO.observe(el));
}

/* once a text effect has finished playing, drop its animation so thousands of letters/words stop being separate layers while scrolling */
document.addEventListener("animationend", (e) => {
  const t = e.target.closest && e.target.closest(".tx");
  if (!t || t.classList.contains("tx-done")) return;
  if (t._left === undefined) t._left = t.querySelectorAll(".ch, .wx").length;
  if (--t._left <= 0) t.classList.add("tx-done");
});
