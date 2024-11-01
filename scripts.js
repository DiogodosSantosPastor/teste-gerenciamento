window.onload = function() {
    const loginButton = document.getElementById('login-button');
    
    if (loginButton) { 
      loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'admin' && password === 'admin') {
          window.location.href = 'dashboard.html'; 
        } else {
          document.getElementById('error-message').textContent = 'Nome de usuário ou senha incorretos';
        }
      });
    } else {
      console.error('Botão de login não encontrado!');
    }
  };