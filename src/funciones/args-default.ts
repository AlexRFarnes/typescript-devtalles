const fullName = (
  firstName: string,
  lastName?: string,
  upper: boolean = false,
): string => {
  return upper
    ? `${firstName} ${lastName || "-----"}`.toUpperCase()
    : `${firstName} ${lastName || "-----"}`;
};

const name = fullName("Bruce", "Wayne");
console.log(name);
