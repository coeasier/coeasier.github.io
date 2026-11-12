/* Panier + codes promo + checkout partagés. Thème via variables CSS: --bg --fg --mut --line --acc --accfg --card --r */
(function () {
  const css = `
.cx-ov{position:fixed;inset:0;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .3s;z-index:900}
.cx-dr{position:fixed;top:0;right:0;height:100%;width:min(430px,100%);background:var(--bg,#fff);color:var(--fg,#111);z-index:901;transform:translateX(100%);transition:transform .38s cubic-bezier(.2,.8,.2,1);display:flex;flex-direction:column;font-family:inherit}
.cx-open .cx-ov{opacity:1;pointer-events:auto}.cx-open .cx-dr{transform:none;box-shadow:-20px 0 60px rgba(0,0,0,.25)}
.cx-dr header{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--line,#ddd)}
.cx-dr h3{margin:0;font-size:18px;font-weight:600}.cx-dr h3 span{color:var(--mut,#777);font-weight:400}
.cx-x{background:none;border:0;color:inherit;font-size:20px;cursor:pointer;width:36px;height:36px;border-radius:50%}.cx-x:hover{background:var(--card,#eee)}
.cx-ship{padding:14px 24px;border-bottom:1px solid var(--line,#ddd);font-size:13px}
.cx-ship i{display:block;height:6px;background:var(--card,#eee);border-radius:9px;margin-top:8px;overflow:hidden}
.cx-ship i b{display:block;height:100%;width:0;background:var(--acc,#000);border-radius:9px;transition:width .5s}
.cx-items{flex:1;overflow:auto;padding:8px 24px}
.cx-empty{text-align:center;color:var(--mut,#777);padding:70px 0;font-size:14px}
.cx-it{display:grid;grid-template-columns:68px 1fr auto;gap:14px;padding:16px 0;border-bottom:1px solid var(--line,#ddd);align-items:start}
.cx-th{position:relative;width:68px;height:68px;background:var(--card,#eee);border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center}
.cx-th svg{width:100%;height:100%}
.cx-it h4{margin:0 0 2px;font-size:14px;font-weight:600}.cx-it small{color:var(--mut,#777);font-size:12px;display:block}
.cx-q{display:inline-flex;align-items:center;border:1px solid var(--line,#ddd);border-radius:99px;margin-top:8px}
.cx-q button{background:none;border:0;color:inherit;width:28px;height:28px;cursor:pointer;font-size:15px}.cx-q span{min-width:20px;text-align:center;font-size:13px}
.cx-pr{text-align:right;font-weight:600;font-size:14px}.cx-rm{display:block;margin-top:8px;background:none;border:0;color:var(--mut,#777);font-size:12px;cursor:pointer;text-decoration:underline;margin-left:auto}
.cx-dr footer{padding:18px 24px 20px;border-top:1px solid var(--line,#ddd)}
.cx-promo{display:flex;gap:8px;margin-bottom:6px}.cx-promo input{flex:1;min-width:0;background:var(--card,#eee);border:1px solid var(--line,#ddd);border-radius:var(--rr,10px);padding:11px 14px;color:inherit;font:inherit;font-size:14px;text-transform:uppercase}
.cx-promo button{background:none;border:1px solid var(--fg,#111);color:inherit;border-radius:var(--rr,10px);padding:0 16px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
.cx-pm{font-size:12.5px;min-height:20px;margin-bottom:8px;color:var(--mut,#777)}.cx-pm.ok{color:#2e9d5c}.cx-pm.ko{color:#d6453d}
.cx-row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:6px;color:var(--mut,#777)}.cx-row.t{font-size:17px;color:var(--fg,#111);font-weight:600;margin:10px 0 14px}
.cx-row .g{color:#2e9d5c}
.cx-pay{width:100%;padding:15px;border:0;border-radius:var(--rr,10px);background:var(--acc,#000);color:var(--accfg,#fff);font:inherit;font-weight:600;cursor:pointer;transition:transform .2s,opacity .2s}.cx-pay:hover{opacity:.9;transform:translateY(-1px)}
.cx-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,30px);background:var(--fg,#111);color:var(--bg,#fff);padding:12px 20px;border-radius:99px;font-size:14px;opacity:0;pointer-events:none;transition:.35s;z-index:1200;font-family:inherit;max-width:92vw;text-align:center}
.cx-toast.on{opacity:1;transform:translate(-50%,0)}
.cx-bump{animation:cxb .4s}@keyframes cxb{50%{transform:scale(1.35)}}
/* checkout */
.cx-co{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(5px);display:none;align-items:center;justify-content:center;z-index:1000;padding:16px;font-family:inherit}.cx-co.on{display:flex}
.cx-cb{background:var(--bg,#fff);color:var(--fg,#111);border-radius:calc(var(--rr,10px)*2);width:100%;max-width:900px;max-height:94vh;overflow:auto;display:grid;grid-template-columns:1.25fr 1fr;position:relative;box-shadow:0 40px 80px -20px rgba(0,0,0,.5)}
.cx-cb .cx-x{position:absolute;right:12px;top:12px;z-index:2}
.cx-f{padding:34px}.cx-f h2{margin:0 0 4px;font-size:24px;font-family:var(--hf,inherit);text-transform:var(--ht,none)}.cx-f>p{margin:0 0 20px;color:var(--mut,#777);font-size:14px}
.cx-f label{display:block;font-size:12.5px;color:var(--mut,#777);margin-bottom:12px}
.cx-f input,.cx-f select,.cx-f textarea{width:100%;margin-top:5px;background:var(--card,#eee);border:1px solid var(--line,#ddd);border-radius:var(--rr,10px);padding:12px 14px;color:var(--fg,#111);font:inherit;font-size:14.5px;outline:0}
.cx-f input:focus,.cx-f select:focus{border-color:var(--acc,#000)}.cx-f .bad{border-color:#d6453d!important}
.cx-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cx-pm2{display:grid;gap:8px;margin:6px 0 20px}.cx-pm2 label{display:flex;gap:10px;align-items:center;border:1px solid var(--line,#ddd);border-radius:var(--rr,10px);padding:12px 14px;margin:0;color:var(--fg,#111);font-size:14px;cursor:pointer}
.cx-pm2 input{width:auto;margin:0;accent-color:var(--acc,#000)}.cx-pm2 label:has(input:checked){border-color:var(--acc,#000);background:var(--card,#eee)}
.cx-sum{background:var(--card,#eee);padding:34px 28px}.cx-sum h3{margin:0 0 16px;font-size:16px}
.cx-sl{display:flex;gap:12px;align-items:center;margin-bottom:12px;font-size:13.5px}.cx-sl .cx-th{width:52px;height:52px;flex:none;position:relative;background:var(--bg,#fff)}.cx-sl .cx-th em{position:absolute;right:-2px;top:-2px;background:var(--fg,#111);color:var(--bg,#fff);font-size:10px;font-style:normal;width:18px;height:18px;border-radius:50%;display:grid;place-items:center;z-index:2}
.cx-sl div:nth-child(2){flex:1}.cx-sl small{display:block;color:var(--mut,#777);font-size:12px}
.cx-sum hr{border:0;border-top:1px solid var(--line,#ddd);margin:16px 0}
.cx-ok{grid-column:1/-1;text-align:center;padding:70px 30px}.cx-ok i{font-style:normal;display:grid;place-items:center;width:78px;height:78px;border-radius:50%;background:var(--acc,#000);color:var(--accfg,#fff);font-size:36px;margin:0 auto 22px}
.cx-ok h2{margin:0 0 10px;font-size:30px;font-family:var(--hf,inherit);text-transform:var(--ht,none)}.cx-ok p{color:var(--mut,#777);margin:0 auto 24px;max-width:440px}
@media(max-width:760px){.cx-cb{grid-template-columns:1fr}.cx-2{grid-template-columns:1fr}.cx-f,.cx-sum{padding:26px 20px}.cx-sum{order:-1}}
`;
  const CITIES = ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fès', 'Agadir', 'Meknès', 'Oujda', 'Kénitra', 'Tétouan', 'Salé', 'Autre ville'];
  const C = (window.Cart = {
    items: [], code: null,
    cfg: { site: 'shop', freeShip: 0, shipFee: 30, cur: 'DH', codes: {} },
    fmt(n) { return Math.round(n).toLocaleString('fr-FR') + ' ' + this.cfg.cur; },
    init(cfg) {
      Object.assign(this.cfg, cfg);
      try { this.items = JSON.parse(localStorage.getItem('cart-' + this.cfg.site)) || []; this.code = localStorage.getItem('cartcode-' + this.cfg.site) || null; } catch (e) { this.items = []; }
      if (this.code && !this.cfg.codes[this.code]) this.code = null;
      const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
      const w = document.createElement('div');
      w.innerHTML = `<div class="cx-ov"></div><aside class="cx-dr" aria-label="Panier"><header><h3>Panier <span data-cx-n></span></h3><button class="cx-x" aria-label="Fermer">✕</button></header><div class="cx-ship"><p style="margin:0"></p><i><b></b></i></div><div class="cx-items"></div><footer>
        <div class="cx-promo"><input id="cxc" placeholder="Code promo" autocomplete="off"><button id="cxa">Appliquer</button></div><div class="cx-pm" id="cxm"></div>
        <div class="cx-row"><span>Sous-total</span><span data-cx-sub></span></div><div class="cx-row" id="cxd" style="display:none"><span>Réduction</span><span class="g"></span></div><div class="cx-row"><span>Livraison</span><span id="cxs"></span></div>
        <div class="cx-row t"><span>Total</span><span data-cx-tot></span></div><button class="cx-pay">Passer la commande</button></footer></aside>
        <div class="cx-co" id="cxco"></div><div class="cx-toast"></div>`;
      document.body.append(...w.children);
      this.dr = document.querySelector('.cx-dr'); this.tt = document.querySelector('.cx-toast');
      document.querySelector('.cx-ov').onclick = document.querySelector('.cx-x').onclick = () => this.close();
      document.querySelector('.cx-pay').onclick = () => { if (!this.items.length) return this.toast('Votre panier est vide'); this.checkout(); };
      document.getElementById('cxa').onclick = () => this.apply(document.getElementById('cxc').value);
      document.getElementById('cxc').onkeydown = e => { if (e.key === 'Enter') this.apply(e.target.value); };
      document.addEventListener('click', e => { if (e.target.closest('[data-cart-open]')) { e.preventDefault(); this.open(); } });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') { this.close(); document.getElementById('cxco').classList.remove('on'); } });
      this.dr.addEventListener('click', e => {
        const b = e.target.closest('[data-k]'); if (!b) return;
        const it = this.items.find(i => i.key === b.dataset.k); if (!it) return;
        if (b.dataset.a === 'rm') this.items = this.items.filter(i => i !== it);
        else it.qty += b.dataset.a === '+' ? 1 : -1;
        this.items = this.items.filter(i => i.qty > 0); this.save(); this.render();
      });
      this.render();
    },
    apply(raw) {
      const c = (raw || '').trim().toUpperCase(), m = document.getElementById('cxm');
      if (!c) { this.code = null; this.save(); this.render(); return; }
      if (!this.cfg.codes[c]) { m.className = 'cx-pm ko'; m.textContent = 'Code invalide. Essayez : ' + Object.keys(this.cfg.codes).join(', '); return; }
      this.code = c; this.save(); this.render();
    },
    add(item, open) {
      const ex = this.items.find(i => i.key === item.key);
      if (ex) ex.qty += item.qty || 1; else this.items.push({ qty: 1, ...item });
      this.save(); this.render();
      document.querySelectorAll('[data-cart-count]').forEach(el => { el.classList.remove('cx-bump'); void el.offsetWidth; el.classList.add('cx-bump'); });
      if (open) this.open(); else this.toast(item.name + ' ajouté au panier');
    },
    save() { try { localStorage.setItem('cart-' + this.cfg.site, JSON.stringify(this.items)); if (this.code) localStorage.setItem('cartcode-' + this.cfg.site, this.code); else localStorage.removeItem('cartcode-' + this.cfg.site); } catch (e) {} },
    count() { return this.items.reduce((s, i) => s + i.qty, 0); },
    total() { return this.items.reduce((s, i) => s + i.qty * i.price, 0); },
    discount() {
      const c = this.cfg.codes[this.code]; if (!c) return 0; const t = this.total();
      return c.t === 'pct' ? Math.round(t * c.v / 100) : c.t === 'fix' ? Math.min(c.v, t) : 0;
    },
    shipping() {
      const c = this.cfg.codes[this.code], t = this.total() - this.discount();
      if (!this.items.length || (c && c.t === 'ship') || (this.cfg.freeShip && t >= this.cfg.freeShip)) return 0;
      return this.cfg.shipFee;
    },
    grand() { return Math.max(0, this.total() - this.discount() + this.shipping()); },
    open() { document.documentElement.classList.add('cx-open'); },
    close() { document.documentElement.classList.remove('cx-open'); },
    toast(m) { this.tt.textContent = m; this.tt.classList.add('on'); clearTimeout(this._t); this._t = setTimeout(() => this.tt.classList.remove('on'), 2600); },
    render() {
      const n = this.count(), t = this.total(), d = this.discount(), s = this.shipping();
      document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = n);
      document.querySelector('[data-cx-n]').textContent = n ? '(' + n + ')' : '';
      document.querySelector('[data-cx-sub]').textContent = this.fmt(t);
      document.querySelector('[data-cx-tot]').textContent = this.fmt(this.grand());
      const dr = document.getElementById('cxd'); dr.style.display = d ? '' : 'none'; dr.lastElementChild.textContent = '− ' + this.fmt(d);
      document.getElementById('cxs').textContent = !n ? '—' : s ? this.fmt(s) : 'Offerte';
      const m = document.getElementById('cxm'), cc = this.cfg.codes[this.code];
      m.className = 'cx-pm' + (cc ? ' ok' : ''); m.textContent = cc ? '✓ ' + this.code + ' — ' + cc.d : 'Un code promo ? Essayez ' + Object.keys(this.cfg.codes)[0];
      document.getElementById('cxc').value = this.code || '';
      const fs = this.cfg.freeShip, sh = this.dr.querySelector('.cx-ship'), net = t - d;
      sh.style.display = fs ? '' : 'none';
      if (fs) {
        sh.querySelector('p').innerHTML = net >= fs || s === 0 && n ? '<b>Livraison gratuite</b> débloquée' : 'Plus que <b>' + this.fmt(fs - net) + '</b> pour la livraison gratuite';
        sh.querySelector('i b').style.width = Math.min(100, net / fs * 100) + '%';
      }
      this.dr.querySelector('.cx-items').innerHTML = this.items.length ? this.items.map(i => `
        <div class="cx-it"><div class="cx-th">${i.art || ''}</div>
          <div><h4>${i.name}</h4><small>${i.variant || ''}</small>
            <div class="cx-q"><button data-k="${i.key}" data-a="-">−</button><span>${i.qty}</span><button data-k="${i.key}" data-a="+">+</button></div></div>
          <div class="cx-pr">${this.fmt(i.price * i.qty)}<button class="cx-rm" data-k="${i.key}" data-a="rm">Retirer</button></div></div>`).join('')
        : '<div class="cx-empty">Votre panier est vide.<br>Ajoutez vos premiers produits.</div>';
    },
    checkout() {
      this.close();
      const co = document.getElementById('cxco'), d = this.discount(), s = this.shipping();
      co.innerHTML = `<div class="cx-cb"><button class="cx-x" aria-label="Fermer">✕</button>
      <form class="cx-f" novalidate><h2>Finaliser la commande</h2><p>Livraison partout au Maroc · Paiement sécurisé</p>
        <div class="cx-2"><label>Prénom<input name="fn" required autocomplete="given-name"></label><label>Nom<input name="ln" required autocomplete="family-name"></label></div>
        <div class="cx-2"><label>Téléphone<input name="ph" required inputmode="tel" placeholder="06 12 34 56 78" autocomplete="tel"></label><label>E-mail (optionnel)<input name="em" type="email" autocomplete="email"></label></div>
        <div class="cx-2"><label>Ville<select name="ci">${CITIES.map(c => `<option>${c}</option>`).join('')}</select></label><label>Code postal<input name="zp" inputmode="numeric"></label></div>
        <label>Adresse de livraison<input name="ad" required autocomplete="street-address" placeholder="N°, rue, quartier"></label>
        <div class="cx-pm2"><label><input type="radio" name="pay" value="cod" checked>Paiement à la livraison (COD)</label><label><input type="radio" name="pay" value="card">Carte bancaire</label></div>
        <button class="cx-pay" type="submit">Confirmer · ${this.fmt(this.grand())}</button></form>
      <div class="cx-sum"><h3>Récapitulatif</h3>${this.items.map(i => `<div class="cx-sl"><div class="cx-th"><em>${i.qty}</em>${i.art || ''}</div><div>${i.name}<small>${i.variant || ''}</small></div><b>${this.fmt(i.price * i.qty)}</b></div>`).join('')}<hr>
        <div class="cx-row"><span>Sous-total</span><span>${this.fmt(this.total())}</span></div>${d ? `<div class="cx-row"><span>Code ${this.code}</span><span class="g">− ${this.fmt(d)}</span></div>` : ''}
        <div class="cx-row"><span>Livraison</span><span>${s ? this.fmt(s) : 'Offerte'}</span></div><div class="cx-row t"><span>Total</span><span>${this.fmt(this.grand())}</span></div></div></div>`;
      co.classList.add('on');
      co.querySelector('.cx-x').onclick = () => co.classList.remove('on');
      co.onclick = e => { if (e.target === co) co.classList.remove('on'); };
      co.querySelector('form').onsubmit = e => {
        e.preventDefault(); const f = e.target; let ok = true;
        ['fn', 'ln', 'ph', 'ad'].forEach(k => { const el = f.elements[k], v = el.value.trim(), bad = !v || (k === 'ph' && !/^(\+212|0)?[5-7]\d{8}$/.test(v.replace(/[\s.-]/g, ''))); el.classList.toggle('bad', bad); if (bad) ok = false; });
        if (!ok) return this.toast('Vérifiez les champs en rouge (téléphone marocain valide)');
        const no = 'CMD-' + Math.floor(100000 + Math.random() * 900000), name = f.elements.fn.value.trim(), pay = f.elements.pay.value;
        co.querySelector('.cx-cb').innerHTML = `<div class="cx-ok"><i><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg></i><h2>Merci ${name} !</h2><p>Votre commande <b>${no}</b> est confirmée. ${pay === 'cod' ? 'Vous paierez à la livraison (' + this.fmt(this.grand()) + ').' : 'Paiement par carte enregistré.'} Nous vous appellerons pour confirmer la livraison à ${f.elements.ci.value}.</p><button class="cx-pay" style="max-width:280px">Continuer mes achats</button></div>`;
        this.items = []; this.code = null; this.save(); this.render();
        co.querySelector('.cx-ok .cx-pay').onclick = () => co.classList.remove('on');
      };
    }
  });
})();
