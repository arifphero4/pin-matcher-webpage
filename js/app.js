function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("got 3 digit pin:", pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  console.log(pin);
}
