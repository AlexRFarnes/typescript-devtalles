abstract class Mutant {
  constructor(
    public name: string,
    public realName: string,
  ) {}
}

class Xmen extends Mutant {
  saveTheWorld() {
    return "Saving the world";
  }
}
class Villain extends Mutant {
  conquerTheWorld() {
    return "Conquering the world";
  }
}

const wolverine = new Xmen("Wolverine", "Logan");
const magneto = new Villain("Magneto", "Magnus");

console.log(wolverine.saveTheWorld());
console.log(magneto.conquerTheWorld());

const printName = (character: Mutant) => {
  console.log(character.name);
};

printName(wolverine);
printName(magneto);
