type Character = {
  name: string;
  age: number;
  powers: string[];
  isHero: boolean;
  getSecretIdentity?: () => string;
};

let myCustomVariable: string | number | Character = "Alex";

console.log(typeof myCustomVariable);

myCustomVariable = 10;

console.log(typeof myCustomVariable);

myCustomVariable = {
  name: "Clark Kent",
  age: 32,
  powers: ["super strength", "super speed", "fly"],
  isHero: true,
};

console.log(typeof myCustomVariable);
