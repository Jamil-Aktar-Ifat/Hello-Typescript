{
  // union types
  type FrontendDeveloper = "fake Dev" | "junior dev";
  type FullStackDeveloper = "senior dev" | "junior dev";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDev: FrontendDeveloper = "junior dev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "Jamil",
    gender: "male",
    bloodGroup: "A+",
  };

  type BackendDeveloper = {
    skills: string[];
    designation1: "Backend Developer";
  };
  type WordpressDeveloper = {
    skills: string[];
    designation2: "Wordpress Developer";
  };

  type FullstackDeveloper = WordpressDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "ExPRESS"],
    designation1: "Backend Developer",
    designation2: "Wordpress Developer",
  };
}
