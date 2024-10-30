{
  // spread operator
  // rest operator
  // destructuring
  // spread operator

  const bros: string[] = ["jamil", "aktar", "ifat"];
  const bros1: string[] = ["tazbir", "skaib", "zoro"];
  bros.push(...bros1);

  const models = {
    typescript: "Jamil",
    redux: "Jamil Pro",
    dbms: "Jamil Pro Max",
  };

  const devices = {
    phone: "iPhone",
    tablet: "ipad",
    laptop: "macbook pro",
  };

  const jamilsList = {
    ...models,
    ...devices,
  };

  // in this case if the input is more than the expected then it will be an error, so here we need to use the REST OPERATOR.
  const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  };
//   greetFriends("JAMIL", "RAKIB", "SAKIB", "ROBIN", "HARRY");

  //   using rest operator
  const friends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
  };

  friends("adrian", "bella", "charles", "darwin", "elon");
}
