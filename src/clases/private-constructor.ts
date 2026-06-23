class Storage {
  static instance: Storage;
  private constructor(private name: string) {
    this.name = name;
  }

  static getInstance(name: string) {
    if (!Storage.instance) {
      Storage.instance = new Storage(name);
    }

    return Storage.instance;
  }

  get Name() {
    return this.name;
  }
}

const storage1 = Storage.getInstance("Storage 1");
const storage2 = Storage.getInstance("Storage 2");

console.log(storage1.Name);
console.log(storage2.Name);
