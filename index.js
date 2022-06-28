"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
// }
// interface Admin  {
//     name: string,
//     age: number,
//     admin: boolean,
// }
exports.persons = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer',
        IsAdmin: false,
        role: "blabla"
    },
    {
        name: 'Jane Doe',
        age: 32,
        occupation: 'Blabla, kkkkk',
        IsAdmin: true,
        role: "Administrator"
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager',
        IsAdmin: false,
        role: "blabla"
    }
];
function logPerson(user) {
    let additionalInformation;
    if (user.IsAdmin == true) {
        additionalInformation = user.role;
    }
    else {
        additionalInformation = user.occupation;
    }
    console.log(` - ${user.name}, ${user.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
console.log('Users:');
exports.persons.forEach(logPerson);
