/* =========================================================
   Florence Sway — Modern Portfolio interactions
   ========================================================= */
(function () {
    'use strict';

    /* ---------- Typing effect ---------- */
    var roles = ['Web Designer', 'Data Scientist', 'Software Engineer', 'Chatbot Builder'];
    var typedEl = document.getElementById('typed');
    var rIndex = 0, cIndex = 0, deleting = false;

    function type() {
        if (!typedEl) return;
        var word = roles[rIndex];
        typedEl.textContent = word.substring(0, cIndex);

        if (!deleting && cIndex < word.length) {
            cIndex++;
            setTimeout(type, 90);
        } else if (!deleting && cIndex === word.length) {
            deleting = true;
            setTimeout(type, 1600);
        } else if (deleting && cIndex > 0) {
            cIndex--;
            setTimeout(type, 45);
        } else {
            deleting = false;
            rIndex = (rIndex + 1) % roles.length;
            setTimeout(type, 350);
        }
    }
    type();

    /* ---------- Navbar scroll state + progress + to-top ---------- */
    var nav = document.getElementById('nav');
    var progress = document.getElementById('progress');
    var totop = document.getElementById('totop');

    function onScroll() {
        var y = window.pageYOffset;
        if (nav) nav.classList.toggle('scrolled', y > 40);
        if (totop) totop.classList.toggle('show', y > 600);
        if (progress) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        }
        spy();
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    if (totop) totop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------- Active link scroll-spy ---------- */
    var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));

    function spy() {
        var pos = window.pageYOffset + 120;
        var currentId = '';
        sections.forEach(function (sec) {
            if (sec.offsetTop <= pos) currentId = sec.id;
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
    }

    /* ---------- Mobile menu ---------- */
    var menu = document.getElementById('mobileMenu');
    var openBtn = document.getElementById('navToggle');
    var closeBtn = document.getElementById('menuClose');

    function setMenu(open) { if (menu) menu.classList.toggle('open', open); }
    if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
    if (menu) menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setMenu(false); });
    });

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('in');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------- Lightbox ---------- */
    var lb = document.getElementById('lb');
    var lbImg = document.getElementById('lbImg');
    var lbClose = document.getElementById('lbClose');
    var grid = document.getElementById('gallery-grid');

    if (grid && lb && lbImg) {
        grid.addEventListener('click', function (e) {
            var a = e.target.closest('a');
            if (!a) return;
            e.preventDefault();
            lbImg.src = a.getAttribute('href');
            lbImg.alt = a.getAttribute('data-cap') || '';
            lb.classList.add('open');
        });
        function closeLb() { lb.classList.remove('open'); lbImg.src = ''; }
        if (lbClose) lbClose.addEventListener('click', closeLb);
        lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLb();
        });
    }

    /* ---------- Contact form (AJAX to Formspree) ---------- */
    var form = document.getElementById('contactForm');
    var msg = document.getElementById('formMsg');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            var original = btn.innerHTML;
            btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            }).then(function (res) {
                if (res.ok) {
                    show('ok', 'Thanks! Your message has been sent. I’ll get back to you soon.');
                    form.reset();
                } else {
                    show('err', 'Oops — something went wrong. Please try again or email me directly.');
                }
            }).catch(function () {
                show('err', 'Network error. Please check your connection and try again.');
            }).finally(function () {
                btn.innerHTML = original;
                btn.disabled = false;
            });
        });
    }

    function show(type, text) {
        if (!msg) return;
        msg.className = 'form-msg ' + type;
        msg.textContent = text;
        setTimeout(function () { msg.className = 'form-msg'; }, 6000);
    }

    /* init */
    onScroll();
})();
