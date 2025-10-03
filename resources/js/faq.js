
  document.addEventListener('DOMContentLoaded', () => {
    const closeOthers = true; // set to true if you want only one open at a time
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(btn => {
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

  
      btn.setAttribute('aria-expanded', 'false');
      answer.classList.remove('is-open');

      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        if (closeOthers) {

          questions.forEach(otherBtn => {
            if (otherBtn !== btn) {
              const otherAnswer = document.getElementById(otherBtn.getAttribute('aria-controls'));
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAnswer.classList.remove('is-open');
            }
          });
        }

        btn.setAttribute('aria-expanded', String(!isOpen));
        answer.classList.toggle('is-open', !isOpen);
      });
    });
  });

