interface User  {
    name: string,
    age: number,
    occupation: string,
    IsAdmin: boolean,
    role: string,
}

export const persons: User[] = [
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

export function logPerson(user: User) {
    let additionalInformation : string  ;
    if(user.IsAdmin == true ){
        additionalInformation = user.role
    }else {
        additionalInformation = user.occupation
    }
    console.log(` - ${user.name}, ${user.age}, ${additionalInformation}`);
}

console.log('Users:');
persons.forEach(logPerson);
