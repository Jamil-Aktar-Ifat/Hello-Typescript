// basic data type

// string
let name1 = "Jamil"; // implicit data
let firstName: string = "Jamil"; // explicit data

// number
let roll: number = 123;

// boolean
let isActive: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

// anytype not recomended
let d;
d = 123;
d = "jamil";

// best practice
let b: number;
b = 124;

// array
let friends: string[] = ["jamil", "aktar"];
friends.push("rehan");
let numbers: number[] = [1, 4, 6];

// tuple  --> array --> order --> type of values
let coordinates: [number, number] = [1, 5];
let ageName: [number, string, boolean] = [21, "jamil", true];

ageName[0] = 20;
