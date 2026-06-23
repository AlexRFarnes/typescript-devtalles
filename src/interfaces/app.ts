// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

type EstadoCivil =
  | "Soltero"
  | "Casado"
  | "Divorciado"
  | "Viudo"
  | "Conviviente";

interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: EstadoCivil;
  imprimirBio(): void;
}

class Persona implements IPersona {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: EstadoCivil,
  ) {}

  imprimirBio(): void {
    console.log(
      `${this.nombre} tiene ${this.edad} años, es ${this.sexo} y está ${this.estadoCivil}`,
    );
  }
}

const persona: IPersona = new Persona("Juan", 30, "Hombre", "Soltero");
persona.imprimirBio();
