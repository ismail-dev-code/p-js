function sendNotification(email) {
    if (!email.includes("@")) {
      return "Invalid Input";
    }
    let splittedEmail = email.split("@");
    const userName = splittedEmail[0];
    const domain = splittedEmail[1];
    let newString = userName + " sent you an email from " + domain;
    return newString;
  }
  let result = sendNotification("ismail@gmail.com");
  console.log(result);
  