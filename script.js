function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function copyScript() {
  const text = document.getElementById("scriptText").innerText;

  navigator.clipboard.writeText(text);

  // optional clean feedback (no alert)
  const btn = document.querySelector(".copyMain");
  const originalText = btn.innerText;

  btn.innerText = "Copied";

  setTimeout(() => {
    btn.innerText = originalText;
  }, 1500);
}