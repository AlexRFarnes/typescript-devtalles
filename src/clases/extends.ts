class Avenger {
  constructor(
    public name: string,
    public realName: string,
  ) {
    console.log("Constructor de Avenger");
  }

  public getFullName(): string {
    return `${this.name} (${this.realName})`;
  }
}

class Xmen extends Avenger {
  constructor(
    name: string,
    realName: string,
    public isMutant: boolean,
  ) {
    super(name, realName);
    // console.log(super.getFullName());
    console.log("Constructor de Xmen");
  }

  get fullName(): string {
    return `${this.name} - (${this.realName})`;
  }

  set fullName(name: string) {
    if (name.length < 3)
      throw new Error("El nombre debe de ser mayor a 3 caracteres");

    this.realName = name;
  }
}

const wolverine = new Xmen("Wolverine", "Logan", true);
console.log(wolverine.fullName);
wolverine.fullName = "James Howlett";
console.log(wolverine.fullName);
