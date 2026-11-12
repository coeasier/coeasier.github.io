/* Modules partagés : recherche, fiche produit, sections À propos / Avis / Contact / Newsletter.
   Thème via variables CSS: --bg --fg --mut --line --acc --accfg --card --r --hf (police titres) --ht (text-transform titres) */
(function () {
  const css = `
[data-rv]{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.7,.2,1) var(--d,0s),transform .9s cubic-bezier(.2,.7,.2,1) var(--d,0s)}[data-rv='l']{transform:translate3d(-70px,24px,0) rotate(-3deg)}[data-rv='r']{transform:translate3d(70px,24px,0) rotate(3deg)}[data-rv='s']{transform:translateY(54px) scale(.9)}[data-rv='n']{opacity:1;transform:none}
[data-sp]{translate:0 var(--sy,0px)}
[data-scrub]{will-change:transform,opacity;opacity:calc(.08 + .92 * var(--p,1));transform:translate3d(calc((1 - var(--p,1)) * var(--sx,0px)),calc((1 - var(--p,1)) * var(--sy0,90px)),0) rotate(calc((1 - var(--p,1)) * var(--rot,0deg))) scale(calc(.88 + .12 * var(--p,1)))}.sx-pi.par{transform:translate3d(0,var(--py,0px),0) scale(var(--sc,1.2))}
.lite [data-scrub]{opacity:1!important;transform:none!important;will-change:auto}.lite .sx-pi.par{transform:none}.lite [data-sp]{translate:none}[data-rv].in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){[data-rv]{opacity:1!important;transform:none!important;transition:none!important}}
.sx-pt i,.sx-inf i,.usp i{color:var(--acc)}.sx-pt i svg,.sx-inf i svg{width:20px;height:20px}
.sx-pi{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s;z-index:1}.sx-pi.ok{opacity:1}.sx-ma{position:relative}.sx-sri .th{position:relative}
.sx-sec{padding:80px 0;font-family:inherit}.sx-w{max-width:1200px;margin:0 auto;padding:0 28px}
.sx-sec h2,.sx-md h2,.sx-sr h3{font-family:var(--hf,inherit);text-transform:var(--ht,none);font-weight:var(--hw,600);letter-spacing:var(--hl,0);margin:0;line-height:1.05}
.sx-sec h2{font-size:clamp(32px,4vw,50px);margin-bottom:14px}
.sx-eye{display:block;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--acc);margin-bottom:14px}
.sx-about{display:grid;grid-template-columns:1.1fr 1fr;gap:56px;align-items:center}.sx-about p{color:var(--mut);font-size:16.5px;max-width:520px;margin:0 0 26px}
.sx-pts{display:grid;gap:14px}.sx-pt{display:flex;gap:14px;align-items:flex-start}.sx-pt i{font-style:normal;flex:none;width:42px;height:42px;border-radius:50%;background:var(--card);display:grid;place-items:center;font-size:18px}.sx-pt b{display:block;font-size:15px}.sx-pt span{color:var(--mut);font-size:13.5px}
.sx-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px}.sx-stats div{background:var(--card);border:1px solid var(--line);border-radius:calc(var(--rr,10px)*1.6);padding:30px 24px}.sx-stats b{display:block;font-family:var(--hf,inherit);font-size:42px;color:var(--acc);line-height:1}.sx-stats span{color:var(--mut);font-size:14px}
.sx-revs{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:30px}.sx-rev{background:var(--card);border:1px solid var(--line);border-radius:calc(var(--rr,10px)*1.6);padding:28px}.sx-rev .st{color:#e0a030;letter-spacing:2px}.sx-rev p{margin:12px 0 18px;font-size:15.5px}.sx-rev .who{display:flex;gap:12px;align-items:center;font-size:13.5px}.sx-av{width:38px;height:38px;border-radius:50%;background:var(--acc);color:var(--accfg);display:grid;place-items:center;font-weight:700}
.sx-rate{display:flex;align-items:center;gap:14px;color:var(--mut);font-size:14px}.sx-rate b{font-size:30px;color:var(--fg)}
.sx-ct{display:grid;grid-template-columns:1fr 1.2fr;gap:50px}.sx-inf{display:grid;gap:18px;margin-top:26px}.sx-inf div{display:flex;gap:14px;align-items:center}.sx-inf i{font-style:normal;width:46px;height:46px;border-radius:50%;background:var(--card);display:grid;place-items:center;font-size:19px;flex:none}.sx-inf small{display:block;color:var(--mut);font-size:12.5px}.sx-inf b{font-weight:500}
.sx-fm{background:var(--card);border:1px solid var(--line);border-radius:calc(var(--rr,10px)*2);padding:32px;display:grid;gap:14px}.sx-fm .r2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.sx-fm label,.sx-nl label{font-size:12.5px;color:var(--mut);display:block}
.sx-fm input,.sx-fm textarea,.sx-fm select{width:100%;margin-top:5px;background:var(--bg);border:1px solid var(--line);border-radius:var(--rr,10px);padding:13px 15px;color:var(--fg);font:inherit;font-size:14.5px;outline:0}.sx-fm input:focus,.sx-fm textarea:focus{border-color:var(--acc)}
.sx-btn{background:var(--acc);color:var(--accfg);border:0;border-radius:var(--rr,10px);padding:15px 28px;font:inherit;font-weight:600;cursor:pointer;transition:.25s}.sx-btn:hover{transform:translateY(-2px);opacity:.92}
.sx-nl{background:var(--acc);color:var(--accfg);border-radius:calc(var(--rr,10px)*2.4);padding:60px 40px;text-align:center;margin:0 auto;max-width:1144px}
.sx-nl h2{margin-bottom:10px}.sx-nl p{margin:0 0 26px;opacity:.85}.sx-nl form{display:flex;max-width:480px;margin:0 auto;gap:8px}.sx-nl input{flex:1;min-width:0;border:0;border-radius:var(--rr,10px);padding:15px 18px;font:inherit;outline:0;background:#fff;color:#111}.sx-nl button{background:var(--fg);color:var(--bg);border:0;border-radius:var(--rr,10px);padding:0 24px;font:inherit;font-weight:600;cursor:pointer}
.sx-nl small{display:block;margin-top:14px;opacity:.75}
/* search */
.sx-sr{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(6px);display:none;justify-content:center;align-items:flex-start;padding:8vh 16px 16px;z-index:1100;font-family:inherit}.sx-sr.on{display:flex}
.sx-srb{background:var(--bg);color:var(--fg);border-radius:calc(var(--rr,10px)*2);width:100%;max-width:680px;max-height:80vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 40px 80px -20px rgba(0,0,0,.5)}
.sx-srb input{border:0;border-bottom:1px solid var(--line);background:none;color:inherit;font:inherit;font-size:18px;padding:22px 26px;outline:0}
.sx-srl{overflow:auto;padding:8px}.sx-sri{display:flex;gap:14px;align-items:center;padding:10px 14px;border-radius:var(--rr,10px);cursor:pointer;width:100%;border:0;background:none;color:inherit;text-align:left;font:inherit}.sx-sri:hover,.sx-sri.f{background:var(--card)}
.sx-sri .th{width:54px;height:54px;border-radius:10px;background:var(--card);overflow:hidden;display:grid;place-items:center;flex:none}.sx-sri .th svg{width:100%;height:100%}.sx-sri div{flex:1}.sx-sri small{color:var(--mut);display:block;font-size:12.5px}.sx-sri b{font-weight:600}
.sx-emp{text-align:center;color:var(--mut);padding:40px}.sx-hint{padding:10px 26px;font-size:12px;color:var(--mut);border-top:1px solid var(--line)}
/* fiche produit */
.sx-md{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(5px);display:none;align-items:center;justify-content:center;z-index:800;padding:16px;font-family:inherit}.sx-md.on{display:flex}
.sx-mb{background:var(--bg);color:var(--fg);border-radius:calc(var(--rr,10px)*2.4);max-width:940px;width:100%;max-height:92vh;overflow:auto;display:grid;grid-template-columns:1fr 1fr;position:relative;animation:sxu .35s cubic-bezier(.2,.8,.2,1)}@keyframes sxu{from{transform:translateY(24px);opacity:0}}
.sx-mb>button.x{position:absolute;right:14px;top:14px;width:38px;height:38px;border-radius:50%;border:0;background:var(--bg);color:var(--fg);z-index:3;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2)}
.sx-ma{display:grid;place-items:center;padding:30px;min-height:360px;background:var(--card)}.sx-ma svg{width:88%;max-height:420px}
.sx-mi{padding:40px 36px 32px}.sx-mi small{color:var(--mut);text-transform:uppercase;letter-spacing:.1em;font-size:12px}.sx-mi h2{font-size:34px;margin:6px 0 8px}
.sx-star{color:#e0a030;font-size:14px}.sx-star span{color:var(--mut)}
.sx-pr{margin:14px 0;font-size:26px;font-weight:600}.sx-pr s{font-size:16px;color:var(--mut);font-weight:400;margin-left:10px}.sx-pr em{font-style:normal;font-size:12px;background:var(--acc);color:var(--accfg);border-radius:99px;padding:3px 10px;margin-left:10px;vertical-align:middle}
.sx-ds{color:var(--mut);font-size:14.5px;margin:0 0 16px}
.sx-og{margin-bottom:16px}.sx-og>span{font-size:12.5px;color:var(--mut);display:block;margin-bottom:8px}.sx-og b{color:var(--fg)}.sx-ch{display:flex;gap:8px;flex-wrap:wrap}
.sx-ch button{min-width:44px;height:40px;padding:0 14px;border:1px solid var(--line);background:none;color:var(--fg);border-radius:var(--rr,10px);font:inherit;font-size:13.5px;cursor:pointer;transition:.15s}.sx-ch button:hover{border-color:var(--fg)}.sx-ch button.on{background:var(--fg);color:var(--bg);border-color:var(--fg)}
.sx-ch button.sw{width:34px;min-width:34px;height:34px;padding:0;border-radius:50%;outline:2px solid transparent;outline-offset:2px}.sx-ch button.sw.on{outline-color:var(--acc)}
.sx-tabs{display:flex;gap:20px;border-bottom:1px solid var(--line);margin:18px 0 10px}.sx-tabs button{background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:8px 0;color:var(--mut);font:inherit;font-size:14px;cursor:pointer}.sx-tabs button.on{color:var(--fg);border-color:var(--acc)}
.sx-tp{font-size:14px;min-height:96px}.sx-tp table{width:100%;border-collapse:collapse}.sx-tp td{padding:7px 0;border-bottom:1px solid var(--line)}.sx-tp td:first-child{color:var(--mut);width:42%}.sx-tp .sx-r{padding:8px 0;border-bottom:1px solid var(--line)}.sx-tp .sx-r span{color:#e0a030;margin-left:6px}
.sx-buy{display:flex;gap:12px;margin-top:20px}.sx-qty{display:flex;align-items:center;border:1px solid var(--line);border-radius:var(--rr,10px)}.sx-qty button{background:none;border:0;width:38px;height:48px;font-size:18px;color:var(--fg);cursor:pointer}.sx-qty span{min-width:22px;text-align:center}.sx-buy .sx-btn{flex:1}
@media(max-width:860px){.sx-about,.sx-ct,.sx-mb{grid-template-columns:1fr}.sx-revs{grid-template-columns:1fr}.sx-nl{padding:40px 20px;border-radius:calc(var(--rr,10px)*2)}.sx-nl form{flex-direction:column}.sx-nl button{padding:14px}.sx-fm .r2{grid-template-columns:1fr}.sx-sec{padding:56px 0}.sx-ma{min-height:260px}.sx-mi{padding:28px 22px}}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const $ = (s, r = document) => r.querySelector(s);
  const stars = n => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ICONS = {"pin":"<path d=\"M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>","phone":"<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>","mail":"<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"m3 7 9 6 9-6\"/>","clock":"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/>","leaf":"<path d=\"M5 19c0-8 5-14 15-14 0 10-6 15-14 15\"/><path d=\"M5 19c3-5 6-8 10-10\"/>","flask":"<path d=\"M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3\"/><path d=\"M7.5 15h9\"/>","recycle":"<path d=\"M20 11a8 8 0 0 0-14-4L4 9\"/><path d=\"M4 4v5h5\"/><path d=\"M4 13a8 8 0 0 0 14 4l2-2\"/><path d=\"M20 20v-5h-5\"/>","truck":"<path d=\"M2 6h11v10H2zM13 9h4l4 3v4h-8\"/><circle cx=\"7\" cy=\"17.5\" r=\"1.8\"/><circle cx=\"17\" cy=\"17.5\" r=\"1.8\"/>","shield":"<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"m9 12 2 2 4-4\"/>","return":"<path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10a6 6 0 0 1 0 12h-3\"/>","bolt":"<path d=\"M13 2 4 14h7l-1 8 9-12h-7z\"/>","star":"<path d=\"m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z\"/>","wood":"<path d=\"M12 3 6 12h4l-3 5h10l-3-5h4z\"/><path d=\"M12 17v4\"/>","users":"<circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3 20a6 6 0 0 1 12 0\"/><circle cx=\"17\" cy=\"9\" r=\"2.4\"/><path d=\"M16 14a5 5 0 0 1 5 5\"/>","check":"<path d=\"m5 12 5 5 9-10\"/>","wrench":"<path d=\"M14 6a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 0-2-2z\"/>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M20 4 8.5 15.5M14 14l6 6M8.5 8.5 12 12\"/>","thread":"<path d=\"M4 6c6-3 10 3 16 0M4 12c6-3 10 3 16 0M4 18c6-3 10 3 16 0\"/>","cash":"<rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2.6\"/>","card":"<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20M6 15h4\"/>","home":"<path d=\"M3 11 12 4l9 7v9H3z\"/><path d=\"M9 20v-6h6v6\"/>","search":"<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m21 21-4.3-4.3\"/>","bag":"<path d=\"M5 8h14l-1 12H6z\"/><path d=\"M9 8a3 3 0 0 1 6 0\"/>","heart":"<path d=\"M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z\"/>","ruler":"<path d=\"M3 17 17 3l4 4L7 21z\"/><path d=\"m7 13 2 2M10 10l2 2M13 7l2 2\"/>","flame":"<path d=\"M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z\"/>","trophy":"<path d=\"M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 21h8M10 17h4\"/>","gift":"<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\"/><path d=\"M5 12v9h14v-9M12 8v13M12 8s-1-4-4-4a2 2 0 0 0 0 4M12 8s1-4 4-4a2 2 0 0 1 0 4\"/>","arrow":"<path d=\"M5 12h14M13 6l6 6-6 6\"/>","plus":"<path d=\"M12 5v14M5 12h14\"/>","x":"<path d=\"M6 6l12 12M18 6 6 18\"/>"};
  const Shop = (window.Shop = {
    /* ---------- icônes SVG (remplacent les emojis) ---------- */
    icon(n, s = 20) { return ICONS[n] ? '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + '</svg>' : ''; },
    /* ---------- animations : apparition au scroll + compteurs ---------- */
    count(el) {
      const m = el.textContent.match(/^(\D*?)(\d[\d\s.,]*)(.*)$/); if (!m || el._counted) return; el._counted = 1;
      const raw = m[2].trim(), dec = /[.,]\d{1,2}$/.test(raw) ? raw.split(/[.,]/).pop().length : 0, to = parseFloat(raw.replace(/\s/g, '').replace(',', '.'));
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || !isFinite(to)) return;
      const t0 = performance.now(), dur = 1600 * (window.__S || 1), fmt = v => (dec ? v.toFixed(dec) : Math.round(v).toLocaleString('fr-FR'));
      const tick = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = m[1] + fmt(to * e) + m[3]; if (k < 1) requestAnimationFrame(tick); };
      el.textContent = m[1] + fmt(0) + m[3]; requestAnimationFrame(tick);
    },
    /* parallaxe : les photos glissent dans leur cadre, les cartes dérivent à des vitesses différentes */
    /* mode léger : téléphones / écrans tactiles / petits écrans (?lite=1 ou ?full=1 pour forcer) */
    lite() {
      if (Shop._lite === undefined) {
        const q = location.search;
        Shop._lite = /[?&]lite=1/.test(q) ? true : /[?&]full=1/.test(q) ? false : matchMedia('(pointer: coarse), (max-width: 900px)').matches;
        document.documentElement.classList.toggle('lite', Shop._lite);
      }
      return Shop._lite;
    },
    parallax(sel) {
      if (Shop.lite()) return;
      if (sel) Shop._psel = sel;
      if (!Shop._pon) {
        Shop._pon = 1; let q = 0;
        const go = () => { q = 0; Shop.parallaxRun(); };
        addEventListener('scroll', () => { if (!q) { q = 1; requestAnimationFrame(go); } }, { passive: true });
        addEventListener('resize', go);
      }
      Shop.parallaxRun();
    },
    parallaxRun() {
      if (Shop.lite() || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const H = innerHeight;
      if (Shop._psel) document.querySelectorAll(Shop._psel).forEach(img => {
        img.classList.add('par'); const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < -120 || r.top > H + 120) return;
        img.style.setProperty('--py', (((r.top + r.height / 2 - H / 2) / H) * -64).toFixed(1) + 'px');
      });
      const docTop = el => { let y = 0; for (let n = el; n; n = n.offsetParent) y += n.offsetTop; return y; };
      document.querySelectorAll('[data-scrub]').forEach(el => {
        const top = docTop(el) - scrollY, p = Math.max(0, Math.min(1, (H * 0.97 - top) / (H * 0.5)));
        el.style.setProperty('--p', p.toFixed(3));
      });
      document.querySelectorAll('[data-sp]').forEach(el => {
        const r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > H + 200) return;
        el.style.setProperty('--sy', (((r.top + r.height / 2 - H / 2) / H) * +el.dataset.sp * 2.4).toFixed(1) + 'px');
      });
    },
    reveal(root) {
      root = root || document;
      if (!Shop._io) Shop._io = new IntersectionObserver(es => es.forEach(x => { if (!x.isIntersecting) return; const t = x.target; t.classList.add('in'); t.querySelectorAll('[data-count]').forEach(Shop.count); if (t.hasAttribute('data-count')) Shop.count(t); Shop._io.unobserve(t); }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
      root.querySelectorAll('[data-rv],[data-count]').forEach(el => { if (el._o) return; el._o = 1; if (!el.hasAttribute('data-rv')) el.dataset.rv = 'n'; Shop._io.observe(el); });
    },
    /* ---------- images produit : images/products/<nom-du-produit>.jpg (le visuel SVG reste en secours) ---------- */
    slug(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); },
    img(name, pos) { return `<img class="sx-pi" src="images/products/${Shop.slug(name)}.jpg" alt="${esc(name)}"${pos ? ` style="object-position:${pos}"` : ''} loading="lazy" decoding="async" onload="this.classList.add('ok')" onerror="this.remove()">`; },
    /* ---------- recherche ---------- */
    search(o) {
      const el = document.createElement('div'); el.className = 'sx-sr';
      el.innerHTML = `<div class="sx-srb"><input type="search" placeholder="${o.placeholder || 'Rechercher un produit…'}" aria-label="Recherche"><div class="sx-srl"></div><div class="sx-hint">↑↓ pour naviguer · Entrée pour ouvrir · Échap pour fermer</div></div>`;
      document.body.appendChild(el);
      const inp = $('input', el), list = $('.sx-srl', el); let res = [], fi = 0;
      const draw = () => {
        const q = inp.value.trim().toLowerCase(), all = o.items();
        res = (q ? all.filter(p => (p.name + ' ' + (p.sub || '') + ' ' + (p.cat || '')).toLowerCase().includes(q)) : all).slice(0, 8); fi = 0;
        list.innerHTML = res.length ? res.map((p, i) => `<button class="sx-sri${i === 0 ? ' f' : ''}" data-i="${i}"><span class="th">${p.art || ''}</span><div><b>${esc(p.name)}</b><small>${esc(p.sub || p.cat || '')}</small></div><b>${Cart.fmt(p.price)}</b></button>`).join('') : `<div class="sx-emp">Aucun résultat pour « ${esc(q)} »</div>`;
      };
      const pick = i => { if (!res[i]) return; Shop.closeSearch(); o.onPick(res[i].id); };
      this._sr = { el, inp, draw };
      inp.oninput = draw;
      inp.onkeydown = e => {
        const items = [...list.querySelectorAll('.sx-sri')];
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); fi = (fi + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % (items.length || 1); items.forEach((b, i) => b.classList.toggle('f', i === fi)); }
        if (e.key === 'Enter') pick(fi);
      };
      list.onclick = e => { const b = e.target.closest('.sx-sri'); if (b) pick(+b.dataset.i); };
      el.onclick = e => { if (e.target === el) Shop.closeSearch(); };
      document.addEventListener('click', e => { if (e.target.closest('[data-search-open]')) { e.preventDefault(); Shop.openSearch(); } });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') Shop.closeSearch();
        if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); Shop.openSearch(); }
      });
    },
    openSearch() { const s = this._sr; s.inp.value = ''; s.draw(); s.el.classList.add('on'); setTimeout(() => s.inp.focus(), 30); },
    closeSearch() { this._sr.el.classList.remove('on'); },
    /* ---------- fiche produit ---------- */
    detail(o) {
      let md = $('.sx-md'); if (!md) { md = document.createElement('div'); md.className = 'sx-md'; document.body.appendChild(md); md.onclick = e => { if (e.target === md) md.classList.remove('on'); }; document.addEventListener('keydown', e => { if (e.key === 'Escape') md.classList.remove('on'); }); }
      const sel = {}, tabs = []; let qty = 1;
      (o.options || []).forEach(g => sel[g.label] = (g.values[0].v || g.values[0]));
      if (o.specs) tabs.push(['d', 'Détails']); if (o.reviews) tabs.push(['r', 'Avis (' + o.reviews.length + ')']); if (o.extra) tabs.push(['x', o.extra[0]]);
      let tab = tabs.length ? tabs[0][0] : null;
      const tp = () => ({ d: o.specs ? '<table>' + o.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('') + '</table>' : '', r: (o.reviews || []).map(r => `<div class="sx-r"><b>${r[0]}</b><span>${'★'.repeat(r[1])}</span><br>${r[2]}</div>`).join(''), x: o.extra ? o.extra[1] : '' })[tab] || '';
      const paint = () => {
        md.innerHTML = `<div class="sx-mb"><button class="x" aria-label="Fermer">✕</button><div class="sx-ma" id="sxa" style="${o.bg ? 'background:' + o.bg : ''}">${o.art(sel)}</div><div class="sx-mi"><small>${esc(o.cat || '')}</small><h2>${esc(o.name)}</h2>
          ${o.rating ? `<div class="sx-star">${stars(o.rating)} <span>${o.rating} (${o.rc || 0} avis)</span></div>` : ''}
          <div class="sx-pr">${Cart.fmt(o.price)}${o.old ? `<s>${Cart.fmt(o.old)}</s><em>-${Math.round((1 - o.price / o.old) * 100)}%</em>` : ''}</div>
          <p class="sx-ds">${o.desc || ''}</p>
          ${(o.options || []).map(g => `<div class="sx-og"><span>${g.label} : <b data-lv="${g.label}">${sel[g.label]}</b>${g.link ? ` · <a href="#" data-lk style="color:var(--acc)">${g.link}</a>` : ''}</span><div class="sx-ch" data-g="${g.label}">${g.values.map(v => v.c ? `<button class="sw ${sel[g.label] === v.v ? 'on' : ''}" data-v="${v.v}" title="${v.v}" style="background:${v.c}"></button>` : `<button class="${sel[g.label] === v ? 'on' : ''}" data-v="${v}">${v}</button>`).join('')}</div></div>`).join('')}
          ${tabs.length ? `<div class="sx-tabs">${tabs.map(t => `<button class="${t[0] === tab ? 'on' : ''}" data-t="${t[0]}">${t[1]}</button>`).join('')}</div><div class="sx-tp">${tp()}</div>` : ''}
          <div class="sx-buy"><div class="sx-qty"><button data-q="-1">−</button><span>${qty}</span><button data-q="1">+</button></div><button class="sx-btn" id="sxadd">Ajouter au panier · ${Cart.fmt(o.price * qty)}</button></div></div></div>`;
        const mb = $('.sx-mb', md);
        $('.x', mb).onclick = () => md.classList.remove('on');
        mb.onclick = e => {
          const v = e.target.closest('[data-v]'); if (v) { const g = v.parentNode.dataset.g; sel[g] = v.dataset.v; v.parentNode.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === v)); mb.querySelector(`[data-lv="${g}"]`).textContent = v.dataset.v; $('#sxa').innerHTML = o.art(sel); return; }
          const t = e.target.closest('[data-t]'); if (t) { tab = t.dataset.t; mb.querySelectorAll('.sx-tabs button').forEach(b => b.classList.toggle('on', b === t)); $('.sx-tp', mb).innerHTML = tp(); return; }
          const q = e.target.closest('[data-q]'); if (q) { qty = Math.max(1, qty + +q.dataset.q); mb.querySelector('.sx-qty span').textContent = qty; $('#sxadd').textContent = 'Ajouter au panier · ' + Cart.fmt(o.price * qty); return; }
          if (e.target.closest('[data-lk]')) { e.preventDefault(); o.onLink && o.onLink(); }
        };
        $('#sxadd').onclick = () => { md.classList.remove('on'); o.onAdd(sel, qty); };
      };
      paint(); md.classList.add('on');
    },
    /* ---------- sections ---------- */
    sections(o) {
      const host = document.createElement('div'); let h = '';
      if (o.about) { const a = o.about; h += `<section class="sx-sec" id="apropos"><div class="sx-w"><div class="sx-about"><div><span class="sx-eye">${a.eye || 'À propos'}</span><h2>${a.title}</h2><p>${a.text}</p><div class="sx-pts">${a.points.map(p => `<div class="sx-pt" data-rv style="--d:${.08*(a.points.indexOf(p))}s"><i>${Shop.icon(p[0]) || p[0]}</i><div><b>${p[1]}</b><span>${p[2]}</span></div></div>`).join('')}</div></div><div class="sx-stats">${a.stats.map((s, k) => `<div data-rv style="--d:${.1*k}s"><b data-count>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></div></div></section>`; }
      if (o.reviews) { const r = o.reviews; h += `<section class="sx-sec" id="avis" style="padding-top:20px"><div class="sx-w"><span class="sx-eye">Avis clients</span><div style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap"><h2>${r.title || 'Ils nous font confiance'}</h2><div class="sx-rate"><b data-count>${r.score || '4.9'}</b><div><span style="color:#e0a030;letter-spacing:2px">★★★★★</span><br>${r.count || ''}</div></div></div><div class="sx-revs">${r.items.map(i => `<div class="sx-rev" data-rv style="--d:${.1*r.items.indexOf(i)}s"><div class="st">${'★'.repeat(i[1])}</div><p>« ${i[2]} »</p><div class="who"><div class="sx-av">${i[0][0]}</div><div><b>${i[0]}</b><br><span style="color:var(--mut)">${i[3]}${i[4] ? ' · ' + i[4] : ''}</span></div></div></div>`).join('')}</div></div></section>`; }
      if (o.contact) { const c = o.contact; h += `<section class="sx-sec" id="contact" style="padding-top:20px"><div class="sx-w"><div class="sx-ct"><div><span class="sx-eye">Contact</span><h2>${c.title || 'Une question ? Parlons-en.'}</h2><p style="color:var(--mut);margin:0;max-width:420px">${c.text || 'Notre équipe vous répond en moins de 24h.'}</p><div class="sx-inf">${c.info.map((i, k) => `<div data-rv style="--d:${.08*k}s"><i>${Shop.icon(i[0]) || i[0]}</i><div><small>${i[1]}</small><b>${i[2]}</b></div></div>`).join('')}</div></div>
        <form class="sx-fm" id="sxcf" data-rv><div class="r2"><label>Nom complet<input name="n" required></label><label>E-mail<input name="e" type="email" required></label></div><label>Sujet<select name="s">${(c.topics || ['Question sur un produit', 'Suivi de commande', 'Retour / échange', 'Autre']).map(t => `<option>${t}</option>`).join('')}</select></label><label>Message<textarea name="m" rows="5" required></textarea></label><button class="sx-btn">Envoyer le message</button></form></div></div></section>`; }
      if (o.newsletter) { const n = o.newsletter; h += `<section class="sx-sec" style="padding-top:20px"><div class="sx-nl" data-rv><h2>${n.title}</h2><p>${n.text}</p><form id="sxnl"><input type="email" placeholder="Votre e-mail" required aria-label="E-mail"><button>S’inscrire</button></form><small>Code de bienvenue : <b>${n.code}</b> — appliquez-le dans votre panier.</small></div></section>`; }
      host.innerHTML = h; Shop.reveal(host);
      const ft = document.querySelector(o.before || 'footer'); ft.parentNode.insertBefore(host, ft);
      const cf = $('#sxcf'); if (cf) cf.onsubmit = e => { e.preventDefault(); Cart.toast('✓ Message envoyé, nous vous répondons sous 24h'); cf.reset(); };
      const nl = $('#sxnl'); if (nl) nl.onsubmit = e => { e.preventDefault(); Cart.toast('Merci ! Utilisez le code ' + o.newsletter.code + ' au panier'); nl.reset(); };
    }
  });
})();
