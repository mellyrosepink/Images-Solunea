/* © 2026 Solunéa. Tous droits réservés.
   Le code, le design, les textes, les visuels et l'identité visuelle de ce fichier
   sont la propriété exclusive de Solunéa.
   Toute copie, reproduction ou réutilisation, totale ou partielle, est interdite
   sans autorisation écrite de Solunéa. */
(function(){
  if (window.__soluneaFooter) return;
  window.__soluneaFooter = true;

  var MAIL = 'hello@solunea.eu';
  var BASE = 'https://go.solunea.life/';

  if (/(^|\.)solunea\.life$/.test(location.hostname)) document.documentElement.classList.add('sol-live');

  var css = ''
  + 'html.sol-live #app > div:has(.sol-footer){ min-height:100vh; min-height:100dvh; }'
  + 'html.sol-live #app > div > div:has(.sol-footer){ display:flex; flex-direction:column; }'
  + 'html.sol-live #app > div > div > div:has(.sol-footer){ flex:1 0 auto; display:flex; flex-direction:column; }'
  + 'html.sol-live #app > div > div > div > section:has(.sol-footer){ flex:1 0 auto; }'
  + 'html.sol-live #app > div > div > div > section > div:has(.sol-footer){ margin:0 auto; display:flex; flex-direction:column; }'
  + 'html.sol-live #app > div > div > div > section > div > div:has(.sol-footer){ margin-top:auto; }'
  + '.sol-footer{ position:relative; z-index:1; max-width:560px; margin:0 auto; padding:28px 1.4rem 1.4rem; text-align:center; font-family:"Montserrat",sans-serif; }'
  + '.sol-footer__logo{ display:block; width:86px; height:auto; margin:0 auto .5rem; object-fit:contain; -webkit-user-drag:none; user-drag:none; }'
  + '.sol-footer__links{ font-family:"Montserrat",sans-serif; font-size:min(.7rem,3.2vw); white-space:nowrap; color:#A58E86; margin:0; }'
  + '.sol-footer__links a{ color:#A58E86; text-decoration:none; transition:color .2s ease; cursor:pointer; }'
  + '.sol-footer__links a:hover{ color:#C0765B; }'
  + '.sol-footer, .sol-footer *{ -webkit-user-select:none !important; -moz-user-select:none !important; user-select:none !important; -webkit-touch-callout:none !important; }'
  + '@media (max-width:480px){ .sol-footer{ padding-left:.8rem; padding-right:.8rem; } }'
  + '.sol-contact{ position:fixed; inset:0; z-index:99999; display:none; align-items:center; justify-content:center; padding:20px; background:rgba(111,68,57,.28); -webkit-backdrop-filter:blur(3px); backdrop-filter:blur(3px); }'
  + '.sol-contact.is-open{ display:flex; }'
  + '.sol-contact__box{ position:relative; width:100%; max-width:340px; box-sizing:border-box; background:#FDF3EE; border-radius:24px; padding:30px 22px 24px; text-align:center; box-shadow:0 20px 50px rgba(111,68,57,.22); font-family:"Montserrat",sans-serif; }'
  + '.sol-contact__close{ position:absolute; top:10px; right:12px; width:34px; height:34px; border:none; background:none; color:#A58E86; font-size:22px; line-height:1; cursor:pointer; }'
  + '.sol-contact__close:hover{ color:#C0765B; }'
  + '.sol-contact__title{ font-family:"Playfair Display",Georgia,serif; font-weight:500; font-size:1.6rem; color:#6F4439; margin:0; }'
  + '.sol-contact__dv{ display:block; color:#C0765B; font-size:14px; margin:10px 0 12px; }'
  + '.sol-contact__mail{ font-size:.95rem; font-weight:600; color:#80605A; margin:0 0 20px; }'
  + '.sol-contact__btn{ display:block; width:100%; box-sizing:border-box; border-radius:60px; padding:.9rem 1rem; font-family:"Montserrat",sans-serif; font-size:.75rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; text-decoration:none; cursor:pointer; transition:background .3s ease; }'
  + '.sol-contact__btn--main{ border:none; background:#C77858; color:#FFF9F4; box-shadow:0 14px 30px rgba(160,93,69,.18); margin-bottom:10px; }'
  + '.sol-contact__btn--main:hover{ background:#B96D50; }'
  + '.sol-contact__btn--alt{ border:1.5px solid rgba(192,118,91,.6); background:transparent; color:#C0765B; }'
  + '.sol-contact__btn--alt:hover{ background:rgba(192,118,91,.08); }'
  + '.sol-contact, .sol-contact *{ -webkit-user-select:none; user-select:none; -webkit-tap-highlight-color:transparent; }';

  var html = ''
  + '<div class="sol-footer">'
  +   '<img class="sol-footer__logo" src="https://evolve.solunea.life/logo-solunea.svg" alt="Solunéa">'
  +   '<p class="sol-footer__links">'
  +     '<a href="' + BASE + 'mentions-legales" target="_blank" rel="noopener">Mentions légales</a> · '
  +     '<a href="' + BASE + 'confidentialite" target="_blank" rel="noopener">Confidentialité</a> · '
  +     '<a href="' + BASE + 'cgv" target="_blank" rel="noopener">CGV</a> · '
  +     '<a href="#" class="sol-footer__contact">Contact</a>'
  +   '</p>'
  + '</div>';

  var modal = ''
  + '<div class="sol-contact__box" role="dialog" aria-modal="true" aria-label="Contact">'
  +   '<button type="button" class="sol-contact__close" aria-label="Fermer">×</button>'
  +   '<p class="sol-contact__title">Contact</p>'
  +   '<span class="sol-contact__dv" aria-hidden="true">✦</span>'
  +   '<p class="sol-contact__mail">' + MAIL + '</p>'
  +   '<button type="button" class="sol-contact__btn sol-contact__btn--main sol-contact__copy">Copier l’adresse</button>'
  +   '<a class="sol-contact__btn sol-contact__btn--alt" href="mailto:' + MAIL + '">Écrire un mail</a>'
  + '</div>';

  function mount(){
    var spot = document.getElementById('solunea-footer');
    if (!spot || spot.getAttribute('data-ready')) return;
    spot.setAttribute('data-ready', '1');

    if (!document.getElementById('sol-footer-css')){
      var st = document.createElement('style');
      st.id = 'sol-footer-css';
      st.textContent = css;
      document.head.appendChild(st);
    }
    spot.innerHTML = html;

    var box = document.querySelector('.sol-contact');
    var fresh = !box;
    if (fresh){
      box = document.createElement('div');
      box.className = 'sol-contact';
      box.innerHTML = modal;
      document.body.appendChild(box);
    }

    var copyBtn = box.querySelector('.sol-contact__copy');
    function open(e){ e.preventDefault(); copyBtn.textContent = 'Copier l’adresse'; box.classList.add('is-open'); }
    function close(){ box.classList.remove('is-open'); }

    spot.querySelector('.sol-footer__contact').addEventListener('click', open);
    if (!fresh) return;
    box.querySelector('.sol-contact__close').addEventListener('click', close);
    box.addEventListener('click', function(e){ if (e.target === box) close(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });

    copyBtn.addEventListener('click', function(){
      function done(){ copyBtn.textContent = 'Adresse copiée ✦'; }
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(MAIL).then(done, fallback);
      } else { fallback(); }
      function fallback(){
        var t = document.createElement('textarea');
        t.value = MAIL; t.setAttribute('readonly', '');
        t.style.position = 'fixed'; t.style.opacity = '0';
        document.body.appendChild(t); t.select();
        try { document.execCommand('copy'); done(); } catch(err){}
        document.body.removeChild(t);
      }
    });
  }

  mount();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  window.addEventListener('load', mount);
  new MutationObserver(mount).observe(document.documentElement, { childList:true, subtree:true });
})();
