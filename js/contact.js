/**
 * contact.js — Copy email, form validation and submission.
 */
import { site } from './data/site.js';
import { showToast } from './utils.js';

export function initContact() {
  initCopyEmail();
  initForm();
}

function initCopyEmail() {
  document.querySelectorAll('.email-copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(site.email);
        showToast('Email copied to clipboard!');
      } catch {
        showToast(`Email: ${site.email}`);
      }
    });
  });
}

function initForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot check
    if (form.querySelector('[name="_honey"]')?.value) return;

    // Validate
    if (!validate(form)) return;

    const data = new FormData(form);
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.reset();
        showStatus(status, 'success', "Thanks for reaching out! I'll reply within 24 hours.");
        showToast('Message sent!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      showStatus(status, 'error-msg', 'Something went wrong. Please email me directly.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });
}

function validate(form) {
  let valid = true;
  const fields = [
    { name: 'name',    msg: 'Please enter your name' },
    { name: 'email',   msg: 'Please enter a valid email', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { name: 'message', msg: 'Please write a message' },
  ];

  fields.forEach(({ name, msg, pattern }) => {
    const input = form.querySelector(`[name="${name}"]`);
    const group = input?.closest('.form-group');
    const errEl = group?.querySelector('.field-error');
    const isEmpty = !input?.value.trim();
    const fails   = isEmpty || (pattern && !pattern.test(input.value));

    input?.classList.toggle('error', fails);
    group?.classList.toggle('has-error', fails);
    if (errEl) errEl.textContent = msg;
    if (fails) valid = false;

    // Clear error on input
    input?.addEventListener('input', () => {
      input.classList.remove('error');
      group?.classList.remove('has-error');
    }, { once: true });
  });

  return valid;
}

function showStatus(el, type, msg) {
  if (!el) return;
  el.className = `form-status ${type}`;
  el.textContent = msg;
  el.setAttribute('role', 'alert');
}
