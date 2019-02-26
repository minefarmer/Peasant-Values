let myDog = 'Maestro';
let yourDog = myDog;
myDog = 'Fido';

console.log('My dog is: ' + yourDog);

let myDog2 = {
  name: 'Maestro'
}
let yourDog2 = myDog2;
myDog2.name = 'Fido';

console.log('My dog is: ' + yourDog2.name);
