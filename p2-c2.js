function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  } else if (
    contact.length === 11 &&
    contact[0] === "0" && contact[1]=== "1" &&
    !contact.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
}

const result = validContact();
console.log(result);
