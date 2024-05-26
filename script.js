document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aquí puedes agregar lógica para manejar el login, como validación o envío a un servidor
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login successful!');
});