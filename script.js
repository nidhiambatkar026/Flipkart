// Smooth scroll navigation
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Login validation
  const loginSection = document.querySelector('#login');
  const loginBtn = loginSection.querySelector('.btn');

  loginBtn.addEventListener('click', () => {
    const inputs = loginSection.querySelectorAll('input');
    const username = inputs[0].value;
    const password = inputs[1].value;

    if (username === '' || password === '') {
      alert('Please fill in all fields');
    } else {
      alert('Login successful (Demo only)');
      inputs[0].value = '';
      inputs[1].value = '';
    }
  });

  // Contact form validation
  const contactSection = document.querySelector('#contact');
  const contactBtn = contactSection.querySelector('.btn');

  contactBtn.addEventListener('click', () => {
    const name = contactSection.querySelector('input[type="text"]').value;
    const email = contactSection.querySelector('input[type="email"]').value;
    const message = contactSection.querySelector('textarea').value;

    if (!name || !email || !message) {
      alert('Please fill all contact details');
    } else {
      alert('Message sent successfully (Demo only)');
      contactSection.querySelectorAll('input, textarea').forEach(el => el.value = '');
    }
  });

  // Add to cart demo
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      alert('Item added to cart (Demo only)');
    });
  });