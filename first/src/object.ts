// Reference Type --> Object

const user: {
  readonly company: string; // type --> literal types
  firstName: String;
  middleName?: String; // optional type
  lastName: String;
  isMarried: boolean;
} = {
  company: "MAANG",
  firstName: "Jamil Aktar",
  lastName: "Ifat",
  isMarried: false,
};

// user.company = "PH";
