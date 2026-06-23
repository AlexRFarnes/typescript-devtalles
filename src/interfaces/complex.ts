interface Client {
  name: string;
  age: number;
  address: Address;
  getAddress(): string;
}

interface Address {
  street: string;
  zip: string;
  city: string;
}

const client: Client = {
  name: "John",
  age: 30,
  address: {
    street: "Main St",
    zip: "12345",
    city: "Anytown",
  },
  getAddress(): string {
    return `Address: ${this.address.street}, ${this.address.city}, ${this.address.zip}`;
  },
};

console.log(client.getAddress());

const client2: Client = {
  name: "Jane",
  age: 25,
  address: {
    street: "Sesame St",
    zip: "00110",
    city: "New York",
  },
  getAddress(): string {
    return `Address: ${this.address.street}, ${this.address.city}, ${this.address.zip}`;
  },
};

console.log(client2.getAddress());
