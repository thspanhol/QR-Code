document.addEventListener('DOMContentLoaded', (event) => {
    const loginModal = document.getElementById('loginModal');

    const storedUsername = 'admin';
    const storedPassword = '12345';

    // Mostrar o modal quando a página carregar
    loginModal.style.display = 'flex';

    // Verificar as credenciais ao enviar o formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === storedUsername && password === storedPassword) {
            loginModal.style.display = 'none';
        } else {
            alert('Usuário ou senha incorretos!');
        }
    });
});
