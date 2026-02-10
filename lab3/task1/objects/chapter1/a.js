let user = {};                 // create empty object
user.name = "John";             // add property name
user.surname = "Smith";         // add property surname
user.name = "Pete";             // change name
delete user.name;               // remove name

console.log(user);              // { surname: 'Smith' }
