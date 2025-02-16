function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let splittedEmail = email.split("@");
  let userName = splittedEmail[0];
  let domainName = splittedEmail[1];
  const newString = userName + " sent you an email from " + domainName;
  return newString;
}

const result = sendNotification("ismail@gmail.com");
console.log(result);
