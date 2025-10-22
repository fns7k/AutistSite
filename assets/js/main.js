// Shared JS for ASD Clinic website
(function () {
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  // Mobile nav toggle
  var toggle = qs('.mobile-nav-toggle');
  var links = qs('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for anchor links
  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href') || '';
      var id = href.slice(1);
      var el = id ? qs('#' + CSS.escape(id)) : null;
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      }
    });
  });

  // Highlight active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  qsa('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // Contact form mailto fallback
  var form = qs('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var configured = form.getAttribute('data-handler');
      if (configured === 'server') return; // allow normal POST when user adds backend
      e.preventDefault();
      var targetEmail = form.getAttribute('data-email') || 'info@yourclinic.com';
      var name = (qs('[name="name"]', form) || {}).value || '';
      var email = (qs('[name="email"]', form) || {}).value || '';
      var phone = (qs('[name="phone"]', form) || {}).value || '';
      var subject = (qs('[name="subject"]', form) || {}).value || 'New enquiry via website';
      var message = (qs('[name="message"]', form) || {}).value || '';
      var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\n" + message;
      var mailto = "mailto:" + encodeURIComponent(targetEmail) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }
})();
