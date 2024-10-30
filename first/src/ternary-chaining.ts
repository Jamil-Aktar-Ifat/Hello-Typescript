{
  // ternary, optional chaining & nullish coalescing operator
  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined --> decision making
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      parmanentAddress?: string;
    };
  };

  const user: User = {
    name: "Jamil",
    address: {
      city: "London",
      road: "Marys Road",
      presentAddress: "London",
      //   parmanentAddress: "Dhaka",
    },
  };

  const parmanentAddress =
    user?.address?.parmanentAddress ?? "No parmanent address";
  console.log({ parmanentAddress });
}
