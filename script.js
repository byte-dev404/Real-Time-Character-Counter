const input = document.getElementById("input-feild");
const characterCount = document.getElementById("character-count");

input.addEventListener('input', () => {
  const length = input.value.length;
  characterCount.innerText = `Character Count: ${length}/50`;
  characterCount.style.color = length >= 50 ? "red" : "black";

  // if (length > 49) {
  //   input.value = input.value.slice(0, 49);
  // }
})


input.addEventListener('keydown', (e) => {
  if (input.value.length >= 50 && e.key !== 'Backspace' && e.key !== 'Delete' && !e.ctrlKey) {;
    e.preventDefault();
  }
});