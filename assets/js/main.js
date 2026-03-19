/**
 * Contact Modal & Form Handler
 * 
 * IMPORTANT: When you connect a real form service (Formspree, 
 * Cloudflare Workers, etc.):
 *   1. Update the <form> action attribute in index.html
 *   2. Delete the e.preventDefault() line below
 *   3. Delete the "Simulated success" block below it
 *   The form will then POST to your action URL normally.
 */

(function () {
  const openBtn   = document.getElementById('contactOpen');
  const closeBtn  = document.getElementById('contactClose');
  const backdrop  = document.getElementById('contactModal');
  const form      = document.getElementById('contactForm');
  const success   = document.getElementById('formSuccess');

  /* --- Open modal --- */
  openBtn.addEventListener('click', () => {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('contactName').focus(), 400);
  });

  /* --- Close modal --- */
  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* Close via X button */
  closeBtn.addEventListener('click', closeModal);

  /* Close on backdrop click (outside the modal box) */
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  /* Close on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  /* --- Form submission --- */
  form.addEventListener('submit', (e) => {
    e.preventDefault(); /* ← DELETE this line when using a real form service */

    /* --- Simulated success (DELETE this block when using a real service) --- */
    form.style.display = 'none';
    success.classList.add('is-visible');

    setTimeout(() => {
      closeModal();
      setTimeout(() => {
        form.style.display = '';
        success.classList.remove('is-visible');
        form.reset();
      }, 400);
    }, 2200);
    /* --- END simulated success --- */
  });
})();
