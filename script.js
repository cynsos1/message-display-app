const btn = document.getElementById("displayBtn");
const input = document.getElementById("messageInput");
const display = document.getElementById("displayField");

btn.addEventListener("click", () => {
  const message = input.value.trim();
  if (message) {
    display.textContent = message;
  }
});
