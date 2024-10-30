{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Jamil",
    age: 21,
    gender: "male",
    contactNo: "048293209320",
    address: "London",
  };

  const student2: Student = {
    name: "Tazbir",
    age: 21,
    gender: "male",
    address: "Dhaka",
  };

  const student3: Student = {
    name: "Rakib",
    age: 21,
    gender: "male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Jamil Pro";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
