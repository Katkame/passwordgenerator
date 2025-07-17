const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("button");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "$^`ù:;()";

let chars = ""
let somethingChecked = false


function generatePassword(length = 12) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    password += randomChar;
  }
  return password;
}

nombre = document.getElementById("nombre")
caracspecial = document.getElementById("caracspecial")
majuscule = document.getElementById("majuscule")

generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();
  passwordField.value = newPassword; // Met le mot de passe dans le champ modifiable
  if (nombre.checked) {
    chars += "0123456789"
    somethingChecked = true
  }
  if (caracspecial.checked) {
    chars += "$^`ù:;()"
    somethingChecked = true
  }
  if (majuscule.checked) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    somethingChecked = true
  }


if (somethingChecked) {
  chars += lowercase;
}

if (somethingChecked === false) {
  alert("Veuillez cochez au moins une option ! ")
  password.value = ""
  return;
  }
});


