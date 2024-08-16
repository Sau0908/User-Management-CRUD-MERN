export const validateUserCreatedData = (
  firstName,
  lastName,
  email,
  phoneNumber,
  userMsg
) => {
  const isNameValid = (name) => name.length > 3;
  const isPhoneNumberValid = /^[6-9]\d{9}$/.test(phoneNumber);
  const isMessageValid = userMsg.length > 6;
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isNameValid(firstName))
    return "First name should be more than 3 characters.";
  if (!isNameValid(lastName))
    return "Last name should be more than 3 characters.";
  if (!isEmailValid)
    return "Email should contain valid characters, including an '@' symbol and a domain";
  if (!isPhoneNumberValid)
    return "Phone number should be a valid 10-digit Contact Number";
  if (!isMessageValid) return "Message should be more than 6 characters.";

  return null;
};
