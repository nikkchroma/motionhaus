  const nlInput = document.getElementById('newsletterEmail');
  const nlBtn = document.getElementById('newsletterSubmit');
  nlBtn.addEventListener('click', () => {
    const email = nlInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      nlInput.style.borderBottom = '1px solid #ff2130';
      nlInput.placeholder = 'Enter a valid email first';
      nlInput.value = '';
      return;
    }
    const subject = encodeURIComponent('Newsletter signup — themotionhaus.co');
    const body = encodeURIComponent(`Please add this address to the MotionHaus mailing list: ${email}`);
    window.location.href = `mailto:themotionhaus.co@gmail.com?subject=${subject}&body=${body}`;
    nlBtn.textContent = 'Sent →';
    setTimeout(() => { nlBtn.textContent = 'Submit →'; }, 2500);
  });
