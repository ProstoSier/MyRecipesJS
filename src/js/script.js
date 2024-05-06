const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');

const users = {

};

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordUser = password.value;
    const passwordConfirmUSer = passwordConfirm.value;

    if (!nameUser || !emailUser || !passwordUser || !passwordConfirmUSer) {
        alert('Заповніть усі поля!')
        return
    };

    if (passwordUser !== passwordConfirmUSer) {
        alert('Паролі не співпадають!')
        return
    };

    const user = new User(nameUser, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, зареєструвалися!`);
})