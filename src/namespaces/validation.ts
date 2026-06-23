namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3;
  };

  const validateDate = (myDate: Date): boolean => {
    return !isNaN(myDate.getTime());
  };
}

console.log(Validations.validateText("Hola"));
