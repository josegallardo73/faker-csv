const faker = require('faker');
const fs = require('fs');

let users = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\r\n'

for(let i = 0; i < 100; i++) {
    users += `${faker.name.firstName()};${faker.internet.email()};${faker.name.jobTitle()};${faker.random.locale()}\r\n`
}

fs.writeFile('./test.csv', users, (err) => {
    if(err) console.log(err);
    console.log('archivo guardado');
})