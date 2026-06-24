function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleCondional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  }
  return () => {};
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 1000) {
        throw new Error("ID de Pokemon no válido");
      }
      return originalMethod(id);
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (
    target: any,
    propertyKey: string,
    // descriptor: PropertyDescriptor, // no se usa porque es una propiedad
  ) {
    const descriptor: PropertyDescriptor = {
      get() {},
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: isWritable,
          enumerable: false,
          configurable: false,
        });
      },
    };
    return descriptor;
  };
}

@blockPrototype
@printToConsoleCondional(false)
class Pokemon {
  @readOnly(false)
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log("Pokemon guardado en la base de datos", id);
  }
}

const charmander = new Pokemon("charmander");
charmander.publicApi = "https://pokeapi.co/api/v2/pokemon/1";
console.log(charmander);

// charmander.savePokemonToDB(1);

// (Pokemon.prototype as any).customName = "Pikachu";
// console.log(Pokemon.prototype);
