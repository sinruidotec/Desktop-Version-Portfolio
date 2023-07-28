const form = document.getElementById('myForm');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (event) => {
    const emailValue = emailInput.value;
    if (emailValue !== emailValue.toLowerCase()) {
      event.preventDefault(); // Prevent form submission
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  });
