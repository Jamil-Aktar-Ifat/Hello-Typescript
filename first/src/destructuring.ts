{
  // destructering

  // object destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Jamil",
      lastName: "Ifat",
    },
    contactNo: "07000000003",
    address: "London",
  };

  const {
    contactNo: phoneNum,
    name: { firstName: firName },
    address,
  } = user;

  // array destructuring
  const friends = ["zoro", "yumeko", "xavier", "white", "rose"];

  const [, , bestfriend, ...rest] = friends;
}
