const formLogin = document.getElementById('loginForm');

formLogin?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aquí puedes agregar lógica para manejar el login, como validación o envío a un servidor
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login successful!');
});

const formRegister = document.getElementById('registerForm');

formRegister?.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formRegister);
    const data = Object.fromEntries(formData);
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            console.log(`${key} : ${data[key]}`);
        }
    }
    alert('Register submitted');
});