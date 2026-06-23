class Avenger {
  // private name: string;
  // public team: string;
  // public realName: string;
  static avgAge: number = 35;

  constructor(
    private name: string,
    public team: string,
    public realName: string,
  ) {}

  public bio(): string {
    return `${this.name} (${this.team})`;
  }
}

const antman: Avenger = new Avenger("Antman", "Capitan America", "Scott Lang");

console.log(antman.bio());
