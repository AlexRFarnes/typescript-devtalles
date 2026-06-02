const fullName = (firstName: string, lastName?: string): string => {
  return `${firstName} ${lastName || "-----"}`;
};

const name = fullName("Bruce");
console.log(name);
