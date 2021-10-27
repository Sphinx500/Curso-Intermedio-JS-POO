const juanita = {
    age: '15',
    email: 'juanita@gmail.com'
};

const nath = juanita;

console.log({juanita, nath});

//cuando editamos la copia de un objeto, tambien editamos el original

//Las variables que no tienen un valor de tipo objeto, son almacenadas en la memoria stack
juanita.email = 'nath@gmail.com';

nath.age = '20';

console.log({juanita, nath});