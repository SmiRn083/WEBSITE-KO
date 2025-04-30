function showNameInput() {
  document.getElementById('welcomeSection').style.display = 'none';
  document.getElementById('nameInputSection').style.display = 'flex';
}

function submitName() {
  const name = document.getElementById('userName').value.trim();
  if (name) {
    document.getElementById('nameInputSection').style.display = 'none';
    document.getElementById('buttonSection').style.display = 'block';
    document.getElementById('greeting').innerHTML = `Hello, ${name} 💌`;
  } else {
    alert("Please enter your name.");
  }
}

function openMessage() {
  document.getElementById('buttonSection').style.display = 'none';
  document.getElementById('cardContainer').style.display = 'block';
}

// No button evasion logic
const noBtn = document.getElementById("noBtn");
const loveBox = document.getElementById("welcomeSection");

noBtn.addEventListener("mouseover", () => {
  const loveBoxRect = loveBox.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = loveBox.clientWidth - btnWidth;
  const maxY = loveBox.clientHeight - btnHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
