let print = (smt) => {
  let log = document.querySelector(".vip");
  log.innerText = smt;
};
let inputElement = document.querySelector(".password");
let button = document.querySelector(".doo");
function getrand(str) {
  let randik = Math.floor(Math.random() * str.length);
  return randik;
}
function generatePassword(length) {
  if (!(length == Number(length))) {
    return "Введите число.";
  }
  if (length > 10 ** 4) {
    return "Слишком длинный пароль";
  }
  if (length < 3) {
    return "Ошибка, пароль должен содержать как минимум 3 символа.";
  }
  let result = "";
  let symbols = "@#$!%&*-_?";
  let digits = "0123456789";
  let text = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  let arr = { sym: symbols, dig: digits, tx: text };
  let list = ["sym", "dig", "tx"];
  let j = 3;
  let sup_arr = [symbols, digits, text];
  for (let i = 0; i < 3; i++) {
    let ran = Math.floor(Math.random() * j);
    j--;
    let block = list[ran];
    let miniblock = arr[block];
    result += miniblock[getrand(miniblock)];
    list = list.filter((num) => num != block);
  }
  length = Number(length);
  for (let i = 0; i < length - 3; i++) {
    let blockich = getrand("123");
    let block = sup_arr[blockich];
    result += block[getrand(block)];
  }
  return result;
}
button.addEventListener("click", () => {
  let input = inputElement.value;
  print(generatePassword(input));
});
