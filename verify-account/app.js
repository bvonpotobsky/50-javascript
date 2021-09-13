const digits = document.querySelectorAll(".digit");

digits.forEach((digit, index) => {
  digit.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      digits[index].value = "";
      setTimeout(() => digits[index + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => digits[index - 1].focus(), 10);
    }
  });
});
