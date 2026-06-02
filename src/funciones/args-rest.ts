const fullName = (firstName: string, ...args: string[]): string => {
  return `${firstName} ${args.join(" ")}`;
};

console.log(fullName("John", "Doe", "Smith")); // Output: John Doe Smith

console.log(fullName("Alice", "Johnson")); // Output: Alice Johnson
