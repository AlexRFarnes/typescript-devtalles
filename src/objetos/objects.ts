let flash: {
  name: string;
  age: number;
  powers: string[];
  isHero: boolean;
  getSecretIdentity?: () => string;
} = {
  name: "Barry Allen",
  age: 24,
  powers: ["super speed", "time travel", "phasing"],
  isHero: true,
};

console.log(flash);

let batman: {
  name: string;
  age: number;
  powers: string[];
  isHero: boolean;
  getSecretIdentity?: () => string;
} = {
  name: "Bruce Wayne",
  age: 35,
  powers: ["intellect", "martial arts", "wealth"],
  isHero: true,
  getSecretIdentity: function () {
    return "I am Batman!";
  },
};

console.log(batman);
