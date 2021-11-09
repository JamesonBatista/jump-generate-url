const ulSquared = document.querySelector("ul.squares");

function newGradient() {
  var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16),
    randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return "radial-gradient(at top, " + randomColor1 + ", " + randomColor2 + ")";
}
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const random = (min, max) => Math.random() * (max - min) + min;
  const size = Math.floor(random(10, 90));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const randomRadius = random(0, 50);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  //   li.style.background = newGradient();
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.borderRadius = `${randomRadius}%`;
  li.style.border = `1px solid #${randomColor}`;

  li.style.boxShadow = `inset 0 0 1em #${randomColor}, 0 0 1em #${randomColor}`;

  li.style.animationTimingFunction = `cubic-bizier(${Math.random()}, ${Math.random()}, ${Math.random()},${Math.random()})`;

  ulSquared.appendChild(li);
}
