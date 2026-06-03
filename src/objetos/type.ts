type Character = {
  name: string;
  age: number;
  powers: string[];
  isHero: boolean;
  getSecretIdentity?: () => string;
};

let flash: Character = {
  name: "Barry Allen",
  age: 24,
  powers: ["super speed", "time travel", "phasing"],
  isHero: true,
};

console.log(flash);

let batman: Character = {
  name: "Bruce Wayne",
  age: 35,
  powers: ["intellect", "martial arts", "wealth"],
  isHero: true,
  getSecretIdentity: function () {
    return "I am Batman!";
  },
};

console.log(batman);
