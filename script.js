//Login auth function

document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = document.getElementById('iemail').value;
    const password = document.getElementById('ipassword').value;

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData && userData.email === email && userData.password === password) {
       
        const token = btoa(email + ':' + password); 
        localStorage.setItem('authToken', token);
        
        localStorage.setItem('loggedInUser', JSON.stringify({ name: userData.name, email }));
        window.location.href = 'pages/manager.html';
    } else {
        alert('Credenciais inválidas!');
    }
});

//Sign-up password validation function

function isValidPassword (event) {

    event.preventDefault()

    const password = document.getElementById ("ipassword").value;
    const validPassword = document.getElementById ("ipassword-conf").value;
    const passwordError = document.getElementById ("password-error");

    passwordError.textContent = "";

    if (password !== validPassword) {
        passwordError.textContent= "As senhas não coincidem."

        return false;
    }

    return true;
}

// Register user data function

document.getElementById('register-form')?.addEventListener('submit', function (event) {

    if (!isValidPassword(event)) {
        return;
    }

    const name = document.getElementById('iname').value;
    const email = document.getElementById('iemail').value;
    const password = document.getElementById('ipassword').value;

    const userData = { name, email, password };

    sessionStorage.setItem('userData', JSON.stringify(userData));

    alert('Cadastro realizado com sucesso!');
    window.location.href = '/index.html';
});

//Logout function

document.getElementById('logout')?.addEventListener('click', function () {
   
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('loggedInUser');
    //localStorage.removeItem('userData');

  
    window.location.href = '/index.html';
});