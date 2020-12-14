// String Building Example
const name = 'Nick'
name[3];//?
// Cannot mutate strings

let yelledName = name.toUpperCase();
yelledName;
name;

// Cannot mutate with string building.
/* ===================================================== */
// Arrays 
// if it's = [] it's an array 
const students = ['Tre','Santino','Patrick']
// These are called values, separated by commas
students[0];//?
students

student = 'Tre'
for(let i = 0; i < student.length; i++) {
    console.log(student[i])
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

/* ===================================================== */

let studentAlt = ['Tom', 'Ashley', 'Grace', 'Sonny']
studentAlt[0] = 'Kelly'
// Mutation changing sub-values 
for (const stu of studentAlt) {
    console.log(stu);
}
// Mutated the array from Tom to Kelly
studentAlt 

/* ===================================================== */
// Array always begin with const since we never want to overwrite 
// our array with an equals sign...
const animals = ['Wolf', 'Tiger', 'Bear']
// reassigned index 3 to Gorilla
animals[3] = 'Gorilla'
// Incorrect way of adding value
// Going to add this value to the (end of list)
// requires argument in pram
animals.push('Elephant');
// You can push multiple things is need be, but often not necessary
animals.push('Flamingo', 'Rat');

animals;

// You can concat with Arrays 
const moreAnimals = ['Cat', 'Dog', 'Pig'].concat(animals)
moreAnimals;
animals;
/* ===================================================== */
// Other Array features 
// .pop removes the end of the array value
// it will always remove the end value
// does not require argument in param
animals.pop();
animals.pop();
animals;
/* ===================================================== */
// Other Array features
// Always removes from the start of the Array 
// Does not require argument in param
animals.shift('');
animals;
/* ===================================================== */
// Other Array features
// .unshift();
// Adds value to beginning of Array
// Requires argument in param.
animals.unshift('Shark');
animals;
/* ===================================================== */
// Other Array features 
// .slice()
// Returns a section of the array at which it's set at.
const someAnimals = animals.slice(0, 3);
someAnimals;
/* ===================================================== */
// Other Array Features
// .splice();
// Re
animals.splice(1, 1);
animals;
animals.splice(1, 2);
animals;
/* ===================================================== */
// Other Array Features 
// Reverses elements in array
animals.reverse();
animals;







